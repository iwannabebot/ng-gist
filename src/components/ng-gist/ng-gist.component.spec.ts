import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { NgGistModule } from '../../';
import { NgGistComponent } from './ng-gist.component';

describe('NgGistComponent', () => {
  const timeStringFormat = /[0-9]{2}:[0-9]{2}:[0-9]{2}/i;
  let componentFixture: ComponentFixture<NgGistComponent>;
  let componentInstance: NgGistComponent;

  // Asynchronous beforeEach.
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ NgGistModule ]
      }).compileComponents().then(() => { /* Don't do anything */ });
    })
  );

  // Synchronous BeforeEach.
  beforeEach(() => {
    componentFixture = TestBed.createComponent(NgGistComponent);
    componentInstance = componentFixture.componentInstance;
  });
});
