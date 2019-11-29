import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingDetailsComponent } from './bookings/booking-details.component';

let APP_ROUTES: Routes = [
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
        path: 'flight-booking',
        loadChildren: './flight-booking/flight-booking.module#FlightBookingModule',
        // canLoad: [AuthLoadGuard]
    },
    {
        path: 'bookings',
        component: BookingDetailsComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

export let AppRouterModule = RouterModule.forRoot(APP_ROUTES /*,
 { preloadingStrategy: CustomPreloadingStrategy, useHash: false } */);

// export let AppRouterModule = RouterModule.forRoot(APP_ROUTES, { useHash: true, enableTracing: true});
