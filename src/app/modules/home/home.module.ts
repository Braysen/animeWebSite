import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { LayoutMasterModule } from '../../shared/layout/layout.module'
import { GenresMenuComponent } from '../../shared/components/genres-menu/genres-menu.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutMasterModule,
    GenresMenuComponent,
    SlickCarouselModule,
    HttpClientModule
  ]
})
export class HomeModule { }
