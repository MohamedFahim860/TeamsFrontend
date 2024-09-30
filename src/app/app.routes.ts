import { Routes } from '@angular/router';
import { AuthGuard } from './shared/services/common/auth.guard'; // Import your function-based auth guard

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./core/login-sign-up/login-sign-up.module').then(m => m.LoginSignUpModule)
    },
    {
        path: 'chat',
        loadChildren: () => import('./core/chat/chat.module').then(m => m.ChatModule),
        canActivate: [AuthGuard]  // Protect the 'chat' route with the auth guard
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'  // Redirect to login as the default route
    }
];
