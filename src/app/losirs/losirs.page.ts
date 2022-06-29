import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllService } from '../services/all.service';

@Component({
  selector: 'app-losirs',
  templateUrl: './losirs.page.html',
  styleUrls: ['./losirs.page.scss'],
})
export class LosirsPage implements OnInit {

  constructor(private all:AllService) { }


  ngOnInit() {
  }
  //pour recuperer les valeurs saisr dans l input
  onSubmit(f: NgForm){
    this.all.cv.langues = [];
    this.all.cv.langues.push(f.value.loisir1);
    this.all.cv.langues.push(f.value.loisir2);
  }
}
