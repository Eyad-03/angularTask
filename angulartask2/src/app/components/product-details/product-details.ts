import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})

export class ProductDetails{

  productName: string = "Laptop";

  productDescription: string = "High-performance laptop";

  productPrice: number = 750;

  productImage: string = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400";

  quantity: number = 1;

  isAvailable: boolean = true;

  discountPercentage: number = 10;


  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

}