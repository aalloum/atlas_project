import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetsComponent } from './cabinets/cabinets.component';
import { CabinetComponent } from './cabinets/cabinet/cabinet.component';
import { ComptablesComponent } from './comptables/comptables.component';
import { ComptableComponent } from './cabinets/cabinet-comptables/comptable-edit/comptable.component';
import {RouterModule, Routes} from "@angular/router";
import {CabinetsService} from "./cabinets/cabinets.service";
import {CabinetService} from "./cabinets/cabinet/cabinet.service";
import {ComptablesService} from "./comptables/comptables.service";
import {ComptableService} from "./cabinets/cabinet-comptables/comptable-edit/comptable.service";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatRippleModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatSortModule} from "@angular/material/sort";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {AgmCoreModule} from "@agm/core";
import {FuseSharedModule} from "../../../@fuse/shared.module";
import {FuseConfirmDialogModule, FuseWidgetModule} from "../../../@fuse/components";
import { ClientComponent } from './clients/client/client.component';
import { ClientsComponent } from './clients/clients.component';
import {ClientsService} from "./clients/clients.service";
import {ClientService} from "./clients/client/client.service";
import { CabinetComptablesComponent } from './cabinets/cabinet-comptables/cabinet-comptables.component';
import { CabinetClientsComponent } from './cabinets/cabinet-clients/cabinet-clients.component';
import { ComptableAddComponent } from './cabinets/cabinet-comptables/comptable-add/comptable-add.component';
import {ComptableAddService} from "./cabinets/cabinet-comptables/comptable-add/comptable-add.service";
import { ClientAddComponent } from './cabinets/cabinet-clients/client-add/client-add.component';
import { ClientEditComponent } from './cabinets/cabinet-clients/client-edit/client-edit.component';
import {ClientAddService} from "./cabinets/cabinet-clients/client-add/client-add.service";
import {ClientEditService} from "./cabinets/cabinet-clients/client-edit/client-edit.service";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
    {
        path     : 'cabinets',
        component: CabinetsComponent,
        resolve  : {
            data: CabinetsService
        }
    },
    {
        path     : 'cabinets/:id',
        component: CabinetComponent,
        resolve  : {
            data: CabinetService
        }
    },
    {
        path     : 'cabinets/:id/:handle',
        component: CabinetComponent,
        resolve  : {
            data: CabinetService
        }
    },
    {
        path     : 'comptables',
        component: ComptablesComponent,
        resolve  : {
            data: ComptablesService
        }
    },
    {
        path     : 'comptables/editComptable/:id',
        component: ComptableComponent,
        resolve  : {
            data: ComptableService
        }
    },
    {
        path     : 'cmptbles/addComptable/:idCabinet',
        component: ComptableAddComponent,
        resolve  : {
            data: ComptableAddService
        }
    },
    {
        path     : 'clints/addClient/:idCabinet',
        component: ClientAddComponent,
        resolve  : {
            data: ClientAddService
        }
    },
    {
        path     : 'clints/editClient/:idClient/:idCabinet',
        component: ClientEditComponent,
        resolve  : {
            data: ClientEditService
        }
    },
    {
        path     : 'clients',
        component: ClientsComponent,
        resolve  : {
            data: ClientsService
        }
    },
    {
        path     : 'clients/:id',
        component: ClientComponent,
        resolve  : {
            data: ClientService
        }
    },
    {
        path     : 'clts/:id',
        component: ClientAddComponent,
        resolve  : {
            data: ClientAddService
        }
    }
];

@NgModule({
  declarations: [CabinetsComponent, CabinetComponent, ComptablesComponent, ComptableComponent, ClientComponent, ClientsComponent, CabinetComptablesComponent, CabinetClientsComponent, ComptableAddComponent, ClientAddComponent, ClientEditComponent],
    imports     : [
        RouterModule.forChild(routes),
        SharedModule
    ],
    providers   : [
        CabinetsService,
        CabinetService,
        ComptablesService,
        ComptableService
    ]
})
export class CabinetModule { }
