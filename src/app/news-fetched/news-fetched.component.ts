import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-news-fetched",
  templateUrl: "./news-fetched.component.html",
  styleUrls: ["./news-fetched.component.scss"]
})
export class NewsFetchedComponent implements OnInit {
  @Input() articles: [];
  placeholderImg: string =
    "https://images.ctfassets.net/mk9nps9h607g/5DnT6NoTCguwc4egkiGcIg/b3f22bef3f59efa5b8711c8268cde80a/news-placeholder.jpg";

  constructor(public route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.articles = [];
      this.ngOnInit();
    });
  }

  ngOnInit() {}
}
