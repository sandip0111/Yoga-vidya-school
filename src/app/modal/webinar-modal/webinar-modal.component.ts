import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-webinar-modal',
  standalone: false,  
  templateUrl: './webinar-modal.component.html',
  styleUrl: './webinar-modal.component.css'
})
export class WebinarModalComponent {  
  constructor(public activeModal: NgbActiveModal){

  }

  webinarRegistration(){
    this.activeModal.close(); 
    window.open('/webinar-registration', '_blank');
  }
}
