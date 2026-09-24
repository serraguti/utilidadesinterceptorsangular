import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilesInternetComponent } from './components/files-internet-component/files-internet-component';
import { ServicePostFiles } from './services/service.post.files';
import { EjemploPdfComponent } from './components/ejemplo-pdf-component/ejemplo-pdf-component';
import { ServiceEquipos } from './services/service.equipos';
import { DatosEquipoComponent } from './components/datos-equipo-component/datos-equipo-component';
import { errorInterceptor } from './interceptors/error-interceptor';
import { provideToastService } from 'ngx-yet-another-toast-library';
import { ErrorComponent } from './components/error-component/error-component';
import { LoginEmpleadoComponent } from './components/login-empleado-component/login-empleado-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { ServiceEmpleados } from './services/service.empleados';
import { authTokenInterceptor } from './interceptors/auth-token-interceptor';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    FilesInternetComponent,
    EjemploPdfComponent,
    DatosEquipoComponent,
    ErrorComponent,
    LoginEmpleadoComponent,
    SubordinadosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    ServiceEmpleados,
    ServiceEquipos,
    ServicePostFiles,
    provideBrowserGlobalErrorListeners(),
    //provideHttpClient(withInterceptors([errorInterceptor])),
    provideHttpClient(withInterceptors([authTokenInterceptor])),
    provideToastService(),
  ],
  bootstrap: [App],
})
export class AppModule {}
