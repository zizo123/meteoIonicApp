import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contact = {
    name : "HighTech",
    email : "oz@gmailcom",
    tel : "0537214565",
    logo : "assets/images/logo.png",
    location : "assets/images/loc.png"
  }
  constructor() {}

}
