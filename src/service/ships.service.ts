import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpShips, IShip} from "../models/ships";

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  baseUrl = "https://swapi.dev/api/starships/";

  constructor(public http: HttpClient) {
  }

  getAllShips(): Observable<HttpShips> {
    return this.http.get<HttpShips>(this.baseUrl)
  }

  getSingleShip(id: number): Observable<IShip> {
    return this.http.get<IShip>(this.baseUrl + id)
  }
}
