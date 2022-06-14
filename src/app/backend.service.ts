import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import { CanBeSentOverToBackend } from './Interface/SendableDataInterface/ISendableToBackend';
import { Observable } from 'rxjs';
import { IReceivedFromBackend } from './Interface/ReceivedDataInterface/IReceivedFromBackend';

@Injectable()
export class BackendService {

  baseUrl = environment.baseUrlForBackend;

  constructor(private http: HttpClient) { }

    Post(data: CanBeSentOverToBackend, path: string) {
      return this.http.post(this.baseUrl + path, data);
    }

    Get(path: string, callback: (data: IReceivedFromBackend | null) => void) {
      this.http.get(this.baseUrl + path).subscribe({
        next: (data: IReceivedFromBackend) => {
          callback(data);
        },
        error: (err: any) => {
          // handle error in some way on UI.
          console.log(err);
        }
      });
    }
}
