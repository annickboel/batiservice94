import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 

import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
import { CarouselComponent } from './carousel/carousel.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { GalleryComponent } from './gallery/gallery.component';
//import { Gallery, GalleryItem } from './gallery/gallery.model';

import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    //Gallery,
    //GalleryItem
  ],
  declarations: [
  	CarouselComponent,
  	ToolbarComponent,
  	NavbarComponent,
  	MainComponent,
  	FooterComponent,
    GalleryComponent,
  	PageNotFoundComponent

  ],
  exports: [
  	CarouselComponent,
  	ToolbarComponent,
  	NavbarComponent,
  	MainComponent,
    GalleryComponent,
  	FooterComponent,
  	PageNotFoundComponent,
  	FlexLayoutModule,
  	MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  	RouterModule,
    //GalleryItem, 
    //Gallery
  ]
})
export class SharedModule { }
