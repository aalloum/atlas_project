
export class Cabinet {
    id: number;
    nameCabinet: string;
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
    comptables: [];
    clients: [];

    constructor(cabinet?) {
        cabinet = cabinet || {};
        this.id = cabinet.id || null;
        this.nameCabinet = cabinet.nameCabinet || '';
        this.identifiantFiscal = cabinet.identifiantFiscal || '';
        this.activitePrincipale = cabinet.activitePrincipale || '';
        this.formeJuridique = cabinet.formeJuridique || '';
        this.regime = cabinet.regime || '';
        this.numeroRegistreCommerce = cabinet.numeroRegistreCommerce || '';
        this.numeroCNSS = cabinet.numeroCNSS || '';
        this.numeroTaxeProfessionnelle = cabinet.numeroTaxeProfessionnelle || '';
        this.numeroICE = cabinet.numeroICE || '';
        this.telephone = cabinet.telephone || '';
        this.fax = cabinet.fax || '';
        this.email = cabinet.email || '';
        this.rib = cabinet.rib || '';
        this.banque = cabinet.banque || '';
        this.agence = cabinet.agence || '';
        this.ville = cabinet.ville || '';
        this.codePostal = cabinet.codePostal || '';
        this.adresse = cabinet.adresse || '';
        this.comptables = cabinet.comptables || null;
        this.clients = cabinet.clients || null;
    }
}