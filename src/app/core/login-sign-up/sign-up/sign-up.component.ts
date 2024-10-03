import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  signupForm: FormGroup;
  isEmailTaken: boolean = false;
  isUsernameTaken: boolean = false;

  constructor(private fb: FormBuilder, private userService : UserService){

    this.signupForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      username: ['',[Validators.required, Validators.minLength(3)]],
      firstName: ['',[Validators.required, Validators.minLength(2)]],
      lastName: ['',[Validators.required, Validators.minLength(3)]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      confirmPassword: ['',[Validators.required]]
    }, {validator: this.passwordMatchValidator});
  }

  passwordMatchValidator(group: FormGroup){
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : {notMatching: true};
  }

  onSubmit(){
    if(this.signupForm.invalid){
      return;
    }

    const{email, username} = this.signupForm.value;

    this.userService.checkEmailExists(email).subscribe(isTaken =>{
      this.isEmailTaken = isTaken;
      if(isTaken){
        this.signupForm.get('email')?.setErrors({emailTaken: true});
      }else{
        this.submitSignup();
      }
    });

    this.userService.checkUsernameExists(username).subscribe(isTaken => {
      this.isUsernameTaken = isTaken;
      if(isTaken){
        this.signupForm.get('username')?.setErrors({usernameTaken: true});
      }else{
        this.submitSignup();
      }
    })
  }

  submitSignup(){
    const user: User ={
      userId : 0,
      userName : this.signupForm.value.username,
      email : this.signupForm.value.email,
      passwordHash: this.signupForm.value.password,
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      profilePictureUrl: '',
      createdAt: new Date(),

    }
    this.userService.addUser(user).subscribe(
      (response)=>{
        console.log('User added successfully', response);
      },
      (error)=>{
        console.error('Error adding user', error);
      }
    )
    console.log("Form submitted",this.signupForm.value)
  }

}
