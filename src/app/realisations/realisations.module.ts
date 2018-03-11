import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { RealisationsRoutingModule } from './realisations-routing.module';
import { NosRealisationsComponent } from './components/nos-realisations/nos-realisations.component';
import { SalleDeBainComponent } from './components/salle-de-bain/salle-de-bain.component';
import { CuisineComponent } from './components/cuisine/cuisine.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RealisationsRoutingModule
  ],
  declarations: [
  	NosRealisationsComponent,
    SalleDeBainComponent,
    CuisineComponent

  ],
  exports: [
  	NosRealisationsComponent
  ]
})
export class RealisationsModule { }
