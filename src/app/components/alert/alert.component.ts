import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: '<ng-content></ng-content>',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @HostBinding('class.alert') attrClass: boolean = true;

}
