// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { Ejercicio2Page } from './ejercicio2/ejercicio2.page';  // Asegúrate de importar Ejercicio2Page

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'ejercicio2',
    loadChildren: () => import('./ejercicio2/ejercicio2.module').then(m => m.Ejercicio2PageModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

