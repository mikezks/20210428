import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BonusMilesComponent } from './bonus-miles/bonus-miles.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BonusMilesComponent }
    ])
  ],
  declarations: [BonusMilesComponent],
})
export class BonusMilesModule {}
