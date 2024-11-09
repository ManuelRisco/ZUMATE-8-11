import { Component, OnInit } from '@angular/core';
import { AgregacionLogosService } from './agregacion-logos.service';

@Component({
  selector: 'app-agregacion-logos',
  templateUrl: './agregacion-logos.component.html',
  styleUrls: ['./agregacion-logos.component.css']
})
export class AgregacionLogosComponent implements OnInit {
  selectedFile: File | null = null;
  imagenes: any[] = []; // Lista para almacenar las imágenes recuperadas

  constructor(private logoService: AgregacionLogosService) {}

  ngOnInit(): void {
    this.cargarImagenes(); // Cargar las imágenes cuando el componente se inicializa
  }

  // Método para manejar la selección de archivos
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  // Método para subir la imagen
  subirImagen(): void {
    if (this.selectedFile) {
      this.logoService.subirImagen(this.selectedFile).subscribe(response => {
        console.log(response);
        if (response.status === 'success') {
          alert('Imagen subida exitosamente');
          this.cargarImagenes(); // Recargar las imágenes después de subir una nueva
        } else {
          alert('Error al subir la imagen');
        }
      });
    } else {
      alert('Por favor, selecciona una imagen');
    }
  }

  // Método para cargar las imágenes existentes
  cargarImagenes(): void {
    this.logoService.getAliados().subscribe(
      (data) => {
        this.imagenes = data;
      },
      (error) => {
        console.error('Error al cargar las imágenes', error);
      }
    );
  }
eliminarImagen(id: number): void {
  if (confirm('¿Estás seguro de que deseas eliminar esta imagen?')) {
    this.logoService.eliminarImagen(id).subscribe(response => {
      if (response.status === 'success') {
        alert('Imagen eliminada exitosamente');
        this.cargarImagenes();
      } else {
        alert('Error al eliminar la imagen');
      }
    });
  }
}
  // Método para actualizar la tabla
  refreshTable(): void {
    this.cargarImagenes(); // Llamar a getParticipantes para actualizar la lista
  }

}
