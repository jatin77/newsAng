import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./header/search/search.component";
import { NavComponent } from "./nav/nav.component";
import { NewsSectionComponent } from "./news-section/news-section.component";
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from "./footer/footer.component";
import { NewsFetchedComponent } from "./news-fetched/news-fetched.component";
import { SelectCountryComponent } from "./select-country/select-country.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    NavComponent,
    NewsSectionComponent,
    FooterComponent,
    NewsFetchedComponent,
    SelectCountryComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
