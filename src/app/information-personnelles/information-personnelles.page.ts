import { Component, OnInit } from '@angular/core';
import { AllService } from '../services/all.service';

@Component({
  selector: 'app-information-personnelles',
  templateUrl: './information-personnelles.page.html',
  styleUrls: ['./information-personnelles.page.scss'],
})
export class InformationPersonnellesPage implements OnInit {
  infos: number[] = [1];
  info = []
  constructor( private allService :AllService) { }

  ngOnInit() {
  }
  add(){
    this.infos.push((this.infos.length+1));
  }
  //pour recuperer les valeurs saisr dans l input
  onSubmit(){
    let tab = document.getElementsByTagName('input');
    let len = tab.length;
    for (let i = 0; i < len; i++) {
      this.info.push(tab[i].value);
    }
    console.log(this.info)
  
    this.allService.cv.noms = this.info.toString();
    this.allService.cv.prenoms = this.info.toString();
    this.allService.cv.adresse = this.info.toString();
    this.allService.cv.nationalite = this.info.toString();
    //this.allService.cv.dateNaisance = Number(this.info);
    this.allService.cv.nationalite = this.info.toString();
    //this.allService.cv.dateNaisance = this.info;
  }
}
