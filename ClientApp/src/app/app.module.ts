import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouteModule } from './app-route.module';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    ...AppRouteModule.Components,
    AppComponent,
  ],
  imports: [
    BrowserModule,   
    BrowserAnimationsModule,
    SharedModule,
    AppRouteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//https://auth0.com/blog/creating-beautiful-apps-with-angular-material/
