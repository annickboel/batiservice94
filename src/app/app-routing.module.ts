import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SocieteComponent } from './societe/societe.component';
import { NosMetiersComponent } from './nos-metiers/nos-metiers.component';
import { MonDevisComponent } from './mon-devis/mon-devis.component';

import { ContactDevisComponent } from './contact-devis/contact-devis.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'societe', component: HomeComponent },
  { path: 'nos-metiers', component: NosMetiersComponent },
  { path: 'realisations', loadChildren: './realisations/realisations.module#RealisationsModule' },
  { path: 'contact-devis', component: ContactDevisComponent },
  { path: 'mon-devis', component: MonDevisComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }