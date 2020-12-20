import {Component, OnInit} from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import * as XLSX from 'xlsx';

@Component({
    selector   : 'sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss']
})
export class SampleComponent  implements OnInit {
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    )
    {
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);
    }

    data: [][];

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

            console.log(ws);

            this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));

            console.log(this.data);

            let x = this.data.slice(1);
            this.data = this.data.slice(1);
            console.log(x);

        };

        reader.readAsBinaryString(target.files[0]);

    }
}
