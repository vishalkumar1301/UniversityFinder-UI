import { ISubject } from "./ISubject";

export interface ICourse {
    Name: string;
    Description: string;
    Price: number;
    CourseLevel: string;
    Subjects: ISubject[];
}