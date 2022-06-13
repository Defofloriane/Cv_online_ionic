import { Component, OnInit } from '@angular/core';
import { CvfinalPage } from '../cvfinal/cvfinal.page';
import { Compte } from '../models/cv';
import { AllService } from '../services/all.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  comptes = ['compte 1'];
  compte: Compte[] = [];

  constructor(private allService: AllService) { }

  ngOnInit() {
  }

  add(){
    this.comptes.push('compte '+ (this.comptes.length +1));
  }
  onSubmit(){
    const inputs = document.getElementsByTagName('input');
    const len = inputs.length ;
    console.log(len);
    for (let i = 1; i <= len; i+2) {
      this.compte.push(new Compte(i, inputs[i].value, inputs[i+1].value));
    }
    // Compte.forEach(i => {
    //   this.compte.push(len[i]);
    // });
    console.log(this.compte);

    const bloctext = document.getElementsByTagName('textarea')[0].value;
    console.log(bloctext);
    this.allService.cv.textprofile = bloctext;
    // this.text.push(bloctext);

  }
}
