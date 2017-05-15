import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'my-app',
  moduleId: module.id,
  template: `
  <router-outlet></router-outlet>
`
})
export class AppComponent implements OnInit {
  name = 'Angular';
  ngOnInit() {

  }
}