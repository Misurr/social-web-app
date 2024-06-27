import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpForm: FormGroup;
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {
    this.signUpForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repeatPassword: new FormControl('', Validators.required),
    });
  }

  // ngOnInit(): void {
  //   let savedUsers = localStorage.getItem('users');
  //   this.users = savedUsers ? JSON.parse(savedUsers) : [];
  // }

  // addUser() {
  //   if (this.signUpForm.valid) {
  //     const newUser: User = {
  //       name: this.signUpForm.get('name')?.value,
  //       lastName: this.signUpForm.get('lastName')?.value,
  //       email: this.signUpForm.get('email')?.value,
  //       username: this.signUpForm.get('username')?.value,
  //       password: this.signUpForm.get('password')?.value,
  //       repeatPassword: this.signUpForm.get('repeatPassword')?.value,
  //     };
  //     this.users.push(newUser);
  //     console.log('User added:', newUser);
  //     console.log('All users:', this.users);
  //     localStorage.setItem('users', JSON.stringify(this.users));
  //   } else {
  //     console.log('Form is invalid. Cannot add user.');
  //   }
  // }

  addUser() {
    this.userService.addUser(this.signUpForm.value);
    this.router.navigateByUrl('/homepage');
  }
}
