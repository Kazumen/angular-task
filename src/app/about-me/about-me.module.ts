import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from '../shared/material/material.module'
import { AboutMeRoutingModule } from './about-me-routing.module'
import { AboutMeComponent } from './about-me.component'

@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class AboutMeModule {
}
