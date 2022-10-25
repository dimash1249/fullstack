import {Component, OnInit} from '@angular/core';
import {AuthStateService} from "./services/auth-state.service";
import {Router} from "@angular/router";
import {TokenService} from "./services/token.service";
import {RoleService} from "./services/role.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dimangular';










  isSignedIn!: boolean;
  isAdmin!: boolean;
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    public role: RoleService
  ) {}


  isDelete!: boolean;
  ngOnInit() {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
    console.log(this.isSignedIn);
    this.isAdmin = this.role.isAdminRole();
    console.log(this.isAdmin);
    this.isDelete = this.isSignedIn && this.isAdmin;
    console.log(this.isDelete);
  }



  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.role.removeRole();
    this.router.navigate(['login']);
  }
}
