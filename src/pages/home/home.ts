import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { UsersPage } from '../pages/users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goToUsersPage(){
    this.navCtrl.push( UsersPage );
  }

}
