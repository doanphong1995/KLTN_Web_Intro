import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { FlowerMeaningService } from '../experience/flmeaning.service';
import { GetRandomMeaningService } from './getRandomMeaning.service';
import 'rxjs/add/operator/filter';

declare var $: any;

@Component({
  selector: 'flmeaningComponent',
  templateUrl: '../app/home2/flmeaning/flmeaning.component.html',
  providers: [FlowerMeaningService, GetRandomMeaningService]
})
export class FlMeaningComponent implements OnInit {

  public id: any;
  public listInfoMeaning: any[] = [];
  public listRandomMeaning: any[];
  public subscription: Subscription;

  constructor(private flowerMeaningService: FlowerMeaningService, private router: Router,
    private getRandomMeaningService: GetRandomMeaningService,
    private activeRoute: ActivatedRoute) {
    //Code constructor
    router.events.filter(event => event instanceof NavigationEnd).subscribe((val) => {
      this.onChangeUrl();
    });
    this.LoadRandomMeaning();
  }

  onChangeUrl() {
    this.subscription = this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.flowerMeaningService.GetDetailMeaning(this.id).subscribe((response: any) => {
      console.log(this.id);
      this.listInfoMeaning.push(response);
      console.log(this.listInfoMeaning);
    });
  }

  LoadRandomMeaning() {
    this.getRandomMeaningService.GetRamdomMeaning().subscribe((response: any) => {
      this.listRandomMeaning = response;
    });
  }

  ngOnInit() {

  }
}