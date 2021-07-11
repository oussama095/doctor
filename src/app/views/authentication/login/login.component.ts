import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  failedMessage: string | null = null;

  constructor(private fb: FormBuilder, private authenticationService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.email, Validators.required]),
      password: this.fb.control('', Validators.required)
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authenticationService.login(this.loginForm.value).then(() => {
        this.failedMessage = null;
        this.router.navigateByUrl('/home').then();
      }, error => {
        console.log(error);
        this.failedMessage = 'Login Fail! check your credentials';
      });

    }
  }
}
