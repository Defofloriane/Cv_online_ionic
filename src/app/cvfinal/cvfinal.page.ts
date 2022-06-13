import { Component, OnInit } from '@angular/core';
import { AllService } from '../services/all.service';

@Component({
  selector: 'app-cvfinal',
  templateUrl: './cvfinal.page.html',
  styleUrls: ['./cvfinal.page.scss'],
})
export class CvfinalPage implements OnInit {

  constructor( private allService:AllService) { }

  ngOnInit() {
    console.log(this.allService.cv.textprofile)
   //console.log(this.allService.cv.comptescv)
    console.log(this.allService.cv.noms)
  }

}
