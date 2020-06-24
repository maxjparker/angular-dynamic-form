import { Injectable } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor() {}

  toFormGroup(questions: QuestionBase<string>[]) {
    let group: any = {};

    questions.forEach(question => {
      if (question.controlType === 'checkbox') {
        group[question.key] = this.toFormArray(question);
      } else {
        group[question.key] = question.required ?
          new FormControl(question.value || '', Validators.required) :
          new FormControl(question.value || '');
      }

    });
    return new FormGroup(group);
  }

  toFormArray(question: QuestionBase<string>) {
    let array:[] = [];

    question.options.forEach(opt => {
      array[opt.key] = new FormControl(opt.value || '');
    });

    return new FormArray(array);
  }

}
