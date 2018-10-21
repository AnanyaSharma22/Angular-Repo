import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../user/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  loginForm: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder,
      private router: Router,
      private userService: UserService,) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email ]],
      password: ['', [Validators.required]]
    });
    if (localStorage.getItem('user')){
      this.router.navigate(['property']);
    }
  }
  get f() { return this.loginForm.controls; }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.userService.userLogin(this.f.email.value, this.f.password.value)        
        .subscribe(
            data => {
                localStorage.setItem('user', data.toString());
                this.router.navigate(['property']);
            },
            error => {
                // this.flashService.show('invalid email or password', { type: 'error', timeout: 4000 });
                this.loading = false;
            }
        )
}

}
