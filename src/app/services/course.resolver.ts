import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Course } from "../courses/model/course";
import { CoursesService } from "../courses/services/courses.service";

@Injectable()
export class CourseResolver implements Resolve<Course> {

    constructor(private coursesService: CoursesService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
        return this.coursesService.loadCourseByUrl(route.paramMap.get('courseUrl'));
    }
} 