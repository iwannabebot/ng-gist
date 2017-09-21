import { NgGistService } from './ng-gist.service';

describe('NgGistService', () => {
  let NgGistService: NgGistService;

  beforeEach(() => {
    NgGistService = new NgGistService();
  });

  it('should return observable with time string', (done) => {
    const timeStringFormat = /[0-9]{2}:[0-9]{2}:[0-9]{2}/i;

    NgGistService.getTick().subscribe(
      (timeString) => {
        expect(timeStringFormat.test(timeString)).toBeTruthy(
          'Time string should have hh:mm:ss format'
        );

        // Stop asynchronous test.
        done();
      }
    );
  });
});
