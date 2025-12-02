import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartItem, CartService } from '../../../cart.service';
import { WebapiService } from '../../../webapi.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { routeEnum } from '../../../enum/routes';
import { aboutContentModel } from '../../../models/rishikesh';
import { twoHundredTTCModel } from '../../../enum/details';
import { s3Bucket } from '../../../enum/s3Bucket';
import { feesDto, feesInfoDto } from '../pricing/pricing.component';

@Component({
  selector: 'app-about-rishikesh',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-rishikesh.component.html',
  styleUrls: ['./about-rishikesh.component.css'],
})
export class AboutRishikeshComponent implements OnInit {
  slug: string = '';
  aboutContent: aboutContentModel = new aboutContentModel('', '', '', '');
  ispranicPurificationImg = false;
  course?: any;
  routeEnum = routeEnum;
  date: string = '';
  startTime: string = '';
  endTime: string = '';
  s3Bucket = s3Bucket;
  constructor(
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private webapiService: WebapiService
  ) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path ?? '';
  }

  ngOnInit() {
    this.getCourseBySlug(this.slug);
  }
  generateHtmlContent() {
    if (this.slug == routeEnum.rishikesh100) {
      this.aboutContent = new aboutContentModel(
        s3Bucket.rishikesh100About1,
        '🌟 Who This 100-Hour Yoga Teacher Training in Rishikesh Is For',
        '',
        this.sanitizer.bypassSecurityTrustHtml(`

          <ui style="list-style-type: none;">
            <li>🆕 <b>New to Yoga</b> – You want a structured, well-rounded introduction to yoga that sets you on the right path.</li>
            <li>💖 <b>Yoga Enthusiasts</b> – You’ve practiced casually and now want to deepen your knowledge.</li>
            <li>🧘‍♀️ <b>Holistic Seekers</b> – You’re ready to understand yoga as more than just exercise—gaining a strong foundation in mind, body, and spirit.</li>
            <li>🎯 <b>Technique Lovers</b> – You want to practice asanas with precision, correct alignment, and a deeper awareness.</li>
            <li>🌿 <b>Healing Explorers</b> – You’re interested in using yoga as a natural therapy for various health concerns.</li>
            <li>😌 <b>Stress-Release Seekers</b> – You want to learn powerful relaxation methods for emotional balance and full-body calm.</li>
            <li>🌸<b>Inner Balance Finders</b> – You’re looking to harmonize mind and body, and connect with your inner self.</li>
            <li>📚 <b>Wisdom Hunters</b> – You want to explore Yogic Philosophy, Pranayama, and Meditation in an authentic way.</li>
            <li>📈 <b>Registered Yoga Teachers</b> – You’re seeking Continuing Education (CE) hours to enhance your RYT credentials.</li>
          </ui>
        `)
      );
    } else if (this.slug == routeEnum.rishkesh200) {
      this.aboutContent = new aboutContentModel(
        s3Bucket.rishikesh100,
        'Step Into the Heart of Yoga -',
        'Rishikesh Awaits You 🕉️✨',
        `<p>Embark on a life-changing journey to <b>Rishikesh, India</b> — where ancient wisdom meets deep personal transformation. Our <b>200-Hour Yoga Teacher Training at Yoga Vidya School</b> isn't just a course — it's a gateway to a stronger body, a clearer mind, and a deeply rooted spiritual connection. 🌿</p>
        <p>Certified by <b>Yoga Alliance</b>, this immersive experience will refine your practice, awaken your inner power, and open you to a more confident, fulfilled, and healthy way of living. You’ll learn from dedicated yogis, scholars, and teachers in the <b>Yoga Capital of the World</b>, surrounded by a global community committed to growth and authenticity. 🌍💫</p>
        <p>From hands-on learning and personalized guidance to sacred rituals and traditional teachings, you'll have the chance to truly embody the art of yoga — not just on the mat, but in every aspect of your life.</p>
        <p>As a <b>student</b>, you'll understand how to align asana with your unique physical and spiritual self.</p>
        <p>And as a <b>mentor</b>, you’ll learn how to share your voice with clarity, depth, and purpose. 🎓🧘</p>`
      );
    } else if (
      this.slug ==
      '200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh'
    ) {
      this.aboutContent = new aboutContentModel(
        'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674308332559.jpg',
        '200 HORAS',
        'DE FORMACIÓN DE PROFESORES DE YOGA EN RISHIKESH',
        '<p>Aventúrate en Rishikesh, India, para experimentar un poderoso cambio en tu vida: física, mental y espiritualmente. La formación de profesores de yoga de 200 horas en Yoga Vidya School te llevará a través de grandes intenciones de transformación personal. Este curso certificado por Yoga Alliance te hará avanzar&nbsp; en tu práctica, te capacitará con las mejores técnicas yóguicas, despertará tu energía en todos los aspectos de la vida y te hará más seguro, contento y saludable. Conéctate con una auténtica comunidad de profesores de yoga, eruditos y yoguis dedicados en la Capital Mundial del Yoga.</p><p>Desde el aprendizaje en grupo hasta la ejecución de la práctica , la sadhana personal y las técnicas de correcta alineación, tendrás la oportunidad de sumergirte profundamente en el arte del Yoga. En este curso de formación de Yoga, tendrás&nbsp; más de 14 asignaturas, que cubrirán los secretos ancestrales de la Vida Yóguica que puedes usar en tu vida diaria para equilibrar la vida personal, la vida social (familia) y la vida espiritual. La base de este curso se basa en la investigación de la alineación humana en la Asana funcional y las variaciones que ocurren dentro de los ajustes.</p><p>Y como estudiante, descubrirás cómo individualizar y comprender la práctica de Asana con respecto a tus necesidades espirituales y cuerpo físico.</p><p>Como mentor, tendrás la oportunidad de compartir este viaje yóguico de una manera auténtica, direccional, clara y que hará que tu voz sea más clara.</p><p>No solo obtendrás conocimientos sobre el yoga, sino que también experimentarás la unión sinérgica de almas únicas.</p>'
      );
    } else if (this.slug == routeEnum.rishikesh300) {
      this.aboutContent = new aboutContentModel(
        s3Bucket.rishikesh300About1,
        '',
        '',
        this.sanitizer.bypassSecurityTrustHtml(
          `<p>Our <b>300-Hour Yoga Teacher Training</b> is designed for certified <b>200-Hour TTC graduates</b> and dedicated practitioners ready to take their practice to the next level.
          This is not just a training—it’s an invitation to go deeper into the heart of yoga.
          It’s for those who are committed to their inner journey, eager to refine their skills, and inspired to share the wisdom of yoga to bring more peace, clarity, and joy into the world.</p>
          <p>Training takes place in our peaceful venue, surrounded by lush green Himalayan forest and only a short walk from the sacred Ganges River. Here, in the heart of Rishikesh, you’ll be supported by a team of experienced teachers led by <b>Prashant J Yoga</b>—one of the most trusted yoga educators on YouTube.</p>
          <p>By the end of the training, you will be internationally certified, ready to teach with greater depth, authenticity, and presence.<br />Many of our graduates go on to lead classes, retreats, festivals, and trainings around the world.</p>`
        )
      );
    } else if (
      this.slug == '200-hour-yoga-teacher-training-scholarship-in-rishikesh'
    ) {
      this.aboutContent = new aboutContentModel(
        'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1681706477336.jpg',
        '200 Hours',
        'Yoga Teacher Training Scholarship In Rishikesh',
        `<p>Yoga is a holistic practice that aims for the betterment of human society by awakening conscience in people and promoting mental clarity, physical health, and spiritual well-being. At <a href="https://www.yogavidyaschool.com/">Yoga Vidya School</a>, yoga serves as the quintessential therapy to create balance in life. It is a way of life that uplifts an individual&rsquo;s sense of spirituality and encourages positivity in life. Whether it is meditation techniques, yoga poses, or yoga philosophy, all of it makes you understand the prominence of mental and physical disciplines possessing the power to change your individuality. No wonder yoga has become a global rage, especially amongst health freaks. Practise it on a daily basis and you are set to experience an unprecedented change in your mind and body. And when you are in Rishikesh, the experience is unparalleled.</p>
      <p>Yoga Vidya School strictly believes that knowledge should be available to everyone, irrespective of anything. It should be imparted without any kind of discrimination. Consequently, the school has introduced the 200 hour yoga teacher training scholarship program for those who do not have any financial means to access yoga education but are equally passionate to learn its dynamism. It has been introduced to support these individuals, break financial barriers, and promote inclusivity. So, get going now and be ready to enrol for the program!</p>`
      );
    } else if (
      this.slug == '300-hour-yoga-teacher-training-scholarship-in-rishikesh'
    ) {
      this.aboutContent = new aboutContentModel(
        'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1681707192529.jpg',
        '300 Hours',
        'Yoga Teacher Training Scholarship In Rishikesh',
        `<p>Encompassing mental, physical, and spiritual disciplines, yoga has been helping people around the world cultivate mindfulness for thousands of years. It is a multidimensional practice rooted in the layers of the self and is an idyllic way to lead a healthy and peaceful life. It is on account of its holistic healing powers, yoga has been successful in becoming a global rage today. Hence, it is highly revered by health freaks and yoga enthusiasts across the world. At <a href="https://www.yogavidyaschool.com/">Yoga Vidya School</a>, yoga is what helps you keep your mind, body, and soul in harmony. It is the yogic lifestyle and daily yoga practice that nurture a state of heightened consciousness.</p>
      <p>So, with our <a href="https://www.yogavidyaschool.com/300-hours-yoga-teacher-training-in-rishikesh">300 hour yoga teacher training program</a>, get ready for a life-changing experience. Indulge in self-introspection and learn how to improve strength and flexibility in your body. Involve in some serious training sessions and understand how to create a balance in life with the help of breathing techniques and yoga asanas. Our specially-designed course with a detailed curriculum on Hatha Yoga and Ashtanga Yoga would help you focus on growth and inner-self. Learn how to open up your chakras and master mudras and mantras.</p>
      <p>To make yoga an indispensable part of everyone&rsquo;s life, Yoga Vidya School announces the <em>300-hour yoga teacher training scholarship program</em>. It aims at reaching out to those who don&#39;t have financial accessibility. It has been introduced to bring yoga to people of all backgrounds and socio-economic levels. So, be ready to gain some yogic wisdom like never before!</p>`
      );
    } else if (this.slug == '200-hour-yoga-teacher-training-in-kerala-india') {
      this.aboutContent = new aboutContentModel(
        'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674211364306.jpeg',
        '200 Hours',
        'Yoga Teacher Training in Kerala, India',
        `<p>Travel to the land of glistening backwaters, the above of nature's healing legacy, a place blessed with beauty that is akin to heaven, and the land of exotic fauna, Yoga Vidya School welcomes you to an extensive 200 Hour Yoga Teacher Training in Kerala, India. Travel into a world where time stands still with nature's bounty expressed through its picturesque and exceptionally clean beaches, lush rainforests, and hospitality expressed in its vibrant culture and ancient wisdom that thrives even after all these millennia. You are invited to experience and witness the positive transformation of the mind, body, and spirit through authentic teachings and practices of the Hatha and Ashtanga Yoga forms under the guidance of India's noted yoga masters. Redesign your diet and lifestyle that is aligned with the principles of Ayurveda and transition towards a more balanced body and mind. We also suggest you join our rejuvenative yoga retreats at Bali, which will allow you to experience the maximum healing powers of Yoga, to transform your overall wellness. Introduce yourself to the like-minded communities while discovering a blend of relaxation and enlightenment. Whether you are a beginner or a seasoned practitioner, joining the <a href='200-hour-yoga-teacher-training-in-bali'>200 Hour Yoga TTC in Bali</a> As well as Kerala will support you to deepen your practice. Be on your way to becoming a Yoga Alliance certified yoga teacher and a yogi of finesse imbibed from theoretical teachings from the sacred books of yoga and Vedas with Yoga Vidya School's 200 Hour Yoga Teacher Training in Kerala.</p>`
      );
    } else if (this.slug == '300-hour-yoga-teacher-training-in-kerala-india') {
      //       this.aboutContent = {
      //         image:
      //           'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674213871201.jpeg',
      //         title: '300 Hour',
      //         secondTitle: 'Yoga Teacher Training in Kerala, India',
      //         desc: `
      // <p>Yoga Vidya School in Kerala, the noted destination for spiritual and vedic immersions, invites you to come along this sojourn of advanced yoga practices to further hone your skills and deepen your wisdom of the yogic art form through the 300 Hour Yoga TTC in Kerala. Take a step further into the world of yoga underneath the spellbinding shadow of the land of backwaters, exotic fauna and a humble lifestyle, Kerala. Become an advanced level yogi and indulge in more serious teachings of Hatha and Ashtanga Yoga in both theory and practice with exploratory references from the ancient text of yoga, the Bhagavad Gita, the Sutras of Patanjali, the Hatha Yoga Pradipika and more. We also offer the 200 hour and <a href="300-hour-yoga-teacher-training-in-bali">300 Yoga TTC in Bali</a>, for those seeking a magical and enchanting ambience to embark on a yogic journey. Get inspired by experienced international yoga trainers and be a part of an extremely supportive community by joining our courses in Bali as well. Upon completion of a 200 hour Yoga TTC, continue the journey of learning and teaching with our intensive 300 Hour Yoga Teacher Training in Kerala and be on your way to transition into a 300 Hour Yoga Alliance recognised yoga teacher and practitioner.</p>
      //         `,
      //       };
    } else if (this.slug == 'yoga-retreat-in-rishikesh-india') {
      this.aboutContent = new aboutContentModel(
        s3Bucket.prashantjiHero,
        'Yoga Retreat',
        'in Rishikesh India',
        `<p>Yoga Vidya School in Rishikesh welcomes you to immerse in life transformative authentic yogic practices. This yoga retreat is a unique and energetic program to experience authentic yoga, meditation and pranayama for deep relaxation and transformation. Break away from the mundane to reunite with your mind, body, and spirit through soulful yogic experiences. Also, during the retreat, get an opportunity to explore the yogic culture, Himalayan shrines, organic food, trips to temples and ashrams. Daily Yoga Asana classes in this best yoga retreat in Rishikesh covers both classical Hatha Yoga and Ashtanga Yoga. The yoga teachers who will conduct these classes, have learnt from popular Indian Ashrams and also trained in yoga therapy and modern yoga teaching methodologies.</p>`
      );
    } else if (this.slug == 'yoga-retreat-in-kerala-india') {
      //       this.aboutContent = {
      //         image:
      //           'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674211364306.jpeg',
      //         title: 'Yoga Retreat',
      //         secondTitle: 'in Kerala, India',
      //         desc: `
      // <p>Yoga Vidya School in Kerala welcomes you to experience life transformative serious authentic yoga practice in an energetic environmentat the Indian Paradise of Kerala. Led by some of the best teachers in yoga, learn yogic movements, meditations, and mudras while leading a spiritual lifestyle. Break away from the humdrum of daily grind to indulge in soulful yoga retreats in the lush greenery of Kerala. Enjoy the Indian Yogic hospitality at our facility complete with beautiful accommodation and simple yet delectable South Indian food. We offer indulgent yoga retreats that also include cultural immersions through visits to the umpteen spellbinding waterfalls, lush green forests and such other jewels studded on the Kerala landscape.</p>
      //         `,
      //       };
    } else if (this.slug == 'pranayama-therapy-course-online') {
      this.aboutContent = new aboutContentModel(
        'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674308332559.jpg',
        'Pranayama',
        'Therapy Course Online',
        `<p>Many yoga practitioners tend to give more attention to the physical body exercises - aka the asanas - and ignore other important aspects of the yoga practice such as pranayama and meditation? However, breath is considered as a bridge between Physical and Psychic body, so in practice of Yoga it helps to operate efficiently with body and move attention to a subtle level work too. This special Pranayama Therapy Course was designed by our experienced certified yoga teacher Ksenia Ji and aimed to take your practice on a different level by gradual study of breath nature and its power as well as how to develop and use it for your yogic practices daily and in a therapeutic way.</p><p><strong>What is the Meaning of Pranayama ?</strong></p><p>The word Pranayama is consisted of two words. ‘Prana’ refers to the vital energy or breath that is responsible for life and ‘ayama’ means extension. Thus, Pranayama, in simple terms, is the practice of breath regulation which cause regulation of vital energy “prana” which on a physical level brings lightness to the body and remove diseases, while on psychic level it brings mental clarity, calms the mind and induces a meditative state. That is why in ancient scripts pranayama considered as a first step of stairs towards meditation?</p>`
      );
    } else if (this.slug == 'adjustment-and-alignment') {
      this.aboutContent = new aboutContentModel(
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/images/adjustmentAndAlignment.jpeg',
        'Adjustment',
        '& Alignment',
        `<p>The Asana Alignment and Adjustment course was personally constructed by the head teacher of the Yoga Vidya school <a href='https://www.yogavidyaschool.com/mentor/acharya-prashant-jakhmola'>Prashant Jakhmola</a>, who has many years experience in designing and teaching at yoga teacher training courses and various yoga programs in India, Nepal, China, Russia and Indonesia. The present course is ideal choice for all yoga practitioners who requires basement for their asana practice.</p><p><strong>Who is this course for ?</strong></p><p>The Asana Alignment and Adjustment Level 1 course is designed for those people who haven’t done any <a href='https://www.yogavidyaschool.com'>Yoga Teacher Training Course</a> and thinking to do, but need a preparation. In addition, this course is suitable for people who need further guidance in order to improve their personal self yoga practice. Absolute beginners in yoga also can find this course is very helpful to step on the yoga path.</p>`
      );
    } else if (this.slug == 'adjustment-and-alignment-level-2') {
      //       this.aboutContent = {
      //         image:
      //           'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/images/adjustmentAndAlignment.jpeg',
      //         title: 'Adjustment',
      //         secondTitle: '& Alignment Level 2',
      //         desc: `
      //         <p>This Asana Alignment and Adjustment Level 2 course is designed for advanced certified practitioners who have already passed the <a href=''>200 yoga teacher training course</a>. The course aims to refine and refresh the knowledge of advanced practitioners for gaining a better comprehensive understanding of asanas, and their bodies.</p><p><strong>Why is this course important even to advanced yoga practitioners ?</strong></p><p>Our masters have been teaching in yoga teacher training courses for many years and they have noticed that although the yoga teacher training course is useful and practical its intensity leads people to misunderstand the knowledge given in the yoga teacher training course. We believe that mind and body need to study and gather the information in a peaceful gradual pace in order to digest the massive amount of yogic knowledge step by step and turn it into skills. This course is designed especially for this goal. The asana Alignment and Adjustment course was personally constructed by the head teacher of the school <a href='https://www.yogavidyaschool.com/mentor/acharya-prashant-jakhmola'>Prashant Jakhmola</a>, which has many years experience in designing and teaching yoga teacher training course and various other Yoga programs in India, Nepal, China, Russia and Indonesia.</p>
      // `,
      //       };
    } else if (this.slug == 'yoga-teacher-training-in-india') {
      this.aboutContent = new aboutContentModel(
        'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674308332559.jpg',
        'Yoga',
        'Teacher Training in India',
        `<p>Now that you have been practicing yoga for a while and are keen to learn the finer intricacies or nuances of this ancient philosophy, a yoga teacher training program is just apt. Also, accredited <a href="#">yoga teacher training courses</a> can empower you to make teaching yoga as a career option. Yoga is quite popular worldwide; hence, teaching yoga professionally can be a lucrative and fulfilling career option. You will not only gain knowledge and skills for enhancing your own health and well-being but also empower many others to enhance their quality of life. This can be a deeply gratifying experience.</p>`
      );
    } else if (this.slug == 'drop-in-yoga-classes') {
      this.aboutContent = new aboutContentModel(
        'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674308332559.jpg',
        'Drop-in',
        'Yoga Classes',
        `<p>The Drop in yoga classes in Rishikesh are provided by Yoga Vidya School for the whole week with different yoga practices where a student can choose the ideal practice of their choice among those: pranayama, traditional hatha yoga, ashtanga vinyasa, vinyasa flow, beginner yoga, meditation, etc.</p><p><strong>Can I do Yoga Classes ?</strong></p><p>We believe that anyone, with enough well, discipline and training could control the yoga physical and philosophical aspects. There is a wide range spectrum of drop in classes where some are for beginners and others are for advanced. Yoga drop in classes are perfect option for those seekers and practitioners who don’t have enough time to be in Rishikesh but still want to know about their body through yogic practice, and those who wants to prepare oneself for the Yoga Teacher Training Certification Course or keep in shape after the course has finished.</p>`
      );
    } else if (this.slug == this.routeEnum.pranicPurification) {
      this.ispranicPurificationImg = true;
      this.aboutContent = new aboutContentModel(
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/images/FERN8247.jpg',
        '',
        '',
        this.sanitizer
          .bypassSecurityTrustHtml(`<p>It is no coincidence that you are here. Your presence is a sign that your soul is ready for a deeper journey — one of breath, healing, and true transformation.</p>

            <p>For over a decade, thousands of students worldwide have experienced the power of Pranayama through this sacred practice. Many have shared stories of healing emotional wounds, overcoming depression and anxiety, finding relief from chronic conditions, and regaining balance when nothing else seemed to work.
            </p>

            <p>
              <b>✨ But Pranic Purification goes beyond healing.</b></br>
              This 21-day sadhana awakens clarity, inner peace, focus, and joy. It purifies the pranic body (Pranamaya Kosha), helping you channel your energy in the right direction so life begins to flow with purpose and harmony.
            </p>

            <ul style="list-style: none;">
                Through this journey, students have experienced:
                <li><span style="color: #f5711a;">&#10003;</span> A way out of stress, addictions, and difficult emotions</li>
                <li><span style="color: #f5711a;">&#10003;</span> Greater energy, productivity, and success in work</li>
                <li><span style="color: #f5711a;">&#10003;</span> Improved meditation and deeper inner stillness</li>
                <li><span style="color: #f5711a;">&#10003;</span> Holistic health — body, mind, and spirit in balance</li>
                <li><span style="color: #f5711a;">&#10003;</span> A sense of peace that transforms not only themselves, but also their homes and families</li>
              </ul>

              <p>Pranayama is not just breathwork. It is a gateway to pranic intelligence, to spiritual awakening, and to a harmonious life connected with the universe within and around us.</p>
              <p>📹 Recordings will be available: every day we will upload the class recordings in our virtual classroom for you.</p>
              <p>This 21-day course is more than classes — it is a sacred commitment to yourself, a powerful purification process, and an invitation to transform your life from the inside out.</p>

              <p>You did not arrive here by chance — you were guided.</p>
              <br />
              <p style="font-size: 25px" class="text-center"><span style="color: #f5711a;">Price:</span> <b> ${this.inrPrice} / ${this.usdPrice}</b></p>
               <br />
              <div>
                <h3 class="text-center">Are you ready to step into your transformation?</h3>
                <h5 class="text-center">Let every breath in these 21 days be a return to your essence.</h5>
              </div>`),
        ''
      );
    } else if (this.slug == this.routeEnum['200TTC']) {
      this.date = twoHundredTTCModel['200TTCDate'];
      this.startTime = twoHundredTTCModel['200TTCStart'];
      this.endTime = twoHundredTTCModel['200TTCEnd'];
      this.aboutContent = new aboutContentModel(
        s3Bucket.twoGirl,
        'Deepen Your Practice And Share',
        'The Sacred Wisdom Of Health And Happiness With The World By Becoming Certified Yoga Teacher',
        this.sanitizer
          .bypassSecurityTrustHtml(`<p><b class="project-color">Get Certified at Home in only six weeks</b></p>
          <p>
            Understanding the challenge of walking the path of Yoga while
            balancing family, work, and daily life, our
            <b>Online 200-Hour Yoga Teacher Training</b> is designed for sincere
            students of all levels who are seeking traditional and authentic
            knowledge of yogic practices. These live interactive and recorded
            sessions are created with the same depth and quality as our
            in-person Yoga Teacher Trainings in India, Russia, Bali, and other
            locations.
          </p>
          <p>
            Becoming a Registered Yoga Teacher and sharing the light of Yoga is
            a truly rewarding journey. Through this training, we aim to create
            the opportunity for everyone to experience Yoga not just as a
            practice, but as a way of life—supporting physical health, mental
            clarity, and spiritual growth.
          </p>
          <p>
            This Online Yoga Teacher Training is designed by
            <b>Prashant Jakhamola</b>, known worldwide as Prashant J Yoga. The
            program is a unique opportunity to become a devoted practitioner
            (Sadhaka) of Yogic science and tradition. During six weeks,
            you will explore the deeper dimensions of Hatha Yoga and
            Ashtanga Yoga, with a special focus on alignments and adjustments,
            as well as Meditation, Pranayama, Philosophy, and Teaching
            Methodology.
          </p>`),
        '',
        ''
      );
    }
  }
  addToCart(event: Event): void {
    event.preventDefault();

    if (this.course != undefined) {
      this.cartService.addItem(this.course);
    }

    this.router.navigate(['/add-to-cart']);
  }
  inrPrice: string = '';
  usdPrice: string = '';
  getCourseBySlug(slug: any) {
    let data = {
      slug: slug,
    };
    this.webapiService.getCourseById(data).subscribe((res: any) => {

      let feesInfo = res.data[0].feeInfo.find(
        (f: feesInfoDto) => f.title == 'Price'
      );
      debugger
      let priceData: feesDto = feesInfo.data.find(
        (f: feesDto) => f.currency == 'INR'
      );
      this.inrPrice = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: priceData.currency,
      }).format(priceData.amount);
      priceData = feesInfo.data.find((f: feesDto) => f.currency == 'USD');
      this.usdPrice = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: priceData.currency,
      }).format(priceData.amount);

      this.generateHtmlContent();

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
}
