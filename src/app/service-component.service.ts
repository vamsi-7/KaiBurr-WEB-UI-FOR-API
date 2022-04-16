import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WordObject } from './word';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceComponentService {
  private word: WordObject[] = [];
  startedEditing = new Subject<number>();

  private baseurl = "http://localhost:8080/products"

  constructor(private httpClient: HttpClient) { }

  getwords(): Observable<WordObject[]> {
    return this.httpClient.get<WordObject[]>(`${this.baseurl}`);
  }

  savewords(postData: { id: string; name: string; description: string }): Observable<Object> {
    return this.httpClient.post<Object>(`${this.baseurl}`, postData);
  }
  updateword(putData: { id: string; name: string }): Observable<Object> {
    return this.httpClient.put<Object>(`${this.baseurl}/${putData.id}`, putData);
  }

  deleteword(id: string): Observable<Object> {
    debugger
    console.log(`${this.baseurl}/${id}`)
    return this.httpClient.delete<Object>(`${this.baseurl}/${id}`)
  }

  getwordswithid(id: string): Observable<WordObject> {
    return this.httpClient.get<WordObject>(`${this.baseurl}/${id}`)
  }
}
