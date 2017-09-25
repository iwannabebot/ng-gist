import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

/**
 * NgGistService class.
 */
@Injectable()
export class NgGistService {

  public getUrl(userName : string, gistId : string): string {
    return `https://gist.github.com/${userName}/${gistId}.js`;
  }

  public getGistFrameContent(gistUrl : string, elementId : string): string{
    let gistFrameContent = `<html>
        <head>
          <base target="_parent">
        </head>
        <body onload="parent.document.getElementById('${elementId}')" style.height=document.body.scrollHeight + 'px'">
          <script type="text/javascript" src="${gistUrl}"></script>
        </body>
      </html>
    `;

    return gistFrameContent;
  }
}
