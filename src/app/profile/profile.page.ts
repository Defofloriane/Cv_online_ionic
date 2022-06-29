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
    this.compte = [];
    this.allService.cv.socials = [];
    const inputs = document.getElementsByTagName('input');
    const len = inputs.length - 2;
    for (let i = 0; i <= len; i += 2) {
      let t = i + 1
      this.compte.push(new Compte(t, inputs[i].value, inputs[t].value))
    }
    this.allService.cv.socials = this.compte;

    console.log(this.allService.cv.socials)

    const bloctext = document.getElementsByTagName('textarea')[0].value;
    console.log(bloctext);
    this.allService.cv.profile = bloctext;
    //this.text.push(bloctext);
  }
}
