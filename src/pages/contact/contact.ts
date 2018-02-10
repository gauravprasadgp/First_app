import { Component } from '@angular/core';
import {NavController,Platform} from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public platform:Platform,public navCtrl: NavController) {
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
}