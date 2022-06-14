import { Injectable } from '@angular/core';
import { ICourseSendable } from '../Interface/SendableDataInterface/ICourseSendable';
import { BackendService } from '../backend.service';

@Injectable()
export class CourseService {

  constructor(private sendToBackend: BackendService) { }

  addCourse(course: ICourseSendable) {
    this.sendToBackend.Post(course, '/course').subscribe(data => {
      console.log(data);
    });
  }
}
