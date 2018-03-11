import { Component, Input, OnInit } from '@angular/core';
import { Gallery, GalleryItem }  from './gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() model: any;

  gallery: Gallery;
  rows: GalleryItem[][] = [];


  constructor() { 
  }

  ngOnInit() {
    let obj = JSON.parse(this.model);
    this.gallery =  new Gallery(obj._name, obj._row, obj._items);
    this.gallery.rows=[];
    let left = this.gallery.items.length;

    for (let i = 0; i < Math.ceil(this.gallery.items.length /this.gallery.row) ; i++) {
      let row = [];
      for (let j = 0; j < this.gallery.row ; j++) {
          if (left > 0) {
            row.push(this.gallery.items[0]);
            left--;
          }
          else {
            row.push(new GalleryItem(-1, ''));
          }
      }
      this.gallery.rows.push(row);
    }
  }

}
