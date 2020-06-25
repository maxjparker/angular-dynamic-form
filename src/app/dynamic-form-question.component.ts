import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {QuestionBase} from './models/question-base';

@Component({
  selector: 'app-question',
  template: `
  <div [formGroup]="form">
    <label [attr.for]="question.key" class="col-form-label-lg">{{question.label}}</label>

    <div [ngSwitch]="question.controlType">

      <input
        *ngSwitchCase="'textbox'"
        [formControlName]="question.key"
        [id]="question.key"
        [type]="question.type"
        class="form-control">

      <select
        [id]="question.key"
        *ngSwitchCase="'dropdown'"
        [formControlName]="question.key"
        class="form-control">
        <option
          *ngFor="let opt of question.options"
          [value]="opt.key">{{opt.value}}</option>
      </select>

      <div *ngSwitchCase="'radio'">
        <fieldset *ngFor="let opt of question.options">
          <input
            type="radio"
            [formControlName]="question.key"
            [name]="question.key"
            [value]="opt.key">
          <label>{{opt.value}}</label><br>
        </fieldset>
      </div>

      <div *ngSwitchCase="'checkbox'">
        <fieldset
          *ngFor="let opt of question.options"
          [formArrayName]="question.key">
          <input
            [id]="opt.key"
            type="checkbox"
            [formControlName]="opt.key"
            [value]="opt.key">
          <label>{{opt.value}}</label><br>
        </fieldset>
      </div>
    </div>
    <div class="errorMessage" *ngIf="!isValid">{{question.label}} is required.</div>
    <br>
  </div>
  `
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
