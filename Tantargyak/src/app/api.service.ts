import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getCucc(apiUrl: any): Observable<any[]> {
    return this.http.get<any[]>(apiUrl);
  }

  addCucc(apiUrl: any, student: any): Observable<any> {
    return this.http.post<any>(apiUrl, student);
  }

  updateCucc(apiUrl: any ,id: number, student: any): Observable<any> {
    return this.http.put<any>(`${apiUrl}/${id}`, student);
  }

  deleteCucc(apiUrl: any,id: number): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/${id}`);
  }
}