import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutComponent } from '@shared/templates/layout.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { LinkComponent } from '@shared/components/link/link.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

import { HomeComponent } from '@pages/home/home.component';
import { FavsComponent } from '@pages/favs/favs.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { MountComponent } from '@pages/mount/mount.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    LinkComponent,
    HomeComponent,
    FavsComponent,
    NotFoundComponent,
    MountComponent,
    ButtonComponent,
    IconButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
