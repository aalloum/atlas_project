import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ComptablesService implements Resolve<any>{

    comptables: any[];
    onProductsChanged: BehaviorSubject<any>;
    private entityUrl = environment.REST_API_URL + 'comptables';

  constructor(private _httpClient: HttpClient) {
      // Set the defaults
      this.onProductsChanged = new BehaviorSubject({});
  }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getComptables()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

     getComptables(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.entityUrl)
                .subscribe((response: any) => {
                    this.comptables = response;
                    this.onProductsChanged.next(this.comptables);
                    resolve(response);
                }, reject);
        });
    }

    deleteComptable(comptableId: number): Observable<number> {
        return this._httpClient.delete<number>(this.entityUrl + '/' + comptableId);
    }
}
