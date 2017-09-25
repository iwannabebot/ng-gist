import { NgGistService } from './ng-gist.service';

describe('NgGistService', () => {
  let url: string;

  beforeEach(() => {
    url = NgGistService.getUrl('iwannabebot','134aee6d3a07430e9a1079697e4fc03d');
  });

  it('should return a valid url', () => {
    expect(url.indexOf('https://gist.github.com')>-1).toBeTruthy();
  });
});