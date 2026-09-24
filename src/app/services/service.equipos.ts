import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, forkJoin, Observable, Observer } from "rxjs";
import { Equipo } from "../models/equipo";
import { environment } from "../../environments/environment.development";
import { Jugador } from "../models/jugador";
import { DatosEquipo } from "../models/datos.equipo";
import { identifierName } from "@angular/compiler";

@Injectable()
export class ServiceEquipos {
    constructor(private _http: HttpClient) {}
    getEquipos(): Observable<Array<Equipo>> {
        let request = "api/equipos";
        let url = environment.urlApiEquipos + request;
        return this._http.get<Array<Equipo>>(url);
    }

    findEquipo(idEquipo: number): Observable<Equipo>{
        let request = "api/equipos888/" + idEquipo;
        let url = environment.urlApiEquipos + request;
        return this._http.get<Equipo>(url);
    }

    getJugadoresEquipo(idEquipo: number): Observable<Array<Jugador>>{
        let request = "api/jugadores/jugadoresequipos/" + idEquipo;
        let url = environment.urlApiEquipos + request;
        //VAMOS A INCLUIR UN DELAY EN LA RESPUESTA
        return this._http.get<Array<Jugador>>(url).pipe(delay(4000));
        //return this._http.get<Array<Jugador>>(url);
    }

    getDatosEquipo(idEquipo: number): Observable<DatosEquipo>{
        const allOperations = forkJoin({
            requestEquipo: this.findEquipo(idEquipo),
            requestJugadores: this.getJugadoresEquipo(idEquipo)
        })
        const observable:Observable<DatosEquipo> = new Observable
        ((observer:Observer<DatosEquipo>) => {
            allOperations.subscribe(({requestEquipo, requestJugadores}) => {
                const data = new DatosEquipo();
                data.equipo = requestEquipo;
                data.jugadores = requestJugadores;
                observer.next(data);
                observer.complete();
            })
        })
        return observable;
    }
}