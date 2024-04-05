import {Component} from '@angular/core';
import {PersonService} from "../shared/store/person/person.service";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  constructor(protected personService: PersonService) {}

}
