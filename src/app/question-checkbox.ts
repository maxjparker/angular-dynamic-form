import {QuestionBase} from './question-base';

export class CheckboxQuestion extends QuestionBase<any> {
  controlType = 'checkbox';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }

}
