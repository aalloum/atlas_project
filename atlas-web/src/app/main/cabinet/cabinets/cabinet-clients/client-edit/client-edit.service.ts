import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../../../../environments/environment";
import {HandleError} from "../../../../../error.service";
import {HttpClient} from "@angular/common/http";
import {Cabinet} from "../../cabinet/cabinet";
import {Comptable} from "../../cabinet-comptables/comptable-edit/comptable";

@Injectable({
  providedIn: 'root'
})
export class ClientEditService implements Resolve<any> {

    routeParams: any;
    client: any;
    onClientEditChanged: BehaviorSubject<any>;
    comptablesFromCabinet: Comptable[] = new Array();

    private entityUrl = environment.REST_API_URL + 'clients';
    private cabinetUrl = environment.REST_API_URL + 'cabinets';


    constructor(private _httpClient: HttpClient) {
        // Set the defaults
        this.onClientEditChanged = new BehaviorSubject({});
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getClient(), this.getComptablesForClient()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getClient() {
        return new Promise((resolve, reject) => {
                //   this._httpClient.get('api/e-commerce-products/' + this.routeParams.id)
                this._httpClient.get(this.entityUrl + '/' + this.routeParams.idClient)
                    .subscribe((response: any) => {
                        this.client = response;
                        this.onClientEditChanged.next(this.client);
                        resolve(response);
                    }, reject);

        });
    }

     getComptablesForClient() {
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.cabinetUrl + '/' + this.routeParams.idCabinet + '/comptables')
                .subscribe((response: any) => {
                    this.comptablesFromCabinet = response;
                    resolve(response);
                }, reject);

        });
    }

    saveClient(client): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.put(this.entityUrl + '/' + client.id, client)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    getCabinets(): Observable<Cabinet[]> {
        return this._httpClient.get<Cabinet[]>(this.cabinetUrl);
    }

    getCabinetById(cabinetId: string): Observable<Cabinet> {
        return this._httpClient.get<Cabinet>(this.cabinetUrl + '/' + cabinetId);
    }
}
