import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { throwError as observableThrowError, Observable } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly host = environment.backendUrl;
  constructor(private http: HttpClient) {}
 
  private formatErrors(error: any) {
 
    if (error.status === 401) {
      console.log('Unauthorized');
      sessionStorage.removeItem('current_user');
      sessionStorage.removeItem('UiProfileMap');
      return observableThrowError('Unauthorized');
    } else if (error.status === 404) {
      console.log('Not Found');
      return observableThrowError('Not Found');
    } else if (error.status === 500) {
      if (error.error.status === 'error') {
        return observableThrowError(error.error.message);
      }else{
        console.log("Internal server error");
      }    
      if (error.error.code === '23505') {
        return observableThrowError('Duplicate key');
      }
      else {
        return observableThrowError('Internal Server Error');
      }
    } else if (error.status === 503) {
      console.log('Service Unavailable');
      return observableThrowError('Service Unavailable');
    } else if (error.message) {
      return observableThrowError(error.message);
    } else {
      return observableThrowError(error.json());
    }
 
  }
 
  public get(path: string, params:any): Observable<any> {
    let Headers = new HttpHeaders();
    Headers.set('Content-Type', 'application/x-www-form-urlencoded');
    Headers.set('Accept', 'application/json');
 
    return this.http.get(this.host + "/" + path,
      { headers: Headers, params: params, withCredentials: false });
  }
}
