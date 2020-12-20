import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Balance} from "../balance";

@Injectable({
    providedIn: 'root'
})
export class BalanceService {

    private entityUrl = environment.REST_API_URL + 'balances';

    constructor(private http: HttpClient) {
    }

    getBalances(): Observable<Balance[]> {
        return this.http.get<Balance[]>(this.entityUrl);
    }


    addBalances(balances: Balance[]): Observable<Balance[]> {
        return this.http.post<Balance[]>(this.entityUrl, balances);
    }
}
