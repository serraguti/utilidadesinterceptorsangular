import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilesInternetComponent } from './components/files-internet-component/files-internet-component';
import { ServicePostFiles } from './services/service.post.files';
import { EjemploPdfComponent } from './components/ejemplo-pdf-component/ejemplo-pdf-component';
import { ServiceEquipos } from './services/service.equipos';
import { DatosEquipoComponent } from './components/datos-equipo-component/datos-equipo-component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    FilesInternetComponent,
    EjemploPdfComponent,
    DatosEquipoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    ServiceEquipos,
    ServicePostFiles,
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
  ],
  bootstrap: [App],
})
export class AppModule {}
