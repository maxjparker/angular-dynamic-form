/**
 * The most basic object model of a question in a form. This should be extended
 * to a specific question type such as a radio selection, checkbox, or textbox.
 *
 * @param T The datatype of the answer to this question.
 */
export class QuestionBase<T> {
  value: T;                                 // answer value of question
  key: string;                              // identifying key of question
  label: string;                            // the question displayed to user
  required: boolean;                        // is question required by form?
  order: number;                            // placement of question in form
  controlType: string;                      // tells displaying component what kind of question this is
  type: string;                             //
  options: {key: string, value: string}[];  // suitable answers to this question

  /**
   * Constructor for a basic question. Used by child classes only.
   *
   * @param value The answer value of this question.
   * @param key The identifying key to the value of this question.
   * @param label The question as it is displayed to the user.
   * @param required Is this question required by the form it belongs to?
   * @param order The placement of this question in a form.
   * @param controlType The type of question this is. Set in child classes and
   *                    used by display components to determine which tags to
   *                    generate and how to define them.
   * @param type The type of input this question is. Used in the type attribute
   *             of input tags to define the type of input this question repre-
   *             sents.
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
