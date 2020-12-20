import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Comptable} from "../cabinet-comptables/comptable-edit/comptable";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";
import {CabinetComptablesService} from "../cabinet-comptables/cabinet-comptables.service";
import {CabinetClientsService} from "./cabinet-clients.service";
import {Client} from "../../clients/client/client";
import {fuseAnimations} from "../../../../../@fuse/animations";

@Component({
    selector: 'app-cabinet-clients',
    templateUrl: './cabinet-clients.component.html',
    styleUrls: ['./cabinet-clients.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class CabinetClientsComponent implements OnInit {

    @Input()
    cabinetId: number;

    displayedColumns: string[] = ['denomination', 'identifiantFiscal', 'activitePrincipale', 'ville', 'comptable', 'action'];
    dataSource: MatTableDataSource<Client>;
    dynamicData: Array<Client> = new Array<Client>();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor(private router: Router, private cabinetClientsService: CabinetClientsService) {
    }

    ngOnInit(): void {
        this.cabinetClientsService.getClientsByCabinet(this.cabinetId).subscribe(
            clients => {
                this.dynamicData.push(...clients);
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


}
