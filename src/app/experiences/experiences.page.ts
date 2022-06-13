import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.page.html',
  styleUrls: ['./experiences.page.scss'],
})
export class ExperiencesPage implements OnInit {
  experiences: number[] = [1];
  experience = []
  constructor() { }
 
  ngOnInit() {
  }

  add(){
    this.experiences.push((this.experiences.length+1));
  }
  
  //pour recuperer les valeurs saisr dans l input
  onSubmit(){
    let tab = document.getElementsByTagName('input');
    let len = tab.length;
    for (let i = 0; i < len; i++) {
      this.experience.push(tab[i].value);
    }
    console.log(this.experience)

    let bloctext = document.getElementsByTagName('textarea')[0].value;
    // this.text.push(bloctext);
    console.log(bloctext);
  }
}
