import { Component, OnInit } from '@angular/core';
import { AllService } from '../services/all.service';
import { Cv } from '../models/cv';

@Component({
  selector: 'app-cvfinal',
  templateUrl: './cvfinal.page.html',
  styleUrls: ['./cvfinal.page.scss'],
})
export class CvfinalPage implements OnInit {

  cv:Cv;
  constructor(private allService: AllService) {
    this.cv = this.allService.cv;
    console.log(this.cv.profile)
    console.log(this.cv.socials)
    console.log(this.allService.cv.contact)
    console.log(this.cv.formation);
    
  }

  ngOnInit() {
    console.log('cv final')
  
  }

}
