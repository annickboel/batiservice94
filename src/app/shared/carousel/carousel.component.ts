import { Component, OnInit } from '@angular/core';
import { Image} from './image';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public images:Image[] = [
  	{ "description": "description", "url": "./assets/images/slide2.jpg" },
  	{ "description": "description", "url": "./assets/images/slide3.jpg" },
  	{ "description": "description", "url": "./assets/images/slide2.jpg" },
  	{ "description": "description ", "url": "./assets/images/slide3.jpg" },
  ];
  constructor() { }

  ngOnInit() {
  }
}
