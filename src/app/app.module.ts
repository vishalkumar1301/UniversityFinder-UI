import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { AdminActionComponent } from './admin/admin-action/admin-action.component';
import { AddSchoolComponent } from './school/add-school/add-school.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BackendService } from './backend.service';
import { SchoolService } from './school/school-service.service';
import { HttpClientModule } from '@angular/common/http';
import { SchoolComponent } from './school/school.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { ViewCourseComponent } from './course/view-course/view-course.component';
import { AddSubjectComponent } from './subject/add-subject/add-subject.component';
import { ViewSubjectComponent } from './subject/view-subject/view-subject.component';
import { CourseService } from './course/course.service';
import { SubjectService } from './subject/subject.service';
import { SchoolListComponent } from './school/school-list/school-list.component';
import { SchoolDetailsComponent } from './school/school-details/school-details.component';
import { SchoolListItemComponent } from './school/school-list-item/school-list-item.component';
import { MapperService } from './mapper.service';
import { AlertComponent } from './uimessage/alert/alert.component';
import { ModalComponent } from './uimessage/modal/modal.component';

const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'school', component: SchoolComponent },
  { path: 'school/add-school', component: AddSchoolComponent },
  { path: 'course', component: CourseComponent },
  { path: 'course/add-course', component: AddCourseComponent },
  { path: 'course/view-course', component: ViewCourseComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'subject/add-subject', component: AddSubjectComponent },
  { path: 'school/school-details/:id', component: SchoolDetailsComponent },
  { path: 'school/school-list', component: SchoolListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    AdminActionComponent,
    SchoolComponent,
    AddSchoolComponent,
    CourseComponent,
    SubjectComponent,
    AddCourseComponent,
    ViewCourseComponent,
    AddSubjectComponent,
    ViewSubjectComponent,
    SchoolListComponent,
    SchoolDetailsComponent,
    SchoolListItemComponent,
    AlertComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [BackendService, SchoolService, CourseService, SubjectService, MapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
