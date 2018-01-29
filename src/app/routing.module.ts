import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RealTimeDataComponent } from './pages/real-time-data/real-time-data.component';

const routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: MyProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'real-time-data', component: RealTimeDataComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
