import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ContainerComponent } from './_container/container.component';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    ChartRoutingModule
  ]
})
export class ChartModule { }
