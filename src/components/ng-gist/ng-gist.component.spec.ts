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

  it('should display time string', (done) => {
    componentFixture.detectChanges();

    setInterval(() => {
      componentFixture.detectChanges();

      const NgGistPageElement = componentFixture.debugElement.queryAll(By.css('.ng-gist-time'));
      const displayedTimeText = NgGistPageElement[0].nativeElement.innerText;

      expect(NgGistPageElement).toBeDefined();
      expect(NgGistPageElement.length).toEqual(1);
      expect(displayedTimeText.length).toEqual(8);
      expect(timeStringFormat.test(displayedTimeText)).toBeTruthy();

      done();
    }, 1000);
  });
});
