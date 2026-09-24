import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { FilesInternetComponent } from './components/files-internet-component/files-internet-component';
const routes: Routes = [
  {path: "", component: HomeComponent},
  { path: "filesinternet", component: FilesInternetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
