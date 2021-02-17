import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [ColumnOneComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports:[ ColumnOneComponent
//typo i think was red error for export so switched to exports-SGar
  ]
})
export class SharedModule { }
