import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutMasterComponent } from './layout-master/layout-master.component';
import { GlobalComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    LayoutMasterComponent
  ],
  imports: [
    CommonModule,
    GlobalComponentsModule
  ],
  exports: [
    LayoutMasterComponent
  ]
})
export class LayoutMasterModule { }
