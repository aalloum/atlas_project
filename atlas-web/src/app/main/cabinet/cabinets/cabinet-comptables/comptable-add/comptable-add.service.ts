import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../../../../environments/environment";
import {HandleError} from "../../../../../error.service";
import {HttpClient} from "@angular/common/http";
import {Cabinet} from "../../cabinet/cabinet";

@Injectable({
  providedIn: 'root'
})
export class ComptableAddService implements Resolve<any>{

    routeParams: any;
    cabinet: Cabinet;
    onCabinetChanged: BehaviorSubject<any>;

    private entityUrl = environment.REST_API_URL + 'comptables';
    private cabinetUrl = environment.REST_API_URL + 'cabinets';

    constructor(private _httpClient: HttpClient) {
        this.onCabinetChanged = new BehaviorSubject({});
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getCurrentCabinet()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

     getCurrentCabinet() {
         return new Promise((resolve, reject) => {
                 this._httpClient.get(this.cabinetUrl + '/' + this.routeParams.idCabinet)
                     .subscribe((response: any) => {
                         this.cabinet = response;
                         this.onCabinetChanged.next(this.cabinet);
                         resolve(response);
                     }, reject);

         });
    }

    addComptable(comptable): Promise<any> {
        console.log(comptable);
        return new Promise((resolve, reject) => {
            this._httpClient.post(this.entityUrl, comptable)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

}
