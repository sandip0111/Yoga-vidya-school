import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { SpinnerComponent } from './includes/spinner/spinner.component';
import { ModalModule } from './modal/modal.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseModalComponent } from './modal/course-modal/course-modal.component';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs';
// import { WebinarModalComponent } from './modal/webinar-modal/webinar-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,SpinnerComponent, ModalModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {

  constructor(private modalService: NgbModal, @Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe((event) => {
        const currentUrl = event.urlAfterRedirects;
        const allowedRoutes = ['/100-hours-yoga-teacher-training-in-rishikesh', '/200-hours-yoga-teacher-training-in-rishikesh', '/300-hours-yoga-teacher-training-in-rishikesh', '/200-hours-yoga-teacher-training-online', '/200-hour-yoga-teacher-training-in-bali', '/300-hour-yoga-teacher-training-in-bali']; // <- Add route paths here
        const normalizedUrl = currentUrl.replace(/\/$/, '').toLowerCase();
        let isOpenCourseModal = sessionStorage.getItem('OpenCourseModal');
        if( isOpenCourseModal == null) {
          sessionStorage.setItem('OpenCourseModal', 'false');
        }
        isOpenCourseModal = sessionStorage.getItem('OpenCourseModal');
        if (allowedRoutes.map(route => route.toLowerCase()).includes(normalizedUrl) && isOpenCourseModal != 'true') {
          setTimeout(() => {
            this.openModal(); 
            sessionStorage.setItem('OpenCourseModal', 'true');
          }, 30000); // 30 seconds delay
        };
        
        });
      
    }

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
