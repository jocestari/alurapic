import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatFormDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { lowerCaseValidador } from '../../shared/validators/lower-case-validator';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { userNamePassword } from './username-password.validator';

@Component({
    templateUrl: './signup.component.html',
    providers: [ UserNotTakenValidatorService ]
})
export class SignUpComponent implements OnInit { 

    signUpForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signUPService: SignUpService,
        private router: Router,
        private platFormDetectorService: PlatFormDetectorService 
    ){}

    ngOnInit(): void {
        this.signUpForm = this.formBuilder.group({
            email: ['', 
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['', 
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['', 
                [
                    Validators.required,
                    lowerCaseValidador,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            password: ['', 
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(18)
                ]
            ]
        }, {
            validator: userNamePassword
        })
        this.platFormDetectorService.isPlatformBrowser() &&  
                this.emailInput.nativeElement.focus();
    }

   signup() {

    if(this.signUpForm.valid && !this.signUpForm.pending){
       
        const newUser = this.signUpForm.getRawValue() as NewUser;
       this.signUPService
        .signup(newUser)
        .subscribe(
            () => this.router.navigate([''])),
            err => console.log(err)
    }
   }
}