import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectComponent {
  @Input() control: string = '';
  @Input() form: FormGroup;
  @Input() label?: string;
  @Input() items: any;
  @Input() hasColors: boolean = false;
  selectedValue: string;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
  get errorMessage() {
    let formControl = this.form.controls[this.control];
    for (const validatorName in formControl?.errors) {
      /*  if (formControl?.touched)
        return this.validationServicve.getValidatorErrorMessage(
          validatorName,
          formControl?.errors[validatorName],
          this?.control
        ); */
    }
    return null;
  }
}
