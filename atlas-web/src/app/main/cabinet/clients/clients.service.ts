import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientsService implements Resolve<any>{

    clients: any[];
    onClientsChanged: BehaviorSubject<any>;
    private entityUrl = environment.REST_API_URL + 'clients';

    constructor(private _httpClient: HttpClient) {
        // Set the defaults
        this.onClientsChanged = new BehaviorSubject({});
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getClients()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getClients(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.entityUrl)
                .subscribe((response: any) => {
                    this.clients = response;
                    this.onClientsChanged.next(this.clients);
                    resolve(response);
                }, reject);
        });
    }
}
