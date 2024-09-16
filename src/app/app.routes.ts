import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./core/login-sign-up/login-sign-up.module').then(m => m.LoginSignUpModule)
    },
    {
        path: 'chat',
        loadChildren: () => import('./core/chat/chat.module').then(m => m.ChatModule)
    }
];
