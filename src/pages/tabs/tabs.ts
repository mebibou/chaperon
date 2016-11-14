import { Component } from '@angular/core';

import { DiscoverPage } from '../discover/discover';
import { MyToursPage } from '../my_tours/my_tours';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = DiscoverPage;
  tab2Root: any = MyToursPage;
  tab3Root: any = SettingsPage;

  constructor() {

  }
}
