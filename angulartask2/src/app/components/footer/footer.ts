import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})

export class Footer {

  storeName: string = "ElectroShop";

  storeAddress: string = "Irbid, Jordan";

  contactEmail: string = "electroshop@gmail.com";

  copyright: string = "© 2026 ElectroShop. All Rights Reserved.";

}