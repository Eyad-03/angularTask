import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';

import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { ProductList } from './components/product-list/product-list';
import { ProductDetails } from './components/product-details/product-details';
import { Footer } from './components/footer/footer';
import { ProductDetailsComponent } from './components/product-details-component/product-details-component';

@NgModule({
  declarations: [App, Header, Navbar, ProductDetailsComponent],

  imports: [BrowserModule, ProductList, ProductDetails, Footer],

  bootstrap: [App],
})
export class AppModule {}
