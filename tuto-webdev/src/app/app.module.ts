import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PrincipaleComponent } from './principale/principale.component';
import { HeaderComponent } from './header/header.component';
import { WebdevService } from 'src/app/webdev.service';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PrincipaleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
  ],
  providers: [
    WebdevService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
