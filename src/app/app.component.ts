import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    { title: 'Home' , url: ' /home' , icon: "home"  },
    { title: 'Meteo' , url: ' /meteo' , icon: "wifi"  },
    { title: 'Gallery' , url: ' /gallery' , icon: "beer"  },
    { title: 'Locations' , url: ' /location' , icon: "beer"  },
    { title: 'Logout' , url: ' /login' , icon: "beer"  },

    //{title: 'List',url: '/list',icon: 'list'}
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.login();
    });
  }
  private login(){
    this.router.navigateByUrl('login');
  }
}
