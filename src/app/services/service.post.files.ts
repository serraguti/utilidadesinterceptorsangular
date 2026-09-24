import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FileModel } from "../models/filemodel";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServicePostFiles {
    constructor(private _http: HttpClient){}
    //ESTE METODO NO TIENE NINGUNA DIFERENCIA CON LOS POST
    //QUE HEMOS REALIZADO
    postFile(fileModel: FileModel): Observable<any>{
        let json = JSON.stringify(fileModel);
        let header = new HttpHeaders()
            .set("content-type", "application/json");
        let request = "api/testingfiles";
        let url = environment.urlApiFiles + request;
        return this._http.post(url, json, { headers: header });
    }
}