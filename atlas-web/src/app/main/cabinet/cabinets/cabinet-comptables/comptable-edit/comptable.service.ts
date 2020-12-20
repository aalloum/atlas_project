import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";
import {Cabinet} from "../../cabinet/cabinet";
import {catchError} from "rxjs/operators";
import {HandleError} from "../../../../../error.service";

@Injectable({
    providedIn: 'root'
})
export class ComptableService implements Resolve<any> {

    routeParams: any;
    comptable: any;
    onComptableChanged: BehaviorSubject<any>;
    private entityUrl = environment.REST_API_URL + 'comptables';
    private cabinetUrl = environment.REST_API_URL + 'cabinets';
    private readonly handlerError: HandleError;

    constructor(private _httpClient: HttpClient) {
        // Set the defaults
        this.onComptableChanged = new BehaviorSubject({});
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getComptable()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getComptable() {
        return new Promise((resolve, reject) => {
            if (this.routeParams.id === 'new') {
                this.onComptableChanged.next(false);
                resolve(false);
            } else {
             //   this._httpClient.get('api/e-commerce-products/' + this.routeParams.id)
                this._httpClient.get(this.entityUrl + '/' + this.routeParams.id)
                    .subscribe((response: any) => {
                        this.comptable = response;
                        this.onComptableChanged.next(this.comptable);
                        resolve(response);
                    }, reject);
            }
        });
    }

    saveComptable(comptable): Promise<any>
    {
        return new Promise((resolve, reject) => {
          //  this._httpClient.post('api/e-commerce-products/' + comptable.id, comptable)
            this._httpClient.put(this.entityUrl + '/' + comptable.id, comptable)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    addComptable(comptable): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.post(this.entityUrl, comptable)
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
