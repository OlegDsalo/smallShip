import {Component, OnInit} from '@angular/core';
import {ShipsService} from "../../../service/ships.service";
import {HttpShips, IShip} from "../../../models/ships";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  isLoading = false;
  // ships$: Observable<HttpShips>;

  ships: IShip[]

  constructor(private shipsService: ShipsService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    // this.ships$ = this.shipsService.getAllShips(
    // ).pipe(tap((r) => {
    //   this.isLoading = false;
    // }))

    this.shipsService.getAllShips().subscribe((pro: HttpShips) => {
      console.log(pro.results);
      this.ships = pro.results;
      this.isLoading = false;

    })
  }
}
