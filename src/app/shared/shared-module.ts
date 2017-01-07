import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { FlexToolbarComponent } from './toolbar/toolbar.component';
import { FlexFooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    BrowserModule,
    MaterialModule,
  ],
  declarations: [FlexToolbarComponent, FlexFooterComponent],
  exports: [FlexToolbarComponent, FlexFooterComponent],
  providers: [],
  entryComponents: [],
})
export class SharedModule {}
