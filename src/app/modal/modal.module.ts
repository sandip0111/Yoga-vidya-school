import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseModalComponent } from './course-modal/course-modal.component';



@NgModule({
  declarations: [CourseModalComponent],
  imports: [
    CommonModule,
    NgbModule,    
  ],
  exports: [CourseModalComponent]

})
export class ModalModule { }
