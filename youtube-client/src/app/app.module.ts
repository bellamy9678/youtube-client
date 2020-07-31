import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { CardComponent } from './components/card/card.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterPanelComponent,
    CardComponent,
    SearchResultsComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
