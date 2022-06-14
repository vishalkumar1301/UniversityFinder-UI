import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ISchoolSendable } from '../../Interface/SendableDataInterface/ISchoolSendable';
import { SchoolService } from '../school-service.service';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {

  schoolForm = this.schoolService.createSchoolForm (this.fb);

  constructor(private fb: FormBuilder, private schoolService: SchoolService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.schoolForm.valid){
      let schoolData = this.mapInputDataToSchoolInterface(this.schoolForm);
      this.schoolService.addSchool(schoolData);
      // TODO: reset form after receiving response from server
      this.schoolForm.reset();
    }
  }

  private mapInputDataToSchoolInterface(profileForm: any): ISchoolSendable { 
    const inputData: ISchoolSendable = {
      Name: <string>profileForm.value.SchoolName,
      Moto: <string>profileForm.value.SchoolMoto,
      Type: <string>profileForm.value.SchoolType,
      TypePublicPrivate: <string>profileForm.value.SchoolTypePublicPrivate,
      Email: <string>profileForm.value.SchoolEmail,
      PhoneNumber: <string>profileForm.value.SchoolPhoneNumber,
      Website: <string>profileForm.value.SchoolWebsite,
      CreatedAtDate: <string>profileForm.value.SchoolCreatedAtDate,
      Address: {
        LocationString: <string>profileForm.get(['SchoolAddress', 'SchoolLocationString'])?.value ?? '',
        City: <string>profileForm.get(['SchoolAddress', 'SchoolCity'])?.value ?? '',
        State: <string>profileForm.get(['SchoolAddress', 'SchoolState'])?.value ?? '',
        ZipCode: <string>profileForm.get(['SchoolAddress', 'SchoolZip'])?.value ?? '',
        Country: <string>profileForm.get(['SchoolAddress', 'SchoolCountry'])?.value ?? ''
      }
    }
    return inputData;
  }
}
