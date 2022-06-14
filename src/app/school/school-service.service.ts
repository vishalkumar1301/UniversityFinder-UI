import { Injectable } from '@angular/core';
import { ISchoolSendable } from '../Interface/SendableDataInterface/ISchoolSendable';
import { ISchoolListItem } from '../Interface/ReceivedDataInterface/ISchoolListItemReceived';
import { BackendService } from '../backend.service';
import { MapperService } from '../mapper.service';
import { IReceivedFromBackend } from '../Interface/ReceivedDataInterface/IReceivedFromBackend';
import { ISchool } from '../Interface/ISchool';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class SchoolService {

  constructor(private backendService: BackendService, private mapperService: MapperService) { }

  addSchool(school: ISchoolSendable) {
    this.backendService.Post(school, '/school').subscribe(data => {
      console.log(data);
    });
  }

  getSchoolList(callback: (data: ISchoolListItem[] | null) => void) : void {
    this.backendService.Get('/school/get-all-school', (data) => {
      // we don't do null check here because the component will handle this and display a message appropriately.
      const schoolList: ISchoolListItem[] = this.mapperService.mapSchoolListRequestDataToSchoolListInterface(data);
      callback(schoolList);
    });
  }

  getSchoolById(schoolId: string, callback: (data: ISchool) => void) : void {
    this.backendService.Get('/school/' + schoolId, (data) => {
      // we don't do null check here because the component will handle this and display a message appropriately.
      const school: ISchool = this.mapperService.mapSchoolRequestDataToSchoolInterface(data);
      callback(school);
    });
  }

  public createSchoolForm (fb: FormBuilder, school?: ISchool) {
      console.log(school);
      return fb.group({
        Name: [school?.Name ? school.Name : '', Validators.required],
        Moto: [school?.Moto ? school.Moto : '', Validators.required],
        Type: [school?.Type ? school.Type : '', Validators.required],
        TypePublicPrivate: [school?.TypePublicPrivate ? school.TypePublicPrivate : '', Validators.required],
        Email: [school?.Email ? school.Email : '', Validators.required],
        PhoneNumber: [school?.PhoneNumber ? school.PhoneNumber : '', Validators.required],
        Website: [school?.Website ? school.Website : '', Validators.required],
        SchoolCreatedAtDate: [school?.SchoolCreatedAtDate ? school.SchoolCreatedAtDate : '', Validators.required],
        Address: fb.group({
          LocationString: [school?.Address.LocationString ? school.Address.LocationString : '', Validators.required],
          City: [school?.Address.City ? school.Address.City : '', Validators.required],
          State: [school?.Address.State ? school.Address.State : '', Validators.required],
          Zip: [school?.Address.ZipCode ? school.Address.ZipCode : '', Validators.required],
          Country: [school?.Address.Country ? school.Address.Country : '', Validators.required]
        }),
      });
  }
}
