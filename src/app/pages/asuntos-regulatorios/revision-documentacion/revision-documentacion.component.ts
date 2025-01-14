import { Component, OnInit } from '@angular/core'; // Importa OnInit
import { NgFor } from '@angular/common';
import { DocumentoDTO } from '@/app/modelos/DocumentoDTO';
import { DocumentoService } from '@/app/servicios/documento.service';
import { ActivatedRoute,Router } from '@angular/router';
import { catchError,throwError } from 'rxjs';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-revision-documentacion',
  standalone: true,
  imports: [NgFor],
  templateUrl: './revision-documentacion.component.html',
  styleUrls: ['./revision-documentacion.component.css'], // Corrige styleUrl a styleUrls
})
export class RevisionDocumentacionComponent implements OnInit {
  // Implementa OnInit
  documentos: DocumentoDTO[] = []; // Inicializa como un array vacío

  constructor(private router:Router, private route: ActivatedRoute,private documentoService:DocumentoService){}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
  
    if (id) {
      this.getDocumentos(id).subscribe(
        (data) => {
          this.documentos = data;
          console.log('Documentos cargados:', this.documentos);
          this.documentos.forEach(doc => {
            console.log('ID del documento:', doc.id); // Asegúrate de que los IDs son válidos
          });
        },
        (error) => {
          console.error('Error al cargar documentos:', error);
        }
      );
    } else {
      console.error('ID no encontrado en la ruta');
    }
  }

  getDocumentos(id: number): Observable<DocumentoDTO[]> {
    return this.documentoService.findAll(id).pipe(
      catchError((error: any) => {
        console.error('Error al obtener documentos:', error);
        return throwError(() => new Error('Error al obtener documentos'));
      })
    );
  }
  


  revisarDocumento(documentoname: string): void {
    console.log('ID del documento a revisar:', documentoname);
    if (documentoname) {
      this.router.navigate(['/revision', documentoname]);
    } else {
      console.error('documento no es válido:', documentoname);
    }
  }

  continuar() {
    // Lógica que tengas adicional antes de redirigir (si aplica)
    console.log('Redirigiendo a Info Control...');
    this.router.navigate(['/info-control']);
  }

  regresar() {
    this.router.navigate(['/info-tramite']); // Redirige al componente de InfoTramite
  }

}
