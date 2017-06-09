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
      //console.log(this.listCate);
    });
  }

  LoadProduct() {
    this.productService.GetAllProduct().subscribe((response: any) => {
      this.listProduct = response;
      this.addItems(0, this.sum);
      //console.log(this.listProduct);
    });
  }

  getProductCategory(id: String) {
    console.log(id);
    this.isAll = false;
    if (id != "0") {
      console.log("product category");
      this.productCategory.GetAllProductCategory(id).subscribe((response: any) => {
        this.listProductCate = response;
        console.log("get product category");
        console.log(this.listProductCate);
        this.addItems(0, this.sum);
        console.log(this.listProductCate);
      });
    }
    else {
      console.log("product")
      this.LoadProduct();
      console.log("get product");
      console.log(this.listProduct);
    }
  }

  addItems(startIndex: any, endIndex: any) {
    let i = this.productIndex;
    for (; i < this.sum; ++i) {
      this.productIndex++;
      if (!this.isAll) {
        this.array.push(this.listProductCate[i]);
        if (this.sum == this.listProductCate.length) {
          this.isFinish = true;
        }
      }
      else {
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
    this.sum += 4;
    if (this.isAll) {
      if (this.sum >= this.listProduct.length) {
        this.sum = this.listProduct.length
      }
      this.addItems(start, this.sum);
    }
    else {
      if (this.sum >= this.listProductCate.length) {
        this.sum = this.listProductCate.length
      }
      this.addItems(start, this.sum);
    }
  }
  ngOnInit() {

  }
}