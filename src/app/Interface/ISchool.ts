import { ICourse } from "./ICourse";

export interface ISchool {
    Id: string;
    Name: string;
    Email: string;
    Website: string;
    Type: string;
    TypePublicPrivate: string;
    PhoneNumber: string;
    Moto: string;
    SchoolCreatedAtDate: Date;
    Address: {
        Country: string;
        City: string;
        ZipCode: string;
        State: string;
        Street: string;
        LocationString: string;
    };
    Courses: ICourse[];
}