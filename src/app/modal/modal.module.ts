import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseModalComponent } from './course-modal/course-modal.component';
import { WebinarModalComponent } from './webinar-modal/webinar-modal.component';



@NgModule({
  declarations: [CourseModalComponent, WebinarModalComponent],
  imports: [
    CommonModule,
    NgbModule,    
  ],
  exports: [CourseModalComponent, WebinarModalComponent]

})
export class ModalModule { }
