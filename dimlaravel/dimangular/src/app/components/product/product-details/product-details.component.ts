import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
export class Product {
  id?: any;
  name?: String;

  detail?: String;
}
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {




  @Input() viewMode = false;

  @Input() currentProduct: Product = {
    name: '',
    detail: ''
  };

  @Input() currentIndex: number = 0;

  message = '';



  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getProduct(this.route.snapshot.params["productId"]);
      //this.getProduct(this.currentProduct.id);
    }
  }

  getProduct(id: any): void {
    this.productService.indexProduct(id).subscribe({
      next: (data) => {
        console.log(id);
        this.currentProduct = data;
        console.log(data);
      },
      error: (error) =>
        console.log(error)
      });
  }

  updateProduct(): void {
    this.message = '';
    const id = this.currentProduct.id;
    const product = this.currentProduct;
    this.productService.edit(id, product).subscribe({
      next: (response) => {
        console.log(response);
        this.message = response.message ? response.message : 'The product was updated successfully!';
      },
      error: (error) =>
        console.log(error)
      });
  }


  deleteProduct(): void {
    const id = this.currentProduct.id;
    this.productService.delete(id).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/products']);
      },
      error: (error) =>
        console.log(error)
      });
  }

}
