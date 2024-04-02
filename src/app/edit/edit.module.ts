import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EditRoutingModule} from './edit-routing.module';
import {EditComponent} from './edit.component';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatLineModule} from "@angular/material/core";
import {MatListModule} from "@angular/material/list";


@NgModule({
    declarations: [
        EditComponent
    ],
    imports: [
        CommonModule,
        EditRoutingModule,
        HttpClientModule,
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        FlexLayoutModule,
        MatInputModule,
        MatButtonModule,
        MatDividerModule,
        MatLineModule,
        MatListModule,
    ]
})
export class EditModule {
}
