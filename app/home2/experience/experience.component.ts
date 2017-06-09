import { Component, OnInit } from '@angular/core';
import { FlowerMeaningService } from './flmeaning.service';
declare var $: any;

@Component({
  selector: 'experienceComponent',
  templateUrl: '../app/home2/experience/experience.component.html',
  providers: [FlowerMeaningService]
})
export class ExperienceComponent implements OnInit {

public listFlower: any[];

  constructor(private flowerMeaningService: FlowerMeaningService, ) {
    this.LoadData();
  }

  LoadData() {
    this.flowerMeaningService.GetAllFlMeaning().subscribe((response: any) => {
      this.listFlower = response;

      console.log(this.listFlower);
    });
  }

  ngOnInit() {

  }
}