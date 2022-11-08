import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClienteComponent } from './components/list-cliente/list-cliente.component';
import { ListMascotaComponent } from './components/list-mascota/list-mascota.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {
    path: 'mascota', component: ListMascotaComponent
  },
  {
    path: 'cliente', component: ListClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
