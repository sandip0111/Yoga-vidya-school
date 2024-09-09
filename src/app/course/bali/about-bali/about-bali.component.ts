import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about-bali',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-bali.component.html',
  styleUrls: ['./about-bali.component.css']
})
export class AboutBaliComponent implements OnInit {
  slug: any = '';
  aboutItems: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, protected sanitizer: DomSanitizer) {
    //  console.log(this.activatedRoute.snapshot.routeConfig?.path,'--');
    this.slug = this.activatedRoute.snapshot.routeConfig?.path
    if (this.slug == '200-hour-yoga-teacher-training-in-bali') {
      this.aboutItems = {
        title: '200 hour',
        span: 'Yoga Teacher Training in Bali',
        desc: `
        <p>Yoga Vidya School welcomes you to join the 200 hours yoga teacher training in Bali. Our 200 hour yoga teacher training Bali program is an accredited course registered with Yoga Alliance USA.
         Yoga Vidya School’s Bali yoga teacher training is guided by yoga teachers and yoga masters having years of experience teaching yoga. Helmed by Acharya Prashant Jakhmola,
         our 200 hour yoga teacher training in Bali covers different aspects of yoga. From the traditional Hatha yoga/ Ashtanga, Vinyasa flow yoga, pranayama, meditation, Kriya, Bandha, yogic philosophy, anatomy and teaching methodology,
         our 200 hour yoga teacher training in Bali covers different aspects of yoga practice.
         </p>
         <p>Nestled in charming Ubud area, As We stopped with Balian village Yoga Vidya School offers the much needed calm and tranquil ambiance for pursuing your yoga teacher training in Bali.
Reconnect with your inner being and unearth the many innate intricacies of yoga as you pursue our 200 hour yoga TTC at our magical space in Balian, Bali.
</p>
        `,
        image: 'https://my-s3-images-bucket.s3.amazonaws.com/images/bali_200_npa2hj.jpg',
        alt: '200 yoga teacher training in bali'
      }

    }
    else if (this.slug == "300-hour-yoga-teacher-training-in-bali") {
      this.aboutItems = {
        title: '300 hour',
        span: 'Yoga Teacher Training in Bali',
        desc: `
<p>Experience earnest physical, mental and spiritual transformation with our 300-hour yoga teacher training program at the Yoga Vidya School, Ubud, Bali. Get enamoured by the spell-binding countryside of Bali known for its verdant rice fields, beautiful beaches and a profound spiritual heritage. Our 300 hour yoga TTC in Bali is a positively transformative program well intended towards aspiring yogis who have successfully completed their 200 hour yoga TTC and are looking to gain more deeper knowledge. This program is also devised for seasoned practitioners who want to further explore the realms of yoga amidst the tranquil beauty and serenity that the island province of Bali offers.</p>
<p>We at Yoga Vidya School invite you to embark on a yogic path that transcends the physical realm while nudging you towards your innate light.</p>

<p>Get ready for a transformative journey amidst the scenic locales of Bali by enrolling in our profoundly enriching 300 hour yoga TTC at Ubud, Bali. Yoga Vidya School offers a sanctuary of yoga at Bali where the magical&nbsp; ambience and the Balinese vibrant culture would nudge you&nbsp; towards becoming a certified 300 hour yoga preacher.</p>

<p>The 300 hour yoga teacher training in Bali at Yoga Vidya School is an exhaustive and comprehensive yoga teacher training course targeted towards intermediate and advanced level yoga practitioners. This all inclusive Yoga Alliance USA certified course by Yoga Vidya School endeavours to offer the very best yoga teacher training in Bali.</p>

<p>The 300 hour yoga TTC in Bali will empower you with deep knowledge and understanding of yoga principals and other nuanced aspects of yogic sciences. Anyone who is an advanced level practitioner and has completed the mandatory 200 hour yoga teacher training course is welcome to join this transformative course. Our globally valid&nbsp; Yoga Alliance USA certified program will empower you to practise advanced level yoga at both personal and professional levels.</p>

<p>This 300 hour yoga TTC in Bali offered by Yoga Vidya School is helmed by acclaimed and professional yoga masters. This all encompassing course will delve into an in-depth study of advanced physical yogic postures or asanas, transformative pranayama and meditation sessions along-with yogic anatomy and physiology. Furthermore, advanced level sequencing and adjustments and other yogic aspects are also part of the curriculum.</p>

<p>Furthermore, contemporary and scientific perspectives pertaining to psychology, physiology and neurosciences in relation to yogic patterns are also delved upon in this course.</p>
<p>So, if you are eager and hungry for advanced level yogic knowledge after completing your 200 hour yoga TTC , then this 300 hour yoga TTC in Bali will be in sync with your innate yogic abilities.</p>
        `,
        image: 'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674216026424.jfif',
        alt: '300 yoga teacher training in bali',
        subjectInfo: `
    <div class="row mb-5">
    <div class="col-md-6 align-items-center">
    <div>
<h2><span>Why Study 300 Hour Yoga Teacher Training in Ubud, Bali?</span></h2>
<div>
<p>As mentioned above, the island province of Bali&nbsp; abounds with scenic beauty that augurs well with any spiritual practice such as yoga. Below we will enlist a few more pointers as to why you should embark on the 300 hour yoga teacher training in Ubud, Bali. Let&#39;s take a look.</p>

<ul class="orange-tick" style="text-align:start">
<li>Bali is blessed with natural beauty in the form of rolling mountains, lush green paddy fields and tranquil beaches. Yoga when done amidst tranquil and scenic environs entails more immersive and transformative experiences.</li>
<li>Furthermore, Bali has a vibrant spiritual culture. Its numerous temples as well as the opulent traditional architecture only helps one to pursue spiritually inclined practices such as yoga.</li>
<li>Bali already has a thriving yoga culture. You will find all kinds of yoga styles and different formats of yoga being practised here. Besides, the countryside is teeming with yoga ashrams, yoga studios and yoga schools offering a plethora of yoga options. Infact, Bali boasts of a thriving yoga community helmed by world renowned yoga teachers who have the capability to transform you through the realms of the 300 hour yoga TTC in Bali.</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="imageback">
<img src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1696590613162.jpeg" class="img-fluid" alt="300 Hours Yoga Teacher Training in Bali"/>
</div>
</div>
</div>
<p>&nbsp;</p>

<div class="row mb-5">
<div class="col-md-6">
<div class="imageback">
<img src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1694583929513.jpg" class="img-fluid" alt="300 Hours Yoga Teacher Training in Bali"/>
</div>
</div>
    <div class="col-md-6 align-items-center">
    <div>
<h2><span>Why come on this transformative journey of 300 hour yoga TTC in Bali?</span></h2>
<div>
<p>As mentioned in the above sections, Bali offers a perfect backdrop for pursuing the arduous 300 hour yoga TTC in Bali. However, the program in itself offers many nuanced benefits such as the following:</p>

<h4>Strength and Stability</h4>

<p>The cohesive integration and alignment of mind, body and breath is brought about through deeper yogic practices. We can then express our innate powers with grace and elan. This way we not only balance and enhance our prana but also explore our hidden limitless potential. This determined attitude which is showcased in our daily yogic practices slowly manifests into our daily lives as we go about meeting mundane and challenging times albeit with a sense of inner peace and self-mastery.</p>

<h4>Tools and techniques</h4>

<p>Yoga Vidya School at Ubud, Bali has an highly organised curriculum that encapsulates the traditional wisdom of yogic sages with contemporary scientific knowledge pertaining to neurosciences, anatomy and psychology. The 300 hour yoga TTC in Bali program will equip its students with an array of yogic tools such as physical asanas, ensuing bandhas, meditation and pranayama to beget an enriching experience of personalised transformation along-with advanced yogic practices nudged by ancient yogic philosophies.</p>

<h4>Manifestation through practice and teaching</h4>

<p>This 300 hour long yoga TTC in Bali program is an experiential course that offers you the best knowledge coupled with deep innate experiences at every level. This 300 hour yoga teacher training follows an immersive format including concepts and tools that accord you with a sense of embodiment and achievement so that you gain knowledge with confidence. You will be surprised with your own abilities both at the physical and spiritual levels which will inspire you to grow for years to come.</p>

</div>
</div>
</div>
</div>
<p>&nbsp;</p>

<h2><span>Bali 300 Hour Yoga Teacher Training At Yoga Vidya School Program Outcomes&nbsp;&nbsp;</span></h2>

<ul class="orange-tick" style="text-align:start">
	<li>The program equips you with advanced techniques and methodologies to refine your teaching abilities and cater to a wider range of students</li>
	<li>Through intensive practice, study, and understanding of body-mind biomechanics, you gain a deeper understanding of yourself, your limitations, and your potential</li>
	<li>The training delves deeper into advanced yogic concepts, philosophy, and ancient texts, thereby, broadening your knowledge and allowing you to impart authentic teachings</li>
	<li>Yoga Teacher Training in Bali refines your alignment, adjustments, and sequencing skills and take your asana practice to a higher level</li>
	<li>Learn and experience advanced breathing and meditation techniques for deeper states of relaxation, concentration, and self-awareness</li>
	<li>Deepen your understanding of the human body&#39;s dynamism and its connection to yoga</li>
	<li>Attend workshops on specific topics like yoga therapy, prenatal yoga, or inversions and specialise yourself in several areas</li>
	<li>&nbsp;Bali Yoga Retreat or TTC connects with like-minded individuals and form a supportive community of yoga teachers and practitioners</li>
	<li>The training also facilitates personal transformation and helps you develop qualities like patience, compassion, kindness, determination, concentration, and self-discipline</li>
	<li>Commence your yoga career and work at advanced studios, retreats, workshops, and even conduct your own teacher training programs</li>
</ul>

<p>&nbsp;</p>

<h2><span>The Curriculum Of 300 Hour Yoga Teacher Training in Bali, certified by Yoga Alliance:&nbsp;</span></h2>

<ul class="orange-tick" style="text-align:start">
	<li>Primary to&nbsp; Intermediate Advanced&nbsp; Hatha Yoga (Asana and Philosophy)</li>
	<li>Primary to Advanced while covering Intermediate&nbsp; Ashtanga Vinyasa (Primary + Secondary Series)</li>
	<li>Advanced Pranayama II (Practice and Theory)</li>
	<li>Yogic Anatomy and Physiology II</li>
	<li>Advanced Asana Alignment and Adjustment</li>
	<li>Yoga Darshan (Philosophy) II</li>
	<li>Mantra Yoga II</li>
	<li>Dhyana (Practice and Theory) Part II</li>
	<li>Advanced Pratyahara (Practice and Theory)</li>
	<li>Advanced Shatkarma (Neti, Tratak, Kapalbhati)</li>
	<li>History of Yoga II</li>
	<li>Yogic Lifestyle</li>
	<li>Sanskrit Language and Vedic Vocabulary</li>
	<li>Master-level Teaching Methodology II</li>
	<li>Deeper Concepts of Ayurveda</li>
</ul>
        `
      }
    }
    else if (this.slug == 'yoga-retreat-in-bali') {
      this.aboutItems = {
        title: 'Yoga retreat',
        span: 'in Bali',
        desc: `
        <p><strong>Transform Your Life with the Prana Sanyam Yoga Retreat &ndash; Only Retreat with Focus on Ghat Sadhana and Prana Sanyam</strong></p>

<p>Yoga Vidya School in Bali brings you an opportunity to experience and study the tradition of yoga and imbibe ancient wisdom of leading a healthy and happy lifestyle. Introduced by Yoga Acharya Prashant Jakhmola, otherwise popularly known as Prashant J Yoga, this yoga retreat takes you on a voyage of a lifetime. This Bali Retreat is a unique opportunity to immerse yourself in a comprehensive yoga experience that mirrors the highly acclaimed retreat offered in Mysore, India.</p>

<p>Learn about the deep meditative techniques of Pranayama (yogic breathwork), Ashtanga Vinyasa (Primary and Intermediate Series) along with Asana Lab for correct alignment and take a plunge into the deeper aspects of yogic philosophy and spiritual practices.&nbsp;</p>

<p>Prashant J Yoga has specially designed the program to cater to the preferences and meet the expectations of yoga lovers and especially those who are practicing yoga for some time but still struggling to understand the correct path and methods of synchronising the breath and movements.&nbsp;</p>
    `,
        image: 'https://my-s3-images-bucket.s3.amazonaws.com/images/FERN8271_fjodwd.jpg',
        alt: 'Yoga retreat in bali',
        subjectInfo: `
        <h2>Retreat Overview</h2>

<p>The Prana Sanyam is a combination of two Sanskrit words; &lsquo;Prana&rsquo; which means vital life force or energy and &lsquo;Sanyam&rsquo; means disciplined practice of patience or control.Inspired from Ghat Sadhana and meditative practices of Pranayama, this Yoga Retreatis designed to deepen your practice, enhance your understanding of yoga, and bring about a profound transformation in your life. Set in the tranquil and picturesque environment of Ubud, Bali, this retreat offers the perfect setting to reconnect with yourself and nature.</p>

<p><img alt="Yoga retreat in bali" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/images/pimg-1_cyb1ca.jpg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;" /></p>

<p>&nbsp;</p>

<h2>What to Expect</h2>

<ul class="orange-tick" style="text-align:start">
	<li>Daily Yoga Practice:Ashtanga Vinyasa yoga practice, suitable for all levels and are designed to enhance your physical strength, flexibility, and mental clarity.</li>
	<li>Pranayama and Meditation:Gain insights into the principles of Prana Sanyam and Improve your mental clarity and deepen your inner awareness through daily Meditation and Pranayama sessions.</li>
	<li>Alignment and Adjustments: Participate in in-depth workshops and lectures on correct alignments, modification and entering and exiting into any asana without any injury.</li>
	<li>Personal Guidance: Receive personalized attention and guidance to achieve your personal goals from Prashant J Yoga, a PhD. Scholar and one of the most trusted yoga teachers on YouTube.</li>
</ul>

<p>&nbsp;</p>

<p><img alt="Yoga retreat in bali" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/images/pimg-4_hfbirh.jpg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;" /></p>

<p>&nbsp;</p>

<h2>Daily Sample Schedule</h2>

<ul class="orange-tick" style="text-align:start">
	<li>06:30 AM to 07:00 AM - Prana Sanyama Technique<br />
	<br />
	In this practice, you will learn deep meditative techniques to experience the Pranic flow in your body. Without being reactive, you will learn to experience and purify the level of your mind through various subtle energy flow work</li>
	<br />
	<li>07:00 AM to 08:30 AM - Ashtanga Vinyasa Practice and Pranayama<br />
	<br />
	This class includes the primary and secondary series of Ashtanga Vinyasa led by Prashant J Yoga. If you have previous experience, you will get opportunity to correct the foundations and improve the practice of advanced sequences. The session concludes with balancing Pranayama. Modified asanas are available as per the body types.</li>
	<br />
	<li>11:00 AM to 12:30 PM - Asana Workshop<br />
	<br />
	Explore each yoga Asana in depth, learning the techniques to enter and exit, modifications according to various body structures, and the therapeutic uses of these postures to cure sickness. This class also covers teaching approaches for those interested in sharing their knowledge. Topics include:
	<ul class="orange-tick" style="text-align:start">
		<li>History of yoga and philosophy</li>
		<li>Backward bending sequences</li>
		<li>Side bending and side extension theory</li>
		<li>Inversions (the nectar of asanas)</li>
		<li>Theory behind asana names</li>
	</ul>
	</li>
	<br />
	<li>06:00 PM to 06:30 PM - Prana Sanyama Meditation<br />
	<br />
	Conclude your day with an insightful session of Prana Sanyama Meditation, focusing on deepening your meditative practice and enhancing your inner awareness.</li>
</ul>

<p>&nbsp;</p>

<p><img alt="Yoga retreat in bali" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/images/pimg-2_skewwy.jpg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;" /></p>

<p>&nbsp;</p>

<h2>Accommodation</h2>

<p>Ahamta Retreats Center is your home for this unique Yoga Retreat in Bali. &nbsp;Stay in clean and cozy private or shared rooms and have a great time unwinding yourself after your yoga and pranayama sessions. We completely understand that the place where you sleep and rest is a significant aspect of this program. And, we ensure that the accommodation is comfortable and inspires rejuvenation in the mind and body. Enjoy comfy surroundings in the midst of lush gardens and lawns. All our rooms are attached to bathrooms and provide basic amenities including Wi-Fi to fulfil your daily needs. Relaxing swimming pool is also available to add a touch of luxury to your retreat experience.&nbsp;</p>

<div class="container">
<div class="row">
<div class="col-6 col-md-4 mb-3"><img alt="Yoga retreat in Bali" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1718825459201.jpg" /></div>

<div class="col-6 col-md-4 mb-3"><img alt="Yoga retreat in Bali" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1718825603416.jpg" /></div>

<div class="col-6 col-md-4 mb-3"><img alt="Yoga retreat in Bali" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1718825618338.jpg" /></div>

<div class="col-6 col-md-4 mb-3"><img alt="Yoga retreat in Bali" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1718825635214.jpg" /></div>

<div class="col-6 col-md-4 mb-3"><img alt="Yoga retreat in Bali" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1718825653118.jpg" /></div>

<div class="col-6 col-md-4 mb-3"><img alt="Yoga retreat in Bali" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1718826593048.jpg" /></div>
</div>
</div>

<p>&nbsp;</p>

<h2>Healthy Vegetarian Cuisine</h2>

<p>At our Bali Retreat, get ready to treat your taste buds to some nutritious and healthy food. During your program, you will be served delicious vegetarian Balinese meals as per your needs and preferences. From hearty breakfasts to satisfying lunches and dinners, everything is prepared by our expert cooks and chefs from organic and locally sourced ingredients. The menu also includes some delicacies from India.&nbsp;</p>

<p>&nbsp;</p>

<h2>Meals Timing&nbsp;</h2>

<ul class="orange-tick" style="text-align:start">
	<li>08:30 AM to 09:30 AM: PratahBhojan (Breakfast)</li>
	<li>12:30 - 1:30 PM: MdhyahanBhojan (Lunch)</li>
	<li>07:00 PM - 08:00 PM: Ratri Bhojan (Dinner)</li>
</ul>

<p>&nbsp;</p>

<h2>Cultural and Nature Excursions</h2>

<p>Immerse yourself in the rich culture of Bali during free time and visit local temples, rice terraces, and traditional ceremonies. Explore the island&rsquo;s natural beauty with excursions to pristine beaches, lush forests, and scenic landscapes.</p>

<p>&nbsp;</p>

<h2>Fees For the Bali Retreat</h2>

<ul class="orange-tick" style="text-align:start">
	<li>$1200 for Retreat with Shared Room</li>
	<li>$1450 for Retreat with Private Room</li>
	<li>$1000 for Retreat without Food and Accommodation</li>
</ul>

<p>&nbsp;</p>

<h2>What&rsquo;s Included In Yoga Retreat In Bali?</h2>

<p>As our retreat program is curated by the expert Acharya Prashant J Yoga, expect nothing less than the ultimate yogic immersion that takes you away from the chaos to help you heal and find inner peace. Here&rsquo;s everything you would enjoy and savour during your stay at Yoga Vidya School in Bali</p>

<ul class="orange-tick" style="text-align:start">
	<li>Yoga classes and lectures by Prashant J Yoga</li>
	<li>Everyday practice of pranayama and yoga asanas for holistic health</li>
	<li>Workshops to understand the dynamism of Ashtanga Vinyasa</li>
	<li>Philosophy and yogic psychology sessions</li>
	<li>Group discussions</li>
	<li>Satsang for deep insights</li>
	<li>Yoga Alliance Continued Education Certification</li>
	<li>Comfortable accommodation (private and shared)</li>
	<li>Sattvic meals three times a day</li>
	<li>Enough time and space to relax and self-practice</li>
	<li>Freetime to go on the exploration of Bali</li>
	<li>Serene and untroubled surroundings with green lawns and composed nature</li>
</ul>

<p>&nbsp;</p>

<p><img alt="Yoga retreat in bali" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/images/pimg3_um0v6f.jpg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;" /></p>

<p>&nbsp;</p>

<h2>How To Reach Bali Yoga Retreat?</h2>

<p>Reaching our yoga retreat in Bali is quite simple. Here are the ways you can consider to reach Bali Yoga Retreat:</p>

<p><strong>By Air: </strong>You can take a flight from different parts of the world to Ngurah Rai International Airport, also known as Denpasar Airport, in Bali. From the airport, you can get local taxis or avail of ride-sharing services to reach Yoga Vidya School in Bali.</p>

<p><strong>By Road:</strong> If you are already on the Island, you can use local transport like taxis and buses to reach our Bali Yoga Retreat.</p>

        `
      }
    }
    else if (this.slug == 'yoga-retreat-in-mysore-india') {
      this.aboutItems = {
        title: 'Yoga retreat',
        span: 'in Mysore, India',
        desc: `
<p>Yoga Vidya School is excited to announce a unique yoga retreat in Mysore! Join us for an exploration of Yoga, Pranayama and Philosophy in Mysore with Yoga Acharya Prashant Jakhmola, popularly known as Prashant J Yoga on Youtube, Instagram and Google.</p>

<p>One of the most trusted and trending Yoga Teachers on Internet, Prashant Ji has conceptualised and created this amazing Yoga Program after thorough research and dedication. He has offered a very special opportunity of learning age old tradition of Ghat Sadhana and Prana Sanyam in Mysore, popular known as Ashtanga Capital of the World. This Yoga Retreat is also a deeper immersion in the philosophical and spiritual aspect of Yogic science.</p>

    `,
        image: 'https://my-s3-images-bucket.s3.amazonaws.com/images/IMG_7533_fv5f6d.jpg',
        alt: 'Yoga retreat in Mysore, India',
        subjectInfo: `
        <h2><span>Yoga Retreat Schedule Information</span></h2>

<p>We are ready to welcome the Retreat guests on 7<sup>th</sup> August, Wednesday.&nbsp;</p>

<p><strong>Sample Day Schedule:</strong></p>

<p>07:00 AM&nbsp;- 08:00 AM&nbsp;- Asana Practice (With Assistant Teacher)</p>

<p>08:00&nbsp;AM&nbsp;- 09:30&nbsp;AM&nbsp;- Prana Sanyam Sadhana</p>

<p>11:30 AM&nbsp;- 12:30&nbsp; PM&nbsp;- Ghat Sadhna (Asana Alignment)</p>

<p>**Friday and Saturday</p>

<p>06:00&nbsp;PM&nbsp;- 07:00 PM&nbsp;- Svadhya (Self practice)</p>

<p>** Time can be changed as per Teacher&rsquo;s advice</p>

<p>&nbsp;</p>

<h2><span>What&#39;s Included in Yoga Retreat in Mysore</span></h2>

<p>Yoga Retreat in Mysore includes all Yoga Classes and Lectures by PrashantJ Yoga, Group Discussions or Satsang.</p>

<p>More than 4 hours of daily practice of Pranayama and Yoga Asanas will help you explore deeply into your body, mind and soul. Philosophy and Yogic Psychology sessions and direct interaction with Prashant Ji will take your understanding of Yogic life and holistic health to a whole new level.</p>

<p>&nbsp;</p>

<p><img alt="Yoga retreat in mysore" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/images/FERN8400_n0y8nu.jpg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;" /></p>

<p>&nbsp;</p>

<h2><span>Fees for the Mysore&nbsp;Retreat</span></h2>

<p><strong>Rs.</strong>&nbsp;21,000 for Retreat without Accommodation and Food</p>

<p>&nbsp;</p>

<h2><span>How&nbsp;to Reach&nbsp;Mysore&nbsp;Yoga&nbsp;Retreat</span></h2>

<p>Traveling to Mysore for a Yoga Retreat or Yoga Teacher Training is easy. It is well connected by all modes of transport - road, rail, and air.</p>

<p><strong>Road</strong>:&nbsp;The state highway of Bangalore and Mysore is very well maintained. Traveling by road to Mysore from Bangalore takes about 3 hours and&nbsp; is a pleasant experience.&nbsp; All types of buses - ordinary, semi-luxury and luxury buses are easily available on gap of every half an hour. You can also get a private taxi from Bangalore very easily, or can also get it arranged at affordable prices from Yoga Vidya School.</p>

<p><strong>Rail</strong>: Reaching Mysore by Train is also an easy and comfortable option from various cities of India. Regular passenger train to super fast trains like Shatabdi Experess connects Mysore, which you can book online as well as offline.</p>

<p><strong>Air</strong>: Mysore has a small airport with regular flights from and to Bangalore, Chennai, Hyderabad and Goa. Bangalore Airport - Kempegowda International Airport Bengaluru is the nearest international airport to Mysore.</p>

<p><img alt="Yoga retreat in mysore" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/images/FERN8241_bshq8b.jpg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;" /></p>

        `
      }
    }
    else if (this.slug == 'pranayama-course-online-pranarambha') {
      this.aboutItems = {
        title: 'PRANA ARAMBHA -',
        span: 'An Exclusive Online Pranayama Course by Prashant J Yoga',
        desc: `
        <p>I&#39;m glad you showed interest in coming to this page. And now if you have come, it means you are curious after knowing whether this course is for you or not, and how you can get benefit by attending it.</p>

<p>Attending the course is a later subject, the first is, whether the course is actually meant for you or not. You need to first figure out what direction you&#39;re moving on. So first lets talk about the main objective of the practice PRANA ARAMBHA(begin to live). What you can get through this course? And who can be benefited from this? Only after understanding this, you will you have the determination and choice of decision, that you really need to participate in this course.</p>

<p><iframe frameborder="0" height="300px" scrolling="no" src="https://www.youtube.com/embed/p5DLWw6hfss" title="Prana Arambha" width="100%"></iframe></p>

<p>Before you step forward, get to know your state of mind and see if you really need this course, or if you&#39;ve just come to see what kind of course this person is selling.</p>

<p>If you landed here only to check what new yoga course is available in the market or what I am selling and you don&rsquo;t have a single thought to attend this pranayama program. I would suggest you not to waste your time in scrolling more, better to leave this page because I don&rsquo;t want you to waste your valuable time behind this content as you will not get anything.</p>

<p>And in case you have made your mind to continue reading, it means, you really want to change something within you and wants to guide your life with proper manner.</p>

<p>I am thankful and appreciate your strong decision to stay here with me, because now what I am going to explain you will really help you to decide of joining this practice with me.</p>

<p>Let me share with you the main purpose and objective of the Prana armbha &ndash; An Online Pranayama Course. After discovering this, you will be sure that you are looking forward to continue practising with me.</p>

<p>And if you still think you don&rsquo;t want any of these benefits you&#39;ll be completely content to walk with your decision. I also don&rsquo;t think it is right to stay engaged on this page just because I am saying something great about this practice. You yourself should feel that positive vibe and connect to the &nbsp;right path you were searching about. Because we sometimes participate in online yoga classes, courses or programs that do not match to our search or are not even productive for us. I really want you to realize before you practice with me, that you are moving on in the exact direction you want and you are not making any mistake.</p>

<p>Now let&rsquo;s understand about the benefits, objective and main purpose of this beautiful PranicPractice PRANA ARAMBHA</p>

        `,
        image: '',
        alt: 'PRANA ARAMBHA',
        subjectInfo: `
        <h2><img alt="pranayama course online pranarambha" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1683205846041.JPG" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;" /></h2>

<h2>&nbsp;</h2>

<h2><span>Benefits of Online Pranayama Course Prana Arambha</span></h2>

<p>1- <strong>Develop a Habit of Being Constant</strong>. - The biggest disruption in today&rsquo;s time in the mind of a person is, unable to maintain continuity. Due to which you fail to achieve your goal and even after trying again and again the goal remains far from your grip. So, the first change you will feel when learning this exercise is to be able to maintain the continuity in your life. And this continuity is not just in common practice. It is a continuation in a particular practice. That will give strength to your energy body due to which you can achieve new heights of your life.</p>

<p>2- <strong>Purification Of Mind</strong>- Since this Yogic Breathing Course is a special PranicPractice, you are also working on purification of your mind. This pranic exercise will clear various disorders of your mind, causing the mind to attain a particular Satvik (Purest) state.</p>

<p>3- <strong>Time For Your Inner self</strong> - Much of our time and energy is utilised by satisfying the passions of others; we are constantly striving to please others, which makes us forget the life of restraint and we stop working on our inner self which fill our body with a variety of ailments. This practice gives you inner purification from the moment you begin the course.</p>

<p>4- <strong>Inner Communication</strong>- We are always extroverted. Our mind is more influenced and attracted by external topics. Because of which we walk away from our inner self. And we are not at all aware of the developments and changes that are taking place inside us. We get this understanding only when a very difficult or unfavourable situation comes to us which is very difficult to deal with. And then we swagger into emotion and seek out the wrong judgements that make our life disturbed. But through this online pranayama course, you will be able to connect with moderation easily and be able to understand what is happening in you.</p>

<p>5- <strong>Mystery of Emotions</strong>- Everyone wants to restraint on their emotions, and make these emotions favourable to them. Many try it, but fail again and again because it is not such an easy task. It requires constant practice and right transmission of energy so through this practice you become able to give right direction to your emotions.</p>

<p><em>&ldquo;Giving right direction to emotion gives you victory over your actions.&rdquo;</em></p>

<p>6- <strong>Right Transmission of Energy</strong> - Sometimes we are constantly striving, but we are unable to achieve our goal. Which causes the mind to become impatient and the excitement to try gets over. We stop trying and thus the goal goes away from us. This happens to many of us all the time. There are numerous reasons that keep us away from the success we dream of. Some of the reasons can be laziness, negligence, lack of interest, lack of enthusiasm in life.&nbsp; This happens to many of us all the time.</p>

<p>But when you practice pranayama constantly in your life, all these obstacles begin to vanish from your life and the mind reaches the goal through concentration. Because the entire energy get in one direction, the energy paved right path leading to life.</p>

<p>7- <strong>Improve Productivity</strong>: If I tell you one exercise or activity that can increase your productivity by 10 times. Will not you do it? I am sure everyone will be motivated to learn that technique. This is the practice of Pranayama.<br />
I am saying this because I have experienced the miracles of Pranayama in my life. When you wake up early in the morning, do right thing with your own energy system and give the right direction to your Prana, energy starts flowing correctly which removes the impurities or disorders from the mind and mental productivity improves. It is like a miracle and your mind won&#39;t distract you from your focus.</p>

<p>8- <strong>Memory Improvement and Creativity</strong>: In today &#39;s busy life there are lot of activities going on around us, and whether we want or not we have to engage in these unwanted activities due to peer pressure or social responsibilities. This makes the mind unstable all the time and as a result our memory slowly decreases because we have never driven the mind to be fixed, we always made it busy. Our mind, because of being occupied with unwanted activities, is never empty and free. This wastes the entire energy of mind and restricts the flow of new ideas. But when we adopt the practice of Yogic Breathing or Pranayama in our life, it attracts the positive thoughts and new ideas in our life that leads to an origin point of the spiritual direction.</p>

<p>9- <strong>Free from Sickness</strong>: It is believed that the seed of any disease first starts in the Pranic body. If we address this disease at this point, it perishes before it appear to gross body, and does not dominant over a physical body. So a pranayama sadhaka or practitioner who constantly keeps on strengthening and purification of his body by various Pranic techniques can safeguard his body at very initial stage. Because the energy transmitted in his/her body destroys the seeds all kinds of serious diseases. The&nbsp;major cause for these diseases is non - removal of disorders from the Pranic body. This disorders firstly occur on energy level and then on physical.</p>

<p>10- <strong>Makes you a Giver</strong> - Don &#39;t you want to be able to help others, and give the society a new direction? Don&#39;t you want the individuals at higher positions in society consult from you. This will happen automatically once you become a Pranayama practitioner because the expansion of your energy will not limited to you alone if you make this practice as a routine. The energy of the pranayama sadhaka begins to travel outside his physical body. And can impress every single person and this is a reason a Pranayama sadhka shines in the crowd.</p>

<p>What benefits I have mentioned above are not confined to only writing. It can practically happen in your life once you practice pranayama through this only pranayama course. I am sure you are the one who wants to bring all these changes into your life. And want to give your life a balanced direction.</p>

<p><img alt="pranayama course online pranarambha" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1683206274526.jpg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;" /></p>

<p>&nbsp;</p>

<p><strong>PRANA&nbsp; ARAMBHA- this is a Sanskrit term which means &ndash; &lsquo;Begin to Live&rsquo;</strong></p>

<p>Does it really means &lsquo;begin to live.&rsquo;</p>

<p>Are we not living now even without doing practicing pranayama?</p>

<p>Most of us live only in the physical form, physical dimension, (which is also not completely)</p>

<p>It is incomplete. Actually, we are kind of dead.</p>

<p>Yoga teaches the art of living at five levels. Yoga believes that the spirit of man has a profound influence on five levels</p>

<p>These or five existence or dimension of our life.</p>

<p>1- <strong>Physical (5 elements)</strong></p>

<p>2- <strong>Energy (Pranic)</strong></p>

<p>3-<strong> Mental (Chitta)</strong></p>

<p>4- <strong>Intellect (Buddhi)</strong></p>

<p>5- <strong>Bliss (Anand)</strong></p>

<p>Our consciousness travels through all the 5 dimensions all the time but due to impurities, we are not aware of it. These impurities are present at all levels. Physical, Mental, Energetic, so on. So, we cannot say perfectly that we are living, if we want to be familiar with real life, we have to understand the influence of the soul on these five levels. For this we must clear the filth in our body which becomes a barrier in our path and keep our mind as macro and impure.</p>

<p>This practice of PRANA&nbsp; ARAMBH is a process which connects your consciousness to all the existence mentioned above. You start noticing the expansion of life force within, by having various expressions of prana.</p>

<p>This is the perfect routine for you to start your day with.</p>

<p>&nbsp;</p>

<h2><span>How many hours should I practice Pranayama?</span></h2>

<p>This question is common as we all are super busy in our life. I understand that very well and keeping this in mind, I have made this course for limited time only.</p>

<p>Just 30 minutes regular.</p>

<p>Once again I want to stop you here, And want you to think again. if you are dedicated, disciplined, and really want positive changes in your life, then only continue reading. If for now you don&rsquo;t find this information valuable for you, then I would say sorry this course is not for you.</p>

<p>And if you are going ahead, please commit to me that you will practice this for given time. And maintain the consistency of the practice. As you all know the key to any success is continuity. There are three things which makes any practice fruitful.</p>

<p><strong>सतुदीर्घकालनैरन्तर्यसत्कारसेवितोदृढभूमिः</strong></p>

<p><strong>Sa tudeerghakalnairantaryasatkarsevitodridhbhoomi</strong></p>

<p>Explaining above sutra-</p>

<p>Any practice becomes well-grounded only when it is nurtured by three things</p>

<p>1- Deerghkal (longer time )</p>

<p>2- Nairantarya- (regular without any interruption)</p>

<p>3- Satkar (with trust and belief with positive intention)</p>

<p>Firmly grounded practice is an anticipated time of connection to deeper levels of self, it is not simply an ingrained routine.</p>

<p>So whenever you see that there are no development or any results of your practice you must check these three foundations- (mentioned above) and identify if you are missing one of them.</p>

<p><img alt="pranayama course online pranarambha" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1683205867459.jpg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;" /></p>

<h2>&nbsp;</h2>

<h2><span>Let&rsquo;s understand the practice Prana Arambha</span></h2>

<p>PRANA&nbsp; ARAMBHA&nbsp; is 10 days Pranic Course (Online Yoga Course).</p>

<p>It has 10 recorded videos sessions (each will be max. 30 minutes)</p>

<p>You have to master over this course in 21 days including regular practice. You can unlock one video at a time. Next video practice will be available after 24 hours of the previous video.</p>

<p>In this exclusive course i have explained some very important and necessary Pranic practices of today&rsquo;s time which can bring you the steadiness of the mind.</p>

<p>This is a short course which doesn&rsquo;t need much time so I believe you can devote your 30 minutes to this inner spiritual development.</p>

<p>&nbsp;</p>

<h2><span>How Long You will Have Access?</span></h2>

<p>I believe that when we do not have punctuality, we do not utilize the time properly. So in this course I have set the time period. You can access the videos of this pranayama course only for 2 months. It is therefore necessary for you to watch the videos and practice the teachings regularly. You must make resolutions to yourself and commit to it.</p>

<p>Though this course designed is for 12 days but understanding the busyness of life, I want to give you more time, to master these practices, therefore is offered with an access of 60 days.</p>

<p>&nbsp;</p>

<h2><span>What is the Level of This Course?</span></h2>

<p>There is no level of any practice. Even a simple Practice can be an advance for some people. It depends on subtle state of your mind. Many Yogis when they achieve something higher, they come back to basic because through basics (when there is no struggle or not much physical effort is needed) you can lead your mind effortlessly.</p>

<p>This is for all levels &ndash; beginner, intermediate of advance. Those who call themselves beginner, they will master these techniques and continue regularly but those who are experienced practitioners they go more deeper into these practises, spending more time with inner communication, they will work more on stability and equality of mind. And develop the feeling of Samatvam (complete equilibrium)</p>

        `
      }

    }
    else if (this.slug == 'breath-detox-yoga') {
      this.aboutItems = {
        title: 'Breath Detox',
        span: 'Course Online',
        desc: `
        <p><img alt="breath detox" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1679305096358.png" />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img alt="breath detox" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1679305113396.png" /></p>

<p>It is very necessary to have Satvik Intelligence in the practice of Pranayama, because the practice of Pranayama is incomplete without a satvik mind.</p>

<p>&nbsp;</p>

<p><iframe frameborder="0" height="300px" scrolling="no" src="https://www.youtube.com/embed/JEToUoPXdKw" width="100%"></iframe></p>
        `,
        image: '',
        alt: 'Breath Detox Course Online',
        subjectInfo: `
        <h2>What is Satvik Intelligence ?</h2>

<p>When you are together in function with body and mind at the time of practice and you are focused and aware on each actions of the practice (physically and mentally), that particular time your intelligence is Satvik and -</p>

<h4><span style="font-size:18px"><strong>&lsquo;This is the time of Renaissance&rsquo;</strong></span></h4>

<p><span style="font-size:18px"><strong>&nbsp;<img alt="breath detox" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1679305129429.jpg"  style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;"/></strong></span></p>

<p>&nbsp;</p>

<h2>Meet Prashant Ji- Inspiring Pranayama and Yoga Teacher in India</h2>

<p>Namaste, I am<strong>&nbsp;Prashant Jakhmola</strong>&nbsp;&ndash; author of the course&nbsp;<strong>&lsquo;BREATH DETOX.</strong>&rsquo; Over the past four years, more than thousands of people have already joined&nbsp; this&nbsp; exclusive breathe work course. And I am glad that they not only learnt to correct the flow of the breath but also felt amazing results after cleansing of lungs&nbsp; and complete respiratory system.</p>

<p>How to improve functioning of healthy Respiratory System.</p>

<p>I believe this is perhaps the most authentic and popular breath course so far which is not only the best, but&nbsp;<strong>completely FREE !</strong></p>

<p><strong><img alt="breath detox" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1679305150535.jpg"  style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;"/></strong></p>

<p>&nbsp;</p>

<h2>What Will You Learn in Breath Detox Online Course ?</h2>

<p>1. In this Yogic Breathing course, you will learn to breathe correctly and effectively, by the correction of&nbsp;<strong>Five Vayu</strong>&nbsp;(five functions of Prana) which reside in the&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; human body and controls the Physical and Mental function.</p>

<p>2. You will learn to make breathing practice as regular routine.</p>

<p>For almost a year I have painstakingly worked on creating this course. I have closely researched, refined and experimented on me and many live students.&nbsp;</p>

<p><em>I feel great pleasure by offering this course to you !</em></p>

<p><span style="font-size:20px"><strong>Let&rsquo;s be clear and agree here on some points.....</strong></span></p>

<p><strong>This course is Free Online Breathing Course, I don&rsquo;t charge anything for this training programs, but in return I expect or demand something from you.</strong></p>

<p><strong>&lsquo;Your precious time and attention/focus&rsquo;.</strong></p>

<p><strong><img alt="" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1679305168857.jpg"  style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;"/></strong></p>

<p>&nbsp;</p>

<h2>5 Reasons Which Make Breathwork Workshop Unique</h2>

<p>This breathing course has become one of the most popular Online Courses related to Health and Wellness because of the below reasons:</p>

<p>1.&nbsp;<strong>Only Relevant Content and Practice (Not Overloaded)</strong>&nbsp;- This course is easy to start and finish the practice without consuming much time without any extra content. I have noticed many people give up in certain online yoga or health courses because they are overloaded with theoretical and practical content, which make the practitioner tired and bored.</p>

<p>2.&nbsp;<strong>Nirantar Abhyasa (Constant Practice)</strong>&nbsp;- It is pure practical course from the very beginning without any bulky theory or reading material, designed for continuous practice.</p>

<p>3.&nbsp;<strong>Easy and Effective</strong>&nbsp;- An ideal course for new practitioners. Simple practices of breathing techniques that has been scientifically proven to be very effective.</p>

<p>4.&nbsp;<strong>Convenient</strong>&nbsp;- Supported with all types of devices, this course is secular and not associated with any religion. You don&rsquo;t have to do any ritual or chanting mantra to practice the techniques mentioned in the course.</p>

<p>5.&nbsp;<strong><strong>Result Oriented -&nbsp;</strong></strong>In seven sessions (with theory + practice, not more than 30 minutes a day), You will really learn to cleanse and regulate the breath which will lead your mind for meditation and this practice will stay with you for whole life.</p>

<p>&nbsp;</p>

<h2>How This Online Breath Work Course Works:</h2>

<p>Once you subscribe for this course, you will get&nbsp;<strong>free access</strong>&nbsp;to all seven lessons of the breath detox course- for a&nbsp;<strong>period of two weeks</strong>. Two weeks are more than enough to complete entire BREATH DETOX course, as there are only seven practical videos. I believe that you are ready to invest your time for your development.&nbsp;</p>

<p>1.&nbsp;There are seven lessons in this course. Each lesson will not take more than 30 minutes (10 to 15 minute theory and remaining as practical).</p>

<p>2.&nbsp;After each lesson you need to submit the diary (Experience and the Challenges)</p>

<p>3.&nbsp;Your homework throughout the day (which is given during the course).</p>

<p style="text-align:center"><strong>This is the only way you can get benefits from this course if you invest your time and respect.&nbsp;</strong><br />
<strong>My intention is to introduce you a beautiful and effective product for your life so you enjoy each of your day by improving health, attention, concentration, energy level and mindfulness.</strong></p>

<p><strong><img alt="breath detox" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1679305186650.jpg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;"/></strong></p>

<p>&nbsp;</p>

<h2>Let&rsquo;s Face The Truth</h2>

<p>If you are here&nbsp; out of curiosity, or want to check something, or want to get new techniques to teach. Then it is going to be hard for you to complete this course.&nbsp;<br />
If in the next two weeks you can not devote half an hour a day to the practice then I would request you:&nbsp;</p>

<h3 style="text-align:center"><strong>Do not Subscribe !</strong></h3>

<p style="text-align:center"><strong>There will be no benefit, neither to you nor to me.</strong>&nbsp;</p>

<p>Because you will not practice and gain nothing for yourself and I will waste my energy, time and resources with uninterested students.&nbsp;Please don&rsquo;t be upset with my harsh words but isn&rsquo;t it better to clear before you even spend a minute for something which is not meant for you.</p>

<p>&nbsp;If you subscribe now but did not practice then in two weeks access to the classes will disappear and later you will not be able to subscribe again- So you will miss the opportunity.&nbsp;So signup this course only if you have time otherwise save this page for now and next time you can attend the course if you have time for practice and add something valuable in your life.&nbsp;</p>

<p>As I can see, if you are here it means that you are much willing to attend this course which is highly Appreciated!<br />
If you think it is now a right time when you should do something for yourself and learn something that will benefit you throughout your life and lead you to your yoga journey-</p>

<p><strong><em>then Congratulation!</em></strong></p>

<p>I have created this course from my experience and considering the impact of it on variety of people- from beginner students to experience practitioners, related to various fields of life.<br />
This course is also based on my own experience which I received by teaching yoga to many people from around the world.&nbsp;</p>

<p><br />
I am in&nbsp;<em>(Sign Up)</em></p>

<p><em><img alt="breath detox" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1679305210493.jpg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;"/></em></p>

<p>&nbsp;</p>

<h2>BREATH DETOX : Breathing Yoga Course Online</h2>

<p>Breath detox is a practice of (Pancha Vayu), there are five types of vayu which is also called&nbsp;<strong>&ldquo;PANCHA PRANA&rdquo;</strong>&nbsp;inhibiting in our body and these five types of vayu plays very important role in keeping entire body healthy and in proper functioning. These Vaayu which reside in our body is a form of Prana. Sometimes improper functioning of these Vayu causes various types of disorders in the body. This can have profound effect on the functioning of the body system. Hence proper transmission of all these Vayu is very important for the body.</p>

<p>Breath Detox means cleansing of the breath and if you understand this word in detail it means cleansing out the five types of different Air (Vayu) in our body and regulate them with yoga practices.&nbsp;</p>

<p><strong>What are these Five Vayu:</strong></p>

<ol style="text-align:start">
	<li>Prana&nbsp;</li>
	<li>
	<p>Apana&nbsp;</p>
	</li>
	<li>
	<p>Samana</p>
	</li>
	<li>
	<p>Udana&nbsp;</p>
	</li>
	<li>
	<p>Vyana</p>
	</li>
</ol>

<p>You might be wondering how to clean the breath?&nbsp;Many of us find it strange that breath can be cleaned, because we think our breath is always correct and clear but if we give attention to it, you might notice, &ldquo;it&rsquo;s not&rdquo;!&nbsp;<br />
<br />
<strong>There are some impurities in our breathe which are:</strong></p>

<ol style="text-align:start">
	<li>
	<p>Unusual rate of breath&nbsp;</p>
	</li>
	<li>
	<p>Unusual length of breath</p>
	</li>
	<li>
	<p>Improper lungs function</p>
	</li>
	<li>
	<p>Inability to get a full body of breath</p>
	</li>
	<li>
	<p>Imbalanced five vayu</p>
	</li>
	<li>
	<p>Weak lungs capacity</p>
	</li>
	<li>
	<p>Inability to use breathing muscles properly</p>
	</li>
</ol>

<p>To clear all these weaknesses present in the breathing process is the sole objective of this course &ldquo;BREATH DETOX&rdquo; and this is the perfect preparatory practice of Pranayama as well.&nbsp;<br />
In this workshop we will learn the tools and techniques of Pancha Vayu breath.</p>

<p><img alt="breath detox" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1679305226056.jpg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;" /></p>

<p>&nbsp;</p>

<h2>What You Get In Online Breath Detox Course ?</h2>

<p>&nbsp;</p>

<p><strong>Lesson: 1<br />
&nbsp;</strong><br />
<strong>Introduction and foundational practice</strong><br />
<br />
In this class I will tell you some important things related to the practice which will help you to complete this course with maximum benefit.</p>

<ol style="text-align:start">
	<li>Requirement for the practice.</li>
	<li>How to find the time ?</li>
	<li>What time is best for practice ?</li>
	<li>Foundational technique of Breath Detox.</li>
</ol>

<p><br />
<strong>Lesson: 2<br />
&nbsp;</strong><br />
In this class you will learn the quality of breath and how to correct the quality by knowing the mistakes of breathing.</p>

<ol style="text-align:start">
	<li>Perfect Position (Asana) of the practice.&nbsp;</li>
	<li>What is the breath focus ?</li>
	<li>Regulation of Prana (Practical).</li>
</ol>

<p><br />
<strong>Lesson: 3&nbsp;</strong></p>

<ol style="text-align:start">
	<li>Sensations during the practice.</li>
	<li>How to identify the sensations?</li>
	<li>Convert the sensations into Meditation.</li>
	<li>Methods of scanning sensation in the body during the practice.</li>
	<li>Which clothes you should wear during the practice?</li>
	<li>Regulation of Apna Vayu.</li>
</ol>

<p><br />
<strong>Lesson: 4&nbsp;</strong></p>

<ol style="text-align:start">
	<li>React or response to sensations.</li>
	<li>Magic of sensations during the breathing practice</li>
	<li>Regulation of Samana Vayu.&nbsp;</li>
</ol>

<p><br />
<strong>Lesson: 5</strong>&nbsp;</p>

<ol style="text-align:start">
	<li>Inner journey of breath detox</li>
	<li>Purification of Chitta (mind)</li>
	<li>Regulation of Udana vayu</li>
</ol>

<p><br />
<strong>Lesson: 6</strong></p>

<ol style="text-align:start">
	<li>Common mistakes during the practice. We will analyse in detail the mistakes which hinders the progress of both beginners and experienced practitioner</li>
	<li>Regulation of Vyana Vayu</li>
</ol>

<p><br />
<strong>Lesson: 7</strong>&nbsp;</p>

<ol style="text-align:start">
	<li>Conscious Expansion.</li>
	<li>BREATH DETOX as a routine</li>
</ol>

<p><br />
<strong>Bonus Lesson</strong></p>

<ol style="text-align:start">
	<li>How you should grow further?</li>
	<li>How the practice should be?</li>
	<li>Implementation of the practice in your work.</li>
</ol>

<p>&nbsp;</p>

<h2>Why You Can Trust Me and My BREATH COURSE ?</h2>

<p>&nbsp;I have learnt pranayama from many experienced pranayama teachers in India. Over the years, while working in this field, I have conducted various Pranayama sessions, Workshops and Trainings of Self Development and Pranayama, where I have taught secrets of pranayama to several thousand of people combining the depth of traditional yoga practices with accessible resources. From my years of study at the university, I have practice the deep rooted practices of pranayama, which can transform the life amazingly.</p>

<p>Keeping in mind the busy life of people today, I pay important attention to the art and quality of practice.<br />
<br />
<strong>My Intention and the Mission of the school is to spread the pure Yogic and Vedanta knowledge that helps people to live more consciously and happily. If this beautiful inspiring idea resonates with you then share it with your friends and be an influencer of meaningful healthy life.</strong></p>

<p><strong><img alt="breath detox" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1679305364702.jpg"  style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;"/></strong></p>
        `
      }

    }
    else if (this.slug == 'foundation-of-spirituality-an-online-spiritual-awakening-course') {
      this.aboutItems = {
        title: 'Foundation of Spirituality:',
        span: 'An Online Spiritual Awakening Course',
        desc: `
       <p>The topic of spirituality is discussed way often lately and is also something that has been misunderstood a lot too.&nbsp; As more and more people are learning to grow their awareness and accepting their true realities, the word spirituality can be seen used more than ever. But do we really know what spirituality really is? Many people have different perceptions about spirituality, some consider it to be religion while some think the opposite.</p>

<p>With the increasing rate of stress, anxiety and depression in the people, the need to practice spirituality becomes even more powerful. A balanced mind and healthy body not only helps you function better financially but also helps one improve their social life. It makes you compassionate as well as understanding and helps you make deeper and more loving connections. It helps you become more aware and focused thus improving your financial life as well. The benefits of being spiritually aware are beyond physical and mental aspects and affects us emotionally, as well as spiritually. It is a holistic discipline.</p>

<p>Spirituality is what which makes us realise of our true self, that is, the formless, nameless pure conscious existence which we are usually unaware of being stuck in the materialistic bubble and our ego. This is the doorway that leads us to &lsquo;Moksha&rsquo; that is liberation from the suffering of this material world and from the vicious cycle of birth and death. Just by the mere act of practicing spirituality one becomes more conscious, loving, humble, compassionate, accepting and peaceful. When this becomes your discipline and followed religiously, this becomes your reality and helps you achieve the goal of life, that is liberation.</p>

<p>In this course we will learn about the basic foundation of spirituality and will also understand the philosophy behind it as nothing can be practiced without thorough understanding of what it actually is.</p>
        `,
        image: '',
        alt: 'Foundation of Spirituality',
        subjectInfo:`
        <h2> <span>What You Will Learn In This Course ?</span></h2>

<p>&nbsp;</p>

<p><strong>*Basics of Spirituality</strong></p>

<p>&nbsp; -Meaning of spirituality</p>

<p>&nbsp; -Goals of spirituality</p>

<p>&nbsp; -Types of suffering</p>

<p>&nbsp; -Difference between spirituality and religion</p>

<p>&nbsp; -Different connotation attached to the word dharma</p>

<p><strong>*Spiritual Philosophy</strong></p>

<p>&nbsp; -Role of philosophy in Spirituality</p>

<p>&nbsp; -Importance of understanding philosophy in spirituality</p>

<p>&nbsp; -Pillars of spirituality</p>

<p><strong>*Indian Philosophies</strong></p>

<p>&nbsp; -Classification of Indian Philosophies</p>

<p>&nbsp; -How to study Indian Philosophies</p>

<p>&nbsp;</p>

<h2>Who is this course for?</h2>

<p>&nbsp;</p>

<p>Anyone who is interested in introduction to spirituality and philosophy.</p>

<p>&nbsp;</p>

<h2><span>Meet The Teacher</span></h2>

<p>&nbsp;</p>

<p><img alt="Foundation of Spirituality" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1679309899405.jpeg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;"/></p>
<p>&nbsp;</p>

<p>Harsha Yardi was born and raised in India in a Brahmi Family. He received a higher education in the studies of Software Engineering. But at the age of 25, he left his job and decided to set out on the path of a spiritual seeker. For 10 years, Swami ji lived in the harsh conditions of Himalayas, performing spiritual practices and ascetics. Living in a traditional ashram, he studied the original writings of Indian Philosophy in Sanskrit, immersed himself in the truths of the universe, and engaged in knowing one&rsquo;s true self. Today, Harsha Yardi is the author of books on Spirituality and teaches various systems of Traditional Yogic Philosophy. He conducts seminars related to spirituality and mindfulness in various counties.</p>

<p>&nbsp;</p>

<h2><span>Requirements</span></h2>

<p>No previous knowledge or tools required.</p>
        `
      }

    }
    else if (this.slug == 'yoga-inversion-workshop-headstand') {
      this.aboutItems = {
        title: 'Yoga Inversion Workshop -',
        span: 'Yoga Teacher Training in Bali',
        desc: `
        <p>&nbsp;</p>

<p><iframe frameborder="0" height="300px" scrolling="no" src="https://www.youtube.com/embed/BVxN7UEGtVY" title="Yoga Inversion headstand" width="100%"></iframe></p>

<p>&nbsp;</p>

<p><strong>&ldquo;EXPLORATION OF INVERSION&rdquo;</strong>&nbsp;</p>

<p>Mastering the &ldquo;SIRSASANA&rdquo;(The Head Stand)</p>

<p>Are you afraid of inversions? Do you want to conquer the fear of doing Headstand or Sirsasana? You fear to believe in your body while performing balancing Yoga Poses? and feels like your body won&rsquo;t be able to do these advance balancing Asana. Or maybe you are among those who do headstand, but having difficulties to stay longer and don&rsquo;t know the crucial goal of this advance balance in pose. Or you are the one who wants to learn variations and to understand the ultimate goal of this particular Yoga Pose to improve the quality of your yoga practice.</p>

<p>I, Prashant Jakhmola, is organising two days Intensive Online Workshopin order to help you on the above mentioned points or to conquer your fears related to inverting your body into a Headstand.</p>

<p>While doing regular online yoga classes, I understood it is quite difficult to explain the depth of Asana in asingle hour by focusing on particular pose. Therefore, I have come up with a solution by organising a weekend Workshops focused on various Asanas and improve the quality of the practice.</p>

<p>On July 15 and 16. I am conducting four hours Live Yoga Inversion Workshop focused on Headstand each day for 90 Minutes.</p>

<p>By attending this Workshop, you will be able to go in depth of thisbeautiful yoga pose which is also known as the King of all Asanas.</p>

<p>Of course, it is not a magic of one day, you need consistency and regular, conscious effort in order to achieve any transformation, whether it is physical or mental. But this is also true that with proper understanding, you can reach your desired goal faster. Here is Me to guide you in this path to reach your goal quickly and with maximum safety. I am sure you will know such detailed explanation and important tips which will push you further in your practice.</p>

<p>Solet&rsquo;s join on the weekend and learn the art of progressions and transitions of Headstand in Two-days Inversion Workshop with PrashantJ Yoga.</p>

<p>&nbsp;</p>

        `,
        image: 'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1687256669449.jpeg',
        alt: 'Headstand with PrashantJ Yoga',
        subjectInfo:`
        <h2><span>This Online Yoga Workshop will focus on variations of Headstand or Sirsasana:</span></h2>

<ol style="list-style:none">
	<li>1. BaddhaHasta Sirsasana</li>
	<li>2. Mukta Hasta Sirsasana</li>
	<li>3. ParivrittaSirsasana</li>
	<li>4. ParswaSirsasana</li>
	<li>5. Padma Sirsasana</li>
</ol>

<h2><span>During this Headstand Workshop, the focused areas are:</span></h2>

<ol style="list-style:none">
	<li>1. Why Inversions should be practiced every day</li>
	<li>2. How Inversion helps in PranicFlow</li>
	<li>3. Mastery of Emotion through Inversions</li>
	<li>4. Importance of Headstand to improve Semenand Egg quality.</li>
	<li>5. Diversion of Sexual energy into Spiritual transformation</li>
	<li>6. Inversion as memory booster</li>
	<li>7. Improve Celibacy (brahmacharya) with Inversion</li>
	<li>8. Sirsasana as monkey mind controller</li>
	<li>9. Susumna balancing process</li>
	<li>10. The immunity booster and best coordinator of body functioning</li>
</ol>

<h2><span>In this Inversion Breakdown Workshop, You will Learn:</span></h2>

<ol style="list-style:none">
	<li>1. Sirsasana key points</li>
	<li>2. Three core points of Sirsasana</li>
	<li>3. Pranic work with (Sahasara,Ajna,Manipura and Mooladhara Chakra)</li>
	<li>4. Engagement ofThree Vayu (Udana, Prana, Apana)</li>
	<li>5. Modification and variations of Sirsasana</li>
	<li>6. Difference between Pointing Toes in flexedFoot in Sirsasana.</li>
</ol>

<p>In this online yoga workshop, there will be various refined techniques and points which I am sharing with you, based on my personal practice and yogic research on Inversions. I believe this is one of the best workshops on inversion we can make together so let&rsquo;s find the time and learn this beautiful, Energetic and</p>

<p>Pranic Yoga Pose - SIRSASANA</p>

<h2><span>Registration Information:</span></h2>

<p><strong>Date: </strong>15<sup>th</sup> and 16<sup>th</sup> July<br />
<strong>Duration:</strong> 2 Days</p>

<p><strong>Time:</strong> 90 Minutes Each Day</p>

<p><strong>Bonus:</strong>15 Minutes of&nbsp; Q&amp;A Round</p>

<h2><a href="https://www.yogavidyaschool.com/book-now" style="text-decoration:none;color:#f9751e"><strong>Book Now!</strong></a></h2>

<p>&nbsp;</p>

<p><img alt="Yoga Inversion Workshop" class="img-fluid sectionImg shadow" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1687169402195.jpg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;" /></p>
        `
      }

    }
    else if (this.slug == 'yoga-philosophy-course-free') {
      this.aboutItems = {
        title: 'योग शास्त्र /',
        span: 'योग ग्रंथ अध्यन',
        desc: `
<p><span style="font-size:20px">योग अभ्यास बहुत महत्वपूर्ण है, परंतु अभ्यास के पीछे का सार जानना अति &nbsp;आवश्यक है। इसीलिए ग्रंथो और शास्त्रों की रचना करी गई है। शास्त्रों के माध्यम से शस्त्र का ज्ञान होता है। जो आप अभ्यास करते हैं, उनको शस्त्र मानिए। इन शस्त्रों का सही उपयोग करने के लिए, अभ्यासों का सही ज्ञान प्राप्त करने के लिए शास्त्रों का अध्यन बहुत आवश्यक है।&nbsp;<br />
योग विद्या स्कूल की तरफ़ से शास्त्र अध्यन का शिक्षण आरंभ किया है। ये कक्षायें (हिन्दी मे) प्रत्येक शुक्रवार को ज़ूम ऐप के माध्यम से प्रस्तावित की जायेंगी।&nbsp;</span></p>

<p><span style="font-size:20px">योग दर्शन हमे बताता है की जितने भी योग के अभ्यास है उनका मुख्य उद्देश्य क्या है, और किस समय उनका अभ्यास करना चाहिए। अभ्यास करने का नियम क्या है। कौन सा व्यक्ति अभ्यास के योग्य है और किस व्यक्ति को इसके लिए वफादार होना चाहिए। ये सब जानकारी इन पाठों के माध्यम से साझा की जाएगी।&nbsp;</span></p>

<p><span style="font-size:20px">इस श्रृंखला मैं पहला ग्रंथ जो पढ़ाया जाएगा वो पतंजलि योग सूत्र है।&nbsp;</span></p>
        `,
        image: 'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1687935108018.jpeg',
        alt: 'योग शास्त्र / योग ग्रंथ अध्यन',
        subjectInfo:`
        <h2><span>महत्वपूर्ण बिंदु:</span>&nbsp;</h2>

<p><br />
<strong>शिक्षक</strong>: प्रशांत ज़ख़मोला<br />
<strong>दिन</strong>: प्रत्येक शुक्रवार<br />
<strong>समय</strong>: शाम 7:00 - 8:00 &nbsp;<br />
<strong>शुल्क</strong>: निःशुल्</p>

<p>&nbsp;</p>

<p><img alt="yoga philosophy course free" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1687935090661.jpeg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;" /></p>
        `
      }

    }
    else if (this.slug == 'yoga-history-and-philosophy') {
      this.aboutItems = {
        title: 'Yogic Scriptures',
        span: 'Study',
        desc: `
<p>There is one asana in hatha yoga which is based on gorakhnath known as <strong>'GORAKSHASANA'</strong>.</p><p>Guru Gorakhnath was one of the nine saint of nath tradition which is called <strong>'NAVNATHA'</strong>. He was a maha yogi who was born sanyasi. Guru Gorakhnath was the first hatha yogi who brought the hatha yoga secrets from the ancient time. The yoga had earlier been called gupta vidya ( the secret knowledge of enlighten) and no one could practise this as this vidya was very hard. Guru Gorakhnath modified this secret vidya in a simple form of practice so everyone could practice. The same form we are practising today with the different names. He wrote many text about yoga. His first text is goraksh samhita.</p><p>According to Gorakhnath there are 6 limbs of yoga which is called <strong>'SHATHANG YOG'</strong></p><p><strong>Duration of the class: 45 minutes three days a week every Monday, Wednesday &amp; Friday</strong><br><strong>Donation: Rs.2000.00 ($50.00) per month</strong></p><p><strong>We will study the scripture called 'Gorakh Padhyti' ( the hatha yoga text) written by GURU GORAKSH NATH</strong></p>
        `,
        image: '',
        alt: '',
      }

    }
    else if (this.slug == 'yoga-retreat-in-peru') {
      this.aboutItems = {
        title: 'Yoga Retreat',
        span: 'in Peru',
        desc: `
  <h2><span>Ashtanga Yoga Retreat in Cusco, Peru, led by Prashant J Yoga</span></h2>

<p>Yoga Vidya School invites you on a unique and life-transforming experience with Ashtanga Yoga and Pranayama Retreat in Cusco, Peru. Join us as you prepare to explore Ashtanga Vinyasa Yoga, Meditation, Pranayama and Philosophy in the backdrop of Peruvian Andes of Cusco. Our program is helmed by the popular Indian Yoga Acharya Prashant Jakhmola, a prominent figure in yoga community of India.</p>

<p>A trustworthy name in the world of yoga , Acharya Prashant &nbsp;has conceptualised and created this unique Yoga program with dedication and thorough research. He is now offering an Ashtanga Yoga Retreat in Peru which will inculcate all the age-old and niche learnings of Ashtanga Yoga from Mysore, the &lsquo;Ashtanga Capital of the World&rsquo;. This Yoga Retreat will also delve into deep immersion practices from a philosophical and spiritual perspective of yoga.<br />
&nbsp;</p>
        `,
        image: 'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721289400809.jpg',
        alt: 'Yoga Retreat in Peru',
        subjectInfo:`
        <h2><span>Peru Ashtanga Vinyasa Retreat Practice Areas</span></h2>

<p>In this Retreat, we take you through primary series of Ashtanga Vinyasa and introduction to 2nd series of Ashtanga</p>

<p>Focus areas broadly include:</p><br />
<h4><strong>Asana Practice</strong></h4>

<ul style="list-style:none">
	<li>1. Floating techniques, jump through and jump back</li>
	<li>2. Backbend workshop&nbsp;</li>
	<li>3. Handstand technique&nbsp;</li>
	<li>4. Mastery &nbsp;on inversions</li>
</ul>

<h4><strong>Pranayama</strong></h4>

<ul style="list-style:none">
	<li>1. Ujjayi breath</li>
	<li>2. Bhramari</li>
	<li>3. Fire breath</li>
	<li>4. Breath of victory&nbsp;</li>
	<li>5. Energy channel cleaning&nbsp;</li>
</ul>

<h4><strong>Philosophy</strong></h4>

<ul style="list-style:none">
	<li>1. History of Ashtanga&nbsp;</li>
	<li>2. Ashtanga Yoga and Hatha yoga&nbsp;</li>
	<li>3. Quality of a practitioner</li>
	<li>4. 9 barriers in yoga practice</li>
	<li>5. Purpose of Asana and Pranayama</li>
	<li>6. Eight limbs of Yoga</li>
	<li>7. Yoga lifestyle</li>
	<li>8. How to incorporate Yoga into daily life to manage emotions</li>
</ul>

<h4><strong>Meditation</strong></h4>

<ul style="list-style:none">
	<li>1. Deep relaxation for stress management</li>
	<li>2. Yoga Nidra senses manipulation</li>
	<li>3. Chakra meditation</li>
</ul>

<p><img alt="yoga retreat in peru" class="img-fluid text-center" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721289415820.jpg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;"/></p>

<p>&nbsp;</p>

<h2><span>What&#39;s Included in Yoga Retreat in Cusco, Peru</span></h2>

<p>&nbsp;Our Ashtanga Yoga Retreat in Peru includes yoga classes and lectures presided by Acharya Prashant Jakhmola. We offer opportunities to attend group discussions where you gain valuable insights by sharing knowledge with fellow peers.<br />
Reconnect with your inner being with more than 4 hours of immersive daily practice of Yoga Asanas and Pranayama. Such immersive sessions can open your heart to the profound exploration of the body, mind and soul.<br />
Comprehend the deeper meaning of &nbsp;life through the erudite Philosophy and Yogic Psychology sessions. These in depth discussions &nbsp;with direct interactions with Acharya Prashant takes your understanding of yoga and wellness to a whole new level.</p>

<p>&nbsp;</p>

<p><img alt="yoga retreat in peru" class="img-fluid text-center" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721294931709.jpeg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;"/></p>

<p>&nbsp;</p>

<h2><span>What is Not Included?</span></h2>

<ul style="list-style:none">
	<li>1. Hotel in Lima </li>
	<li>2. Return tickets Lima-Cusco </li>
	<li>3. Visit to Machu Picchu </li>
</ul>
<p>&nbsp;</p>
<h2><span>Amenities and Services</span></h2>

<ul style="list-style:none">
	<li>1. Check in at the Retreat centre any time you reach the Retreat Centre. However, we recommend you stay at our suggested hotel in the vicinity if you happen to &nbsp;arrive a day earlier to Cusco.</li>
	<li>2. The Retreat Centre is located in gorgeous surroundings with shared or private rooms with breathtaking views</li>
	<li>3. Stay in spacious rooms having comfortable beds, full bathroom and large windows for enjoying the views</li>
	<li>4. Main Yoga Deck &amp; 8th Chakra Yoga Shala at the Retreat Centre is utilised for all classes&nbsp;</li>
	<li>5. We will guide you through how to modify postures using provided equipment such as mats, blocks, bolsters, straps &amp; blankets for procuring enhanced benefits.</li>
	<li>6. Explore the splendour of the entire Retreat Centre property as you go about your daily Ashtanga yoga routine</li>
	<li>7. The daily housekeeping services at the Retreat Centre ensures that you return to clean and hygienic rooms post your yoga practice for rest and rejuvenation</li>
	<li>8. Engage in exciting event of Pachamama ritualto connect with the mountain spirit</li>
</ul>

<p>Kindly note that airport transfer and day trips are not included in this yoga retreat package.</p>

<p>&nbsp;</p>

<p><img alt="yoga retreat in peru" class="img-fluid text-center" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721294983137.jpeg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;"/></p>

<p>&nbsp;</p>

<h2><span>Meals</span></h2>

<p>Relish daily vegetarian and vegan meals at our Retreat facility. Enjoy healthy and delicious &nbsp;breakfast, lunch and dinner at your preferred time. If you are craving &nbsp;some nonvegetarian food, we do serve some fish and chicken with your meals. Keep yourself hydrated by sipping on herbal teas and consuming juicy fruits which are available at the facility throughout the day. Also, enjoy your cup of coffee amidst the verdant backdrop of Peruvian Andes. &nbsp;<br />
The food ingredients &nbsp;are organic and locally sourced making for nutritious and sumptuous meals that offer energy and vitality as you progress through the Ashtanga Retreat.&nbsp;</p>

<p>&nbsp;</p>

<p><img alt="yoga retreat in peru" class="img-fluid text-center" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721294944246.jpeg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;"/></p>

<h2>&nbsp;</h2>

<h2><span>Fees for the Peru Retreat</span></h2>

<ul style="list-style:none">
	<li><span>1. $2550 (Triple Occupancy) and Meals</span></span></li>
	<li><span>2. $2800 (Double Occupancy) and Meals </span></span></li>
	<li><span>3. $3000 (Single Occupancy) and Meals </span></span></li>
</ul>

<h2>&nbsp;</h2>

<h2><span>How to Reach Cusco, Peru Yoga Retreat</span></h2>

<p>Located in Latin America, Peru, the land of the ancient Machu Picchu is well-connected by air route to major destinations worldwide. Non-stop flights are operating regularly between Lima and Atlanta, Dallas, Los Angeles, Houston, New York, Miami, Fort Lauderdale, San Francisco and Newark. Besides, there are also non-stop flights operating between Lima and Europe. </p>

<p>To reach Custo, as an international flyer you will first need to reach Lima, the capital city of Peru. We suggest that you spend one full day in Lima after you arrive in Peru. </p>
<p>
The quickest way to reach Cusco from Lima is by plane journey. The flight journey from Lima to Cusco takes about one hour and thirty minutes and the tickets to Cusco are priced at $35 to $100.
</p>

<h2><span>How to Book Yoga Retreat in Peru</span></h2>
<p>Thank you for choosing to continue your yogic path with Yoga Vidya School. To ensure better communication and booking process easier, we are excited to introduce Alejandra Velasco who is our Peru Retreat partner, a dedicated yogi with extensive experience in organising retreats. She will be the primary contact, guiding you through the booking process and answering any questions you may have.
You can contact on below details directly for personalised assistance.</p>
<p>
<ul style="list-style:none">
	<li><strong>Contact Person:</strong>  Alejandra Velasco</li>
	<li><strong>Email:</strong>  alemarie2303@gmail.com</li>
	<li><strong>WhatsApp/Call:</strong>  (+503) 76091210</li>
</ul>

<h2><span>Peru : Revel In The Beauty Of Nature As You Delve In Yoga Immersion</span></h2>

<p>Peru is a traveller’s paradise known for its ancient city of Machu Picchu and the Amazonian rain forests. During free time, the participants, by themselves, can also explore the unique terrace landscapes of the Colca Canyon and the famed geoglyphs of Nazca Lines. </p>
<p>
We are located at the Sacred Valley, one hour away from Cusco City which is a UNESCO World Heritage Site and a gateway to the architectural remains of Machu Picchu.
</p>
<p>
A watering hole for adventure freaks and solo travellers, Peru with its gorgeous landscapes, lip-smacking food and comparatively cheaper prices is an attractive destination for aspiring yogis and yoginis.
</p>
    `
      }

    }

  }

  ngOnInit() {
  }

}
