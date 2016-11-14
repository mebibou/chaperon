import { Component } from '@angular/core';

import { NavController, Platform, ActionSheetController } from 'ionic-angular';

import { MyToursCreatePage } from './my_tours_create';
import { MyToursService } from './my_tours.service';

@Component({
  selector: 'page-my_tours',
  templateUrl: 'my_tours.html'
})
export class MyToursPage {
  public tours = [];
  public editing: Boolean = false;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    private service: MyToursService
  ) {
    this.tours = service.tours;
  }

  offers() {
    return this.tours.filter(function(tour) {
      return tour.type == 'offer';
    });
  }

  requests() {
    return this.tours.filter(function(tour) {
      return tour.type == 'request';
    });
  }

  edit() {
    this.editing = !this.editing;
  }

  new() {
    this.navCtrl.push(MyToursCreatePage);
  }

  editTour(tour) {
    if (this.editing || this.platform.is('android')) {
      this.navCtrl.push(MyToursCreatePage, {
        tour: tour
      })
    }
  }

  pressTour(tour) {
    if (this.platform.is('android')) {
      let actionSheet = this.actionsheetCtrl.create({
        title: tour.title,
        cssClass: 'action-sheets-basic-page',
        buttons: [
          {
            text: 'Delete',
            cssClass: 'danger',
            role: 'destructive',
            icon: !this.platform.is('ios') ? 'trash' : null,
            handler: () => {
              this.tours.splice(this.tours.indexOf(tour), 1);
            }
          }
        ]
      });
      actionSheet.present();
    }
  }

  deleteTour(tour) {
    let actionSheet = this.actionsheetCtrl.create({
      title: `Are you sure you want to delete ${tour.title}?`,
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Comfirm',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            this.tours.splice(this.tours.indexOf(tour), 1);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null
        }
      ]
    });
    actionSheet.present();
  }
}
