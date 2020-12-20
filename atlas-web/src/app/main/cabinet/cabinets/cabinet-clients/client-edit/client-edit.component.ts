import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Comptable} from "../../cabinet-comptables/comptable-edit/comptable";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Cabinet} from "../../cabinet/cabinet";
import {Subject} from "rxjs";
import {ComptableService} from "../../cabinet-comptables/comptable-edit/comptable.service";
import {Location} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {CabinetsService} from "../../cabinets.service";
import {takeUntil} from "rxjs/operators";
import {Client} from "../../../clients/client/client";
import {ClientEditService} from "./client-edit.service";
import {fuseAnimations} from "../../../../../../@fuse/animations";

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ClientEditComponent implements OnInit, OnDestroy {

    client: Client;
    clientEditForm: FormGroup;
    cabinetEditClient: Cabinet;
    comptablesFromCabinet: Comptable[] = new Array();

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private clientEditService: ClientEditService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar,
        private router: Router,
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {

        // Subscribe to update product on changes
        this.clientEditService.onClientEditChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(client => {
                this.client = new Client(client);
                this.cabinetEditClient = client.cabinet;
                this.clientEditForm = this.createEditClientForm();
            });

        this.comptablesFromCabinet = this.clientEditService.comptablesFromCabinet;

        // this.comptableService.getCabinets().subscribe(res => {
        //     this.cabinets = res;
        // });
    }

    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    createEditClientForm(): FormGroup {
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
            comptable:                 [this.client.comptable],
            cabinet:                   [this.cabinetEditClient.id]
        });
    }

    saveClient(): void
    {
        const data = this.clientEditForm.getRawValue();
        data.cabinet = this.cabinetEditClient;
        this.clientEditService.saveClient(data)
            .then(() => {

                // Trigger the subscription with new data
                this.clientEditService.onClientEditChanged.next(data);

                // Show the success message
                this._matSnackBar.open('Client saved', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });
            });
        this.router.navigateByUrl('/cabinets/cabinets/' + this.cabinetEditClient.id);
    }

}
