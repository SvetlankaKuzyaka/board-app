import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoadingGuard } from './auth/services/loading.guard';
import { HomePageComponent } from './core/pages/home-page/home-page.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', component: HomePageComponent },
  { path: "login", loadChildren: "./auth/auth.module#AuthModule" },
  { path: "board", loadChildren: "./board/board.module#BoardModule", canLoad: [LoadingGuard] },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
