import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ASSETS_ICONS } from '../../constants/global.constants';
import { ValidationService } from '../../../core/validation.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  iconsPath: string = ASSETS_ICONS;
  @Input() placeholder?: string = ' ';
  @Input() label?: string;
  @Input() icon?: string;
  @Input() control: string | '';
  @Input() formGroup?: FormGroup;
  @Output() inputValueEmitter = new EventEmitter<any>();
  @Input() field: string = 'input';
  @Input() currency = false;
  @Input() type: string = 'text';
  form: FormGroup;

  constructor(
    private rootFormGroup: FormGroupDirective,
    private validationServicve: ValidationService
  ) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }

  emitValue(event: any) {
    this.inputValueEmitter.emit(event.target.value);
  }
  get errorMessage() {
    let formControl = this.form.controls[this.control];
    for (const validatorName in formControl?.errors) {
      if (formControl?.touched)
        return this.validationServicve.getValidatorErrorMessage(
          validatorName,
          formControl?.errors[validatorName],
          this?.control
        );
    }
    return null;
  }
}
