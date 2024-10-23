import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { ContainerComponent } from './_container/container.component';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    TableRoutingModule
  ]
})
export class TableModule { }
