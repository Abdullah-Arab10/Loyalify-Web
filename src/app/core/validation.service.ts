import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  patternMessage = '';
  constructor() {}
  getValidatorErrorMessage = (
    validatorName: string,
    validatorErrors?: ValidationErrors,
    controlName?: string
  ): string | undefined => {
    let args = this.messages
      .get(validatorName)
      ?.validatorErrorsKey?.map((name) => validatorErrors?.[name]);
    if (args) {
      return this.stringFormat(
        this.messages.get(validatorName)?.message,
        ...args
      );
    }
    if (validatorName == 'pattern' && controlName == 'password') {
      return this.messages
        .get(validatorName)
        ?.message.replace(
          'invalid pattern',
          'password must contain one digit, one uppercase , one lowercase'
        );
    } else {
      return this.messages?.get(validatorName)?.message;
    }
  };

  messages = new Map<
    string,
    { message: string; validatorErrorsKey?: string[] }
  >([
    ['required', { message: 'This field is required' }],
    [
      'minlength',
      {
        message: 'field must be at least {0} characters long',
        validatorErrorsKey: ['requiredLength'],
      },
    ],
    [
      'maxlength',
      {
        message: 'field cannot be more than {0} characters long',
        validatorErrorsKey: ['requiredLength'],
      },
    ],
    ['email', { message: 'Email must be a valid email address' }],
    ['pattern', { message: 'invalid pattern' }],
  ]);
  stringFormat(template: string | undefined, ...args: any[]) {
    if (template) {
      return template.replace(/{(\d+)}/g, (match, index) => {
        return typeof args[index] !== 'undefined' ? args[index] : match;
      });
    }
    return undefined;
  }
}
