import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { MovieModule } from './movie/movie.module';
import { CustomerModule } from './customer/customer.module';
import { TheatreModule } from './theatre/theatre.module';
import { CustomInterceptorService } from './core/services/custom-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    MovieModule,
    CustomerModule,
    TheatreModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
