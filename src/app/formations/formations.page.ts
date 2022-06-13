import { Component, OnInit } from '@angular/core';
import { AllService } from '../services/all.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.page.html',
  styleUrls: ['./formations.page.scss'],
})
export class FormationsPage implements OnInit {

  formations: number[] = [1];
  formation =[];
  constructor(private allService:AllService) { }

  ngOnInit() {
  }

  add(){
    this.formations.push((this.formations.length+1));
  }
  
//pour recuperer les valeurs saisr dans l input
  onSubmit(){
    let tab = document.getElementsByTagName('input');
    let len = tab.length;
    for (let i = 0; i < len; i++) {
      this.formation.push(tab[i].value);
    }
    console.log(this.formation)

    let bloctext = document.getElementsByTagName('textarea')[0].value;
    // this.text.push(bloctext);
    console.log(bloctext);
    //this.allService.cv.formation = bloctext;
  }
}
