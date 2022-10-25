import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";
export class Product {
  id?: any;
}
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {







  product: Product = {};
  deleted = false;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }






  deleteProduct(): void {
    const id = this.product.id;
    this.productService.delete(id).subscribe({
      next: (response) => {
        console.log(response);
        //this.router.navigate(['/products']);
        this.deleted = true;
      },
      error: (error) =>
        console.log(error)
    });
  }

  falseDeleted(): void {
    this.deleted = false;
  }
}
