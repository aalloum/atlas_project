import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from "../../../../../../@fuse/animations";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Cabinet} from "../../cabinet/cabinet";
import {Subject} from "rxjs";
import {Location} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {takeUntil} from "rxjs/operators";
import {Client} from "../../../clients/client/client";
import {ClientAddService} from "./client-add.service";
import {Comptable} from "../../cabinet-comptables/comptable-edit/comptable";

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ClientAddComponent implements OnInit, OnDestroy {

    client: Client;
    clientFormAdd: FormGroup;
    cabinetClient: Cabinet;
    comptablesFromCabinet: Comptable[] = new Array();

    // Private
private _unsubscribeAll: Subject<any>;

    constructor(
        private clientAddService: ClientAddService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar,
        private router: Router
) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.clientAddService.onClientCabinetChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(cabinet => {

                this.cabinetClient = cabinet;
                this.clientFormAdd = this.createClientForm();
            });
        this.comptablesFromCabinet = this.clientAddService.comptablesFromCabinet;

    }

    ngOnDestroy(): void
        {
            this._unsubscribeAll.next();
            this._unsubscribeAll.complete();
        }

    createClientForm(): FormGroup {
        return this._formBuilder.group({
            id:                        [''],
            denomination:              [''],
            identifiantFiscal:         [''],
            activitePrincipale:        [''],
            formeJuridique:            [''],
            regime:                    [''],
            numeroRegistreCommerce:    [''],
            numeroCNSS:                [''],
            numeroTaxeProfessionnelle: [''],
            numeroICE:                 [''],
            telephone:                 [''],
            fax:                       [''],
            email:                     [''],
            rib:                       [''],
            banque:                    [''],
            agence:                    [''],
            ville:                     [''],
            codePostal:                [''],
            adresse:                   [''],
            comptable:                 [''],
            cabinet         : [this.cabinetClient.id]
        });
    }


    addClient(): void
        {
            const data = this.clientFormAdd.getRawValue();
            const client = new Client();
            client.id = null;
            client.denomination = data.denomination;
            client.identifiantFiscal = data.identifiantFiscal;
            client.activitePrincipale = data.activitePrincipale;
            client.formeJuridique = data.formeJuridique;
            client.regime = data.regime;
            client.numeroRegistreCommerce = data.numeroRegistreCommerce;
            client.numeroCNSS = data.numeroCNSS;
            client.numeroTaxeProfessionnelle = data.numeroTaxeProfessionnelle;
            client.numeroICE = data.numeroICE;
            client.telephone = data.telephone;
            client.fax = data.fax;
            client.email = data.email;
            client.rib = data.rib;
            client.banque = data.banque;
            client.agence = data.agence;
            client.ville = data.ville;
            client.codePostal = data.codePostal;
            client.adresse = data.adresse;
            client.comptable = data.comptable;
            client.cabinet = this.cabinetClient;
            this.clientAddService.addClient(client)
                .then(() => {
                    // Show the success message
                    this._matSnackBar.open('Client added', 'OK', {
                        verticalPosition: 'top',
                        duration        : 2000
                    });
                });
            this.router.navigateByUrl('/cabinets/cabinets/' + this.cabinetClient.id);
        }
}
