import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CourseComponent } from "../courses/course/course.component";

export class ConfirmExitGuard implements CanDeactivate<CourseComponent> {
    canDeactivate(component: CourseComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
        return component.confirmExit();
    }
}