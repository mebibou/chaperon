import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { DiscoverPage } from '../pages/discover/discover';
import { DiscoverTourPage } from '../pages/discover/discover_tour';
import { MyToursPage } from '../pages/my_tours/my_tours';
import { MyToursCreatePage } from '../pages/my_tours/my_tours_create';
import { MyToursService } from '../pages/my_tours/my_tours.service';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    DiscoverPage,
    DiscoverTourPage,
    MyToursPage,
    MyToursCreatePage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'arrow-round-back'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DiscoverPage,
    DiscoverTourPage,
    MyToursPage,
    MyToursCreatePage,
    SettingsPage,
    TabsPage
  ],
  providers: [MyToursService]
})
export class AppModule {}
