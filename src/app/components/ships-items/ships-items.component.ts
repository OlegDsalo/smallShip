import {Component, Input, OnInit} from '@angular/core';
import {IShip} from "../../../models/ships";

@Component({
  selector: 'app-ships-items',
  templateUrl: './ships-items.component.html',
  styleUrls: ['./ships-items.component.scss']
})
export class ShipsItemsComponent implements OnInit {

  @Input() ship: IShip
  @Input() index: any


  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.index);
  }

}
