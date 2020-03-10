import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { AutofocusDirective } from './directives/autofocus/autofocus.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CardComponent, ModalComponent, AutofocusDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
