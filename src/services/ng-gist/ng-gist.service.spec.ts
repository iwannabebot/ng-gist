import { NgGistService } from './ng-gist.service';

describe('NgGistService', () => {
  let url: string;

  beforeEach(() => {
  });

  it('should return a valid url', () => {
    url = NgGistService.getUrl('iwannabebot','134aee6d3a07430e9a1079697e4fc03d');
    expect(url.indexOf('https://gist.github.com')>-1).toBeTruthy();
    url = NgGistService.getUrl('iwannabebot','134aee6d3a07430e9a1079697e4fc03d', 'TestGist1.js');
    expect(url.indexOf('https://gist.github.com')>-1).toBeTruthy();
  });

  it('should return a valid content', () =>{
    url = NgGistService.getUrl('iwannabebot','134aee6d3a07430e9a1079697e4fc03d');
    let content = NgGistService.getGistFrameContent(url);
    expect(content.length > 0).toBeTruthy();
    content = NgGistService.getGistFrameContent(url, "dummyElementId");
    expect(content.length > 0).toBeTruthy();
  })

});