import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'chat',
    loadChildren: () =>import('../chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: '',
    redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginSignUpRoutingModule { }
