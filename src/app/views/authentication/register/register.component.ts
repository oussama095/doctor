import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  failedMessage: string | null = null;


  constructor(private fb: FormBuilder, private authenticationService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: this.fb.control('', [Validators.email, Validators.required]),
      password: this.fb.control('', Validators.required),
      rePassword: this.fb.control('', Validators.required)
    });
  }

  register(): void {
    if (this.registerForm.valid || this.registerForm.value.password || this.registerForm.value.rePassword) {
      this.registerForm.get('rePassword')?.disable();
      this.authenticationService.register(this.registerForm.value).then(() => {
        this.router.navigateByUrl('/home/patient').then();
      }, error => {
        console.log(error);
        this.failedMessage = 'Register Fail! EMAIL EXIST!';
      });
    }
  }
}
