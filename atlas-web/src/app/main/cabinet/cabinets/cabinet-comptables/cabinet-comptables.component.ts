import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from "../../../../../@fuse/animations";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {Comptable} from "./comptable-edit/comptable";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";
import {CabinetComptablesService} from "./cabinet-comptables.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FuseConfirmDialogComponent} from "../../../../../@fuse/components/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-cabinet-comptables',
  templateUrl: './cabinet-comptables.component.html',
  styleUrls: ['./cabinet-comptables.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class CabinetComptablesComponent implements OnInit {

    private dsData: any;
    private idColumn = 'id';

    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

    @Input()
    cabinetId: number;

    displayedColumns: string[] = ['firstName', 'lastName', 'matricule', 'actived', 'action'];
    dataSource: MatTableDataSource<Comptable>;
    dynamicData: Array<Comptable> = new Array<Comptable>();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    @ViewChild('myTable') myTable: MatTable<any>;

  constructor(private router: Router, private cabinetComptablesService: CabinetComptablesService, private _matDialog: MatDialog) { }

  ngOnInit(): void {
      this.cabinetComptablesService.getComptablesByCabinet(this.cabinetId).subscribe(
          comptables => {
              this.dynamicData.push(...comptables);
              this.dataSource = new MatTableDataSource(this.dynamicData);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
          }
      );
  }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }


    public deleteComptable(idComptable: number) {
        const dsData = this.dataSource.data;
        const record = dsData.find(obj => obj[this.idColumn] === idComptable);

        this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
            disableClose: false
        });

        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

        this.confirmDialogRef.afterClosed().subscribe(result => {
            this.cabinetComptablesService.deleteComptable(idComptable).subscribe(response => {
                this.deleteRowDataTable (idComptable, this.idColumn, this.paginator, this.dataSource);
            });
            this.confirmDialogRef = null;
        });

    }


    private deleteRowDataTable (recordId, idColumn, paginator, dataSource) {
        this.dsData = dataSource.data;
        const itemIndex = this.dsData.findIndex(obj => obj[idColumn] === recordId);
        dataSource.data.splice(itemIndex, 1);
        dataSource.paginator = paginator;
    }
}
