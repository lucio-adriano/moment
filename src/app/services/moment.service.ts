import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { Moment } from '../entity/moment';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl: string = environment.baseApiUrl;

  private apiUrl: string = `${this.baseApiUrl}/api/moments`;

  constructor(private http: HttpClient) { }
  

  createMoment(formData: FormData): Observable<FormData>{
   
    return this.http.post<FormData>(this.apiUrl, formData);

  }
}
