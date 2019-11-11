import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { GetPagesService } from "../services/get-pages.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  @Input() recievedCount: string;

  constructor(private serv: GetPagesService) {}

  ngOnInit() {
    console.log(this.recievedCount);
  }
}
