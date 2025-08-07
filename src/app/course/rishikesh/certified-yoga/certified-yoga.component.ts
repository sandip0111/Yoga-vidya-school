import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routeEnum } from '../../../enum/routes';
import { s3Bucket } from '../../../enum/s3Bucket';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-certified-yoga',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certified-yoga.component.html',
  styleUrls: ['./certified-yoga.component.css'],
})
export class CertifiedYogaComponent implements OnInit {
  cerData: any;
  slug: any = '';
  noContent: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;

    if (this.slug == routeEnum.rishkesh200) {
      this.cerData = {
        title1: '🧘 Become a Yoga Teacher in Just 28 Days',
        title2: '🎓 Explore 14+ Yogic Subjects in One Transformational Course',
        img1: s3Bucket.rishi200Certify1,
        img2: s3Bucket.rishi200Certify2,
        desc1: this.sanitizer.bypassSecurityTrustHtml(
          `<b >Train deeply. Transform fully. Teach authentically.</b>
          <p>This 200-Hour Yoga Teacher Training in Rishikesh is more than a course — it's a journey. In 28 immersive days, you'll build the foundation of a strong self-practice and the tools to guide others with clarity and confidence.</p>
          <ul style="list-style-type: none;">
            <li>✨ Learn from experienced teachers in the birthplace of yoga</li>
            <li>✨ Master Asana, Pranayama & Meditation</li>
            <li>✨ Gain a deep understanding of yogic philosophy and ethical teaching</li>
            <li>✨ Practice real classroom teaching with guidance and feedback</li>
          </ul>
          <p>By the end, you'll be ready to teach not just postures, but presence</p>`
        ),
        desc2: sanitizer.bypassSecurityTrustHtml(
          `<p>Our curriculum blends the wisdom of ancient yogic science with modern methods. You'll study over 14 subjects designed to support your personal and spiritual development — and prepare you as a teacher with depth and range.</p>
          <b>What you'll explore:</b>
          <ul class="ul-style">
            <li>Yogic anatomy and functional movement</li>
            <li>Ancient yogic psychology and ethics</li>
            <li>Diverse teaching methodologies</li>
            <li>Breathwork, alignment, adjustments, mantra & more</li>
          </ul>
          <p>Every subject is curated through years of research to help you embody yoga in daily life — as a student, a teacher, and a human being.</p>`
        ),
      };
    } else if (this.slug == '100-hours-yoga-teacher-training-in-rishikesh') {
      this.noContent = true;
    } else if (
      this.slug ==
      '200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh'
    ) {
      this.noContent = true;
    } else if (this.slug == '300-hours-yoga-teacher-training-in-rishikesh') {
      this.noContent = true;
    } else if (
      this.slug == '200-hour-yoga-teacher-training-scholarship-in-rishikesh'
    ) {
      this.cerData = {
        title1:
          'Our 200 Hour Yoga Teacher Training Scholarship Program Overview',
        title2: 'Things You Will Discover In 200 Hour Yoga Teacher Training',
        img1: 'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1681706500033.jpg',
        img2: 'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1681706520699.jpg',
        desc1: `<p>The <em>200 hour yoga teacher training scholarship program in Rishikesh</em> is for all those aspiring yoga teachers who wish to commence their yoga career, learn yoga skills, and deepen their practice without any financial burden. Through our scholarship program:</p><ol>
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
        desc2: `
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
    } else if (
      this.slug == '300-hour-yoga-teacher-training-scholarship-in-rishikesh'
    ) {
      this.cerData = {
        title1:
          'Overview of Our 300 Hour Yoga Teacher Training Scholarship Program',
        title2: 'Who Is Eligible to Partake in the Scholarship Program?',
        img1: 'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1681707215654.jpg',
        img2: 'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1681707242378.JPG',
        desc1: `<p>The 300-hour yoga teacher training scholarship program at Yoga Vidya School has been initiated so that money doesn’t act as a hindrance to your yogic evolution. With the help of our scholarship:</p><ol>
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
        desc2: `
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
    } else if (
      this.slug == '200-hour-yoga-teacher-training-in-kerala-india' ||
      this.slug == '300-hour-yoga-teacher-training-in-kerala-india'
    ) {
      this.noContent = true;
    } else if (
      this.slug == 'yoga-retreat-in-rishikesh-india' ||
      this.slug == 'yoga-retreat-in-kerala-india'
    ) {
      this.noContent = true;
    } else if (
      this.slug == 'pranayama-therapy-course-online' ||
      this.slug == 'adjustment-and-alignment' ||
      this.slug == 'adjustment-and-alignment-level-2' ||
      this.slug == 'yoga-teacher-training-in-india' ||
      this.slug == 'drop-in-yoga-classes' ||
      this.slug == 'pranic-purification' ||
      this.slug == '21-days-ashtanga-yoga-immersion' ||
      this.slug == 'yoga-for-weight-loss' ||
      this.slug == 'online-hip-opening-workshop' ||
      this.slug == '200-hours-yoga-teacher-training-online'
    ) {
      this.noContent = true;
    }
  }

  ngOnInit() {}
}
