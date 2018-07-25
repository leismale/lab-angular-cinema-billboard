import { Routes } from "@angular/router";
import { MyHomeComponentComponent } from "./my-home-component/my-home-component.component";
import { MyMovieComponentComponent } from "./my-movie-component/my-movie-component.component";

export const routes: Routes = [
  { path: '', component: MyHomeComponentComponent },
  { path: 'movie/:id', component: MyMovieComponentComponent }
];
