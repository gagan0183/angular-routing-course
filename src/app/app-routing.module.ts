import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, UrlSerializer, NoPreloading} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanLoadGuard } from './services/can-load-guard';
import { CustomPreloadingStrategy } from './services/custom-preloading.strategy';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/courses",
    pathMatch: "full"
  },
  {
    path: "courses",
    loadChildren: () => import("./courses/courses.module").then(coursesModule => coursesModule.CoursesModule),
    canLoad: [CanLoadGuard],
    data: {
      preload: true
    }
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy
    })
  ],
  exports: [RouterModule],
  providers: [
    CanLoadGuard
  ]
})
export class AppRoutingModule {
}
