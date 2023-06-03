import { Component, inject, ViewChild } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service'
import { ApiUser } from '../apiuser';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent {

  @ViewChild('userForm') form !: FormGroup;

  model = {} as User;
  userService: UserService = inject(UserService);
  submittedUser: ApiUser = {} as ApiUser;
  submitted = false;
  submitting = false;
  apiError = false;

  public markAllAsTouched(formGroup: FormGroup): void {
    (Object as any).values(formGroup.controls).forEach((control: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
      control.markAsTouched();
      if (control.controls) {
        this.markAllAsTouched(control);
      }
    });
  }

  async onSubmit() {
    this.apiError = false;
    this.submitting = true;
    await this.userService
      .submitUser(this.model.firstName, this.model.lastName, this.model.email, this.model.surnamePreposition)
      .then(() => {
        this.submittedUser = this.userService.getSumbittedUser();
        this.submitted = true;
      })
      .catch(err => {
        console.error('User not submitted\n', err);
        this.apiError = true;
      })
      .finally(() =>{
        this.submitting = false;
      });
  }

  addNewUser() {
    this.form.reset();
    this.submitted = false;
  }

  newUserRick() {
    this.model = new User('Rick', 'Hoop', 'rick@spero.solutions', 'WorkingAtFedEx', 'de');
    this.markAllAsTouched(this.form);
  }

  newUserInvalidEmail() {
    this.model = new User('Frederick Wallace', 'Smith', '.frederick.mith@fedex.com', 'FedExIsMyBaby');
    this.markAllAsTouched(this.form);
  }

  newUserInvalidPassword() {
    this.model = new User('Raj', 'Subramaniam', 'raj.subramaniam@fedex.com', 'rajfly');
    this.markAllAsTouched(this.form);
  }

  newUserMissingFields() {
    this.model = new User('', 'Reddington', 'karen.reddington@fedex.com', 'Password123');
    this.markAllAsTouched(this.form);
  }
}
