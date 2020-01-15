import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent, ContatorePageComponent } from "./pages";

const routes: Routes = [
  {
    path: "home",
    component: HomepageComponent
  },
  {
    path: "contatore",
    component: ContatorePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
