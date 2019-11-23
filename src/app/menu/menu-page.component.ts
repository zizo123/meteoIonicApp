import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'menu-page.component.html',
  styleUrls: ['menu-page.component.scss']
})
export class MenuPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball'
  ];
  public items = [
    { title: '' , url: ' /menu/' , icon: "flask"  },
    { title: '' , url: ' /menu/' , icon: "wifi"  },
    { title: '' , url: ' /menu/' , icon: "beer"  }
  ];
  constructor() {

  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  navigate(item) {
    //this.router.navigate(['/list', JSON.stringify(item)]);
  }
}
