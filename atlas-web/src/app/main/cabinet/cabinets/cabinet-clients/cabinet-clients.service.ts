import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Comptable} from "../cabinet-comptables/comptable-edit/comptable";
import {Client} from "../../clients/client/client";

@Injectable({
  providedIn: 'root'
})
export class CabinetClientsService {

    private entityUrlCabinet = environment.REST_API_URL + 'cabinets';

    constructor(private http: HttpClient) { }

    getClientsByCabinet(cabinetId: number) {
        return this.http.get<Client[]>(this.entityUrlCabinet + '/' + cabinetId + '/clients');
    }
}
