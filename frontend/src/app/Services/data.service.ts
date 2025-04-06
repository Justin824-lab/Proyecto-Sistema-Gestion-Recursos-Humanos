import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError, Observable, retry, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) { }

  getAll(url: string) {
    return this.http.get(`${this.API_URI}` + url);
  }
  getDropListOtrosPagos(): Observable<any[]> {
    console.log('Llamando a getdroplist');
    return this.http.get<any>(this.API_URI + '/OtrosPagos');
  }

  getDropListEmpleados(): Observable<any[]> {
    return this.http.get<any>(this.API_URI + '/Empleados');
  }

  getDropListDepartamento(): Observable<any[]> {
    return this.http.get<any>(this.API_URI + '/Departamento');
  }

  getDropListEtnia(): Observable<any[]> {
    return this.http.get<any>(this.API_URI + '/Etnia');
  }

  getDropListEstadoCivil(): Observable<any[]> {
    return this.http.get<any>(this.API_URI + '/EstadoCivil');
  }

  getDropListColorPelo(): Observable<any[]> {
    return this.http.get<any>(this.API_URI + '/ColorPelo');
  }

  getDropListUbicacion(): Observable<any[]> {
    return this.http.get<any>(this.API_URI + '/Ubicacion');
  }

  getDropListContrato(): Observable<any[]> {
    return this.http.get<any>(this.API_URI + '/Contrato');
  }

  getDropListCargo(): Observable<any[]> {
    return this.http.get<any>(this.API_URI + '/Cargo');
  }

  getDropListEstado(): Observable<any[]> {
    return this.http.get<any>(this.API_URI + '/Estado');
  }

  getOne(id: string, url: string) {
    return this.http.get(`${this.API_URI}` + url + `/${id}`);
  }

  delete(id: number, url: string) {
    return this.http.delete(`${this.API_URI}` + url + `/${id}`);
  }

  // Hacemos estos métodos genéricos ahora:
  update<T>(id: string | number, updated: T, url: string): Observable<T> {
    return this.http.post<T>(`${this.API_URI}` + url + `/${id}`, updated);
  }

  save<T>(Usuario: T, url: string): Observable<T> {
    let headers = new HttpHeaders();
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<T>(`${this.API_URI}` + url, JSON.stringify(Usuario), { headers })
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  guardar<T>(Usuario: T, url: string): Observable<T> {
    let headers = new HttpHeaders();
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<T>(`${this.API_URI}` + url, JSON.stringify(Usuario), { headers })
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  errorHandl(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

