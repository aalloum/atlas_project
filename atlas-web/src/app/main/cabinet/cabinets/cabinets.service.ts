import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CabinetsService implements Resolve<any>{

    cabinets: any[];
    onCabinetsChanged: BehaviorSubject<any>;
    private entityUrl = environment.REST_API_URL + 'cabinets';

  constructor(private _httpClient: HttpClient) {
      // Set the defaults
      this.onCabinetsChanged = new BehaviorSubject({});
  }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getCabinets()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }



    private getCabinets() {
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.entityUrl)
                .subscribe((response: any) => {
                    this.cabinets = response;
                    this.onCabinetsChanged.next(this.cabinets);
                    resolve(response);
                }, reject);
        });
    }
}
