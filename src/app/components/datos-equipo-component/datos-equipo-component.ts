import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceEquipos } from '../../services/service.equipos';
import { DatosEquipo } from '../../models/datos.equipo';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-datos-equipo-component',
  standalone: false,
  styleUrl: './datos-equipo-component.css',
  templateUrl: './datos-equipo-component.html',
})
export class DatosEquipoComponent implements OnInit {
  public datosEquipo!: DatosEquipo;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEquipos,
    private _activeRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let idEquipo = parseInt(params["idequipo"]);
      let data = new DatosEquipo();
      //BUSCAMOS UN EQUIPO
      this._service.findEquipo(idEquipo).subscribe(response => {
        data.equipo = response;
      })
      this._service.getJugadoresEquipo(idEquipo).subscribe(response => {
        data.jugadores = response;
      })
      this.datosEquipo = data;
      this._cdr.detectChanges();
    })
  }
}
