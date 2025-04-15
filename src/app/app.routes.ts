import { Routes } from '@angular/router';
import { LoginPageComponent } from './front/login-page/login-page.component';
import { SignupPageComponent } from './front/signup-page/signup-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { authGuard } from './shared/services/auth/auth.guard';
import { MyBooksComponent } from './navigation/my-books/my-books.component';

export const routes: Routes = [
    { path: '', redirectTo: '/signupPage', pathMatch: 'full' },
    { path: 'signupPage', component: SignupPageComponent, },
    { path: 'loginPage', component: LoginPageComponent, },

    {
        path: '',
        canActivate: [authGuard],

        loadComponent: () => import('./navigation/navigation.component').then(m => m.NavigationComponent),
        children: [
            {
                path: 'dashboard',
                canActivate: [authGuard],

                loadComponent: () => import('./navigation/dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
            {
                path: 'myBooks',
                canActivate: [authGuard],
                loadComponent: () => import('./navigation/my-books/my-books.component').then(m => m.MyBooksComponent)
            },
            {
                path: 'readPdf/:id',
                canActivate: [authGuard],
                loadComponent: () => import('./navigation/read/read.component').then(m => m.ReadComponent)
            },
        ]
    },

];
