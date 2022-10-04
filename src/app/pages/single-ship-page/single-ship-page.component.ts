import {Component, OnInit} from '@angular/core';
import {IShip} from "../../../models/ships";
import {ActivatedRoute} from "@angular/router";
import {ShipsService} from "../../../service/ships.service";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-single-ship-page',
  templateUrl: './single-ship-page.component.html',
  styleUrls: ['./single-ship-page.component.scss']
})
export class SingleShipPageComponent implements OnInit {
  ship: IShip
  response: any

  constructor(
    private route: ActivatedRoute,
    private shipsService: ShipsService) {
  }

  ngOnInit(): void {
    this.getShip()
    this.getShipAsync()
  }

  getShip(): void {
    const index = Number(this.route.snapshot.paramMap.get('index'));

    console.log(index)
    this.shipsService.getSingleShip(index).subscribe(ship => {
      console.log(ship);
      this.ship = ship;
    })
  }

  async getShipAsync() {
    const index = Number(this.route.snapshot.paramMap.get('index'));

    console.log(index)
    // const value:Observable<IShip> = this.shipsService.getSingleShip(index)
    this.response = await firstValueFrom(this.shipsService.getSingleShip(index))

    console.log('response', this.response);
  }

}
