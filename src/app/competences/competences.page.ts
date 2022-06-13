import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.page.html',
  styleUrls: ['./competences.page.scss'],
})
export class CompetencesPage implements OnInit {
  langages = ['langages 1'];
  langage = []
  constructor() { }

  ngOnInit() {
  }
  add(){
    this.langages.push('contact '+ (this.langages.length +1));
  }

  //pour recuperer les valeurs saisr dans l input
  onSubmit(){
    let tab = document.getElementsByTagName('input');
    let len = tab.length;
    for (let i = 0; i < len; i++) {
      this.langage.push(tab[i].value);
    }
    console.log(this.langage)

   
  }
}
