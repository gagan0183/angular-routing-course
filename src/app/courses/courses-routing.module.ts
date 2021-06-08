import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseResolver } from '../services/course.resolver';
import { LessonsResolver } from '../services/lessons.resolver';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LessonDetailComponent } from './lesson/lesson-detail.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':courseUrl',
    component: CourseComponent,
    children: [
      {
        path: '',
        component: LessonsListComponent,
        resolve: {
          lessons: LessonsResolver
        }
      },
      {
        path: 'lessons/:lessonSeqNo',
        component: LessonDetailComponent,
      }
    ],
    resolve: {
      course: CourseResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    LessonsResolver,
    CourseResolver
  ]
})
export class CoursesRoutingModule {
}
