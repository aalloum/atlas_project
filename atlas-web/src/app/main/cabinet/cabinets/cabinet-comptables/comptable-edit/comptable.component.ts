import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Comptable} from "./comptable";
import {Subject} from "rxjs";
import {Location} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ComptableService} from "./comptable.service";
import {takeUntil} from "rxjs/operators";
import {FuseUtils} from "../../../../../../@fuse/utils";
import {Router} from "@angular/router";
import {fuseAnimations} from "../../../../../../@fuse/animations";
import {CabinetsService} from "../../cabinets.service";
import {Cabinet} from "../../cabinet/cabinet";

@Component({
  selector: 'app-comptable',
  templateUrl: './comptable.component.html',
  styleUrls: ['./comptable.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ComptableComponent implements OnInit, OnDestroy {

    comptable: Comptable;
    pageType: string;
    comptableForm: FormGroup;
    cabinets: Cabinet[];
    cabinetComptable: Cabinet;

    // Private
    private _unsubscribeAll: Subject<any>;

  constructor(
      private comptableService: ComptableService,
      private _formBuilder: FormBuilder,
      private _location: Location,
      private _matSnackBar: MatSnackBar,
      private router: Router,
      private cabinetsService: CabinetsService
  ) {
      // Set the private defaults
      this._unsubscribeAll = new Subject();
  }

    ngOnInit(): void {

        // Subscribe to update product on changes
        this.comptableService.onComptableChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(comptable => {
                this.comptable = new Comptable(comptable);
                this.cabinetComptable = comptable.cabinet;
                this.comptableForm = this.createComptableForm();
            });

        this.comptableService.getCabinets().subscribe(res => {
            this.cabinets = res;
        });
    }

    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    createComptableForm(): FormGroup {
        return this._formBuilder.group({
            id              : [this.comptable.id],
            firstName       : [this.comptable.firstName],
            lastName        : [this.comptable.lastName],
            matricule       : [this.comptable.matricule],
            actived         : [this.comptable.actived],
            cabinet         : [this.comptable.cabinet.id]
        });
    }

    saveComptable(): void
    {
        const data = this.comptableForm.getRawValue();

        let comptable = new Comptable();
        comptable.id = data.id;
        comptable.firstName = data.firstName;
        comptable.lastName = data.lastName;
        comptable.matricule = data.matricule;
        comptable.actived = data.actived;
        comptable.cabinet = this.cabinetComptable;
        this.comptableService.saveComptable(comptable)
            .then(() => {

                // Trigger the subscription with new data
                this.comptableService.onComptableChanged.next(comptable);

                // Show the success message
                this._matSnackBar.open('Comptable saved', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });
            });
        this.router.navigateByUrl('/cabinets/cabinets/' + this.comptable.cabinet.id);
    }
}
