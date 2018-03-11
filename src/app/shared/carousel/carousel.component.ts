import { Component, OnInit } from '@angular/core';
import { Image} from './image';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public images:Image[] = [
  	{ "description": "We are covered", "url": "./assets/images/slide1.jpg" },
  	{ "description": "Generation Gap", "url": "./assets/images/slide2.jpg" },
  	{ "description": "Potter Me", "url": "./assets/images/slide3.jpg" },
  	{ "description": "Pre-School Kids", "url": "./assets/images/slide4.jpg" },
  	{ "description": "Young Peter Cech", "url": "./assets/images/slide5.jpg" } 
  ];
  constructor() { }

  ngOnInit() {
  }
}
