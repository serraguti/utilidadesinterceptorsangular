import { Component } from '@angular/core';
import {jsPDF} from 'jspdf';
import autoTable from 'jspdf-autotable';
@Component({
  selector: 'app-ejemplo-pdf-component',
  standalone: false,
  styleUrl: './ejemplo-pdf-component.css',
  templateUrl: './ejemplo-pdf-component.html',
})
export class EjemploPdfComponent {
  generarDocumentPDF(): void{
    let document = new jsPDF();
    document.setFontSize(18);
    document.text("Mi documento PDF", 10, 10);
    document.setFontSize(12);
    //FUNCIONA MEDIANTE CABECERAS
    const headers = [["Nombre", "Email", "Edad"]];
    const datos = [["Maria", "maria@gmail.com", 33]
      , ["Lucia", "lucia@gmail.com", 22]
    , ["Adrian", "adrian@gmail.com", 26]]
    autoTable(document, {
      head: headers,
      body: datos, 
      startY: 50
    });
    document.save("personas.pdf");
  }
}
