import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from "./shared/templates/layout.component";
import { HeaderComponent } from './shared/components/header/header.component';
import { LinkComponent } from './shared/components/link/link.component';
import { HomeComponent } from './pages/home/home.component';
import { FavsComponent } from './pages/favs/favs.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    LinkComponent,
    HomeComponent,
    FavsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
