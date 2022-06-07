import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ISchool } from '../../Interface/SchoolInterface';
import { SendDataService } from '../../send-data.service';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {

  profileForm = this.createProfileForm (this.fb);

  constructor(private fb: FormBuilder, private sendData: SendDataService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.profileForm.valid){
      let schoolData = this.mapInputDataToSchoolInterface(this.profileForm);
      this.sendData.sendData(schoolData);
    }
  }

  private createProfileForm (fb: FormBuilder) {
    return fb.group({
      SchoolName: ['', Validators.required],
      SchoolMoto: ['', Validators.required],
      SchoolType: ['', Validators.required],
      SchoolTypePublicPrivate: ['', Validators.required],
      SchoolEmail: ['', Validators.required],
      SchoolPhoneNumber: ['', Validators.required],
      SchoolWebsite: ['', Validators.required],
      SchoolCreatedAtDate: ['', Validators.required],
      SchoolAddress: this.fb.group({
        SchoolLocationString: ['', Validators.required],
        SchoolStreet: ['', Validators.required],
        SchoolCity: ['', Validators.required],
        SchoolState: ['', Validators.required],
        SchoolZip: ['', Validators.required],
        SchoolCountry: ['', Validators.required]
      }),
    });
  }

  private mapInputDataToSchoolInterface(profileForm: any): ISchool { 
    const inputData: ISchool = {
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
        Street: <string>profileForm.get(['SchoolAddress', 'SchoolStreet'])?.value ?? '',
        City: <string>profileForm.get(['SchoolAddress', 'SchoolCity'])?.value ?? '',
        State: <string>profileForm.get(['SchoolAddress', 'SchoolState'])?.value ?? '',
        ZipCode: <string>profileForm.get(['SchoolAddress', 'SchoolZip'])?.value ?? '',
        Country: <string>profileForm.get(['SchoolAddress', 'SchoolCountry'])?.value ?? ''
      }
    }
    return inputData;
  }
}
