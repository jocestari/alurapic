import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LoginGuard } from '../core/auth/login.guard';
import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';



const routes: Routes = [

    {
        path: '', 
        component: HomeComponent,
        canActivate: [LoginGuard],
        children: [
             {
                path: '', 
                component: SignInComponent,
                data: {
                    title: 'SignIn'
                }
             },
             {
                path: 'signup', 
                component: SignUpComponent,
                data: {
                    title: 'SignUp'
                }
             },
        ]
        
    }

]

@NgModule({
    imports: [ 
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {}