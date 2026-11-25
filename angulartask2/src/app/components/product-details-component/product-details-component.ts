import { Component, Input, signal,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details-component',
  standalone: false,
  styleUrl: './product-details-component.css',
  templateUrl: './product-details-component.html',
})
export class ProductDetailsComponent {


quantity= signal(1)

  decreaseQuantity() {
    if (this.quantity() > 1) {
      this.quantity.update(q => q - 1);
    }

  }
increaseQuantity()
{
  this.quantity.update(t=>t+1)
}

  @Input() productName: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;
  @Input() isAvailable: boolean = true;

  @Output() addToCart = new EventEmitter<any>();

  sendToCart() {
    this.addToCart.emit({
      productName: this.productName,
      price: this.price,
      quantity: this.quantity()
    });
  }

}
