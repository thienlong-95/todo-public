import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-config',
  templateUrl: './modal-config.html',
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal],
})
export class NgbdModalConfig {
  @Input() id: number;
  @Input() complete: boolean;
  @Input() active: boolean;
  @Output() todoId = new EventEmitter<number>();
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
    console.log(typeof this.id);
  }
}
