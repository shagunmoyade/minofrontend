import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { FullPagesRoutingModule } from "./full-pages-routing.module";

import { FullLayoutPageComponent } from './full-layout-page.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FullPagesRoutingModule ,
        SharedModule
    ],
    declarations: [       
        FullLayoutPageComponent
    ]
})
export class FullPagesModule { }
