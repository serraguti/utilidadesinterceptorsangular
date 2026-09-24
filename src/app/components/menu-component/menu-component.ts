import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Equipo } from '../../models/equipo';
import { ServiceEquipos } from '../../services/service.equipos';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent implements OnInit{
  public equipos!: Array<Equipo>;
  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEquipos
  ) {}
  ngOnInit(): void {
    this._service.getEquipos().subscribe(response => {
      this.equipos = response;
      this._cdr.detectChanges();
    })
  }
}
