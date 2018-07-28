import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';

import { ForShip } from './pipes/ship.pipe';
import { ForUpgrade } from './pipes/upgrade.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ForShip,
    ForUpgrade
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
