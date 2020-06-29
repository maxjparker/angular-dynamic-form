import { QuestionBase } from './question-base';

/******************************************************************************
 * A question model in a form where the user is displayed a drop-down list and
 * uses it to select one of a number of predefined answers.
 *
 * @param options The set of key/value pairs that represents selectable answers
 *                displayed to the user in DDL format.
 */
export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  /****************************************************************************
   * Creates the model of a selection/options input in a form.
   * @param options A javascript object containing all configurations for this
   *                DDL. The controlType is automatically set to 'dropdown'.
   */
  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }

}
