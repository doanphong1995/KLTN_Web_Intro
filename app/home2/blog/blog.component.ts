import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { GetRandomBlogService } from './getRamdom.service';
declare var $: any;

@Component({
  selector: 'blogComponent',
  moduleId: module.id,
  templateUrl: './blog.component.html',
  providers: [BlogService, GetRandomBlogService]
})
export class BlogComponent implements OnInit {

  public listBlog: any[];
  public listRandomBlog: any[];

  constructor(private blogService: BlogService, private getRandomBlogService: GetRandomBlogService) {
    this.LoadData();
    this.LoadRandom();
  }

  LoadData() {
    this.blogService.GetAllBlog().subscribe((response: any) => {
      this.listBlog = response;
    });

  }

  LoadRandom() {
    this.getRandomBlogService.GetRamdomBlog().subscribe((response: any) => {
      this.listRandomBlog = response;
    });
  }
  ngOnInit() {

  }
}