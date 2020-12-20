import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CabinetService implements Resolve<any> {

    routeParams: any;
    cabinet: any;
    onCabinetChanged: BehaviorSubject<any>;
    private entityUrl = environment.REST_API_URL + 'cabinets';

  constructor(private _httpClient: HttpClient) {
      // Set the defaults
      this.onCabinetChanged = new BehaviorSubject({});
  }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        this.routeParams = route.params;
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getCabinet()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

     getCabinet(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.entityUrl + '/' + this.routeParams.id)
                .subscribe((response: any) => {
                    this.cabinet = response;
                    this.onCabinetChanged.next(this.cabinet);
                    resolve(response);
                }, reject);
        });
    }

    saveCabinet(cabinet): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.put(this.entityUrl + '/' + cabinet.id, cabinet)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    addCabinet(cabinet): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.post(this.entityUrl, cabinet)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

}
