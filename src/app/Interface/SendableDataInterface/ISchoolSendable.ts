import {CanBeSentOverToBackend} from './ISendableToBackend';

export interface ISchoolSendable extends CanBeSentOverToBackend {
    Name: string;
    Moto: string;
    Type: string;
    TypePublicPrivate: string;
    Email: string;
    PhoneNumber: string;
    Website: string;
    CreatedAtDate: string;
    Address: ISchoolAddressSendable;
}

interface ISchoolAddressSendable {
    LocationString: string;
    City: string;
    State: string;
    ZipCode: string;
    Country: string;
}
