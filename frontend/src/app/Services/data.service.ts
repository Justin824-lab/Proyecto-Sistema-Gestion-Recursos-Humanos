import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API_URI = 'http://localhost:3000/api'; // URL base de la API

  constructor(private http: HttpClient, private router: Router) {}

  // Método genérico para obtener todos los registros
  getAll(url: string): Observable<any> {
    return this.http.get(`${this.API_URI}${url}`).pipe(
      catchError(this.errorHandl)
    );
  }

  // Métodos para listas desplegables
  getDropListOtrosPagos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URI}/OtrosPagos`).pipe(
      catchError(this.errorHandl)
    );
  }

  getDropListEmpleados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URI}/Empleados`).pipe(
      catchError(this.errorHandl)
    );
  }

  getDropListDepartamento(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URI}/Departamento`).pipe(
      catchError(this.errorHandl)
    );
  }

  getDropListEtnia(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URI}/Etnia`).pipe(
      catchError(this.errorHandl)
    );
  }

  getDropListEstadoCivil(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URI}/EstadoCivil`).pipe(
      catchError(this.errorHandl)
    );
  }

  getDropListColorPelo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URI}/ColorPelo`).pipe(
      catchError(this.errorHandl)
    );
  }

  getDropListUbicacion(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URI}/Ubicacion`).pipe(
      catchError(this.errorHandl)
    );
  }

  getDropListContrato(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URI}/Contrato`).pipe(
      catchError(this.errorHandl)
    );
  }

  getDropListCargo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URI}/Cargo`).pipe(
      catchError(this.errorHandl)
    );
  }

  getDropListEstado(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URI}/Estado`).pipe(
      catchError(this.errorHandl)
    );
  }

  getDropListNoResolucion(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URI}/NoResolucion`).pipe(
      catchError(this.errorHandl)
    );
  }

  getDropListGrupoEscala(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URI}/GrupoEscala`).pipe(
      catchError(this.errorHandl)
    );
  }

  getDropListCatOcupacional(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URI}/CatOcupacional`).pipe(
      catchError(this.errorHandl)
    );
  }

  // Obtener un registro específico por ID
  getOne(id: string | number, url: string): Observable<any> {
    return this.http.get(`${this.API_URI}${url}/${id}`).pipe(
      catchError(this.errorHandl)
    );
  }

  // Eliminar un registro
  delete(id: string | number, url: string): Observable<any> {
    console.log('ID recibido:', id, typeof id);
    return this.http.delete(`${this.API_URI}${url}/${id}`).pipe(
      catchError(this.errorHandl)
    );
  }

  // Actualizar un registro (usando PUT en lugar de POST para seguir REST)
  update<T>(id: string | number, updated: T, url: string): Observable<T> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<T>(`${this.API_URI}${url}/${id}`, updated, { headers }).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  // Guardar un nuevo registro
  save<T>(data: T, url: string): Observable<T> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<T>(`${this.API_URI}${url}`, data, { headers }).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  // Método duplicado 'guardar' eliminado, usaremos 'save' únicamente
  // Si necesitas algo diferente, podemos ajustarlo

  // Manejador de errores
  private errorHandl(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
