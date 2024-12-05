import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-includes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './includes.component.html',
  styleUrls: ['./includes.component.css']
})
export class IncludesComponent implements OnInit {
  @Input() data:any
  amenities:item[] = [];
   not_includes:item[] = [];
   image:any='https://my-s3-images-bucket.s3.amazonaws.com/images/inschool-yoga_retreat_doaezs.jpg';
   courseFee:any='';
   courseText:any='';
   hideIncludeSection = false;
  slug: any='';
  feesData: any;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path

    if(this.slug == '200-hour-yoga-teacher-training-in-bali'){
      this.courseText = 'Yoga Training Bali';

      this.amenities = [
        { text: "21 nights shared room accommodation with attached bathroom." },

        { text: "Accommodation and Food at beautiful Ahamta retreat, Jl. Sri Wedari No.46, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571, Indonesia " },
        { text: "24x7 Filtered drinking water and hot water." },
        { text: "Well-designed Course Material." },
        { text: "Shat Kriyas or Yogic Cleansing Kit." },
        { text: "Three nutritious organic meals per day" },
        { text: "Cultural Trips and Excursions" },
        { text: "WiFi and Beautiful sitting area to study and spend quality Me-time" },
        { text: "On-call Doctor and Emergency Services." }

      ];
       this.not_includes = [
        { text: "Additional Charges for Private Room - $400 USD." },
        { text: "Additional Charges for Pick and Drop and for any taxi service " },
      ];

      this.image = 'https://my-s3-images-bucket.s3.amazonaws.com/images/FERN8247_mp1qxh.jpg';

    }
    else if(this.slug == '200-hours-yoga-teacher-training-in-rishikesh' || this.slug == '100-hours-yoga-teacher-training-in-rishikesh' || this.slug=='200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh' || this.slug=='300-hours-yoga-teacher-training-in-rishikesh' || this.slug=='200-hour-yoga-teacher-training-scholarship-in-rishikesh' || this.slug=='300-hour-yoga-teacher-training-scholarship-in-rishikesh' || this.slug=='200-hour-yoga-teacher-training-in-kerala-india' || this.slug=='300-hour-yoga-teacher-training-in-kerala-india' || this.slug == 'pranayama-therapy-course-online' || this.slug == 'yoga-teacher-training-in-india' || this.slug == 'drop-in-yoga-classes'){
      this.amenities = [
        { text: "28 nights shared room accommodation with attached bathroom." },

        { text: "24x7 Filtered drinking water and hot water." },
        { text: "Well-designed Course Material." },
        { text: "Beautiful Bag and School T-shirt." },
        { text: "Shat Kriyas or Yogic Cleansing Kit." },
        { text: "Three nutritious organic meals per day, plus Indian Masala Chai for morning and evening." },
        { text: "Cultural Trips and Excursions that include sunrise trek in Himalayas and visit to spiritual caves, ashrams, waterfalls and nearby villages." },
        { text: "WiFi and Beautiful sitting area to study and spend quality Me-time" },
        { text: "On-call Doctor and Emergency Services." }

      ];
       this.not_includes = [
        { text: "Additional Charges for Private Room $200 USD." },
        { text: "Additional Charges for Air Conditioning Room $150 USD." },
        { text: "Additional Charges for Pick and Drop and for any taxi services." },
      ];
    }
    else if(this.slug == 'adjustment-and-alignment' || this.slug == 'adjustment-and-alignment-level-2'){
      this.amenities = [ { text: "" }];
      this.hideIncludeSection = true;
      this.not_includes = [
        { text: "Additional Charges for Private Room $200 USD." },
        { text: "Additional Charges for Air Conditioning Room $150 USD." },
        { text: "Additional Charges for Pick and Drop and for any taxi services." },
      ];
    }
    else if(this.slug == 'yoga-retreat-in-rishikesh-india' || this.slug == 'yoga-retreat-in-kerala-india'){
      this.amenities = [
        { text: "24x7 Filtered drinking water and hot water." },
        { text: "Well-designed Course Material." },
        { text: "Beautiful Bag and School T-shirt." },
        { text: "Shat Kriyas or Yogic Cleansing Kit." },
        { text: "Three nutritious organic meals per day, plus Indian Masala Chai for morning and evening." },
        { text: "Cultural Trips and Excursions that include sunrise trek in Himalayas and visit to spiritual caves, ashrams, waterfalls and nearby villages." },
        { text: "WiFi and Beautiful sitting area to study and spend quality Me-time" },
        { text: "On-call Doctor and Emergency Services." }

      ];
       this.not_includes = [
        { text: "Additional Charges for Private Room $200 USD." },
        { text: "Additional Charges for Air Conditioning Room $150 USD." },
        { text: "Additional Charges for Pick and Drop and for any taxi services." },
      ];
    }
    else if(this.slug == '300-hour-yoga-teacher-training-in-bali'){
      this.amenities = [
        { text: "28 nights shared room accommodation with attached bathroom." },

        { text: "Accommodation and Food at beautiful Ahamta retreat, Jl. Sri Wedari No.46, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571, Indonesia" },
        { text: "24x7 Filtered drinking water and hot water." },
        { text: "Well-designed Course Material." },
        { text: "Shat Kriyas or Yogic Cleansing Kit." },
        { text: "Three nutritious organic meals per day" },
        { text: "Cultural Trips and Excursions " },
        { text: "WiFi and Beautiful sitting area to study and spend quality Me-time" },
      ];
       this.not_includes = [
        { text: "Additional Charges for Private Room - $400 USD." },
        { text: "Additional Charges for Pick and Drop and for any taxi service" },
      ];
      this.image = 'https://my-s3-images-bucket.s3.amazonaws.com/images/FERN8247_mp1qxh.jpg';


    }
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges):void {
    this.feesData = changes['data'].currentValue;
  }

}

interface item{
  text: string;
}
