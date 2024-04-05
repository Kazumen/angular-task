import {PersonStateModel} from "./person.state";

export class SetPerson {
  static readonly type = '[person] set person';
  constructor(public payload: PersonStateModel) {
  }

}

export class GetPerson {
  static readonly type = '[person] get person';
}

