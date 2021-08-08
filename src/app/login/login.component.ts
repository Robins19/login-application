import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/core/service/api-service/login-api-service/user-login-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private userLoginService:UserLoginService,private router: Router) { }

  ngOnInit() {
    this.initLoginForm();
  }

  private initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })

  }


  public userLogin():void{
    this.userLoginService.usersLogin(this.loginForm.value).subscribe((response) => {
      if (response) {
        this.router.navigate(['/dashboard']);
        console.log(response);
      }
    })
  }

  public clickOnRegister():void{
    this.router.navigate(['/registration']);
  }

}
