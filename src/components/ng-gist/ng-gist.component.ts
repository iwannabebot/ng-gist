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
  @Input() public userName: string = '';

  /**
   * GistId
   */
  @Input() public gistId: string = '';

  /**
   * Filename
   */
  @Input() public fileName: string = '';

  /**
   * Element refernce to iFrame hosting Gist
   */
  @ViewChild('gistIframe') public gistIframe: ElementRef;

  public ngAfterViewInit() {
    this.LoadGist(this.gistIframe);
  }

  private LoadGist(gistElement: ElementRef): void {
    const iFrame = gistElement.nativeElement;
    const url = NgGistService.getUrl(this.userName, this.gistId, this.fileName);
    iFrame.id = this.GetElementId();
    const content = NgGistService.getGistFrameContent(url, this.GetElementId());
    const doc = iFrame.contentDocument || iFrame.contentElement.contentWindow;
    this.WriteDoc(doc, content);
  }

  private GetElementId(): string {
    let elementId = `gist-${this.userName}-${this.gistId}`;
    if (this.fileName.length > 0) {
      elementId = `gist-${this.userName}-${this.gistId}-${this.fileName}`;
    }
    return elementId;
  }

  private WriteDoc(doc: any, content: string) {
    doc.open();
    doc.write(content);
    doc.close();
  }
}
