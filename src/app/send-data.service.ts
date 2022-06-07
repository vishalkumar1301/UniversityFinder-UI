import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { ISchool } from './Interface/SchoolInterface';

@Injectable()
export class SendDataService {

  constructor(private http: HttpClient) { }

  sendData(data: ISchool) {
    console.log(data);
    this.http.post('http://localhost:3000/school', data).subscribe(data => {
      console.log(data);
    })
  }
}
