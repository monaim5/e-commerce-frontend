import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";


export function IsMatchingValidator(control1: AbstractControl): any {
  return (control2: AbstractControl): ValidationErrors | null => {
    return control1?.value === control2?.value ? { notMatching: true } : null;
  };
}
