import { Component, OnInit } from '@angular/core';
import {AuthStateService} from "../../services/auth-state.service";
import {Router} from "@angular/router";
import {TokenService} from "../../services/token.service";
import {RoleService} from "../../services/role.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {







  isSignedIn!: boolean;
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    public role: RoleService
  ) { }

  ngOnInit(): void {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
  }

  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.role.removeRole();
    this.router.navigate(['login']);
  }
}
