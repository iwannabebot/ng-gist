import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgGistModule } from '../../';
import { NgGistComponent } from './ng-gist.component';

describe('NgGistComponent Positive Test', () => {
  
  let component: NgGistComponent;
  let fixture: ComponentFixture<NgGistComponent>;
  let iframeEl: DebugElement;

  beforeEach(() =>{
    
    TestBed.configureTestingModule({
      declarations: [NgGistComponent]
    });
    this.fixture = TestBed.createComponent(NgGistComponent);
    this.component = this.fixture.componentInstance;
    this.component.userName ='iwannabebot';
    this.component.gistId ='134aee6d3a07430e9a1079697e4fc03d';
    this.component.fileName ='TestGist1.js';
    
    this.iframeEl = this.fixture.debugElement.query(By.css('iframe'));
  });

  it('When loaded should work fine', () =>{
    this.fixture.detectChanges();
    expect(this.component.userName =='iwannabebot').toBeTruthy();
    expect(this.component.gistId =='134aee6d3a07430e9a1079697e4fc03d').toBeTruthy();
    expect(this.component.fileName =='TestGist1.js').toBeTruthy();
    expect(true).toBeTruthy();
  })

});
