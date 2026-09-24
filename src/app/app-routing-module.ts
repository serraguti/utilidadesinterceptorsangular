import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { FilesInternetComponent } from './components/files-internet-component/files-internet-component';
import { EjemploPdfComponent } from './components/ejemplo-pdf-component/ejemplo-pdf-component';
import { DatosEquipoComponent } from './components/datos-equipo-component/datos-equipo-component';
import { ErrorComponent } from './components/error-component/error-component';
import { LoginEmpleadoComponent } from './components/login-empleado-component/login-empleado-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
const routes: Routes = [
  {path: "", component: HomeComponent},
  { path: "filesinternet", component: FilesInternetComponent},
  { path: "ejemplopdf", component: EjemploPdfComponent},
  { path: "equipos/:idequipo", component: DatosEquipoComponent},
  { path: "error", component: ErrorComponent},
  { path: "login", component: LoginEmpleadoComponent},
  { path: "subordinados", component: SubordinadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
