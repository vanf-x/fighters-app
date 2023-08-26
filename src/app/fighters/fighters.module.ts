import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FightersRoutingModule } from './fighters-routing.module';
import { FighterPageComponent } from './pages/fighter-page/fighter-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';


@NgModule({
  declarations: [
    FighterPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    FightersRoutingModule
  ]
})
export class FightersModule { }
