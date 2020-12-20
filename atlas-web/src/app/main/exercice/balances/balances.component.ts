import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from "../../../../@fuse/animations";
import {MatTableDataSource} from "@angular/material/table";
import {Client} from "../../cabinet/clients/client/client";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Balance} from "./balance";
import {CabinetClientsService} from "../../cabinet/cabinets/cabinet-clients/cabinet-clients.service";
import {BalanceService} from "./balance/balance.service";

@Component({
    selector: 'app-balances',
    templateUrl: './balances.component.html',
    styleUrls: ['./balances.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class BalancesComponent implements OnInit {

    displayedColumns: string[] = ['compte', 'intituleCompte', 'soldeInitialDebit', 'soldeInitialCredit', 'mouvementDebit', 'mouvementCredit', 'soldeDebit', 'soldeCredit'];
    dataSource: MatTableDataSource<Balance>;
    dynamicData: Array<Balance> = new Array<Balance>();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

  constructor(private balanceService: BalanceService) { }

  ngOnInit(): void {
      this.balanceService.getBalances().subscribe(
          balances => {
              this.dynamicData.push(...balances);
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
