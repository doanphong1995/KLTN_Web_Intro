import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ProductCategoryService } from './productCategory.service';


declare var $: any;

@Component({
  selector: 'productComponent',
  templateUrl: '../app/home2/product/product.component.html',
  providers: [CategoryService, ProductService, ProductCategoryService]
})

export class ProductComponent implements OnInit {

  sumProCate = 4;
  sum = 4;
  throttle = 0;
  scrollDistance = 0;
  private productIndex = 0;
  private isFinish = false;
  public listCate: any[];
  public listProduct: any[];
  public listProductCate: any[];
  private array: any[] = [];
  public isAll = false;

  constructor(private categoryService: CategoryService, private productService: ProductService,
    private productCategory: ProductCategoryService) {
    this.LoadData();
    this.LoadProduct();
    this.isAll = true;
  }

  LoadData() {
    this.categoryService.GetAllCategory().subscribe((response: any) => {
      this.listCate = response;
    });
  }

  LoadProduct() {
    this.productService.GetAllProduct().subscribe((response: any) => {
      this.array = [];
      this.listProduct = response;
      console.log(this.listProduct);
      this.productIndex = 0;
      this.sum = 4;
      this.isAll = true;
      this.addItems(0, this.sum);
    });
  }

  getProductCategory(id: String) {

    jQuery('#menu_content li').removeClass('active'); // remove active class from all filter links
    jQuery('#' + id + '').addClass('active'); // add active class to clicked link

    this.isAll = false;
    if (id != "0") {
      this.productCategory.GetAllProductCategory(id).subscribe((response: any) => {
        this.listProductCate = response;
        this.productIndex = 0;
        this.array = [];

        if (this.sum > this.listProductCate.length) {
          this.sum = this.listProductCate.length;
        }
        else {
          this.sum = this.sumProCate;
        }
        this.addItems(0, this.sum);
      });
    }
    else {
      this.LoadProduct();
    }
  }

  addItems(startIndex: any, endIndex: any) {

    let i = this.productIndex;
    if (!this.isAll) {
      for (; i < this.sum; i++) {
        this.productIndex++;
        this.array.push(this.listProductCate[i]);
        if (this.sum == this.listProductCate.length) {
          this.isFinish = true;
        }
      }
    }
    else {
      for (; i < this.sum; i++) {
        this.productIndex++;
        this.array.push(this.listProduct[i]);
        if (this.sum == this.listProduct.length) {
          this.isFinish = true;
        }
      }
    }
  }

  onScrollDown() {
    console.log("scrool down!");
    const start = this.sum;
    console.log("start");
    console.log(start);
    this.sum += 4;
    if (this.isAll) {
      if (this.sum >= this.listProduct.length) {
        this.sum = this.listProduct.length
      }
      this.addItems(start, this.sum);
    }
    else {
      if (this.sum >= this.listProductCate.length) {
        this.sum = this.listProductCate.length;

      }
      this.addItems(start, this.sum);
      console.log("sum");
      console.log(this.sum);
    }
  }

  ngOnInit() {

  }
}