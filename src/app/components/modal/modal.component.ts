import { Component, Input, ElementRef, ViewChild, ContentChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() open: boolean = false;
  @Output() modalClosed = new EventEmitter();

  constructor() { }

  closeModal(event) {
    event.stopPropagation();
    this.modalClosed.emit('closed');
  }
}