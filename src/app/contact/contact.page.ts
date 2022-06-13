import { Component, Input, OnInit } from '@angular/core';
import { AllService } from '../services/all.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  labels = ['contact 1'];
  contacts = [];
  constructor(private allService:AllService) { }

  ngOnInit() {
  }
  add(){
    this.labels.push('contact '+ (this.labels.length +1));
  }
  //pour recuperer les valeurs saisr dans l input
  onSubmit(){
    let tab = document.getElementsByTagName('input');
    let len = tab.length;
    for (let i = 0; i < len; i++) {
      this.contacts.push(tab[i].value);
    }
    console.log(this.contacts)
   // this.allService.cv.contact = contacts;

  }

}
