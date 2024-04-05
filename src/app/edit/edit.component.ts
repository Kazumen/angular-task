import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";
import {PersonService} from "../shared/store/person/person.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
  personForm: FormGroup;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private formBuilder: FormBuilder, private personService:PersonService, private router: Router) {
    this.personForm = this.formBuilder.group({
      userName:['', [Validators.required, Validators.minLength(3), Validators.nullValidator]],
      userSurname: ['', [Validators.required, Validators.minLength(3), Validators.nullValidator]],
      email: ['', [Validators.required, Validators.email, Validators.nullValidator]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.nullValidator]]
    });
  }

  ngOnInit(): void {
    this.personService.person$?.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.personForm.patchValue(data);
    })
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  submitForm() {
    this.personService.setPerson(this.personForm.value);
    this.router.navigate(['/about-me']);
  }
}
