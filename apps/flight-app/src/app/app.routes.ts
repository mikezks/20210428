import { ExtraOptions, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { loadModule } from './externals-utils';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bonus-miles',
    loadChildren: () => loadModule('./assets/flight-workspace-bonus-miles.umd.min.js')
                          .then(g => g['flight-workspace']['bonus-miles'].BonusMilesModule)
  },
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

export const APP_EXTRA_OPTIONS: ExtraOptions = { relativeLinkResolution: 'legacy' };
