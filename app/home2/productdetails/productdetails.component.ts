import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/filter';
import { GetRandomProductService } from '../productdetails/getRamdomProduct.service';


declare var $: any;

@Component({
  selector: 'productdetailsComponent',
  templateUrl: '../app/home2/productdetails/productdetails.component.html',
  providers: [ProductService, GetRandomProductService]
})
export class ProductDetailsComponent implements OnInit {

  public id: any;
  public listDetailProduct: any[] = [];
  public listRandomProduct: any[] = [];
  public subscription: Subscription;

  constructor(private productService: ProductService, private getRandomProductService: GetRandomProductService, private router: Router,
    private activeRoute: ActivatedRoute) {
    //Code constructor
    router.events.filter(event => event instanceof NavigationEnd).subscribe((val) => {
      this.onChangeUrl();
    });
    this.LoadRandomProduct();
  }

  LoadRandomProduct() {
    this.getRandomProductService.GetRamdomProduct().subscribe((response: any) => {
      this.listRandomProduct = response;
    });
  }

  onChangeUrl() {
    this.subscription = this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.productService.GetDetailProduct(this.id).subscribe((response: any) => {
      console.log(this.id);
      this.listDetailProduct.push(response);
      console.log(this.listDetailProduct);
    });
  }
  ngOnInit() {

  }
}