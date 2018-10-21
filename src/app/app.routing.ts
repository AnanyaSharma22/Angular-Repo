import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './../app/user/user.component';
import { AppComponent } from '../app/app.component'
import { PropertyComponent } from './property/property.component';

const appRoutes: Routes = [
    { path: 'users/login', component:UserComponent },
    { path: 'property', component: PropertyComponent }
    // { path: 'users', loadChildren: 'app/user/user.module#UserModule' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' });
