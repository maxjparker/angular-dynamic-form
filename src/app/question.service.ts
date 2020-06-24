import {Injectable} from '@angular/core';

import {DropdownQuestion} from './question-dropdown';
import {QuestionBase} from './question-base';
import {TextboxQuestion} from './question-textbox';
import {of} from 'rxjs';
import {RadioQuestion} from './question-radio';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {
    let questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid', value: 'Solid'},
          {key: 'great', value: 'Great'},
          {key: 'good', value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new RadioQuestion({
        key: 'radioQuestion1',
        label: 'This is the first radio question',
        required: true,
        options: [
          {key: 'ans1', value: 'Best'},
          {key: 'ans2', value: 'medium'},
          {key: 'ans3', value: 'worst'}
        ],
        order: 4,
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }

}
