
import { NgModule } from '@angular/core';
import { SalersIndexComponent } from './salers-index/salers-index.component';
import { SalersAddComponent } from './salers-add/salers-add.component';
import { SalersEditComponent } from './salers-edit/salers-edit.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SalersIndexComponent,
        SalersAddComponent,
        SalersEditComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class SalersModule { }
