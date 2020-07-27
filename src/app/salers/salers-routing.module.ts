import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalersIndexComponent } from './salers-index/salers-index.component';
import { SalersAddComponent } from './salers-add/salers-add.component';
import { SalersEditComponent } from './salers-edit/salers-edit.component';

const routes: Routes = [
  { path: 'salers', component: SalersIndexComponent },
  { path: 'salers/add', component: SalersAddComponent },
  { path: 'salers/edit', component: SalersEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalersRoutingModule { }
