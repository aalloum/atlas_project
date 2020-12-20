import {Cabinet} from "../../cabinets/cabinet/cabinet";
import {Comptable} from "../../cabinets/cabinet-comptables/comptable-edit/comptable";

export class Client {

    id: number;
    denomination: string;
    identifiantFiscal: string;
    activitePrincipale: string;
    formeJuridique: string;
    regime: string;
    numeroRegistreCommerce: string;
    numeroCNSS: string;
    numeroTaxeProfessionnelle: string;
    numeroICE: string;
    telephone: string;
    fax: string;
    email: string;
    rib: string;
    banque: string;
    agence: string;
    ville: string;
    codePostal: string;
    adresse: string;
    cabinet: Cabinet;
    comptable: Comptable;

    constructor(client?) {
        client = client || {};
        this.id = client.id || null;
        this.denomination = client.denomination || '';
        this.identifiantFiscal = client.identifiantFiscal || '';
        this.activitePrincipale = client.activitePrincipale || '';
        this.formeJuridique = client.formeJuridique || '';
        this.regime = client.regime || '';
        this.numeroRegistreCommerce = client.numeroRegistreCommerce || '';
        this.numeroCNSS = client.numeroCNSS || '';
        this.numeroTaxeProfessionnelle = client.numeroTaxeProfessionnelle || '';
        this.numeroICE = client.numeroICE || '';
        this.telephone = client.telephone || '';
        this.fax = client.fax || '';
        this.email = client.email || '';
        this.rib = client.rib || '';
        this.banque = client.banque || '';
        this.agence = client.agence || '';
        this.ville = client.ville || '';
        this.codePostal = client.codePostal || '';
        this.adresse = client.adresse || '';
        this.cabinet = client.cabinet || null;
        this.comptable = client.comptable || null;
    }
}