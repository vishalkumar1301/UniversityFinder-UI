export interface ISchool {
    Name: string;
    Moto: string;
    Type: string;
    TypePublicPrivate: string;
    Email: string;
    PhoneNumber: string;
    Website: string;
    CreatedAtDate: string;
    Address: ISchoolAddress;
}

export interface ISchoolAddress {
    LocationString: string;
    Street: string;
    City: string;
    State: string;
    ZipCode: string;
    Country: string;
}
