import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
export class Product {
  id?: any;
  name?: string;
  detail?: string;
}
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: Product = {
    name: '',
    detail: ''
  }

  submitted = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  saveProduct(): void {
    const data = {
      name: this.product.name,
      detail: this.product.detail
    };

    this.productService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      name: '',
      detail: ''
    };
  }
}
