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
import { ViewSchoolComponent } from './school/view-school/view-school.component';
import { SendDataService } from './send-data.service';
import { HttpClientModule } from '@angular/common/http';
import { SchoolComponent } from './school/school.component';

const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'school', component: SchoolComponent },
  { path: 'school/add-school', component: AddSchoolComponent },
  { path: 'school/view-school', component: ViewSchoolComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    AdminActionComponent,
    SchoolComponent,
    AddSchoolComponent,
    ViewSchoolComponent
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
  providers: [SendDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
