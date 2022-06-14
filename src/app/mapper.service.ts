import { Injectable } from '@angular/core';
import { ISchool } from './Interface/ISchool';
import { ISchoolListItem } from './Interface/ReceivedDataInterface/ISchoolListItemReceived';

@Injectable()
export class MapperService {

  constructor() { }

  mapSchoolListRequestDataToSchoolListInterface(data: any): ISchoolListItem[] {
    return data.map((school: any) => {
      return {
        Id: school._id,
        Name: school.Name,
        Email: school.Email,
        Website: school.Website,
        Type: school.SchoolType,
        TypePublicPrivate: school.SchoolTypePublicPrivate,
        Country: school.Address.Country,
        City: school.Address.City,
        CreatedAtDate: school.CreatedAtDate
      };
    });
  }

  mapSchoolRequestDataToSchoolInterface(data: any): ISchool {
    return {
      Id: data._id,
      Name: data.Name,
      PhoneNumber: data.PhoneNumber,
      Moto: data.Moto,
      Email: data.Email,
      Website: data.Website,
      Type: data.Type,
      TypePublicPrivate: data.TypePublicPrivate,
      SchoolCreatedAtDate: data.SchoolCreatedAtDate,
      Address: {
        Country: data.Address.Country,
        City: data.Address.City,
        LocationString: data.Address.LocationString,
        State: data.Address.State,
        Street: data.Address.Street,
        ZipCode: data.Address.ZipCode
      },
      Courses: data.Courses
    };
  }
}
