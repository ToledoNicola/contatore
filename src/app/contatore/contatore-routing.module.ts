import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContatorePageComponent } from "./pages";

const routes: Routes = [{ path: "", component: ContatorePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoreRoutingModule {}
