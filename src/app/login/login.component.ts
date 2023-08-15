import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'caiomm'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidCredentials = false

  constructor (private router: Router) { }
  
  ngOnInit() { }

  handleLogin() {
    if (this.username === 'caio' && this.password === 'dummy') {
        this.router.navigate(['welcome', this.username])
        this.invalidCredentials = false
    } else {
      this.invalidCredentials = true
    }
  }
}