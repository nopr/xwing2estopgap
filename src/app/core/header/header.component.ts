import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @HostBinding('class.header') attrClass: boolean = true;

  @Input() title: string;
  @Input() strap: string;

}
