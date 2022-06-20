import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@tim/core-data';
import { CoreStateModule } from '@tim/core-state';
import { MaterialModule } from '@tim/material';
import { UiToolbarModule } from '@tim/ui-toolbar';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    LoginComponent,
    LayoutComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    RoutingModule,
    UiToolbarModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
