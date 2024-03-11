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

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    HeaderModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
