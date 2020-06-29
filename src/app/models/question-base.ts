/******************************************************************************
 * The most basic object model of a question in a form.
 *
 * @param <T> The datatype used to represent this question's answer.
 */
export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: {key: string, value: string}[];

  /****************************************************************************
   * Constructor for a basic question. Used by child classes only.
   *
   * @param options A javascript object containing various parameters used to
   *                configure a question.
   * @param value The correct answer to the question , if applicable. Defaults
   *              to undefined.
   * @param key The name of the key for the key/value pair this question gener-
   *            ates. Defaults to empty string.
   * @param label The question being posed to the user. Defaults to empty
   *              string.
   * @param required Whether this question should set the overall form as in-
   *                 valid if it is left unanswered/invalid. Defaults to empty
   *                 string.
   * @param order The placement of this question with respect to other quest-
   *              ions. Defaults to 1.
   * @param controlType The html question format, be it textbox or drop-down
   *                    list, etc. Defaults to empty string.
   * @param type The value for an html input tag's type attribute. Defaults to
   *             empty string.
   */
  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string,
    type?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
  }

}
