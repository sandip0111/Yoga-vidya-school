import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, LazyLoadImageModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images:image[] = []
  selected:string="all";
  imagesTab2:image[]=[];
  imagesTab3:image[]=[];
  imagesTab4:image[]=[];
  isHidePranicPurificationRouteImageTab = false;
  slug:any='';

  displayImages:image[]=[];
  folowers: string= "https://my-s3-images-bucket.s3.amazonaws.com/img/flower-color.png";
  constructor(private activatedRoute: ActivatedRoute) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;
    if(this.slug == 'pranic-purification'){
      this.isHidePranicPurificationRouteImageTab = true;
    }
  }
  allData(){
    this.selected="all";
    
    if(this.slug == '200-hours-yoga-teacher-training-in-rishikesh'){

      this.displayImages=[
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674054461736.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674054484753.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1676454992240.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674054417400.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674054447289.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1676455034142.JPG"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1676455012568.JPG"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674054397344.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/accomodation_pqonex.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/food_dwn1yl.jpg"
        }
      ];
    }
    else if(this.slug == ''){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/about_section_fweev7.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/ytt_aiodu5.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/100-latest_q7uyg2.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/imp-1_r4y4os.jpg"
        }
      ]
    }
    else if(this.slug == '200-hour-yoga-teacher-training-in-bali' || this.slug=='300-hour-yoga-teacher-training-in-bali'){
      this.displayImages= [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-gallry-1_mwqlka.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-gallry-2_dzyejm.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-gallry-3_kr1xcn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-gallry-4_kxwjlj.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-gallry-5_zzyb5j.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-gallry-6_xfomcq.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-gallry-7_vvjo3h.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-gallry-8_agzvzd.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-gallry-9_pv6tno.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-gallry-10_byjvai.jpg"
        }
      ]
    }
    else if(this.slug == '100-hours-yoga-teacher-training-in-rishikesh'){
      this.displayImages= [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674308332559.jpg"
        },
      ]
    }
    else if(this.slug == '200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
      ]
    }
    else if(this.slug == '300-hours-yoga-teacher-training-in-rishikesh'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
      ]
    }
    else if(this.slug == '200-hour-yoga-teacher-training-scholarship-in-rishikesh' || this.slug == '300-hour-yoga-teacher-training-scholarship-in-rishikesh'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
      ]
    }
    else if(this.slug == '200-hour-yoga-teacher-training-in-kerala-india' || this.slug == '300-hour-yoga-teacher-training-in-kerala-india'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
      ]
    }
    else if(this.slug == 'yoga-retreat-in-rishikesh-india' || this.slug == 'yoga-retreat-in-kerala-india'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
      ]
    }
    else if(this.slug == 'pranayama-therapy-course-online' || this.slug == 'adjustment-and-alignment' || this.slug == 'adjustment-and-alignment-level-2' || this.slug == 'yoga-teacher-training-in-india' || this.slug == 'drop-in-yoga-classes'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
      ]
    }
    else if(this.slug == '21-days-ashtanga-yoga-immersion'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/21-days-1_gs2km3.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/21-days-2_ng0ian.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/21-days-3_nkakbr.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/21-days-4_disu7o.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/21-days-5_i5tekk.jpg"
        }
      ]
    }
    else if(this.slug == 'yoga-for-weight-loss'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/wl-1_muamjw.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/wl-2_kk1jfz.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/wl-3_ujupma.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/wl-4_srcxep.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/wl-5_ehinmk.jpg"
        }
      ]
    }
    else if(this.slug == 'yoga-retreat-in-bali'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment5_z9kgy8.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment1_a0vqv9.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment4_i0fi9r.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment2_mjrvlw.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment3_c6gl16.jpg"
        },

        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-7_kenyos.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-3_poqdc2.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-4_h2gvq3.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-2_gfkblv.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-5_mtunvw.jpg"
        }
      ]
    }
    else if(this.slug == 'yoga-retreat-in-mysore-india'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-7_kenyos.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-3_poqdc2.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-4_h2gvq3.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-2_gfkblv.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-5_mtunvw.jpg"
        }
      ]
    }
    else if(this.slug == 'pranayama-course-online-pranarambha' || this.slug == 'breath-detox-yoga' || this.slug == 'yoga-philosophy-course-free'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment5_z9kgy8.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment1_a0vqv9.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment4_i0fi9r.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment2_mjrvlw.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment3_c6gl16.jpg"
        },
      ]
    }
    else if(this.slug == 'yoga-inversion-workshop-headstand'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/1-head_bbbbjj.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/2-head_vyoye1.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/3-head_k98uvr.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/4-head_xpcuzv.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/5-head_tzxbii.jpg"
        }
      ]
    }
    else if(this.slug == 'yoga-retreat-in-peru'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721312504677.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721289415820.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311791797.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311886867.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311766266.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311780410.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311827169.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311802277.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311845607.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721312842827.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311913094.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311930205.jpeg"
        }
      ]
    }

    else if(this.slug == "pranic-purification"){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/pranic_954A0874.JPG"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/IMG_pranic_20190324_113603_Bokeh.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/pranic_2021.08_22_0273.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/pranic_2021.08_22_0257.jpg"
        }
      ]
    }
  }
  yogaClass(){
    this.selected="yoga";

    if(this.slug == '200-hours-yoga-teacher-training-in-rishikesh'){
      this.displayImages=[
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674054484753.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1676454992240.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674054417400.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1676455034142.JPG"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1676455012568.JPG"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674054397344.jpeg"
        }
      ];
    }
    else if(this.slug == ''){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/ytt_aiodu5.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/100-latest_q7uyg2.jpg"
        }
      ]
    }
    else if(this.slug == '200-hour-yoga-teacher-training-in-bali' || this.slug=='300-hour-yoga-teacher-training-in-bali'){
      this.displayImages= [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-gallry-5_zzyb5j.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-gallry-8_agzvzd.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-gallry-9_pv6tno.jpg"
        },
      ]
    }
    else if(this.slug == '100-hours-yoga-teacher-training-in-rishikesh'){
      this.displayImages= [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674308332559.jpg"
        },
      ]
    }
    else if(this.slug == '200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
      ]
    }
    else if(this.slug == '300-hours-yoga-teacher-training-in-rishikesh'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
      ]
    }
    else if(this.slug == '200-hour-yoga-teacher-training-scholarship-in-rishikesh' || this.slug == '300-hour-yoga-teacher-training-scholarship-in-rishikesh'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
      ]
    }

    else if(this.slug == '200-hour-yoga-teacher-training-in-kerala-india' || this.slug == '300-hour-yoga-teacher-training-in-kerala-india'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
      ]
    }
    else if(this.slug == 'yoga-retreat-in-rishikesh-india' || this.slug == 'yoga-retreat-in-kerala-india'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
      ]
    }
    else if(this.slug == 'pranayama-therapy-course-online' || this.slug == 'adjustment-and-alignment' || this.slug == 'adjustment-and-alignment-level-2' || this.slug == 'yoga-teacher-training-in-india' || this.slug == 'drop-in-yoga-classes' || this.slug == 'pranic-purification'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
      ]
    }
    else if(this.slug == '21-days-ashtanga-yoga-immersion'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/21-days-1_gs2km3.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/21-days-2_ng0ian.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/21-days-3_nkakbr.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/21-days-4_disu7o.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/21-days-5_i5tekk.jpg"
        }
      ]
    }
    else if(this.slug == 'yoga-for-weight-loss'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/wl-1_muamjw.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/wl-2_kk1jfz.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/wl-3_ujupma.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/wl-4_srcxep.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/wl-5_ehinmk.jpg"
        }
      ]
    }
    else if(this.slug == 'yoga-retreat-in-bali'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment5_z9kgy8.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment1_a0vqv9.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment4_i0fi9r.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment2_mjrvlw.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment3_c6gl16.jpg"
        },

        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-7_kenyos.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-3_poqdc2.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-4_h2gvq3.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-2_gfkblv.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-5_mtunvw.jpg"
        }
      ]
    }
    else if(this.slug == 'yoga-retreat-in-mysore-india'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-7_kenyos.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-3_poqdc2.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-4_h2gvq3.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-2_gfkblv.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-5_mtunvw.jpg"
        }
      ]
    }
    else if(this.slug == 'pranayama-course-online-pranarambha' || this.slug == 'breath-detox-yoga' || this.slug == 'yoga-philosophy-course-free'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment5_z9kgy8.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment1_a0vqv9.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment4_i0fi9r.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment2_mjrvlw.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment3_c6gl16.jpg"
        },
      ]
    }
    else if(this.slug == 'yoga-inversion-workshop-headstand'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/1-head_bbbbjj.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/2-head_vyoye1.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/3-head_k98uvr.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/4-head_xpcuzv.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/5-head_tzxbii.jpg"
        }
      ]
    }

    else if(this.slug == 'yoga-retreat-in-peru'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721289415820.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311791797.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311827169.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311913094.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311930205.jpeg"
        }
      ]
    }


  }
  activity(){
    this.selected="activity";

    if(this.slug == '200-hours-yoga-teacher-training-in-rishikesh'){
      this.displayImages=[
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674054461736.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674054447289.jpeg"
        }
      ];
    }
    else if(this.slug == ''){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/about_section_fweev7.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/imp-1_r4y4os.jpg"
        }
      ]
    }
    else if(this.slug == '200-hour-yoga-teacher-training-in-bali' || this.slug=='300-hour-yoga-teacher-training-in-bali'){
      this.displayImages= [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-gallry-4_kxwjlj.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-gallry-5_zzyb5j.jpg"
        },
      ]
    }
    else if(this.slug == '100-hours-yoga-teacher-training-in-rishikesh'){
      this.displayImages= [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674308332559.jpg"
        },
      ]
    }
    else if(this.slug == '200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
      ]
    }
    else if(this.slug == '300-hours-yoga-teacher-training-in-rishikesh'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
      ]
    }
    else if(this.slug == '200-hour-yoga-teacher-training-scholarship-in-rishikesh' || this.slug == '300-hour-yoga-teacher-training-scholarship-in-rishikesh'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
      ]
    }
    else if(this.slug == '200-hour-yoga-teacher-training-in-kerala-india' || this.slug == '300-hour-yoga-teacher-training-in-kerala-india'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
      ]
    }
    else if(this.slug == 'yoga-retreat-in-rishikesh-india' || this.slug == 'yoga-retreat-in-kerala-india'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
      ]
    }
    else if(this.slug == 'pranayama-therapy-course-online' || this.slug == 'adjustment-and-alignment' || this.slug == 'adjustment-and-alignment-level-2' || this.slug == 'yoga-teacher-training-in-india' || this.slug == 'drop-in-yoga-classes' || this.slug == 'pranic-purification'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery1_p2mk26.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery4_nrhzbx.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery2_cse1jf.jpg"
        },
      ]
    }
    else if(this.slug == '21-days-ashtanga-yoga-immersion'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/21-days-1_gs2km3.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/21-days-2_ng0ian.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/21-days-3_nkakbr.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/21-days-4_disu7o.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/21-days-5_i5tekk.jpg"
        }
      ]
    }
    else if(this.slug == 'yoga-for-weight-loss'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/wl-1_muamjw.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/wl-2_kk1jfz.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/wl-3_ujupma.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/wl-4_srcxep.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/wl-5_ehinmk.jpg"
        }
      ]
    }
    else if(this.slug == 'yoga-retreat-in-bali'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment5_z9kgy8.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment1_a0vqv9.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment4_i0fi9r.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment2_mjrvlw.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment3_c6gl16.jpg"
        },

        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-7_kenyos.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-3_poqdc2.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-4_h2gvq3.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-2_gfkblv.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-5_mtunvw.jpg"
        }
      ]
    }
    else if(this.slug == 'yoga-retreat-in-mysore-india'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-7_kenyos.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-3_poqdc2.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-4_h2gvq3.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-2_gfkblv.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-5_mtunvw.jpg"
        }
      ]
    }
    else if(this.slug == 'pranayama-course-online-pranarambha' || this.slug == 'breath-detox-yoga' || this.slug == 'yoga-philosophy-course-free'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment5_z9kgy8.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment1_a0vqv9.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment4_i0fi9r.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment2_mjrvlw.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/gallery-ment3_c6gl16.jpg"
        },
      ]
    }
    else if(this.slug == 'yoga-inversion-workshop-headstand'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/1-head_bbbbjj.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/2-head_vyoye1.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/3-head_k98uvr.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/4-head_xpcuzv.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/5-head_tzxbii.jpg"
        }
      ]
    }
    else if(this.slug == 'yoga-retreat-in-peru'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311780410.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311827169.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311858391.jpeg"
        }
      ]
    }
  }
  food(){
    this.selected="food";
    if(this.slug == '200-hours-yoga-teacher-training-in-rishikesh'){
      this.displayImages=[
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/accomodation_pqonex.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/food_dwn1yl.jpg"
        }
      ];
    }
    else if(this.slug == ''){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/accomodation_pqonex.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/food_dwn1yl.jpg"
        }
      ]
    }
    else if(this.slug == '200-hour-yoga-teacher-training-in-bali' || this.slug=='300-hour-yoga-teacher-training-in-bali'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-gallry-2_dzyejm.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-gallry-3_kr1xcn.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/bali-gallry-10_byjvai.jpg"
        }
      ]
    }
    else if(this.slug == '100-hours-yoga-teacher-training-in-rishikesh'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/accomodation_pqonex.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/food_dwn1yl.jpg"
        }
      ]
    }
    else if(this.slug == '200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/accomodation_pqonex.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/food_dwn1yl.jpg"
        }
      ]
    }
    else if(this.slug == '300-hours-yoga-teacher-training-in-rishikesh'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/accomodation_pqonex.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/food_dwn1yl.jpg"
        }
      ]
    }
    else if(this.slug == '200-hour-yoga-teacher-training-scholarship-in-rishikesh' || this.slug == '300-hour-yoga-teacher-training-scholarship-in-rishikesh'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/accomodation_pqonex.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/food_dwn1yl.jpg"
        }
      ]
    }
    else if(this.slug == '200-hour-yoga-teacher-training-in-kerala-india' || this.slug == '300-hour-yoga-teacher-training-in-kerala-india'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/accomodation_pqonex.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/food_dwn1yl.jpg"
        }
      ]
    }
    else if(this.slug == 'yoga-retreat-in-kerala-india' || this.slug == 'yoga-retreat-in-rishikesh-india'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/accomodation_pqonex.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/food_dwn1yl.jpg"
        }
      ]
    }
    else if(this.slug == 'pranayama-therapy-course-online' || this.slug == 'adjustment-and-alignment' || this.slug == 'adjustment-and-alignment-level-2' || this.slug == 'yoga-teacher-training-in-india' || this.slug == 'drop-in-yoga-classes' || this.slug == 'pranic-purification' || this.slug == '21-days-ashtanga-yoga-immersion' || this.slug == 'yoga-for-weight-loss' || this.slug == 'yoga-retreat-in-bali' || this.slug == 'yoga-retreat-in-mysore-india'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/accomodation_pqonex.jpg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/images/food_dwn1yl.jpg"
        }
      ]
    }
    else if(this.slug == 'yoga-retreat-in-peru'){
      this.displayImages = [
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311886867.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311766266.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721311802277.jpeg"
        },
        {
          image:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721312842827.jpeg"
        }
      ]
    }
  }
  ngOnInit() {
    this.allData();
  }

}

interface image{
  image: string;
}
