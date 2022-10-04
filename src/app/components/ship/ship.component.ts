import {Component, Input, OnInit} from '@angular/core';
import {IShip} from "../../../models/ships";

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {
  @Input() ship: IShip


  constructor() {
  }

  ngOnInit(): void {
  }

}
