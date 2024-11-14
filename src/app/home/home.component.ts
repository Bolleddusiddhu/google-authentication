import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private router = inject(Router);

  userCredentials: any = JSON.parse(sessionStorage.getItem('loggedInUser'));

  constructor() { }

  ngOnInit(): void {    
    console.log("calling");
    
    // const navigation = this.router.getCurrentNavigation();
    // if (navigation && navigation.extras && navigation.extras.state) {
    //   this.userCredentials = navigation.extras.state['userDetails'];
    // } else {
    //   // Fallback to session storage if navigation state is not available
    //   this.userCredentials = JSON.parse(sessionStorage.getItem('loggedInUser'));
    // }
    
  }

  signOut() {
    sessionStorage.removeItem('loggedInUser');
    this.router.navigate(['/']);
  }

}
