import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserauthComponent } from './userauth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AfterLoggedAuthGuard } from '../guards/after-login.guard.service';

const route: Routes = [
    { path: 'userauth', component: UserauthComponent, canActivate: [AfterLoggedAuthGuard], canActivateChild: [AfterLoggedAuthGuard], children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
      ]
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(route)
    ],
    exports:[
        RouterModule
    ]
})
export class UserAuthRouting {

}