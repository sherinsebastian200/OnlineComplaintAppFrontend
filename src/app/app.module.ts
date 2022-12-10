import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const myRoutes:Routes = [
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"userReg",
    component:UserRegisterComponent
  },
  {
    path:"dashboard",
    component:DashBoardComponent
  },
  {
    path:"userProfile",
    component:UserProfileComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    NavbarAdminComponent,
    DashBoardComponent,
    NavBarComponent,
    UserLoginComponent,
    UserProfileComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
