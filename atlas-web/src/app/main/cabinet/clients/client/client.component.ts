import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from "../../../../../@fuse/animations";
import {Comptable} from "../../cabinets/cabinet-comptables/comptable-edit/comptable";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {ComptableService} from "../../cabinets/cabinet-comptables/comptable-edit/comptable.service";
import {Location} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {takeUntil} from "rxjs/operators";
import {Client} from "./client";
import {ClientService} from "./client.service";
import {Cabinet} from "../../cabinets/cabinet/cabinet";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ClientComponent implements OnInit, OnDestroy {

    client: Client;
    pageType: string;
    clientForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private clientService: ClientService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar,
        private router: Router
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        // Subscribe to update product on changes
        this.clientService.onClientChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(client => {

                if ( client )
                {
                    this.client = new Client(client);
                    this.pageType = 'edit';
                }
                else
                {
                    this.pageType = 'new';
                    this.client = new Client();
                }

                this.clientForm = this.createClientForm();
            });
    }

    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    createClientForm(): FormGroup {
        return this._formBuilder.group({

            id:                        [this.client.id],
            denomination:              [this.client.denomination],
            identifiantFiscal:         [this.client.identifiantFiscal],
            activitePrincipale:        [this.client.activitePrincipale],
            formeJuridique:            [this.client.formeJuridique],
            regime:                    [this.client.regime],
            numeroRegistreCommerce:    [this.client.numeroRegistreCommerce],
            numeroCNSS:                [this.client.numeroCNSS],
            numeroTaxeProfessionnelle: [this.client.numeroTaxeProfessionnelle],
            numeroICE:                 [this.client.numeroICE],
            telephone:                 [this.client.telephone],
            fax:                       [this.client.fax],
            email:                     [this.client.email],
            rib:                       [this.client.rib],
            banque:                    [this.client.banque],
            agence:                    [this.client.agence],
            ville:                     [this.client.ville],
            codePostal:                [this.client.codePostal],
            adresse:                   [this.client.adresse],
            cabinet:                   [this.client.cabinet],
            comptable:                 [this.client.comptable]
        });
    }

    saveClient(): void
    {
        const data = this.clientForm.getRawValue();
        // data.handle = FuseUtils.handleize(data.name);

        this.clientService.saveClient(data)
            .then(() => {

                // Trigger the subscription with new data
                this.clientService.onClientChanged.next(data);

                // Show the success message
                this._matSnackBar.open('Client saved', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });
            });
        this._location.go('/cabinets/clients');
    }

    addClient(): void
    {
        const data = this.clientForm.getRawValue();
        // data.handle = FuseUtils.handleize(data.name);

        this.clientService.addClient(data)
            .then(() => {

                // Trigger the subscription with new data
                this.clientService.onClientChanged.next(data);

                // Show the success message
                this._matSnackBar.open('Client added', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });

                // Change the location with new one
                //  this._location.go('cabinets/comptables/' + this.comptable.id );

            });
        this._location.go('cabinets/clients/');
    }

}
