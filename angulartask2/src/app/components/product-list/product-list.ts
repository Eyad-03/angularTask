import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})

export class ProductList {

  laptopName: string = "Laptop";
  laptopDescription: string = "High-performance laptop";
  laptopPrice: number = 750;
  laptopImage: string = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400";
  laptopAvailable: boolean = true;


  smartphoneName: string = "Smartphone";
  smartphoneDescription: string = "Latest smartphone";
  smartphonePrice: number = 450;
  smartphoneImage: string = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400";
  smartphoneAvailable: boolean = true;


  headphonesName: string = "Headphones";
  headphonesDescription: string = "Wireless headphones";
  headphonesPrice: number = 80;
  headphonesImage: string = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400";
  headphonesAvailable: boolean = true;


  watchName: string = "Smart Watch";
  watchDescription: string = "Smart fitness watch";
  watchPrice: number = 120;
  watchImage: string = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400";
  watchAvailable: boolean = true;


  keyboardName: string = "Keyboard";
  keyboardDescription: string = "Mechanical keyboard";
  keyboardPrice: number = 45;
  keyboardImage: string = "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400";
  keyboardAvailable: boolean = false;


  buyNow(productName: string) {
    alert("You selected: " + productName);
  }

}