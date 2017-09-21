import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { NgGistService } from '../../services';

@Component({
  selector: 'ng-gist',
  styleUrls: ['./ng-gist.component.scss'],
  templateUrl: './ng-gist.component.html',
})
export class NgGistComponent implements AfterViewInit {

  @Input("Username") userName : string;
  @Input("GistId") gistId : string;

  @ViewChild('gistIframe') gistIframe:ElementRef;
  
  constructor(private _NgGistService : NgGistService) {
    
  }
  
  ngAfterViewInit() {
    let iFrame = this.gistIframe.nativeElement;
    let url = this._NgGistService.getUrl(this.userName, this.gistId);
    let elementId = `gist-${this.userName}-${this.gistId}`;
    let content = this._NgGistService.getGistFrameContent(url, elementId);
    iFrame.id = elementId;
    let doc = iFrame.contentDocument || iFrame.contentElement.contentWindow;
    doc.open();
    doc.write(content);
    doc.close();
  }
}
