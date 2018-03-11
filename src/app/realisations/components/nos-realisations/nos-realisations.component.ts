import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nos-realisations',
  templateUrl: './nos-realisations.component.html',
  styleUrls: ['./nos-realisations.component.css']
})
export class NosRealisationsComponent implements OnInit {
  gallery_size: number = 8;
  gallery_row_size: number = 4;

  constructor() { }

  ngOnInit() {
  }

}
