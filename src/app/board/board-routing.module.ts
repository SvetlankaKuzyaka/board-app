import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BoardPageComponent } from "./pages/board-page/board-page.component";
import { EditPageComponent } from "./pages/edit-page/edit-page.component";
import { CreatePageComponent } from "./pages/create-page/create-page.component";

const routes: Routes = [
  { path: "", component: BoardPageComponent },
  { path: "edit/:id", component: EditPageComponent },
  { path: "create/:id", component: CreatePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule {}
