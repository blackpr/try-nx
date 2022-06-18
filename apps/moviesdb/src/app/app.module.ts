import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule, coreDataRoutes } from '@tim/core-data';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CoreDataModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
