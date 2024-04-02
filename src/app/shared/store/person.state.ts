import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from "@angular/core";
import {SetPerson} from "./person.actions";

export interface PersonStateModel {
  userName: string,
  userSurname: string,
  email: string,
  address: string,
  default: boolean
}

@State<PersonStateModel>({
  name: 'person',
  defaults: {
    userName: '',
    userSurname: '',
    address: '',
    email: '',
    default: true
  }
})
@Injectable()
export class PersonState {
  @Selector()
  static person(state: PersonStateModel) {
    return state;
  }

  @Selector()
  static isDefault(state: PersonStateModel): boolean {
    return state.default;
  }


  @Action(SetPerson)
  setPerson({patchState}: StateContext<PersonStateModel>, {payload}: SetPerson) {
    patchState({
      userName: payload.userName,
      userSurname: payload.userSurname,
      address: payload.address,
      email: payload.email,
      default: false
    });
  }

  constructor() {
  }
}
