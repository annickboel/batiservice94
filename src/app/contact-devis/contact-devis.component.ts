import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-devis',
  templateUrl: './contact-devis.component.html',
  styleUrls: ['./contact-devis.component.css']
})
export class ContactDevisComponent implements OnInit {
  contactForm = new FormGroup ({
    company: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    message: new FormControl()
  });

  constructor() { }

	onSubmit() {
		console.log(this.contactForm.value);
  	}



  ngOnInit() {
  }

}
