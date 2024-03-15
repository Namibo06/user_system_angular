import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index/index.component';
import { IndexModule } from './pages/index/index.module';
import { HeaderComponent } from './shared/header/header/header.component';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { TitleComponent } from './components/title/title/title.component';
import { HeaderModule } from './shared/header/header.module';
import { LinkComponent } from './components/link/link/link.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateUserComponent } from './pages/create-user/create-user/create-user.component';
import { ViewUserComponent } from './pages/view-user/view-user/view-user.component';
import { FooterModule } from './shared/footer/footer.module';
import { CreateUserModule } from './pages/create-user/create-user.module';
import { ViewUserModule } from './pages/view-user/view-user.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    HeaderModule,
    FontAwesomeModule,
    HeaderModule,
    FooterModule,
    CreateUserModule,
    ViewUserModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
