import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { GetPagesService } from "../services/get-pages.service";

@Component({
  selector: "app-select-country",
  templateUrl: "./select-country.component.html",
  styleUrls: ["./select-country.component.scss"]
})
export class SelectCountryComponent implements OnInit {
  mySelect = "select";
  @Output() changeCountry: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private serv: GetPagesService) {}

  ngOnInit() {}

  showSelectValue() {
    if (this.mySelect !== "select") {
      console.log(this.mySelect);
      this.router.navigate([
        "/the-daily-times",
        this.mySelect,
        this.serv.category
      ]);
      this.changeCountry.emit(this.mySelect);
    }
  }
}
