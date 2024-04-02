import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatIconModule
  ]
})
export class AboutMeModule { }
