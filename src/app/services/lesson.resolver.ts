import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { LessonDetail } from "../courses/model/lesson-detail";
import { CoursesService } from "../courses/services/courses.service";

@Injectable()
export class LessonResolver implements Resolve<LessonDetail> {
    constructor(private coursesService: CoursesService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): LessonDetail | Observable<LessonDetail> | Promise<LessonDetail> {
        console.log(route.paramMap);
        return this.coursesService.loadLessonDetail(route.paramMap.get('courseUrl'), route.paramMap.get('lessonSeqNo'));
    }
}