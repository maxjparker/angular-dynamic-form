import {QuestionBase} from './question-base';

/******************************************************************************
 * A question model in a form where the user is displayed a selectable list of
 * options and uses it to toggle one of a number of predefined answers.
 *
 * @param options The set of key/value pairs that represents selectable answers
 *                displayed to the user in radio-button format.
 */
export class RadioQuestion extends QuestionBase<string> {
  controlType = 'radio';
  options: {key: string, value: string}[] = [];

  /****************************************************************************
   * Creates the model of a radio button input in a form.
   * @param options A javascript object containing all configurations for this
   *                radio button input. The controlType is automatically set to
   *                'radio'.
   */
  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }

}
