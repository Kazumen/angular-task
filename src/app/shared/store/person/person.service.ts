import {Injectable} from "@angular/core";
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {Select} from "@ngxs/store";
import {Observable} from "rxjs";
import {SetPerson} from "./person.actions";
import {PersonState, PersonStateModel} from "./person.state";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  @Select(PersonState.person)
  public person$: Observable<PersonStateModel> | undefined;
  @Select(PersonState.isDefault)
  public isDefault$: Observable<boolean>|undefined;

  constructor() {}

  @Dispatch()
  public setPerson(payload: PersonStateModel) {
    return new SetPerson(payload);
  }
}
