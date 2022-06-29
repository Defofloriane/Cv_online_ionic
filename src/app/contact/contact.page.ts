import { Component, Input, OnInit } from '@angular/core';
import { AllService } from '../services/all.service';
import { Contact } from '../models/cv';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  labels = ['contact 1'];
  contacts:Contact[] = [];
  constructor(private allService:AllService) { }

  ngOnInit() {
  }
  add(){
    this.labels.push('contact '+ (this.labels.length +1));
  }
  //pour recuperer les valeurs saisr dans l input
  onSubmit(){
    this.allService.cv.contact = [];
    this.contacts = [];
    let tab = document.getElementsByTagName('input');
    let len = tab.length;
    for (let i = 0; i < len; i++) {
      this.contacts.push(new Contact(i+1, tab[i].value));
      localStorage.setItem('contact',JSON.stringify(tab[i].value))
    }
    this.allService.cv.contact = this.contacts
    console.log(this.allService.cv.contact)
     
  }

}
