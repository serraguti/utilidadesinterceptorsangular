import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Equipo } from "../models/equipo";
import { environment } from "../../environments/environment.development";
import { Jugador } from "../models/jugador";

@Injectable()
export class ServiceEquipos {
    constructor(private _http: HttpClient) {}
    getEquipos(): Observable<Array<Equipo>> {
        let request = "api/equipos";
        let url = environment.urlApiEquipos + request;
        return this._http.get<Array<Equipo>>(url);
    }

    findEquipo(idEquipo: number): Observable<Equipo>{
        let request = "api/equipos/" + idEquipo;
        let url = environment.urlApiEquipos + request;
        return this._http.get<Equipo>(url);
    }

    getJugadoresEquipo(idEquipo: number): Observable<Array<Jugador>>{
        let request = "api/jugadores/jugadoresequipos/" + idEquipo;
        let url = environment.urlApiEquipos + request;
        return this._http.get<Array<Jugador>>(url);
    }
}