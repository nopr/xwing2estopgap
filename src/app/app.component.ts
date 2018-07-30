import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title: string = 'X-Wing 2E Stop Gap';
  activeIndex: number = 1;

  setActive(index: number) {
    this.activeIndex = index;
  }

}
