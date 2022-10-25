import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {IndexComponent} from "./components/product/index/index.component";
import {ProductDetailsComponent} from "./components/product/product-details/product-details.component";
import {CreateComponent} from "./components/product/create/create.component";
import {AdminGuard} from "./services/admin.guard";
import {UserGuard} from "./services/user.guard";
import {HomeComponent} from "./components/home/home.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {DeleteComponent} from "./components/product/delete/delete.component";

const routes: Routes = [
  { path: '', component: AppComponent },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },

  { path: 'profile', component: UserProfileComponent, canActivate:[UserGuard] },

  { path: 'products', component: IndexComponent, canActivate:[UserGuard]},

  { path: 'products/:id', component: ProductDetailsComponent, canActivate:[AdminGuard] },

  { path: 'create-product', component: CreateComponent, canActivate:[UserGuard] } ,

  { path: 'delete-product', component: DeleteComponent, canActivate:[AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
