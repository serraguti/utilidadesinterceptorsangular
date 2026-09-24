import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent implements OnInit {
  public empleados!: Array<Empleado>;
  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEmpleados,
    private _router: Router
  ) {}

  ngOnInit(): void {
      this._service.getSubordinados().subscribe(response => {
        this.empleados = response;
        this._cdr.detectChanges();
      })    
  }
}
