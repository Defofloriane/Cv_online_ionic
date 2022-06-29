import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-langues',
  templateUrl: './langues.page.html',
  styleUrls: ['./langues.page.scss'],
})
export class LanguesPage implements OnInit {
  langues = ['langue 1'];
  niveau = ['niveau 1'];
  Langues = []
  constructor() { 
    console.log('je suis sur la page langue')
  }

  ngOnInit() {
  }
  add(){
    this.langues.push('Langues '+ (this.langues.length +1));
  }
  //pour recuperer les valeurs saisr dans l input
  onSubmit(){
    let tab = document.getElementsByTagName('input');
    let len = tab.length;
    for (let i = 0; i < len; i++) {
      this.Langues.push(tab[i].value);
    }
    console.log(this.Langues)

  }
}
