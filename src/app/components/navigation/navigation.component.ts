import { Component, EventEmitter, HostBinding, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @HostBinding('class.navigation') attrClass: boolean = true;

  @Output() activeIndex: EventEmitter<number> = new EventEmitter<number>();

  index: number = 1;

  // TODO: Make Navigation Data Driven
  setActive(index: number) {
    this.index = index;
    this.activeIndex.emit(index);
  }

}
