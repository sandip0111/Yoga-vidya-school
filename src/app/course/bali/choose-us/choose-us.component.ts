import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-choose-us',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.css']
})
export class ChooseUsComponent implements OnInit {
  @Input() data:any;
  slug:any='';
  chooseData:any={};
  noContent:boolean=false;
  title: any='';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;
    if(this.slug == '200-hour-yoga-teacher-training-in-bali'){
     this.chooseData = {
       firstImage:"https://my-s3-images-bucket.s3.amazonaws.com/images/why_choose_qzrecb.webp",
       secondImage:"https://my-s3-images-bucket.s3.amazonaws.com/images/954A9000_fhwxat.jpg",
       content:'Yoga Vidya School offers top-notch 200 Hour Yoga teacher training in Bali. Led by Acharya Prashant Jakhmola, Yoga Vidya School is a Yoga Alliance certified institution offering quality training in yoga. We at Yoga Vidya School can give you a number of reasons for choosing us as your preferred place to learn yoga.',
       list:["Ideal Combination of Tradition and Modern Practices: Seamlessly integrate age-old yogic knowledge with today’s evolved practices and imbibe them effortlessly in modern lifestyle","Detailed Curriculum: A comprehensive syllabus with detailed modules dedicated to different styles of  asana practice, immersive pranayama and meditation and , deeply engaging ancient philosophy teachings","Dedicated Yoga Masters: Understand and learn different yoga practices from yoga teachers who have graduated from credible, world-known yoga institutions. The yoga teachers at Yoga Vidya School are experts in their respective departments and committed towards providing you  traditional and authentic yoga knowledge.","Supportive Environment: At Yoga Vidya School, aspiring yogis and yoginis understand the nuances of yoga in a nurturing environment that enhances learning outcomes","Access to Online Courses: Enrich your yoga knowledge and enhance your physical asana  practice by getting access to a plethora of online yoga courses."]
     }
    }
    else if(this.slug == '300-hour-yoga-teacher-training-in-bali'){
      this.chooseData = {
        firstImage:"https://my-s3-images-bucket.s3.amazonaws.com/images/why_choose_qzrecb.webp",
        secondImage:"https://my-s3-images-bucket.s3.amazonaws.com/images/954A9000_fhwxat.jpg",
        content:'Yoga Vidya School prides itself in offering the best quality 300 Hour Yoga teacher training in Bali. Guided and spearheaded by Acharya Prashant Jakhmola, Yoga Vidya School is a Yoga Alliance accredited organization that offers best-in-class education in yoga. We offer you a multitude of reasons for choosing us as your preferred institution to learn yoga.',
        list:["Optimal Blend of Heritage and Contemporary Practices: Effortlessly combine ancient wisdom of yoga with present-day trends and practices and integrate these seamlessly in today’s lifestyle","Exhaustive Curriculum: An extensive syllabus with dedicated modules on physical asana practice, immersive pranayama and meditation and ancient philosophy learnings","Unflinching Support of Yoga Masters: Learn yoga from yoga experts who are graduates from renowned institutions. The yoga teachers at Yoga Vidya School are masters in their niche yoga departments and dedicated towards offering you authentic and traditional yoga practices.","Conducive Environment: At Yoga Vidya School, yoga aspirants can look forward to a conducive and nurturing environment for gaining yogic wisdom of the body, mind and soul.","Access to Online Learning: Enhance your  knowledge and yoga practice by gaining access to different online yoga literature and courses."]
      }
     }
    else if(this.slug == '200-hours-yoga-teacher-training-in-rishikesh'){
      this.chooseData = {
        firstImage:"https://my-s3-images-bucket.s3.amazonaws.com/images/why_choose_qzrecb.webp",
        secondImage:"https://my-s3-images-bucket.s3.amazonaws.com/images/choose2_uumhfx.jpg",
        content:'We at Yoga Vidya School offer the best-in-class 200 Hour Yoga teacher training in Rishikesh. Helmed by Acharya Prashant Jakhmola, Yoga Vidya School is a Yoga Alliance accredited institution imparting quality education in yoga. We give you innumerable reasons for choosing us as your preferred almamater to learn yoga.',
        list:["Blend of Tradition and Modernity: Seamlessly integrates ancient yoga traditions with modern day practices to understand easily and apply on current lifestyle.","Comprehensive Curriculum: Rich curriculum with equal emphasis on philosophy and meditation practices along with Asanas.","Dedicated Yoga Masters: Graduates from top yoga ashrams and universities, learn with the teachers who are living yoga and dedicated to preserve the authenticity of traditional yoga.","Supportive Environment: At Yoga Vidya School, students can enjoy nurturing and supportive atmosphere for personal and professional growth.","Get Access to numerous valuable online courses to enhance your knowledge and practice."]
      }
    }
    else if(this.slug == '300-hours-yoga-teacher-training-in-rishikesh'){
      this.chooseData = {
        firstImage:"https://my-s3-images-bucket.s3.amazonaws.com/images/why_choose_qzrecb.webp",
        secondImage:"https://my-s3-images-bucket.s3.amazonaws.com/images/choose2_uumhfx.jpg",
        content:'We at Yoga Vidya School invite you to join our 300 Hour Yoga Teacher Training in Rishikesh. We offer  top quality 300 hour YTTC in Rishikesh that will further hone your skills as a yoga teacher. Headed by Acharya Prashant Jakhmola, we are a Yoga Alliance accredited yoga school imparting best-in-class education in yoga. We offer a number of reasons for choosing us as your most favored yoga school to learn yoga.',
        list:["Exhaustive Curriculum: We offer a comprehensive curriculum that covers each subject in great detail.","A Fusion of Traditional Wisdom and Contemporary Trends:  Seamlessly combines age-old yogic knowledge with present-day practices to bring about holistic changes in the current lifestyle","Committed Yoga Teachers: Learn authentic yoga practices from teachers who have graduated from renowned universities and Yoga Ashrams having several years of experience as dedicated yoga teachers.","Nurturing Environment: Yoga Vidya School believes in offering a supportive learning environment for professional and personal growth of students","Access to Online Learning: Enrich your knowledge and deepen your yoga practice with access to a number of valuable online courses."]
      }
    }
    else if(this.slug == '200-hour-yoga-teacher-training-in-kerala-india'){
      this.chooseData = {
        firstImage:"https://my-s3-images-bucket.s3.amazonaws.com/images/why_choose_qzrecb.webp",
        secondImage:"https://my-s3-images-bucket.s3.amazonaws.com/images/choose2_uumhfx.jpg",
        content:'Yoga Vidya School believes in offering best-in-class 200 Hour Yoga teacher training in Kerala. Helmed by Acharya Prashant Jakhmola, all Yoga TTC programs of Yoga Vidya School are certified by Yoga Alliance, USA entailing quality training in yoga. We at Yoga Vidya School enlist a multitude of reasons for selecting us as your place of choice to learn yoga.',
        list:["Ideal Blend of Heritage and Contemporary Practices:  Effortlessly combines traditional  knowledge of yoga with present day scientific knowledge and integrate these in modern lifestyle","Detail-Oriented Curriculum: An exhaustive curriculum with different chapters and modules dedicated to various formats of yoga asanas, profoundly immersive  meditation and pranayama practices , evolution of yoga and classical philosophy lessons","Committed Yoga Masters: Practice various yoga asanas and gain deep knowledge of different yogic practices guided by yoga instructors who are yoga graduates from renowned yoga shalas and Ashrams. Yoga Vidya School prides itself in having a team of experts in niche yoga practices and dedicated towards offering you  authentic knowledge on yoga.","Nurturing Environment:  Yoga Vidya School offers a nurturing and supportive environment to aspiring yoga teachers that enhances learning outcomes","Online Access to Courses: Enhance your yoga knowledge and deepen your asana  practice by  accessing different yoga courses made available online."]
      }
    }
    else if(this.slug == '300-hour-yoga-teacher-training-in-kerala-india'){
      this.chooseData = {
        firstImage:"https://my-s3-images-bucket.s3.amazonaws.com/images/why_choose_qzrecb.webp",
        secondImage:"https://my-s3-images-bucket.s3.amazonaws.com/images/choose2_uumhfx.jpg",
        content:'Yoga Vidya School offers top-notch 300 Hour Yoga teacher training in Kerala. Spearheaded by Acharya Prashant Jakhmola, Yoga Vidya School is a Yoga Alliance certified yoga institution offering world-class education in yoga. We give you a number of reasons for choosing us as your trusted partner in learning yoga.',
        list:["Optimal Blend of Tradition and Present-Day Practices: Seamlessly blend traditional knowledge of yoga with modern practices and sync them in today’s lifestyle.","Intensive  Curriculum: A comprehensive syllabus with different chapters and modules dedicated to physical asana practice,  pranayama and meditation and age-old philosophical wisdom","Committed Yoga Masters: Yoga Vidya School has a team of well regarded yoga teachers  who are masters in  niche yoga skills and committed towards providing a truly authentic  yoga experience.","Conducive Environment: Yoga Vidya School offers a supportive and conducive environment to learn and ace various Yogic Practices.","Access to Online Courses: Enrich your  knowledge of ancient yogic practices by  accessing a plethora of online yoga  courses."]
      }
    }

