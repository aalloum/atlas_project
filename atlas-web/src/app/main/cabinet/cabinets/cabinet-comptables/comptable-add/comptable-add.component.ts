import { Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Comptable} from '../comptable-edit/comptable';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Cabinet} from '../../cabinet/cabinet';
import {Subject} from 'rxjs';
import {ComptableService} from '../comptable-edit/comptable.service';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {CabinetsService} from '../../cabinets.service';
import {takeUntil} from 'rxjs/operators';
import {ComptableAddService} from './comptable-add.service';
import {fuseAnimations} from '../../../../../../@fuse/animations';

@Component({
  selector: 'app-comptable-add',
  templateUrl: './comptable-add.component.html',
  styleUrls: ['./comptable-add.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ComptableAddComponent implements OnInit, OnDestroy {



    comptable: Comptable;
    comptableFormAdd: FormGroup;
    cabinetComptable: Cabinet;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private comptableAddService: ComptableAddService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar,
        private router: Router
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {

        this.comptableAddService.onCabinetChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(cabinet => {

               this.cabinetComptable = cabinet;
               this.comptableFormAdd = this.createComptableForm();
            });


    }

    ngOnDestroy(): void
    {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    createComptableForm(): FormGroup {
        return this._formBuilder.group({
            id              : [''],
            firstName       : [''],
            lastName        : [''],
            matricule       : [''],
            actived         : [''],
            cabinet         : [this.cabinetComptable.id]
        });
    }


    addComptable(): void
    {
        const data = this.comptableFormAdd.getRawValue();
        const comptable = new Comptable();
        comptable.id = null;
        comptable.firstName = data.firstName;
        comptable.lastName = data.lastName;
        comptable.matricule = data.matricule;
        comptable.actived = data.actived;
        comptable.cabinet = this.cabinetComptable;


        this.comptableAddService.addComptable(comptable)
            .then(() => {
                // Show the success message
                this._matSnackBar.open('Comptable added', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });
            });
        this.router.navigateByUrl('/cabinets/cabinets/' + this.cabinetComptable.id);
    }
}
