import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxsModule, Store} from "@ngxs/store";
import {MaterialModule} from "../shared/material/material.module";
import {SetPerson} from "../shared/store/person.actions";
import {PersonState, PersonStateModel} from "../shared/store/person.state";

import { EditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditComponent;
  let store:Store;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComponent ],
      imports:[
        MaterialModule,
        NgxsModule.forRoot([PersonState]),
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set person', ()=>{
    const person: PersonStateModel = {
      userName: 'Yurii',
      userSurname: 'Romanchak',
      address: 'ali',
      email: 'akbar@gmail.com',
      default: false
    };
    store.dispatch(new SetPerson(person));
    const state: PersonStateModel=store.selectSnapshot(PersonState);
    expect(state).toEqual(person);
  })
});
