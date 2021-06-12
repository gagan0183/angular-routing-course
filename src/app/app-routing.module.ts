import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, UrlSerializer, NoPreloading} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
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
    path: "helpdesk-chat",
    component: ChatComponent,
    outlet: "chat"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy,
      scrollPositionRestoration: 'enabled',
      paramsInheritanceStrategy: 'always',
      relativeLinkResolution: 'corrected',
      malformedUriErrorHandler: (error: URIError, urlSerializer: UrlSerializer, url: string) => urlSerializer.parse("/page-not-found")
    })
  ],
  exports: [RouterModule],
  providers: [
    CanLoadGuard,
    CustomPreloadingStrategy
  ]
})
export class AppRoutingModule {
}
