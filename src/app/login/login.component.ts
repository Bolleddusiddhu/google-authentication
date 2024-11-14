import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare let google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  private router = inject(Router);

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '95100946310-dtgek0fajq3cmjtpoctk9r2kak3sp77q.apps.googleusercontent.com',
      callback: (res: any) => this.handleLogin(res)
    })

    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled-blue',
      size: 'large',
      shape: 'circle',
      width: 350
    })
  }

  private decodeJwt(token: string) {
    return JSON.parse(atob(token.split(".")[1]));
  }

  handleLogin(res: any) {
    // Decode the token
    const payload = this.decodeJwt(res.credential);

    // store in session
    sessionStorage.setItem('loggedInUser', JSON.stringify(payload));

    // Navigate to home page
    this.router.navigate(['/home'], {state: {
      userDetails: JSON.stringify(payload)
    }});
  }
}
