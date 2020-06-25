import { Component } from '@angular/core';

import {QuestionService} from './services/question.service';
import {QuestionBase} from './models/question-base';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h2>Job Application for Heroes</h2>
    <div class="container-fluid">
      <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
    </div>
  </div>
  `,
  providers: [QuestionService]
})
export class AppComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