    else if(this.slug == '100-hours-yoga-teacher-training-in-rishikesh'){
      this.chooseData = {
        firstImage:"https://my-s3-images-bucket.s3.amazonaws.com/images/why_choose_qzrecb.webp",
        secondImage:"https://my-s3-images-bucket.s3.amazonaws.com/images/choose2_uumhfx.jpg",
        content:'Yoga Vidya School offers a superior  100 Hour Yoga teacher training course in Rishikesh. Founded by Acharya Prashant Jakhmola, all Yoga TTC courses of Yoga Vidya School are Yoga Alliance, USA certified ensuring credibility and quality training in yoga. We at Yoga Vidya School can give you a good amount of rationale for choosing us for pursuing a 100 hours yoga ttc in Rishikesh.',
        list:["Optimal Mix of Tradition and Contemporary Practices:  Seamlessly blends classical  knowledge of yoga with modern day practices  and introduce these in today’s lifestyle","Updated Curriculum: An updated  curriculum that includes various  modules dedicated to Hatha and Ashtanga Vinyasa practices,  immersive pranayama and meditation practices, origins and history of yoga along with core yogic ideas and concepts.","Dedicated Yoga Teachers: Get introduced to Hatha and Ashtanga Vinyasa yoga asanas and gain knowledge of other practices in yoga guided by expert yoga teachers. Yoga Vidya School has  a team of yoga teaching faculties who are experts in their niche yoga departments and committed to offering you knowledge in authentic yoga practices.","Supportive Environment:  Yoga Vidya School offers an amiable and supportive environment to aspiring yogis and yoginis that ensure positive learning outcomes","Access to Online Courses: Gain fundamental and foundational yoga knowledge  by  getting access to different online yoga courses."]
      }
    }
    else{
      this.noContent = true;
    }
  }

  ngOnChanges(changes: SimpleChanges):void {
    // this.curriculum = changes['data'].currentValue.curr;
    if(changes['data'].currentValue){
      this.title = changes['data'].currentValue.title
    }
    //  console.log(changes['data'].currentValue);

  }

  ngOnInit() {
  }

}
