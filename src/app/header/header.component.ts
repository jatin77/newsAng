import { Component, OnInit, OnChanges } from "@angular/core";
import { ViewEncapsulation } from "@angular/compiler/src/core";
import { GetPagesService } from "../services/get-pages.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  today: number;
  e: string = "us";
  show: boolean;
  constructor(private serv: GetPagesService) {}

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
