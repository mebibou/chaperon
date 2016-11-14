import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { MyToursService } from './my_tours.service';

@Component({
  selector: 'page-my_tours_create',
  templateUrl: 'my_tours_create.html'
})
export class MyToursCreatePage {
  public tour = null;

  constructor(public navCtrl: NavController, public params: NavParams, private service: MyToursService) {
    var tour = params.get('tour');
    if (tour) {
      this.tour = tour;
    }
    else {
      this.tour = {
        new: true,
        type: 'request',
        title: 'New tour',
        category: 'Going out',
        published: false,
        expiryDate: '2016-12-13',
        expiryTime: '12:00',
        price: {
          lower: 20,
          upper: 500
        }
      };
    }
  }

  create() {
    if (this.tour.new && this.tour.title) {
      this.service.tours.push(this.tour);
    }
    this.navCtrl.pop();
  }
}
