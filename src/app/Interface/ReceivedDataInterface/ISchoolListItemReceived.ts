import { IReceivedFromBackend } from './IReceivedFromBackend';

export interface ISchoolListItem extends IReceivedFromBackend {
    Id: string;
    Name: string;
    Type: string;
    TypePublicPrivate: string;
    Country: string;
    City: string;
    CreatedAtDate: Date;
}