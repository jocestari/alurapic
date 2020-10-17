import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../shared/components/vmessage/vmessage.mpdule';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';


@NgModule({
    declarations:[
        SignInComponent,
        SignUpComponent
    ],
    imports: [ 
        ReactiveFormsModule,
        CommonModule,
        VMessageModule,
        RouterModule,
        FormsModule
     ]
})
export class HomeModule{ }