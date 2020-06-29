import {Injectable} from '@angular/core';

import {DropdownQuestion} from '../models/question-dropdown';
import {QuestionBase} from '../models/question-base';
import {TextboxQuestion} from '../models/question-textbox';
import {of} from 'rxjs';
import {RadioQuestion} from '../models/question-radio';
import {CheckboxQuestion} from '../models/question-checkbox';
import questionnaire from '../../assets/questionnaire.json';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {
    let questions: QuestionBase<string>[] = [];
    console.log(questionnaire);
    for (let key in questionnaire) {
      console.log(key);

      switch(key) {
        case 'dropdown':
          questions.push(new DropdownQuestion(questionnaire[key]));
          break;
        case 'textbox':
          questions.push(new TextboxQuestion(questionnaire[key]));
          break;
        case 'radio':
          questions.push(new RadioQuestion(questionnaire[key]));
          break;
        default:
          console.log("error");
          break;
      }
    }


    /*
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
        order: 4
      }),

      new CheckboxQuestion({
        key: 'checkboxQuestion1',
        label: 'This is the first checkbox question!',
        options: [
          {key: 'cans1', value: 'First Check'},
          {key: 'cans2', value: 'Second Check'},
          {key: 'cans3', value: 'Third Check'}
        ],
        order: 5
      })
    ];
    */

    return of(questions.sort((a, b) => a.order - b.order));
  }

}
