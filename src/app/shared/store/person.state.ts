import {Action, State, StateContext} from '@ngxs/store';
import {Injectable} from "@angular/core";
import {SetPerson} from "./person.actions";

export interface PersonStateModel {
    userName: string;
    userSurname: string;
    email: string;
    address: string;
}

@State<PersonStateModel>({
    name: 'person',
    defaults: {
        userName: '',
        userSurname: '',
        email: '',
        address: '',
    }
})
@Injectable()
export class PersonState {
    @Action(SetPerson)
    setPerson({patchState}: StateContext<PersonStateModel>, {payload}:SetPerson){
        patchState({
            userName:payload.userName,
            userSurname:payload.userSurname,
            email:payload.email,
            address:payload.address
        })
    }

    constructor() {
    }

}
