import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationApiService {

  readonly REST_API_SERVER = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getClientsList(): Observable<any> {
    return this.http.get<any>(this.REST_API_SERVER + '/Clients');
  }

  addClient(data: any){
    return this.http.post(this.REST_API_SERVER + '/Clients', data);
  }

  updateClient(id: number, data: any){
    return this.http.put(this.REST_API_SERVER + `/Clients/${id}`, data);
  }

  deleteTarefa(id: number){
    return this.http.delete(this.REST_API_SERVER + `/Clients/${id}`);
  }


}
