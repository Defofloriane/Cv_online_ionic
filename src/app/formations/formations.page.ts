import { Component, OnInit } from '@angular/core';
import { AllService } from '../services/all.service';
import { Formation } from '../models/cv';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.page.html',
  styleUrls: ['./formations.page.scss'],
})
export class FormationsPage implements OnInit {

  formations: number[] = [1];
  formation:Formation[] =[];
  constructor(private allService:AllService) { }

  ngOnInit() {
  }

  add(){
    this.formations.push((this.formations.length+1));
  }
  
//pour recuperer les valeurs saisr dans l input
  onSubmit(){
    this.allService.cv.formation = [];
    this.formation = [];
    let desc = document.getElementsByTagName('textarea');
    let tab = document.getElementsByTagName('input');
    let len = 0;
    for (let i = 0; i < tab.length; i+=5) {
      this.formation.push(new Formation(len+1, tab[i].value, tab[i+1].value, tab[i+2].value, tab[i+3].value, tab[i+4].value, desc[len].value,));
      len++;  
    }
    this.allService.cv.formation = this.formation;
    console.log(this.allService.cv.formation)
  }
}
