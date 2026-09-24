import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServicePostFiles } from '../../services/service.post.files';
import { FileModel } from '../../models/filemodel';

@Component({
  selector: 'app-files-internet-component',
  standalone: false,
  styleUrl: './files-internet-component.css',
  templateUrl: './files-internet-component.html',
})
export class FilesInternetComponent {
  public mensaje!: string;
  public urlFile!: string;
  @ViewChild("cajafile") cajaFile!: ElementRef;

  constructor(
    private _cdr: ChangeDetectorRef
    , private _service: ServicePostFiles
  ){}

  uploadFile(): void {
    //POR UN LADO, TENEMOS EL FICHERO DE TIPO FILE
    var file = this.cajaFile.nativeElement.files[0];
    //EN EL VALUE DEL FICHERO, VIENE TODA LA RUTA
    var miPath = this.cajaFile.nativeElement.value.split("\\");
    //RECUPERAMOS EL ULTIMO VALOR
    var nombreFile = miPath[2];
    //CREAMOS EL READER
    var reader = new FileReader();
    //AL LEER UN FICHERO GRANDE (IMAGEN)
    //ES MEJOR UTILIZAR EL METODO onloadend
    reader.onloadend = () =>{
      let buffer: ArrayBuffer;
      buffer = reader.result as ArrayBuffer;
      var base64: string;
      //LA FUNCION btoa CONVIERTE BYTES A BASE 64 STRING
      base64 = btoa(
        new Uint8Array(buffer)
        .reduce((data, byte) => data + String.fromCharCode(byte), '')
      )
      let fileModel = new FileModel(nombreFile, base64);
      this._service.postFile(fileModel).subscribe(response => {
        this.mensaje = "Fichero subido";
        console.log(response);
        this.urlFile = response.urlFile;
        this._cdr.detectChanges();
      });
    }
    //INICIAMOS LA LECTURA DEL FICHERO CON ARRAYBUFFER
    reader.readAsArrayBuffer(file);
  }
}
