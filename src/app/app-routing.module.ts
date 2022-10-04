import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {SingleShipPageComponent} from "./pages/single-ship-page/single-ship-page.component";

const routes: Routes = [
  {path: '', component: DashboardPageComponent},
  {
    path: 'ship/:index', component: SingleShipPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
