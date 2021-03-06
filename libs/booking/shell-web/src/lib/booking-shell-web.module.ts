import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'passenger-info',
    loadChildren: () =>
      import('@composite-shell-variation/booking/feature-passenger-info').then(
        m => m.BookingFeaturePassengerInfoModule
      )
  },
  {
    path: 'seat-listing',
    loadChildren: () =>
      import('@composite-shell-variation/booking/feature-seat-listing').then(
        m => m.BookingFeatureSeatListingModule
      )
  },
  { path: '', redirectTo: 'passenger-info', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class BookingShellWebModule {}
