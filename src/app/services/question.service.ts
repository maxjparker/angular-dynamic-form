import {Injectable} from '@angular/core';

import {DropdownQuestion} from '../models/question-dropdown';
import {QuestionBase} from '../models/question-base';
import {TextboxQuestion} from '../models/question-textbox';
import {of} from 'rxjs';
import {RadioQuestion} from '../models/question-radio';
import {CheckboxQuestion} from '../models/question-checkbox';
import * as data from '../../assets/questionnaire.json';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {
    let questions: QuestionBase<string>[] = [];
    let qdata = (data as any).default;

    qdata.forEach((question: QuestionBase<string>) => {
      switch(question.controlType) {
        case 'textbox':
          questions.push(new TextboxQuestion(question));
          break;
        case 'dropdown':
          questions.push(new DropdownQuestion(question));
          break;
        case 'radio':
          questions.push(new RadioQuestion(question));
          break;
        default:
          console.log('ERORR: question service could not detect question type.');
          break;
      }
    });

    return of(questions.sort((a, b) => a.order - b.order));
  }

}
