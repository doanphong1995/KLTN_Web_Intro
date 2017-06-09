import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogService } from '../blog/blog.service';
import { GetRandomBlogService } from '../blog/getRamdom.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'blogidComponent',
  moduleId: module.id,
  templateUrl: './blogid.component.html',
  providers: [BlogService, GetRandomBlogService]
})
export class BlogIDComponent implements OnInit {

  public id: any;
  public listBlog: any[] = [];
  public listRandomBlog: any = [];
  public subscription: Subscription;

  constructor(private blogService: BlogService, private router: Router,
    private getRandomBlogService: GetRandomBlogService,
    private activeRoute: ActivatedRoute) {
    //Code constructor
    router.events.filter(event => event instanceof NavigationEnd).subscribe((val) => {
      this.onChangeUrl();
    });
    this.LoadRandomBlog();
  }

  onChangeUrl() {
    this.subscription = this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.blogService.GetDetailBlog(this.id).subscribe((response: any) => {
      console.log(this.id);
      this.listBlog.push(response);
      console.log(this.listBlog);
    });
  }

  LoadRandomBlog() {
    this.getRandomBlogService.GetRamdomBlog().subscribe((response: any) => {
      this.listRandomBlog = response;
    });
  }

  ngOnInit() {

  }
}