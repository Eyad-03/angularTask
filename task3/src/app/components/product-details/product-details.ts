import { Component, Input, Output, signal,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {

 quantity = signal(1)


decreaseQuantity()
{
  if(this.quantity()>1)
  {
    this.quantity.update(v=>v-1)
  }
}

increaseQuantity()
{
  this.quantity.update(v=>v+1)
}

  @Input() productName: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;
  @Input() isAvailable: boolean = true;

  @Output() addToCart = new EventEmitter<any>();

  sendCart()
  {
    this.addToCart.emit({
      productName: this.productName,
      price: this.price,
      quantity: this.quantity()

    })
  }



}
