import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {PersonState, PersonStateModel} from "../shared/store/person.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  @Select(PersonState.person) person$: Observable<PersonStateModel> | undefined;
  @Select(PersonState.isDefault) isDefault$: Observable<boolean> | undefined
  constructor(private store: Store) {
  }

  ngOnInit(): void {

  }

}
