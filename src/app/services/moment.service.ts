import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { Moment } from '../entity/moment';

import { environment } from '../../environments/environment'
import { Moment } from '../entities/moment';
import { Response } from '../entities/response';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl: string = environment.baseApiUrl;

  private apiUrl: string = `${this.baseApiUrl}/api/moments`;

  constructor(private http: HttpClient) { }
  
  getMoments(): Observable<Response<Moment[]>>{
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  getMoment(id: number): Observable<Response<Moment>>{
    const url: string = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Moment>>(url);
  }

  createMoment(formData: FormData): Observable<FormData>{
   
    return this.http.post<FormData>(this.apiUrl, formData);

  }
}
