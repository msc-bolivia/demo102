import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  rockbands: any[] = [
    {
      img: 'assets/imgs/nirvana.jpg',
      text: 'jkhdjsad sdjfhaskdjkj jshdksjad'
    },
    {
      img: 'http://images2.fanpop.com/image/photos/10500000/Pink-Floyd-pink-floyd-10566698-1440-900.jpg',
      text: 'juwyqiueywqiueyqwiue'
    },
    {
      img: 'http://www.musiclipse.com/wp-content/uploads/2014/08/Pink-Floyd-Dark-Side-Of-The-Moon-Band-Members-Full-HD-Wallpaper-For-Desktop.jpg',
      text: 'oiqeuq ioueoqjuwyqiueywqiueyqwiue'
    },

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

}
