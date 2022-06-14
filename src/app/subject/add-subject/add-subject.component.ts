import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ISubjectSendable } from '../../Interface/SendableDataInterface/ISubjectSendable';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  constructor(private fb: FormBuilder, private subjectService: SubjectService) { }

  subjectForm = this.createSubjectForm(this.fb);

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.subjectForm.valid){
      let subjectData = this.mapInputDataToSubjectInterface(this.subjectForm);
      this.subjectService.addSubject(subjectData);
    }
  }

  
  private createSubjectForm (fb: FormBuilder) {
    return fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      tags: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  private mapInputDataToSubjectInterface(profileForm: any): ISubjectSendable {
  const inputData: ISubjectSendable = {
    Name: <string>profileForm.value.name,
    Code: <string>profileForm.value.code,
    Tags: <string>profileForm.value.tags,
    Description: <string>profileForm.value.description
  };
  return inputData;
}

}
