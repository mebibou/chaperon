import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-discover_tour',
  templateUrl: 'discover_tour.html'
})
export class DiscoverTourPage {
  public tour = null;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.tour = params.get('tour');
  }
}
