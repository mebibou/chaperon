import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';

import { DiscoverTourPage } from './discover_tour';

@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {
  public type: String = 'single';
  public queryText: String = '';

  public groups: Array<Object> = [{
    title: 'Discover Kowloon',
    description: 'Discover kowloon in just 4hrs',
    price: '400 HKD/pp',
    image: 'assets/img/kowloon.jpg',
    reviews: [{
      image: 'https://robohash.org/user1.png',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      user: 'Eric',
      date: '1 month ago'
    }, {
      image: 'https://robohash.org/user2.png',
      content: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      user: 'Tom',
      date: '2 months ago'
    }]
  }, {
    title: 'Party in LKF',
    description: 'Have the best parties in LKF, one of the favorite tourist spot!',
    price: '100 HKD/pp',
    image: 'assets/img/lkf.jpg',
    reviews: [{
      image: 'https://robohash.org/user3.png',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      user: 'Donald',
      date: '2 days ago'
    }]
  }];

  public singles: Array<Object> = [{
    title: 'Party in LKF',
    description: 'Looking for someone to discover LKF tonight.',
    price: 'Between 200 and 300 HKD',
    image: 'assets/img/lkf.jpg',
    reviews: [{
      image: 'https://robohash.org/user4.png',
      content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: 'Hilary',
      date: '1 day ago'
    }]
  }];

  constructor(public navCtrl: NavController, menu: MenuController) {
    menu.enable(true);
  }

  openTour(tour) {
    this.navCtrl.push(DiscoverTourPage, {
      tour: tour
    });
  }

}
