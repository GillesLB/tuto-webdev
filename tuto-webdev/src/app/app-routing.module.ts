import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from 'src/app/accueil/accueil.component';
import { PrincipaleComponent } from 'src/app/principale/principale.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'principale', component: PrincipaleComponent},
  {path: '**', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
