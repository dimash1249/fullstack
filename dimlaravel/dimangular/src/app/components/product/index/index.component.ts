import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {RoleService} from "../../../services/role.service";
export class Product {
  id?: any;
  name?: string;
  detail?: string;
}
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  products?: Product[];
  currentProduct: Product = {};
  currentIndex = -1;


  isAdmin = this.role.isAdminRole();
  name = '';
  constructor(private productService: ProductService, private role: RoleService) { }



  ngOnInit(): void {
    this.retrieveProducts();
  }


  retrieveProducts(): void {
    this.productService.index().subscribe(
      (data) => {
        this.products = data.products;
        console.log(data);
      },
      (error) => {
        console.log(error);
      });
  }


  refreshList(): void {
    this.retrieveProducts();
    this.currentProduct = {};
    this.currentIndex = -1;
  }


  setActiveProduct(product: Product, index: number): void {
    this.currentProduct = product;
    this.currentIndex = index;
    console.log(this.currentProduct.id);
  }
}
