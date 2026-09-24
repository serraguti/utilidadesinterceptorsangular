import { HttpClient, HttpContext, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Empleado } from "../models/empleado";
import { environment } from "../../environments/environment.development";
import { Login } from "../models/login";

@Injectable()
export class ServiceEmpleados {
    constructor(private _http: HttpClient) {}

    getPerfilEmpleado(): Observable<Empleado>{
        let request = "api/empleados/perfilempleado";
        let url = environment.urlApiEmpleadosSecurity + request;
        let token = localStorage.getItem("TOKEN");
        //EN EL HEADER SIMPLEMENTE DEBEMOS ENVIAR Authorization: bearer token
        let header = new HttpHeaders()
            .set("Authorization", "bearer " + token);
        return this._http.get<Empleado>(url, {headers: header});
    }

    getSubordinados(): Observable<Array<Empleado>> {
        let request = "api/empleados/subordinados";
        let url = environment.urlApiEmpleadosSecurity + request;
        let token = localStorage.getItem("TOKEN");
        //EN EL HEADER SIMPLEMENTE DEBEMOS ENVIAR Authorization: bearer token
        let header = new HttpHeaders()
            .set("Authorization", "bearer " + token);
        return this._http.get<Array<Empleado>>(url, {headers: header});
    }

    getEmpleados(): Observable<Array<Empleado>> {
        let request = "api/empleados";
        let url = environment.urlApiEmpleados + request;
        return this._http.get<Array<Empleado>>(url);
    }

    getOficios(): Observable<Array<string>> {
        let request = "api/empleados/oficios";
        let url = environment.urlApiEmpleados + request;
        return this._http.get<Array<string>>(url);
    }

    getEmpleadosOficio(oficio: string): Observable<Array<Empleado>>{
        let request = "api/empleados/empleadosoficio/" + oficio;
        let url = environment.urlApiEmpleados + request;
        console.log(url);
        return this._http.get<Array<Empleado>>(url);
    }

    logInEmpleado(user: Login): Observable<any> {
        //CONVERTIMOS A JSON EL LOGIN
        let json = JSON.stringify(user);
        let header = new HttpHeaders()
            .set("content-type", "application/json");
        let request = "auth/login";
        let url = environment.urlApiEmpleadosSecurity + request;
        return this._http.post(url, json, { headers: header});
    }
}