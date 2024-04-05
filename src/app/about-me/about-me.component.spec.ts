import { ComponentFixture, TestBed } from '@angular/core/testing';
import {NgxsModule, Store} from "@ngxs/store";
import {MaterialModule} from "../shared/material/material.module";
import {PersonState} from "../shared/store/person/person.state";

import { AboutMeComponent } from './about-me.component';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutMeComponent],
      imports:[
        MaterialModule,
        NgxsModule.forRoot([PersonState])
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should select default', () => {
    const isDefault:boolean = store.selectSnapshot(PersonState.isDefault);
    expect(isDefault).toEqual(true);
  });
});
