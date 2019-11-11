import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewsSectionComponent } from "./news-section/news-section.component";

const routes: Routes = [
  { path: "", component: NewsSectionComponent },
  { path: "the-daily-times/:country/:about", component: NewsSectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
