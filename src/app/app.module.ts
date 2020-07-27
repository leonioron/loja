import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MainPageComponent } from './main-page/main-page.component';
import { ClientsComponent } from './clients/clients.component';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { GamesComponent } from './games/games.component';
import { SalersModule } from './salers/salers.module';
import { SalersRoutingModule } from './salers/salers-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    ClientsComponent,
    ProductsComponent,
    SalesComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    SharedModule,
    SalersModule,
    SalersRoutingModule,
    HttpClientModule,
  ],
  providers: [Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
