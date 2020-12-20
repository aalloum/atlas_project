import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FuseTranslationLoaderService} from "../../../../../@fuse/services/translation-loader.service";
import {locale as english} from "../../../sample/i18n/en";
import {locale as turkish} from "../../../sample/i18n/tr";
import * as XLSX from "xlsx";
import {Balance} from "../balance";
import {fuseAnimations} from "../../../../../@fuse/animations";
import {BalanceService} from "./balance.service";

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
    animations   : fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class BalanceComponent implements OnInit {

    constructor(private balanceService: BalanceService) {}

    data: [][];
    balances: Array<Balance> = new Array<Balance>();
    header: [];

    headers_index: number = 0;
    compte_index: number;
    intituleCompte_index: number;
    soldeInitialDebit_index: number;
    soldeInitialCredit_index: number;
    mouvementDebit_index: number;
    mouvementCredit_index: number;
    soldeDebit_index: number;
    soldeCredit_index: number;

    ngOnInit(): void {}

    onFileChange(evt: any) {

        const target: DataTransfer =  <DataTransfer>(evt.target);
        if (target.files.length !== 1) throw new Error('Cannot use multiple files');
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));

            this.header = this.data[this.headers_index];

            for(let i = 0 ; i < this.header.length; i++){
                switch (this.header[i]) {
                    case "Compte":
                        this.compte_index = i;
                        break;
                    case "Intitulé compte":
                        this.intituleCompte_index = i;
                        break;
                    case "Solde initial Débit":
                        this.soldeInitialDebit_index = i;
                        break;
                    case "Solde initial Crédit":
                        this.soldeInitialCredit_index = i;
                        break;
                    case "Mouvement Débit":
                        this.mouvementDebit_index = i;
                        break;
                    case "Mouvement Crédit":
                        this.mouvementCredit_index = i;
                        break;
                    case "Solde débit":
                        this.soldeDebit_index = i;
                        break;
                    case "Solde crédit":
                        this.soldeCredit_index = i;
                        break;
                }
            }

            this.data = this.data.slice(1);

            for (let elt = 0; elt < this.data.length; elt++){
                let balance: Balance = new Balance();
                balance.id = null;
                balance.compte = this.data[elt][this.compte_index];
                balance.intituleCompte = this.data[elt][this.intituleCompte_index];
                balance.soldeInitialDebit = this.data[elt][this.soldeInitialDebit_index];
                balance.soldeInitialCredit = this.data[elt][this.soldeInitialCredit_index];
                balance.mouvementDebit = this.data[elt][this.mouvementDebit_index];
                balance.mouvementCredit = this.data[elt][this.mouvementCredit_index];
                balance.soldeDebit = this.data[elt][this.soldeDebit_index];
                balance.soldeCredit = this.data[elt][this.soldeCredit_index];
                this.balances.push(balance);
            }
            this.balanceService.addBalances(this.balances).subscribe(res => res);
        };
        reader.readAsBinaryString(target.files[0]);
    }

}
