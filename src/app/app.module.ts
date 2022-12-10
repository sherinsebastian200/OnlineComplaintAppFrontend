import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    NavbarAdminComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
