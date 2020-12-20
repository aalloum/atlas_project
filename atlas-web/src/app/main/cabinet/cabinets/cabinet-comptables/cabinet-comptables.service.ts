import { Injectable } from '@angular/core';
import {Comptable} from "./comptable-edit/comptable";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CabinetComptablesService {

    private entityUrlCabinet = environment.REST_API_URL + 'cabinets';
    private entityUrlComptable = environment.REST_API_URL + 'comptables';

  constructor(private http: HttpClient) { }

    getComptablesByCabinet(cabinetId: number) {
            return this.http.get<Comptable[]>(this.entityUrlCabinet + '/' + cabinetId + '/comptables');
    }

    deleteComptable(comptableId: number): Observable<number> {
        return this.http.delete<number>(this.entityUrlComptable + '/' + comptableId);
    }
}
