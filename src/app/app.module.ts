import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RoutingModule } from './routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RealTimeDataComponent } from './pages/real-time-data/real-time-data.component';

import { RtDataService } from './services/rt-data.service';


@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    MyProfileComponent,
    SettingsComponent,
    RealTimeDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-dev-test-app-id' }),
    RoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [RtDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'on the server' : 'in the browser';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
