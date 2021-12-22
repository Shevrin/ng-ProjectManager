import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { PagesModule } from "./pages/pages.module";
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { ProjectsService } from './pages/services/projects.service';

registerLocaleData(localeRu, 'ru');
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
  providers: [ProjectsService, { provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
