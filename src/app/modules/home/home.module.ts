import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { LayoutMasterModule } from '../../shared/layout/layout.module'
import { GenresMenuComponent } from '../../shared/components/genres-menu/genres-menu.component'


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutMasterModule,
    GenresMenuComponent
  ]
})
export class HomeModule { }
