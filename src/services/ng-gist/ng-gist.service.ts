import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

/**
 * NgGistService class.
 */
@Injectable()
export class NgGistService {
  /**
   * Return gist url after combining url and gist id
   * @param userName
   * @param gistId
   * @param fileName
   */
  public static getUrl(userName: string, gistId: string, fileName?: string): string {
    if(fileName !== undefined && fileName.length > 0){
      return `https://gist.github.com/${userName}/${gistId}.js?file=${fileName}`;
    }
    else{
      return `https://gist.github.com/${userName}/${gistId}.js`;
    }
      
  }

  /**
   * Return standalone Gist content hosted in an iFrame
   * @param gistUrl
   * @param elementId
   */
  public static getGistFrameContent(gistUrl: string, elementId?: string): string {
    if(elementId !== undefined && elementId.length > 0){
      return `<html>` +
      `<head>` +
      `  <base target="_parent">` +
      `</head>` +
      `<body onload="parent.document.getElementById('${elementId}')"` +
      `style.height=document.body.scrollHeight + 'px'">` +
      `  <script type="text/javascript" src="${gistUrl}"></script>` +
      `</body>` +
      `</html>`;
    }
    else{
      return `<html>` +
      `<head>` +
      `  <base target="_parent">` +
      `</head>` +
      `<body style.height=document.body.scrollHeight + 'px'">` +
      `  <script type="text/javascript" src="${gistUrl}"></script>` +
      `</body>` +
      `</html>`;
    }
    
  }
}
