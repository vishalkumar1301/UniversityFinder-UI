import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ICourseSendable } from '../../Interface/SendableDataInterface/ICourseSendable';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private fb: FormBuilder, private courseService: CourseService) { }

  courseForm = this.createCourseForm(this.fb);

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.courseForm.valid){
      let courseData = this.mapInputDataToCourseInterface(this.courseForm);
      this.courseService.addCourse(courseData);
    }
  }

  
  private createCourseForm (fb: FormBuilder) {
    return fb.group({
      name: ['', Validators.required],
      courseLevel: ['', Validators.required],
      tags: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  private mapInputDataToCourseInterface(profileForm: any): ICourseSendable { 
    const inputData: ICourseSendable = {
      Name: <string>profileForm.value.name,
      CourseLevel: <string>profileForm.value.courseLevel,
      Tags: <string>profileForm.value.tags,
      Price: <number>profileForm.value.price
    }
    return inputData;
  }

}
