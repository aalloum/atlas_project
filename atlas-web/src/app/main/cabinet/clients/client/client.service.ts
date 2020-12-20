import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ClientService implements Resolve<any> {

    routeParams: any;
    client: any;
    onClientChanged: BehaviorSubject<any>;
    private entityUrl = environment.REST_API_URL + 'clients';

    constructor(private _httpClient: HttpClient) {
        // Set the defaults
        this.onClientChanged = new BehaviorSubject({});
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getClient()
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
            if (this.routeParams.id === 'new') {
                this.onClientChanged.next(false);
                resolve(false);
            } else {
                //   this._httpClient.get('api/e-commerce-products/' + this.routeParams.id)
                this._httpClient.get(this.entityUrl + '/' + this.routeParams.id)
                    .subscribe((response: any) => {
                        this.client = response;
                        this.onClientChanged.next(this.client);
                        resolve(response);
                    }, reject);
            }
        });
    }

    saveClient(client): Promise<any>
    {
        return new Promise((resolve, reject) => {
            //  this._httpClient.post('api/e-commerce-products/' + comptable.id, comptable)
            this._httpClient.put(this.entityUrl + '/' + client.id, client)
                .subscribe((response: any) => {
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
}
