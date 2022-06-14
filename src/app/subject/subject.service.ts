import { Injectable } from '@angular/core';
import { ISubjectSendable } from '../Interface/SendableDataInterface/ISubjectSendable';
import { BackendService } from '../backend.service';

@Injectable()
export class SubjectService {

  constructor(private sendToBackend: BackendService) { }

  addSubject(subject: ISubjectSendable) {
    this.sendToBackend.Post(subject, '/subject').subscribe((data: any) => {
      console.log(data);
    });
  }
}
