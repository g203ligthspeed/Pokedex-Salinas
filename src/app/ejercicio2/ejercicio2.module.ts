// ejercicio2.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ejercicio2Page } from './ejercicio2.page';  // Asegúrate de importar Ejercicio2Page

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: Ejercicio2Page
      }
    ])
  ],
  declarations: [Ejercicio2Page]
})
export class Ejercicio2PageModule {}
