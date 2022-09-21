import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElPrimeroComponent } from './components/el-primero/el-primero.component';



@NgModule({
  declarations: [
    ElPrimeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ElPrimeroComponent
  ]
})
export class FirstModule { }
