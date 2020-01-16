import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./pages";

const routes: Routes = [
  {
    path: "home",
    component: HomepageComponent
  },
  {
    path: "contatore",
    loadChildren: () =>
      import("./contatore/contatore.module").then(m => m.ContatoreModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
