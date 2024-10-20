import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-yoga-alliance',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './yoga-alliance.component.html',
  styleUrls: ['./yoga-alliance.component.css']
})
export class YogaAllianceComponent implements OnInit {
  @Input() data:any
  slug:any='';
  noContent:boolean=false;
  title: any='';
  content:any='';

  constructor(private router: Router, private activatedRoute: ActivatedRoute,protected sanitizer: DomSanitizer) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;
    if(this.slug == '100-hours-yoga-teacher-training-in-rishikesh'){
      this.noContent = true;
      this.content = `
      <p style="font-size:18px">
      Yoga Vidya School offers a Yoga Alliance USA certified 100-Hour Yoga Teacher Training Course in Rishikesh. This yoga training is suitable for beginners in yoga who want to get familiar with yogic practices. The training also serves as groundwork for the more intensive and advanced Yoga TTCs. Nestled in the Himalayan foothills in the holy town of Rishikesh, Yoga Vidya School offers a program that embodies the spiritual essence of Rishikesh. Besides, the 100 hours yoga teacher training in Rishikesh is Yoga Alliance USA certified which gives a head start to  anyone who aspires to become seasoned yoga practitioners and teachers.
      </p>
        <p style="font-size:18px">
        Yoga Alliance, USA, is a global body that sets guidelines and standards for yoga teacher training courses like the 100 hours yoga ttc in Rishikesh and such other courses across the world.  This non-profit regulatory body lays down ethical guidelines as well as outlines Code of Conduct protocols  for yoga organizations across the world.
      </p>
        <p style="font-size:18px">
        Receiving a Yoga Alliance accreditation helps yoga professionals gain credibility and value for their education in yoga. It's valued as a credible accomplishment that aspiring yoga teachers can proudly showcase at an international level.
For continued education in yoga and after having successfully completed the 100 hours yoga ttc in Rishikesh, you can now enroll into the more in-depth and foundational 200-hour Yoga TTC in Rishikesh at Yoga Vidya School.
      </p>
      `
    }
    else if(this.slug == '200-hours-yoga-teacher-training-in-rishikesh'){
      this.noContent = true;
      this.content = `
            <p style="font-size:18px">
        Yoga Alliance is a non-profit organisation that sets standards for yoga
        teacher training courses, schools and yoga community around the world.
        They do not provide the yoga training directly to students or
        practitioners but lay down the guidelines and standards for the syllabus
        to follow in these month-long yoga teacher training in India or anywhere
        else. Yoga Alliance Website also maintains the data of the registered
        yoga teachers who have completed their 200 Hours from the certified yoga
        schools like Yoga Vidya School.Registering with the Yoga Alliance is an
        important step for many yoga teachers and yoga industry professionals
        these days. It certifies them to teach and get yoga teaching jobs at
        various retreat and yoga teacher training centres. Its an
        accomplishment, a degree or a badge of honor to display in the
        professional world of Yoga Community around the globe.
      </p>
      <p style="font-size:18px">
        After successfully completing 4 weeks or the 200 hours of our Yoga
        Course in Rishikesh, you will receive a Yoga Alliance Certificate that
        allows you to register with Yoga Alliance and teach yoga internationally
        with a badge of RYT200.
      </p>
      `
    }
    else if(this.slug == '300-hours-yoga-teacher-training-in-rishikesh'){
      this.noContent = true;
      this.content = `
      <p style="font-size:18px">
      The 300 Hour Yoga Teacher Training in Rishikesh at Yoga Vidya School is a certified program with Yoga Alliance USA. It is an advanced course that you can join after you have successfully completed the foundational 200 hours yoga teacher training course. This yoga course is for those individuals who are physically and mentally fit and want to further deepen their practice by learning advanced yoga skills as they pave the way for self-realization.
      </p>
      <p style="font-size:18px">
      Yoga Alliance is a non-profit organization that oversees yoga activities around the world. Although it is not directly involved in conducting yoga teacher training programs, it is instrumental in defining guidelines and chalking out an outline for Yoga TTCs to be followed by yoga schools around the globe. Besides, individuals who complete their yoga teacher training programs from accredited schools like Yoga Vidya School can register themselves as an RYT or a Registered Yoga Teacher with Yoga Alliance. Since, Yoga Alliance is a regulatory body, you can find data of registered yoga teachers  (RYT) and registered yoga schools (RYS) on its portal.
      </p>
      <p style="font-size:18px">
      Yoga Vidya School fulfills all the curriculum as well as training requirements as outlined by Yoga Alliance, USA. In lieu of this, our school offers advanced practices pertaining to asanas, yogic breathing and meditation techniques. Students learn in depth yogic philosophy through immersing in ancient traditions and yoga texts. Furthermore, there are advanced learning sessions on physiology and anatomy, different Shatkarmas or yogic cleansing practices, and advanced ayurveda sessions. Besides, refined teaching methodologies empower students with skills like creative sequences and demonstrations thereby making them confident yoga professionals.
      </p>
      <p style="font-size:18px">
      The Yoga Alliance certification is an acclaimed credential that you can proudly display in the professional world of Yoga Community across the world.
As an RYT, you can now teach yoga on an international platform catering to yoga teacher and yoga instructor requirements at yoga studios, yoga schools, gyms and wellness centers, corporates and hospitals.
      </p>
      `
    }
    else if(this.slug == '200-hour-yoga-teacher-training-in-bali'){
      this.noContent = true;
      this.content = `
      <p style="font-size:18px">
The 200 Hour Yoga Teacher Training in Bali at Yoga Vidya School is a certified and registered course with Yoga Alliance USA.
Get fundamental knowledge of timeless yoga practices amidst the lush landscapes of Bali.  Our deeply invigorating 200 hour yoga teacher training in Bali course is a life transformative course specifically targeted towards aspiring yogis and yoginis who want to deepen their practice of yoga amidst the stunning locales of Bali.
      </p>
      <p style="font-size:18px">
      Our 200 Hour Yoga Teacher Training in Bali program is a comprehensive course with a well-designed curriculum encompassing the most updated knowledge of yoga practices. Besides, our 200 hour yoga teacher training in Bali course meets all the expectations and criteria as laid down by Yoga Alliance, USA,  an apex, regulatory organization that sets standards for different levels of yoga teacher training courses and broadly outlines the curriculum to be followed in these intensive yoga TTC courses. Yoga Alliance USA can also be looked upon as a global community of yoga professionals who can share knowledge as well as access the latest techniques and knowledge on yoga.
      </p>
       <p style="font-size:18px">
       Yoga Alliance also displays data of Registered Yoga Schools or RYS and certified yoga professionals (RYT) worldwide on its website. So, upon successful completion of your 200 Hour Yoga Teacher Training in Bali from a certified yoga school like Yoga Vidya School, you promptly become eligible to register as an RYT on the Yoga Alliance USA website.
Empowered with a badge of an RYT200, you can now begin teaching yoga internationally.
      </p>
      `
    }
    else if(this.slug == '300-hour-yoga-teacher-training-in-bali'){
      this.noContent = true;
      this.content = `
      <p style="font-size:18px">
The 300 hour yoga teacher training in bali at Yoga Vidya School is an accredited and registered course with Yoga Alliance USA. You can enroll into this advanced yoga training once you have completed the foundational 200 hours yoga teacher training program.
      </p>
      <p style="font-size:18px">
Immerse in in-depth yoga practices amidst the spell-binding countryside of Bali. Our profoundly enriching 300 hour yoga teacher training in Bali course is a positively transformative program designed for seasoned practitioners who want to further delve into the realms of yoga amidst the tranquil beauty and serenity of Bali.
Our 300 hour yoga ttc in bali is a holistic program with a detailed curriculum encompassing advanced yoga practices. From advanced Hatha yoga and Ashtanga Yoga practices to deep diving into ancient texts and scriptures, our classroom as well as yoga sessions are deeply rooted in authentic and traditional practices. From Shatkarmas, advanced Ayurveda sessions, deep meditative and advanced pranayama techniques to niche and advanced teaching techniques, we help bring out the best in you.
Besides, our course fulfills all the criteria laid down by Yoga Alliance, USA, which is a regulatory organization that defines standards for different levels of yoga teacher training courses and broadly outlines the curriculum to be followed in these 4-week long yoga TTC courses. Yoga Alliance also maintains data of Registered Yoga Schools or RYS and certified yoga professionals (RYT) across the world on its website.
</p>
<p style="font-size:18px">
So, once you successfully complete the 300 Hour Yoga Teacher Training in Bali from certified institutions like Yoga Vidya School, you become eligible to register as an RYT on the Yoga Alliance USA online portal.
Empowered with our globally valid Yoga Alliance USA certified program, embark on a rewarding and fulfilling journey as you transform others’ lives and achieve your own personal goals.
</p>
      `
    }
    else if(this.slug == '200-hour-yoga-teacher-training-in-kerala-india'){
      this.noContent = true;
      this.content = `
      <p style="font-size:18px">
      Yoga Vidya School welcomes all aspiring yogis and yoginis to deep-dive into the spiritual labyrinths by partaking in the Yoga Alliance USA certified 200-Hour Yoga Teacher Training in Kerala. Experience profound spirituality as you immerse yourself into the arena of ancient yogic practices. Reconnect with your inner light as you practice asanas in sync with nature.
      </p>
      <p style="font-size:18px">
      Yoga Vidya School offers this 200 Hour Yoga TTC that is certified and accredited by Yoga Alliance, USA, a global, non-profit organization that defines standards and guidelines to be followed  for yoga teacher training programs across the world. The global body also lays down ethical guidelines and outlines standard protocols for yoga schools and the yoga community worldwide.
Yoga Alliance USA defines a broad outline of curriculum to be followed in the month long Yoga Teacher Training courses across the world. Yoga Alliance website displays information and data of those yoga teachers who have registered as an RYT (Registered Yoga Teachers) having successfully completed the 200 hour yoga teacher training course from a certified yoga school such as Yoga Vidya School.
      </p>
      <p style="font-size:18px">
      Earning a Yoga Alliance certification enhances the value and credibility of yoga professionals and yoga institutions across the globe. It's looked upon as a meritorious certification and a credible accomplishment that yogis can present at an international level.
After successfully completing the 200 hour yoga teacher training in Kerala and earning  the acclaimed Yoga Alliance certification , yoga practitioners can now teach yoga  globally.
      </p>
      `
    }
    else if(this.slug == '300-hour-yoga-teacher-training-in-kerala-india'){
      this.noContent = true;
      this.content = `
      <p style="font-size:18px">The 300 Hour Yoga Teacher Training in Kerala at Yoga Vidya School is an recognised and registered course with Yoga Alliance USA. You can join this advanced yoga training after completing the fundamental 200 hours yoga teacher training program. </p>
      <p style="font-size:18px">
Yoga Alliance USA is a non-profit global yoga body that oversees and regulates yoga activities across the world. It outlines standards and guidelines to be followed for different levels of yoga teacher training courses. Yoga Alliance is not directly involved in the operational aspects of  these teacher training programs. But, it maintains data of certified institutions or Registered Yoga Schools (RYS)  and certified yoga professionals or Registered Yoga Teachers (RYT) across the world.
      </p>
      <p style="font-size:18px">
So, once you successfully complete the 300 Hour Yoga Teacher Training in Kerala from Yoga Alliance accredited yoga schools like Yoga Vidya School, you can promptly  register as an RYT on the Yoga Alliance USA website. The Yoga Alliance certification  is a badge of honor that you can proudly  display in the global yoga community. You can embark on your yoga teaching career by teaching yoga at yoga studios, yoga schools, wellness and retreats  across the world with a badge of RYT 300.</p>
      `
    }
    else if(this.slug == '100-hours-yoga-teacher-training-in-rishikesh'){
      this.noContent = true;
      this.content = `
      <p style="font-size:18px">Yoga Vidya School offers a Yoga Alliance USA certified 100-Hour Yoga Teacher Training Course in Rishikesh.</p>
      <p style="font-size:18px">
   Yoga Alliance, USA is a non-profit  global body that sets guidelines and standards for yoga teacher training courses like the 100 hours yoga ttc in Rishikesh and such other courses across the world. regulates yoga activities worldwide. This non-profit regulatory body lays down ethical guidelines as well as outlines Code of Conduct protocols  for yoga organizations across the world. Yoga Alliance USA also designs a broad curriculum outline  that needs to be followed in the 100  hours Yoga Teacher Training Courses across the world. Yoga Alliance online portal displays  data of all the yoga teachers who are certified and have registered as an RYT (Registered Yoga Teachers) after successfully completing the 100 hour yoga teacher training course in Rishikesh from a Yoga Alliance registered school such as Yoga Vidya School.
      </p>
      <p style="font-size:18px">Receiving a Yoga Alliance accreditation helps yoga professionals gain credibility and value for their education in yoga. It's valued as a credible accomplishment that aspiring yoga teachers can proudly showcase at an international level. </p>
      <p style="font-size:18px">After successfully completing the 100 hours yoga ttc in Rishikesh and earning  the highly credible Yoga Alliance certification , yoga practitioners can now work as yoga professionals teaching  yoga at yoga studios, yoga schools,  retreat centers, hospitals and more such  places across the world.</p>
      `
    }
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges):void {
    // this.curriculum = changes['data'].currentValue.curr;
    if(changes['data'].currentValue){
      this.title = changes['data'].currentValue.title
    }
    //  console.log(changes['data'].currentValue);

  }

}
