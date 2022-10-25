import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  handleData(role: any) {
    localStorage.setItem('role', role);
  }


  getRole() {
    return localStorage.getItem('role');
  }


  removeRole() {
    localStorage.removeItem('role');
  }


  isAdminRole() {
    return this.getRole() == 'Admin';
  }


  isUserRole() {
    return this.getRole() == 'User';
  }

  isAdminUserRole() {
    return this.getRole() == 'Admin' || this.getRole() == 'User';
  }
}
