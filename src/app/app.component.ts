import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'property-selling';
  isActive = false;
  router

  constructor(private _router: Router, private route: ActivatedRoute) {
    this.router = _router
  }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.router.navigate([decodeURI(this.router.location.path())])
    } else {
      this.router.navigate(['users/login'])
    }
  }
}
