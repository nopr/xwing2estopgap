import { Pipe, PipeTransform } from '@angular/core';

import { Upgrade } from '@app/core/model/upgrade';
import {Ship} from '@app/core/model/ship';

@Pipe({name: 'forUpgrade', pure: false})
export class ForUpgrade implements PipeTransform {
  transform(upgrades: Upgrade[], upgradeType: string, ship: Ship) {
    if (!upgrades) return [];

    const filteredUpgrades =  upgrades.filter(upgrade => upgrade.type === upgradeType);
    const result = [];

    for (let u = 0; u < filteredUpgrades.length; u++) {
      const upgrade = filteredUpgrades[u];

      if (!upgrade.restriction || upgrade.restriction === '') {
        result.push(upgrade);
        continue;
      }

      const restrictions = upgrade.restriction.split(",");

      let valid = true;

      for (let r in restrictions) {
        let restriction = restrictions[r];

        let slots = this.restrictionValue('slots', restriction);
        if (slots) {
          let count = parseInt(slots.split('-')[0]);
          let type = slots.split('-')[1];

          for (let c = 1; c <= count && valid; c++) {
            if (ship[`${type}${c}`] !== '') valid = false;
            if (!valid) break;
          }
        }

        if (!valid) break;
      }

      if (valid) result.push(upgrade);
    }

    return result;
  }

  private restrictionValue(type: string, restriction: string): string {
    return restriction.startsWith(type) ? restriction.split('=')[1] : undefined;
  }
}
