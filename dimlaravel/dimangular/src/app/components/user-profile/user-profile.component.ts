import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {RoleService} from "../../services/role.service";
export class User {
  name?: string;
  email?: string;
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User = {};
  role = this.roleService.getRole();
  constructor(private authService: AuthService, private roleService: RoleService) { }

  ngOnInit(): void {
    this.authService.userProfile().subscribe({
      next: (result) => {
        this.user = result;
      },
      error: (error) => console.log(error)
    });
  }

}
