import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Select, Store} from "@ngxs/store";
import {SetPerson} from "../shared/store/person.actions";
import {Observable} from "rxjs";
import {PersonState, PersonStateModel} from "../shared/store/person.state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  personForm: FormGroup;
  @Select(PersonState) person$: Observable<PersonStateModel> | undefined

  constructor(private formBuilder: FormBuilder, private store: Store,private router: Router) {
    this.personForm = this.formBuilder.group({
      userName: '',
      userSurname: '',
      email:'',
      address:'',
      photo:''
    });
  }

  ngOnInit(): void {
    this.person$?.subscribe((data)=>{
      this.personForm.patchValue(data);
    })

  }


  submitForm() {
    this.store.dispatch(new SetPerson(this.personForm.value))
    this.router.navigate(['/about-me']);
  }
}
