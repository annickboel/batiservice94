import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NosRealisationsComponent } from './components/nos-realisations/nos-realisations.component';
import { SalleDeBainComponent } from './components/salle-de-bain/salle-de-bain.component';
import { CuisineComponent } from './components/cuisine/cuisine.component';

const routes: Routes = [
  { path: 'realisations', component: NosRealisationsComponent, 
  	children: [
      { path: '', redirectTo: 'cuisine', pathMatch: 'full' }, 
      { path: 'cuisine', component: CuisineComponent },
      { path: 'salle-de-bain', component: SalleDeBainComponent}
    ] 
   }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class RealisationsRoutingModule { }

