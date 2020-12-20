import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {FakeDbService} from "./fake-db/fake-db.service";

const appRoutes: Routes = [
    {
        path        : 'e-commerce',
        loadChildren: () => import('./main/e-commerce/e-commerce.module').then(m => m.EcommerceModule)
    },
    {
        path        : 'cabinets',
        loadChildren: () => import('./main/cabinet/cabinet.module').then(m => m.CabinetModule)
    },
    {
        path        : 'exercices',
        loadChildren: () => import('./main/exercice/exercice.module').then(m => m.ExerciceModule)
    },
    {
        path      : '**',
        redirectTo: 'cabinets/cabinets'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),
        // App modules
        LayoutModule,
        SampleModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
