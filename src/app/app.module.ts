import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ConfigService } from './config.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YearOfferComponent } from './year-offer/year-offer.component';

@NgModule({
  declarations: [AppComponent, MainScreenComponent, YearOfferComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}
