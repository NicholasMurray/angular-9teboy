import { Component, OnInit, Input, Inject  } from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() person: any;
  private _previouslyFocusedElement: HTMLElement | null = null;
  modalOpen: boolean = false;

  constructor(@Inject(DOCUMENT) private _document: Document) { }

  openModal(event) {
    this._previouslyFocusedElement = this._document.activeElement as HTMLElement;
    this.modalOpen = !this.modalOpen;
  }

  closeModal(event) {
    this._previouslyFocusedElement.focus();
    this.modalOpen = !this.modalOpen;
  }

}