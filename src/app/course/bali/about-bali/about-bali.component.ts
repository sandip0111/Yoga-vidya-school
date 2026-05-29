import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { WebapiService } from '../../../webapi.service';
import { CartItem, CartService } from '../../../cart.service';
import { routeEnum } from '../../../enum/routes';
import { s3Bucket, youtubeLink } from '../../../enum/s3Bucket';
import { PixelTrackingService } from '../../../services/pixel-tracking.service';
import { RegistrationFormComponent } from '../../../student/registration-form/registration-form.component';

@Component({
  selector: 'app-about-bali',
  standalone: true,
  imports: [CommonModule, RegistrationFormComponent],
  templateUrl: './about-bali.component.html',
  styleUrls: ['./about-bali.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutBaliComponent implements OnInit {
  slug: string | undefined = '';
  aboutItems: any;
  course?: any;
  ispranayamaCourseOnlinePranarambha = false;
  routEnum = routeEnum;
  s3Bucket = s3Bucket;
  youtubeLink = youtubeLink;
  constructor(
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    protected sanitizer: DomSanitizer,
    private webapiService: WebapiService,
    private _pixelTrackingService: PixelTrackingService
  ) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;
    if (this.slug == '200-hour-yoga-teacher-training-in-bali') {
      this.aboutItems = {
        title: 'Bali is not only a destination -- ',
        span: 'it’s a sanctuary',
        desc: `<p>Amid sacred temples, lush nature, and the calm rhythm of island life, every sunrise, every practice, and every breath becomes part of your inner journey. This island energy makes your training more than
a certification: it’s a transformation.
</p> `,
        // image:
        //   'https://my-s3-images-bucket.s3.amazonaws.com/images/bali_200_npa2hj.jpg',
        // alt: '200 yoga teacher training in bali',
      };
    } else if (this.slug == '300-hour-yoga-teacher-training-in-bali') {
      this.aboutItems = {
        title: '300 hour',
        span: 'Yoga Teacher Training in Bali',
        desc: `
        <p><b>Experience profound physical, mental, and spiritual transformation with our 300-hour Yoga Teacher Training in Ubud, Bali. </b>Surrounded by Bali’s lush rice fields, serene beaches, and deep spiritual heritage, this program invites you to immerse yourself in a journey of self-discovery and advanced yogic studies.</p>
        <p>Our 300-hour TTC is designed for students who have completed a 200-hour training and wish to deepen their practice, as well as for seasoned practitioners seeking to refine their knowledge. This Yoga Alliance–certified course combines traditional wisdom with practical teaching methodologies, guiding you into the subtler and more advanced dimensions of yoga.</p>
        <p>Led by experienced and devoted teachers, the training covers advanced asana, pranayama, meditation, yogic anatomy and physiology, as well as sequencing, adjustments, and philosophy. You will also explore how modern perspectives from psychology and neuroscience connect with the timeless patterns of yogic practice.</p>
        <p>More than a certification, this is an invitation to walk a path that transcends the physical, illuminating your inner light and strengthening your role as both practitioner and teacher.</p>
        `,
        image: s3Bucket.bali300About,
        alt: '300 yoga teacher training in bali',
        subjectInfo: `
    <div class="row mb-5">
    <div class="col-md-6 align-items-center">
    <div>
<h2><span>Why Study 300 hour yoga training in Ubud, Bali?</span></h2>
<div>
<p>As mentioned above, the island province of Bali&nbsp; abounds with scenic beauty that augurs well with any spiritual practice such as yoga. Below we will enlist a few more pointers as to why you should embark on the 300 hour yoga training in Ubud, Bali. Let&#39;s take a look.</p>

<ul class="orange-tick" style="text-align:start">
<li>Bali is blessed with natural beauty in the form of rolling mountains, lush green paddy fields and tranquil beaches. Yoga when done amidst tranquil and scenic environs entails more immersive and transformative experiences.</li>
<li>Furthermore, Bali has a vibrant spiritual culture. Its numerous temples as well as the opulent traditional architecture only helps one to pursue spiritually inclined practices such as yoga.</li>
<li>Bali already has a thriving yoga culture. You will find all kinds of yoga styles and different formats of yoga being practised here. Besides, the countryside is teeming with yoga ashrams, yoga studios and yoga schools offering a plethora of yoga options. Infact, Bali boasts of a thriving yoga community helmed by world renowned yoga teachers who have the capability to transform you through the realms of the 300 hour yoga TTC in Bali.</li>
</ul>
</div>
</div>
</div>
<div class="col-md-6">
<div class="imageback bali_image_back">
<img src=${s3Bucket.bali300SectionImage} class="baliImage" alt="300 Hours Yoga Teacher Training in Bali"/>
</div>
</div>
</div>
<p>&nbsp;</p>

<div class="row mb-5 rowR_2">
<div class="col-md-6">
<div class="imageback bali_image_back">
<img src=${s3Bucket.bali300SectionImage2} class="baliImage" alt="300 Hours Yoga Teacher Training in Bali"/>
</div>
</div>
    <div class="col-md-6 align-items-center">
    <div>
<h2><span>Why come on this transformative journey of 300 hour yoga teacher training in Bali?</span></h2>
<div>
<p>As mentioned in the above sections, Bali offers a perfect backdrop for pursuing the arduous 300 hour yoga teacher training in Bali. However, the program in itself offers many nuanced benefits such as the following:</p>

<h4>Strength and Stability</h4>

<p>The cohesive integration and alignment of mind, body and breath is brought about through deeper yogic practices. We can then express our innate powers with grace and elan. This way we not only balance and enhance our prana but also explore our hidden limitless potential. This determined attitude which is showcased in our daily yogic practices slowly manifests into our daily lives as we go about meeting mundane and challenging times albeit with a sense of inner peace and self-mastery.</p>

<h4>Tools and techniques</h4>

<p>Yoga Vidya School at Ubud, Bali has an highly organized curriculum that encapsulates the traditional wisdom of yogic sages with contemporary scientific knowledge pertaining to neurosciences, anatomy and psychology. The 300 hour yoga TTC in Bali program will equip its students with an array of yogic tools such as physical asanas, ensuing bandhas, meditation and pranayama to beget an enriching experience of personalized transformation along-with advanced yogic practices nudged by ancient yogic philosophies.</p>

<h4>Manifestation through practice and teaching</h4>

<p>This 300 hour long yoga TTC in Bali program is an experiential course that offers you the best knowledge coupled with deep innate experiences at every level. This 300 hour yoga training follows an immersive format including concepts and tools that accord you with a sense of embodiment and achievement so that you gain knowledge with confidence. You will be surprised with your own abilities both at the physical and spiritual levels which will inspire you to grow for years to come.</p>

</div>
</div>
</div>
</div>`,
      };
    } else if (this.slug == 'yoga-retreat-in-bali') {
      this.aboutItems = {
        title: 'Yoga retreat',
        span: 'in Bali',
        desc: `
        <p><strong>Transform Your Life with the Prana Sanyam Yoga Retreat &ndash; Only Retreat with Focus on Ghat Sadhana and Prana Sanyam</strong></p>

<p>Yoga Vidya School in Bali brings you an opportunity to experience and study the tradition of yoga and imbibe ancient wisdom of leading a healthy and happy lifestyle. Introduced by Yoga Acharya Prashant Jakhmola, otherwise popularly known as Prashant J Yoga, this yoga retreat takes you on a voyage of a lifetime. This Bali Retreat is a unique opportunity to immerse yourself in a comprehensive yoga experience that mirrors the highly acclaimed retreat offered in Mysore, India.</p>

<p>Learn about the deep meditative techniques of Pranayama (yogic breathwork), Ashtanga Vinyasa (Primary and Intermediate Series) along with Asana Lab for correct alignment and take a plunge into the deeper aspects of yogic philosophy and spiritual practices.&nbsp;</p>

<p>Prashant J Yoga has specially designed the program to cater to the preferences and meet the expectations of yoga lovers and especially those who are practicing yoga for some time but still struggling to understand the correct path and methods of synchronising the breath and movements.&nbsp;</p>
    `,
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/images/FERN8271_fjodwd.jpg',
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

        `,
      };
    } else if (this.slug == 'yoga-retreat-in-mysore-india') {
      this.aboutItems = {
        title: 'Yoga retreat',
        span: 'in Mysore, India',
        desc: `
<p>Yoga Vidya School is excited to announce a unique yoga retreat in Mysore! Join us for an exploration of Yoga, Pranayama and Philosophy in Mysore with Yoga Acharya Prashant Jakhmola, popularly known as Prashant J Yoga on Youtube, Instagram and Google.</p>

<p>One of the most trusted and trending Yoga Teachers on Internet, Prashant Ji has conceptualised and created this amazing Yoga Program after thorough research and dedication. He has offered a very special opportunity of learning age old tradition of Ghat Sadhana and Prana Sanyam in Mysore, popular known as Ashtanga Capital of the World. This Yoga Retreat is also a deeper immersion in the philosophical and spiritual aspect of Yogic science.</p>

    `,
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/images/IMG_7533_fv5f6d.jpg',
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

        `,
      };
    } else if (this.slug == routeEnum.foundationOfSpirituality) {
      this.aboutItems = {
        title: 'Awaken the Path Within',
        span: '',
        desc: `
       <p>The word spirituality is heard more than ever today—yet it is also one of the most misunderstood. For some, it is mistaken as religion, while for others it seems to be the opposite. But what does spirituality truly mean? At its essence, spirituality is about awakening awareness and recognizing our true nature beyond the roles, labels, and illusions of the material world.</p>

<p>In times when stress, anxiety, and depression are rising, the practice of spirituality becomes not just helpful but essential. A balanced mind and a healthy body allow us to move through life with clarity, compassion, and deeper connection. Spiritual awareness expands every dimension of our being—physical, mental, emotional, and beyond. It helps us cultivate peace, humility, love, and understanding, transforming not only how we relate to ourselves but also how we connect with the world.</p>

<p>True spirituality guides us toward the realization of our Self: the formless, nameless pure consciousness within. It is the doorway to Moksha—liberation from suffering and the endless cycle of birth and death. Through steady practice, spirituality ceases to be just an idea and becomes a living discipline, one that brings us closer to freedom, truth, and the highest purpose of life.</p>

<p>In this course, we will explore the foundations of spirituality and the philosophy that supports it—because true practice can only begin with true understanding.</p>
        `,
        image: '',
        alt: 'Foundation of Spirituality',
        subjectInfo: `
        <h2> <span>What You Will Learn In This Course ?</span></h2>

<p>&nbsp;</p>

<p><strong>✨ Basics of Spirituality</strong></p>

<p>&nbsp; -What spirituality truly means</p>

<p>&nbsp; -The ultimate goals of spirituality</p>

<p>&nbsp; -Understanding the roots of suffering</p>

<p>&nbsp; -Spirituality vs. Religion — the real difference</p>

<p>&nbsp; -The many meanings of Dharma</p>

<p><strong>📖 Spiritual Philosophy</strong></p>

<p>&nbsp; -Why philosophy is essential on the path</p>

<p>&nbsp; -The role of wisdom in practice</p>

<p>&nbsp; -The pillars that sustain spirituality</p>

<p><strong>🕉️ Indian Philosophies</strong></p>

<p>&nbsp; -Overview of Indian philosophical systems</p>

<p>&nbsp; -How to approach and study them with clarity</p>
<p>&nbsp;</p>
<p>Ready to jump from Awareness to Liberation?</p>
<a href="/checkout/${routeEnum.foundationOfSpirituality}" class="button cursor-pointer ms-0">Join Now</a>
<p>&nbsp;</p>
<h2>Who is this course for?</h2>
<p>Anyone who is interested in introduction to spirituality and philosophy.</p>

<p>&nbsp;</p>

<h2><span>Meet The Teacher</span></h2>
<p><img alt="Foundation of Spirituality" class="img-fluid resp-img" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1679309899405.jpeg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;"/></p>
<p>&nbsp;</p>

<p>Harshwardhan Yardi blends the depth of ancient spiritual wisdom with a clear, modern perspective. His teachings remain rooted in authentic scriptures, while being relevant to today’s seekers.</p>
<p>He began his career as a software engineer, but then arrived at a turning point in his mid-twenties where he came across a spiritual book that set him on a path of intense spiritual pursuit.</p>
<p>For 10 years, Swami ji lived in the harsh conditions of the Himalayas, performing spiritual practices and ascetics.</p>
<p>Living in a traditional ashram, he studied the original writings of Indian Philosophy in Sanskrit, immersed himself in the truths of the universe, and engaged in knowing one’s true self.</p>
<p>This combination of personal experience and scriptural immersion helped him uncover the essence of spiritual enlightenment—that later shaped his teaching style rooted in authenticity and clarity.</p>
<p>Today, Harsha teaches various systems of spiritual philosophy in a precise, evidence-based manner. He is especially known for offering clear metaphysical insights into the nature of soul, the principles of karma, and the deeper fabric of existence—guiding seekers with structured understanding on their path to liberation.</p>
<p>His lectures have been well-received by his regular students across various countries and cultures.</p>
<p>He has traveled to Brazil, Russia, Nepal, and major cities across India to deliver discourses on spirituality and self-realization.</p>
<p>Harsha has also authored a book titled Ashtavakra Gita: The Ultimate Solace – Third Edition, a significant contemporary work in spiritual literature considered as a modern-day masterpiece on spirituality.</p>
<p>&nbsp;</p>
<h2><span>Requirements</span></h2>
<h5>Anyone who is interested in introduction to spirituality and philosophy can join this course, no previous knowledge or tools are required.</h5>
        `,
      };
    } else if (this.slug == 'yoga-inversion-workshop-headstand') {
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
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1687256669449.jpeg',
        alt: 'Headstand with PrashantJ Yoga',
        subjectInfo: `
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
        `,
      };
    } else if (this.slug == 'yoga-philosophy-course-free') {
      this.aboutItems = {
        title: 'योग शास्त्र /',
        span: 'योग ग्रंथ अध्यन',
        desc: `
<p><span style="font-size:20px">योग अभ्यास बहुत महत्वपूर्ण है, परंतु अभ्यास के पीछे का सार जानना अति &nbsp;आवश्यक है। इसीलिए ग्रंथो और शास्त्रों की रचना करी गई है। शास्त्रों के माध्यम से शस्त्र का ज्ञान होता है। जो आप अभ्यास करते हैं, उनको शस्त्र मानिए। इन शस्त्रों का सही उपयोग करने के लिए, अभ्यासों का सही ज्ञान प्राप्त करने के लिए शास्त्रों का अध्यन बहुत आवश्यक है।&nbsp;<br />
योग विद्या स्कूल की तरफ़ से शास्त्र अध्यन का शिक्षण आरंभ किया है। ये कक्षायें (हिन्दी मे) प्रत्येक शुक्रवार को ज़ूम ऐप के माध्यम से प्रस्तावित की जायेंगी।&nbsp;</span></p>

<p><span style="font-size:20px">योग दर्शन हमे बताता है की जितने भी योग के अभ्यास है उनका मुख्य उद्देश्य क्या है, और किस समय उनका अभ्यास करना चाहिए। अभ्यास करने का नियम क्या है। कौन सा व्यक्ति अभ्यास के योग्य है और किस व्यक्ति को इसके लिए वफादार होना चाहिए। ये सब जानकारी इन पाठों के माध्यम से साझा की जाएगी।&nbsp;</span></p>

<p><span style="font-size:20px">इस श्रृंखला मैं पहला ग्रंथ जो पढ़ाया जाएगा वो पतंजलि योग सूत्र है।&nbsp;</span></p>
        `,
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1687935108018.jpeg',
        alt: 'योग शास्त्र / योग ग्रंथ अध्यन',
        subjectInfo: `
        <h2><span>महत्वपूर्ण बिंदु:</span>&nbsp;</h2>

<p><br />
<strong>शिक्षक</strong>: प्रशांत ज़ख़मोला<br />
<strong>दिन</strong>: प्रत्येक शुक्रवार<br />
<strong>समय</strong>: शाम 7:00 - 8:00 &nbsp;<br />
<strong>शुल्क</strong>: निःशुल्</p>

<p>&nbsp;</p>

<p><img alt="yoga philosophy course free" class="img-fluid" src="https://my-s3-images-bucket.s3.amazonaws.com/img/image_1687935090661.jpeg" style="box-shadow: 0px 23.77px 23.77px 0px rgba(0, 0, 0, 0.55); border-radius: 10px;" /></p>
        `,
      };
    } else if (this.slug == 'yoga-history-and-philosophy') {
      this.aboutItems = {
        title: 'Yogic Scriptures',
        span: 'Study',
        desc: `
<p>There is one asana in hatha yoga which is based on gorakhnath known as <strong>'GORAKSHASANA'</strong>.</p><p>Guru Gorakhnath was one of the nine saint of nath tradition which is called <strong>'NAVNATHA'</strong>. He was a maha yogi who was born sanyasi. Guru Gorakhnath was the first hatha yogi who brought the hatha yoga secrets from the ancient time. The yoga had earlier been called gupta vidya ( the secret knowledge of enlighten) and no one could practise this as this vidya was very hard. Guru Gorakhnath modified this secret vidya in a simple form of practice so everyone could practice. The same form we are practising today with the different names. He wrote many text about yoga. His first text is goraksh samhita.</p><p>According to Gorakhnath there are 6 limbs of yoga which is called <strong>'SHATHANG YOG'</strong></p><p><strong>Duration of the class: 45 minutes three days a week every Monday, Wednesday &amp; Friday</strong><br><strong>Donation: Rs.2000.00 ($50.00) per month</strong></p><p><strong>We will study the scripture called 'Gorakh Padhyti' ( the hatha yoga text) written by GURU GORAKSH NATH</strong></p>
        `,
        image: '',
        alt: '',
      };
    } else if (this.slug == 'yoga-retreat-in-peru') {
      this.aboutItems = {
        title: 'Yoga Retreat',
        span: 'in Peru',
        desc: `
  <h2><span>Ashtanga Yoga Retreat in Cusco, Peru, led by Prashant J Yoga</span></h2>

<p>Yoga Vidya School invites you on a unique and life-transforming experience with Ashtanga Yoga and Pranayama Retreat in Cusco, Peru. Join us as you prepare to explore Ashtanga Vinyasa Yoga, Meditation, Pranayama and Philosophy in the backdrop of Peruvian Andes of Cusco. Our program is helmed by the popular Indian Yoga Acharya Prashant Jakhmola, a prominent figure in yoga community of India.</p>

<p>A trustworthy name in the world of yoga , Acharya Prashant &nbsp;has conceptualised and created this unique Yoga program with dedication and thorough research. He is now offering an Ashtanga Yoga Retreat in Peru which will inculcate all the age-old and niche learnings of Ashtanga Yoga from Mysore, the &lsquo;Ashtanga Capital of the World&rsquo;. This Yoga Retreat will also delve into deep immersion practices from a philosophical and spiritual perspective of yoga.<br />
&nbsp;</p>
        `,
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721289400809.jpg',
        alt: 'Yoga Retreat in Peru',
        subjectInfo: `
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
    `,
      };
    }
  }

  ngOnInit() {
    this.getCourseBySlug(this.slug);
  }

  addToCart(event: Event): void {
    event.preventDefault();

    if (this.course != undefined) {
      this.cartService.addItem(this.course);
    }

    this.router.navigate(['/add-to-cart']);
  }

  getCourseBySlug(slug: any) {
    let data = {
      slug: slug,
    };
    this.webapiService.getCourseById(data).subscribe((res: any) => {
      this.course = {
        id: res.data[0]._id,
        title: res.data[0].coursetitle,
        shortDescription: res.data[0].shortDesc,
        priceINR: 0,
        priceUSD: 0,
        quantity: 1,
      };
    });
  }
  goToPaymentPage() {
    if (
      this.slug == routeEnum.bali300 ||
      this.slug == routeEnum.bali200 ||
      this.slug == routeEnum.foundationOfSpirituality
    ) {
      this.router.navigate([`/checkout/${this.slug}`]);
    } else {
      this._pixelTrackingService.trackViewContent(
        'Breath Dtox',
        routeEnum.bDtox
      );
      this.router.navigate([routeEnum.bDtox, routeEnum.stRegister]);
    }
  }
  registerClick(slug: string) {
    this.router.navigate(['checkout', slug]);
  }
}
