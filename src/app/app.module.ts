import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShipComponent} from './components/ship/ship.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {HttpClientModule} from "@angular/common/http";
import { SingleShipPageComponent } from './pages/single-ship-page/single-ship-page.component';
import { ShipsItemsComponent } from './components/ships-items/ships-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ShipComponent,
    DashboardPageComponent,
    SingleShipPageComponent,
    ShipsItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
