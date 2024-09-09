import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certified-yoga',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './certified-yoga.component.html',
  styleUrls: ['./certified-yoga.component.css']
})
export class CertifiedYogaComponent implements OnInit {

  cerData:any;
  slug: any = '';
  noContent: boolean=false;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;

    if(this.slug == '200-hours-yoga-teacher-training-in-rishikesh'){
      this.cerData = {
        title1:"Become A Skilled Practitioner and a Certified Yoga Teacher in 28 Days",
        title2:"Extraordinary Multi-Style, Exposure to 14+ Yogic Subjects in One course",
        img1:"https://my-s3-images-bucket.s3.amazonaws.com/images/about_section_fweev7.jpg",
        img2:"https://my-s3-images-bucket.s3.amazonaws.com/images/about_section_fweev7.jpg",
        desc1:"<p>The main focus of this yoga course is to make every student a dedicated and great yoga practitioner. Becoming a good practitioner of yoga before becoming a yoga teacher is important for many reasons. A solid yoga practice connects you to the roots of yoga, embodying and embracing the essence of yoga, which impacts your energy, confidence and effectiveness as a Yoga Teacher. Every lesson in our 200 Hour YTTC in Rishikesh forms the foundation of self practice on which authentic and effective teaching is built.</p><p>In addition to mastering the correct Asana, Pranayama and Meditation practice, this certified yoga training fosters a deep understanding of principles and philosophies of ancient Yoga traditions. Our special Yoga Teaching and Methodology sessions enable the students gain clarity in sequencing, instructions, connect and adjust their students in a safe and nurturing environment.</p>",
        desc2:"<p>In this Yoga training course, you will get more than 14 subjects, which will cover the ancient secrets of Yogic Life that can use in your daily living to balance personal life, social life (family) and spiritual life. The foundation of 200 hour yoga teacher training course in rishikesh is based on the research of human alignment functional Asana and the variations that happen within the adjustments.<p><p>Subjects are the soul of any educational program or course. That is why we have chosen the subjects after through research, which are very important for every Practitioner of yoga. The study of these subjects prepares every student to become a great yoga teacher or human being.</p>",
      };
    }
    else if(this.slug == '100-hours-yoga-teacher-training-in-rishikesh'){
      this.noContent = true;
    }
    else if(this.slug == '200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh'){
      this.noContent = true;
    }
    else if(this.slug == '300-hours-yoga-teacher-training-in-rishikesh'){
      this.noContent = true;

    }
    else if(this.slug == '200-hour-yoga-teacher-training-scholarship-in-rishikesh'){
      this.cerData = {
        title1:"Our 200 Hour Yoga Teacher Training Scholarship Program Overview",
        title2:"Things You Will Discover In 200 Hour Yoga Teacher Training",
        img1:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1681706500033.jpg",
        img2:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1681706520699.jpg",
        desc1:`<p>The <em>200 hour yoga teacher training scholarship program in Rishikesh</em> is for all those aspiring yoga teachers who wish to commence their yoga career, learn yoga skills, and deepen their practice without any financial burden. Through our scholarship program:</p><ol>
	<li>Avail free tuition with nominal charges for accommodation and food</li>
	<li>Get yoga course materials, classroom teaching, outdoor practicals, and expert guidance for free</li>
	<li>Get access to Wi-Fi, studying and seating areas, and other such places</li>
	<li>Learn about the fundamentals of practicing and teaching yoga including Ashtanga and Hatha Asanas, Pranayama, Meditation, Yoga Philosophy, Yoga Anatomy &amp; Physiology, Sequencing &amp; Teaching Methodology and more</li>
	<li>Learn how to create balance in life and bring your mind, body, and soul in harmony with each other using Vedic Traditions.</li>
	<li>Practise different styles of Mantra chanting and Mudras.</li>
	<li>Receive a Yoga Alliance Certification on the completion of 200 hour yoga teacher training in Rishikesh</li>
	<li>Get expert guidance under the supervision of highly-qualified and respected gurus and teachers who have dedicated their lives to the yogic sphere of the universe</li>
	<li>Become a Yoga Alliance certified teacher and take your first step towards a successful career as Yoga Teacher or Yoga Instructor</li>
</ol>`,
        desc2:`
        <p>The 200 hour yoga teacher training scholarship in Rishikesh is a yoga certification comprehensive training program that helps you get deep insights into the world of yoga teaching. The curriculum has been designed to fit the needs of all the students. Hence, during the course, you will discover:</p>
        <ol>
	<li>Fundamentals of yoga styles include Ashtanga Yoga, Hatha Yoga, Yin Yoga, Vinyasa Yoga, etc.</li>
	<li>Bandhas and how to perform them flawlessly</li>
	<li>How to keep Drishti (vision) focused in your life</li>
	<li>The significance of pranayama and why it is important for mindfulness</li>
	<li>Scriptures about yoga anatomy and yoga philosophy</li>
	<li>How to meditate and get rid of emotional stress, anxiety, depression, etc.</li>
	<li>Ways to chant holy mantras and how they help in attaining peace and calmness</li>
	<li>Yoga asanas, chakras, yoga sutras, kriyas, and pranic science</li>
	<li>The foundations and preliminaries of teaching methodology and the appropriate use of voice and language</li>
	<li>Learn how to fight chronic illness and other disorders with the help of Ayurvedic food</li>
	<li>Understand yoga ethics, moral values, and creative mindset in detail</li>
</ol>`,
      };

    }
    else if(this.slug == '300-hour-yoga-teacher-training-scholarship-in-rishikesh'){
      this.cerData = {
        title1:"Overview of Our 300 Hour Yoga Teacher Training Scholarship Program",
        title2:"Who Is Eligible to Partake in the Scholarship Program?",
        img1:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1681707215654.jpg",
        img2:"https://my-s3-images-bucket.s3.amazonaws.com/img/image_1681707242378.JPG",
        desc1:`<p>The 300-hour yoga teacher training scholarship program at Yoga Vidya School has been initiated so that money doesn’t act as a hindrance to your yogic evolution. With the help of our scholarship:</p><ol>
	<li>Refine your yoga practise and learn in detail about the levels of Hatha Yoga and Ashtanga Yoga</li>
	<li>Learn how to perform yoga asanas, bandhas, mudras, meditation, etc. over your 300-hour course</li>
	<li>Avail free tuition fee with nominal charges for 28 days of shared accommodation and three nutritious meals per day</li>
	<li>Get access to a comprehensive curriculum with free yoga materials, guided teaching, and outdoor practise sessions</li>
	<li>Learn how to surrender to spirituality and simplicity during your ashram life</li>
	<li>Go on weekly excursions to temples, spiritual sites, and peaceful places like the Himalayas and the holy banks of the Ganges</li>
	<li>Avail free Wi-Fi and studying & resting areas</li>
	<li>Practice pranayama techniques and Surya Namaskar and study energy chakras of your body</li>
	<li>Get one-on-one teaching sessions with highly trained and experienced teachers</li>
	<li>Learn how to perform mudras and chant mantras as per ancient yogic texts</li>
	<li>Enhance your meditation skills and boost your concentration through various yoga asanas</li>
	<li>Understand the importance of the Ayurvedic diet in daily life</li>
	<li> Learn how to channelise your Prana with the help of Nadis</li>
	<li>Study different texts on yoga philosophy and yoga anatomy including the Bhagavad Gita and the Yoga Sutras</li>
	<li>Follow a daily schedule starting with tea time at 06:00 am and ending with dinner at 07:30 pm</li>
	<li>et free health and emergency services</li>
	<li>Receive Yoga Alliance certification on completion of your 300 hour yoga teacher training program</li>
	<li>Become an accredited yoga teacher at a yoga school, studio, hospital, gym, fitness centre, or any other such place</li>
</ol>`,
        desc2:`
        <p>Undoubtedly, our 300-hour yoga teacher training scholarship program has been initiated to promote inclusivity and diversity, and hence, it is for people of all ethnicities, races, castes, and occupations. However, there is still eligibility criteria to partake in the program. It is because the 300-hour yoga TTC is an advanced level of yoga training and therefore, needs immense dedication and passion. As per our rules and regulations, any individual who meets the following requirements can participate in the program and eventually enrol in the training session.</p>
        <ol>
	<li>Must have completed your 200-hour yoga teacher training certification</li>
	<li>If you are in dire need of financial assistance for your yoga teacher training</li>
	<li>Must be extremely passionate about yoga and Ayurveda</li>
	<li>Must be practising yoga for a minimum period of two years</li>
	<li>If you can commit to least 90% of attendance for yoga classes and workshops</li>
	<li>If you can dedicate yourself to various volunteer projects</li>
</ol>`,
      };
    }
    else if(this.slug == '200-hour-yoga-teacher-training-in-kerala-india' || this.slug == '300-hour-yoga-teacher-training-in-kerala-india'){
      this.noContent = true;
    }
    else if(this.slug == 'yoga-retreat-in-rishikesh-india' || this.slug == 'yoga-retreat-in-kerala-india'){
      this.noContent = true;
    }
    else if(this.slug == 'pranayama-therapy-course-online' || this.slug == 'adjustment-amp-alignment-level-1' || this.slug == 'adjustment-amp-alignment-level-2' || this.slug == 'yoga-teacher-training-in-india' || this.slug == 'drop-in-yoga-classes' || this.slug == 'pranic-purification' || this.slug == '21-days-ashtanga-yoga-immersion' || this.slug == 'yoga-for-weight-loss' || this.slug == 'online-hip-opening-workshop' || this.slug == '200-hours-yoga-teacher-training-online'){
      this.noContent = true;
    }
  }

  ngOnInit() {
  }

}
