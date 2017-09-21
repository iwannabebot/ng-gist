import { NgModule } from '@angular/core';
import { NgGistComponent } from './components';
import { NgGistService } from './services';

@NgModule({
  providers: [
    NgGistService,
  ],
  declarations: [
    NgGistComponent,
  ],
  exports: [
    NgGistComponent,
  ]
})
export class NgGistModule {
}
