import { Component, OnInit } from '@angular/core';
import { AllService } from '../services/all.service';

@Component({
  selector: 'app-losirs',
  templateUrl: './losirs.page.html',
  styleUrls: ['./losirs.page.scss'],
})
export class LosirsPage implements OnInit {
  loisir :any
  loisirs = ['loisirs 1'];
  Loisirs = []
  constructor(private  allService: AllService) { }
  

  ngOnInit() {
    this.loisir = this.allService;
  }
  add(){
    this.loisirs.push('Loisirs '+ (this.loisirs.length +1));
  }
  //pour recuperer les valeurs saisr dans l input
  onSubmit(){
    this.allService.cv.loisirs = [];
    let tab = document.getElementsByTagName('input');
    let len = tab.length;
    for (let i = 0; i < len; i++) {
      this.allService.cv.loisirs.push(tab[i].value)
    }
    console.log(this.allService.cv.loisirs)

  }
}
