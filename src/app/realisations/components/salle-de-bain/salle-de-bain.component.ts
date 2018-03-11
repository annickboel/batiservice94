import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem } from './../../../shared/gallery/gallery';

@Component({
  selector: 'app-salle-de-bain',
  templateUrl: './salle-de-bain.component.html',
  styleUrls: ['./salle-de-bain.component.css']
})
export class SalleDeBainComponent implements OnInit {
	gallery: Gallery;
 	model: any;
  	constructor() { }

  	ngOnInit() {
  		this.gallery = new Gallery("salle-de-bain",4);
  		this.gallery.items = [];
  		for (var i of [1,2, 3, 4, 5, 6, 7, 8, 9]) {
    		this.gallery.items.push(new GalleryItem(i, './assets/images/'+this.gallery.name+"-"+i+'.jpg'));
		}
		this.model= JSON.stringify(this.gallery);
  	}

}
