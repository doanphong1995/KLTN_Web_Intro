import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EventService } from './event.service';

declare var $: any;

@Component({
  selector: 'homeComponent',
  moduleId: module.id,
  templateUrl: './home.component.html',
  providers: [EventService]
})
export class HomeComponent implements OnInit, AfterViewInit {

  public listEvent: any[];

  constructor(private eventService: EventService) {
    this.LoadData();

  }

  LoadData() {
    this.eventService.GetAllEvent().subscribe((response: any) => {
      this.listEvent = response;
      console.log(this.listEvent);

    });
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    setTimeout(()=>{
        document.getElementById("pmmCarousel_next").click();
    },0)
  }

  goFB() {
    window.location.href = 'https://www.facebook.com/doanphong19951';
  }
}