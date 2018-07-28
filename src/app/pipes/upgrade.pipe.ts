import {Pipe, PipeTransform} from '@angular/core';
import {Upgrade} from '../model/upgrade';

@Pipe({name: 'forUpgrade', pure: false})
export class ForUpgrade implements PipeTransform {
  transform(upgrades: Upgrade[], upgradeType: string) {
    return upgrades.filter(upgrade => upgrade.type === upgradeType);
  }
}