import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';
import { ShouldNotContainValidatorDirective } from '../shared/shoud-not-contain.directive';
import { ApiUser } from '../apiuser';
import { User } from '../user';


describe('UserFormComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      FormsModule
    ],
    declarations: [
      UserFormComponent,
      ShouldNotContainValidatorDirective
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserFormComponent);
    const userForm = fixture.componentInstance;
    expect(userForm).toBeTruthy();
  });

  it(`should have correct default values`, () => {
    const fixture = TestBed.createComponent(UserFormComponent);
    const userForm = fixture.componentInstance;
    expect(userForm.model).toEqual({} as User);
    expect(userForm.submittedUser).toEqual({} as ApiUser);
    expect(userForm.submitted).toBe(false);
    expect(userForm.submitting).toBe(false);
    expect(userForm.apiError).toBe(false);
  });

  it(`should have 'firstName'`, () => {
    const fixture = TestBed.createComponent(UserFormComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#firstName')).toBeTruthy();
  });

  it(`should have 'surnamePreposition'`, () => {
    const fixture = TestBed.createComponent(UserFormComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#surnamePreposition')).toBeTruthy();
  });

  it(`should have 'lastName'`, () => {
    const fixture = TestBed.createComponent(UserFormComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#lastName')).toBeTruthy();
  });

  it(`should have 'email'`, () => {
    const fixture = TestBed.createComponent(UserFormComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#email')).toBeTruthy();
  });

  it(`should have 'password'`, () => {
    const fixture = TestBed.createComponent(UserFormComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#password')).toBeTruthy();
  });

});
