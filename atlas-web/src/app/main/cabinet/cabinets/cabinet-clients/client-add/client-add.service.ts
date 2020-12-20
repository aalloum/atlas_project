import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Cabinet} from "../../cabinet/cabinet";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Comptable} from "../../cabinet-comptables/comptable-edit/comptable";

@Injectable({
  providedIn: 'root'
})
export class ClientAddService implements Resolve<any>{

    routeParams: any;
    cabinet: Cabinet;
    onClientCabinetChanged: BehaviorSubject<any>;
    comptablesFromCabinet: Comptable[] = new Array();

    private entityUrl = environment.REST_API_URL + 'clients';
    private cabinetUrl = environment.REST_API_URL + 'cabinets';

    constructor(private _httpClient: HttpClient) {
        this.onClientCabinetChanged = new BehaviorSubject({});
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getCurrentCabinetForClient(), this.getComptablesForClient()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getCurrentCabinetForClient() {
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.cabinetUrl + '/' + this.routeParams.idCabinet)
                .subscribe((response: any) => {
                    this.cabinet = response;
                    this.onClientCabinetChanged.next(this.cabinet);
                    resolve(response);
                }, reject);

        });
    }

    addClient(client): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.post(this.entityUrl, client)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    private getComptablesForClient() {
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.cabinetUrl + '/' + this.routeParams.idCabinet + '/comptables')
                .subscribe((response: any) => {
                    this.comptablesFromCabinet = response;
                    resolve(response);
                }, reject);

        });
    }
}
