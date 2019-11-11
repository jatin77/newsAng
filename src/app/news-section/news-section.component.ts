import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GetPagesService } from "../services/get-pages.service";

@Component({
  selector: "app-news-section",
  templateUrl: "./news-section.component.html",
  styleUrls: ["./news-section.component.scss"]
})
export class NewsSectionComponent implements OnInit {
  selectedCategory: string;

  selectedCountry: string;

  params: any;

  articles: [] = [];

  constructor(public route: ActivatedRoute, public getPages: GetPagesService) {
    this.params = this.route.params.subscribe(params => {
      this.selectedCategory = params["about"];
      if (params["country"] !== "") {
        this.selectedCountry = params["country"];
      } else {
        this.selectedCountry = "us";
      }
      this.displayPage();
    });
  }

  ngOnInit() {}

  displayPage() {
    this.getPages
      .fetchPages(this.selectedCategory, this.selectedCountry)
      .subscribe(data => (this.articles = data.articles));
  }
}
