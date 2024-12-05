import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { SpinnerComponent } from './includes/spinner/spinner.component';
import { ModalModule } from './modal/modal.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseModalComponent } from './modal/course-modal/course-modal.component';
// import { WebinarModalComponent } from './modal/webinar-modal/webinar-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,SpinnerComponent, ModalModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {

  constructor(private modalService: NgbModal) {}
  
  ngOnInit(): void {
    let isOpenCourseModal = sessionStorage.getItem('OpenCourseModal');
    if(isOpenCourseModal == null){
      setTimeout(() => {
        this.openModal();
        sessionStorage.setItem('OpenCourseModal', 'true');
      }, 30000); 
    };

  //   let isOpenWebinarModal = sessionStorage.getItem('OpenWebinarModal');
  //   if(isOpenWebinarModal == null){
  //     setTimeout(() => {
  //       this.openWebinarModal();
  //       sessionStorage.setItem('OpenWebinarModal', 'true');
  //     }, 40000);
  //  };
  }

  openModal() {
    this.modalService.open(CourseModalComponent, {
      windowClass: 'course-modal-class',
      size:'lg',
      ariaLabelledBy: 'modal-basic-title',
      backdrop: 'static',  // Prevent closing by clicking outside
      keyboard: false,  // Prevent closing with the ESC key
      centered: true     
    });
  }

  //   openWebinarModal() {
  //     this.modalService.open(WebinarModalComponent, {
  //       windowClass: 'webinar-registration-modal-class',
  //       size:'lg',
  //       ariaLabelledBy: 'modal-basic-title',
  //       backdrop: 'static',  // Prevent closing by clicking outside
  //       keyboard: false,  // Prevent closing with the ESC key
  //       centered: true     
  //     });
  // }
  title = 'yoga-vidya-school';
}
