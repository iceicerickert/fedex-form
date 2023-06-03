import { Validator, ValidatorFn, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms'
import { Directive, Input } from '@angular/core';

export function shouldNotContainValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const shouldNotContain = nameRe.test(control.value);
    return shouldNotContain ? {appShouldNotContain: {value: control.value}} : null;
  };
}


@Directive({
  selector: '[appShouldNotContain]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ShouldNotContainValidatorDirective,
      multi: true
    }
  ]
})

export class ShouldNotContainValidatorDirective implements Validator {

  @Input('appShouldNotContain') shouldNotContain !: string[];

  validate(control: AbstractControl): ValidationErrors | null {
    let validationError: ValidationErrors | null = null;
    this.shouldNotContain.every(str => {
      if (str && shouldNotContainValidator(new RegExp(str, 'i'))(control)) {
        validationError = shouldNotContainValidator(new RegExp(str, 'i'))(control);
        return false;
      }
      return true;
    })
    return validationError;
  }
}
