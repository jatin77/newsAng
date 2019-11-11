import { Component, OnInit } from "@angular/core";
import { ViewEncapsulation } from "@angular/compiler/src/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  today: number;
  e: string = "us";
  constructor() {}

  ngOnInit() {
    this.todayIs();
  }

  todayIs() {
    setInterval(() => {
      this.today = Date.now();
    }, 1000);
  }
  onChange(e) {
    this.e = e;
  }
}
