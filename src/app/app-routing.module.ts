import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoadingGuard } from './auth/services/loading.guard';

const routes: Routes = [
  { path: "",   redirectTo: 'login', pathMatch: 'full' },
  { path: "board", loadChildren: "./board/board.module#BoardModule", canLoad: [LoadingGuard] },
  { path: "login", loadChildren: "./auth/auth.module#AuthModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
