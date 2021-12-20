import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from "./pages/pages.module";
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    PagesModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
