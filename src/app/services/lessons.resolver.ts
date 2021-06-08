import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { LessonSummary } from "../courses/model/lesson-summary";
import { CoursesService } from "../courses/services/courses.service";

@Injectable()
export class LessonsResolver implements Resolve<LessonSummary[]> {
    constructor(private coursesService: CoursesService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonSummary[]> {
        return this.coursesService.loadAllCourseLessonsSummary(route.paramMap.get('courseUrl'));
    }
} 