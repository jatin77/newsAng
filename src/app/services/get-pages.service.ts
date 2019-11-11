import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class GetPagesService {
  apiUrl: string = "https://newsapi.org/v2/";

  apiKey: string = "294aebacf18640b7a415791cae38bfa1";

  country: string = "us";

  category: string;

  constructor(private httpClient: HttpClient) {}

  //Load news by category
  fetchPages(category, country) {
    this.category = category;
    this.country = country;

    if (this.category !== "all") {
      return this.httpClient.get(
        `${this.apiUrl}top-headlines?country=${this.country}&category=${this.category}&apiKey=${this.apiKey}`
      );
    } else {
      return this.httpClient.get(
        `${this.apiUrl}top-headlines?country=${this.country}&apiKey=${this.apiKey}`
      );
    }
  }
}
