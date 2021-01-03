import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardListPersonsComponent} from "./components/card-list-persons/card-list-persons.component"

@NgModule({
  declarations: [
    AppComponent,
    CardListPersonsComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
