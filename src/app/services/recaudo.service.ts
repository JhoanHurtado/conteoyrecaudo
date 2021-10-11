import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecaudoService {
  private myAppUrl = "http://www.conteoyrecaudo.somee.com/api/";
  private myApiUrl = "recaudo/"

  constructor(private http: HttpClient) { }

  getListRecaudos(skip: number, limit: number): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl+"Get?skip="+skip+"&limit="+limit);
  }

  getListReport() {
    return this.http.get(this.myAppUrl + this.myApiUrl+"GetReport");
  }

  loadData(date: Date) {
    return this.http.get(this.myAppUrl + this.myApiUrl+"FindApi?date="+date);
  }
}
