import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/signup/signup.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [
    TopNavComponent,
    ComponentsComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [CommonModule, FormsModule, BsDatepickerModule.forRoot(), BrowserAnimationsModule],
  exports: [TopNavComponent],
})
export class CoreModule {}
