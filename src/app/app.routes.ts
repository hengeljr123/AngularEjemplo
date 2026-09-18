import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Item } from './pages/item/item';
import { authGuard } from './common/guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        title: 'App | Home',
        component: Home,
    },
    {
        path: 'items',
        canActivate:[authGuard],
        title: 'App | Items',
        component: Item,
    },
    {
        path: "**",
        title: "App | 404",
        component: PageNotFound
    }
];
    