
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
//
import { SharedModule } from './shared/shared.module';
import { RealisationsModule } from './realisations/realisations.module';
import { AppRoutingModule } from './app-routing.module';
//
import { HomeComponent } from './home/home.component';
import { MonDevisComponent } from './mon-devis/mon-devis.component';
import { NosMetiersComponent } from './nos-metiers/nos-metiers.component';
import { SocieteComponent } from './societe/societe.component';
import { ContactDevisComponent } from './contact-devis/contact-devis.component';
//

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MonDevisComponent,
    NosMetiersComponent,
    SocieteComponent,
    ContactDevisComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RealisationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
