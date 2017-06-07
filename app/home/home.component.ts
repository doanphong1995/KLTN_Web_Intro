import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'homeComponent',
  moduleId: module.id,
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  ngOnInit() {

  }

  goFB() {
    window.location.href = 'https://www.facebook.com/doanphong19951';
  }
}