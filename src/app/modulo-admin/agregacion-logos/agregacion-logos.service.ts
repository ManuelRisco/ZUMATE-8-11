import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgregacionLogosService {
  private apiUrl = 'http://localhost/api/aliados'; // Carpeta base donde están tus archivos PHP

  constructor(private http: HttpClient) {}

  // Subir imagen
  subirImagen(archivo: File): Observable<any> {
    const formData = new FormData();
    formData.append('imagen', archivo);
    return this.http.post(`${this.apiUrl}/subirImagen.php`, formData);
  }

  // Obtener lista de aliados
  getAliados(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAliado.php`);
  }

  // Eliminar aliado por ID
  eliminarImagen(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteAliado.php?id=${id}`);
  }
  
}
