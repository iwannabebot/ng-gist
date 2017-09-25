import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { NgGistService } from '../../services';

@Component({
  selector: 'ng-gist',
  styleUrls: ['./ng-gist.component.scss'],
  templateUrl: './ng-gist.component.html',
})
/**
 * NgGistComponent
 */
export class NgGistComponent implements AfterViewInit {

  /**
   * Username
   */
  @Input('Username') public userName: string;
  
  /**
   * GistId
   */
  @Input('GistId') public gistId: string;

  /**
   * Element refernce to iFrame hosting Gist
   */
  @ViewChild('gistIframe') public gistIframe: ElementRef;
  constructor() {}
  
  public ngAfterViewInit() {
    const iFrame = this.gistIframe.nativeElement;
    const url = NgGistService.getUrl(this.userName, this.gistId);
    const elementId = `gist-${this.userName}-${this.gistId}`;
    const content = NgGistService.getGistFrameContent(url, elementId);
    iFrame.id = elementId;
    const doc = iFrame.contentDocument || iFrame.contentElement.contentWindow;
    doc.open();
    doc.write(content);
    doc.close();
  }
}
