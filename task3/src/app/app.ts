import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('task3');

  productName = signal('Laptop');

  productDescription = signal('Dell Laptop, Core i7, 16GB RAM');

  productPrice = signal(850);

  productAvailability = signal(true);

  cartData = signal<any>(null);

  receiveProduct(product: any) {

    this.cartData.set(product);

  }


  changeProduct() {

    this.productName.set('Wireless Headphones');

    this.productDescription.set('Bluetooth Headphones');

    this.productPrice.set(120);

    this.productAvailability.set(true);

  }


}
