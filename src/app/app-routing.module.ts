import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SalesComponent } from './sales/sales.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { GamesComponent } from './games/games.component';
import { SalersIndexComponent } from './salers/salers-index/salers-index.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'salers', component: SalersIndexComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'games', component: GamesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
