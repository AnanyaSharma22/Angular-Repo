import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app.routing';
import { PropertyComponent } from './property/property.component';
import { UserService } from './../app/user/services/user.service';
import { HeaderComponent } from './header/header.component';
// import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PropertyComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
