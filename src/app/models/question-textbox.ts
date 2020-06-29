import { QuestionBase } from './question-base';

/******************************************************************************
 * A question model in a form where the user is displayed a textbox and uses it
 * to input their answer.
 *
 * @param type The specific type of textbox that this input represents. This is
 *             used to define the 'type' attribute of the input tag generated
 *             with the information in this question model. Examples include
 *             number, email, or password.
 */
export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;

  /****************************************************************************
   * Creates the model of a textbox input in a form.
   * @param options A javascript object containing all configurations for this
   *                textbox input. The controlType is automatically set to
   *                'textbox'.
   */
  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }

}
