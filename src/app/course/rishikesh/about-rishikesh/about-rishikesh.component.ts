import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartItem, CartService } from '../../../cart.service';
import { WebapiService } from '../../../webapi.service';

@Component({
  selector: 'app-about-rishikesh',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-rishikesh.component.html',
  styleUrls: ['./about-rishikesh.component.css'],
})
export class AboutRishikeshComponent implements OnInit {
  slug: any = '';
  aboutContent: any = {};
  ispranicPurificationImg = false;
  course?: CartItem;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private webapiService: WebapiService
  ) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;
    if (this.slug == '100-hours-yoga-teacher-training-in-rishikesh') {
      this.aboutContent = {
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674308332559.jpg',
        title: '100 Hour',
        secondTitle: 'Yoga Teacher Training in Rishikesh',
        desc: `
   <p>Join 100 Hour Yoga Teacher Training Course&nbsp;at Yoga Vidya School in Rishikesh, which is globally known for yoga courses along with&nbsp;yoga alliance approved. Yoga Vidya school has pledged itself to share and spread the knowledge of yoga by becoming a beacon of light. Our yoga gurus or experts are certified teachers and they have designed specialized unique yoga courses to transform students into a certified yoga teacher and passionate practitioners.</p>
   <p>This best 100 Hour Yoga Teacher Training in Rishikesh, India is for all level of students coming for yoga in Rishikesh, as we can say that yoga in India. This course is for people who are fit, want to dedicate themselves to this inner spiritual practice, want to learn Yoga and believe in spreading knowledge, want to inspire, want to bring more happiness and peace into their lives. Let&#39;s illuminate the yoga path and enlighten the journey of self-soul realizing.</p>
    `,
      };
    } else if (this.slug == '200-hours-yoga-teacher-training-in-rishikesh') {
      this.aboutContent = {
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674209054855.jpg',
        title: '200 Hours',
        secondTitle: 'Yoga Teacher Training in Rishikesh',
        desc: `
        <p>Venture out to Rishikesh, India for the powerful shift in your life &ndash; Physically, Mentally and Spiritually. The 200 Hour Yoga Teacher Training in Rishikesh at Yoga Vidya School will take you through great intentions for personal transformation. This Yoga Alliance Certified course in Rishikesh will advance your practice, empower you with best yogic techniques, awaken your energy in all aspects of life making you more confident, content and healthy. Connect to an authentic community of yoga teachers, scholars, and dedicated yogis in the Yoga Capital of the World.</p>
       <p>From group learning to hands on practice, personal sadhna to properly aligned techniques you will have the lifetime opportunity to deeply immerse in the art of Yoga.And as a student, you will discover how to individualise and understand the Asana practice with regards to your spiritual needs and physical body.<br /> As a mentor you will have the opportunity to share this yogic journey in a way that is authentic, directional, clear and which makes your voice more clear.</p>
        `,
      };
    } else if (
      this.slug ==
      '200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh'
    ) {
      this.aboutContent = {
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674308332559.jpg',
        title: '200 HORAS',
        secondTitle: 'DE FORMACIÓN DE PROFESORES DE YOGA EN RISHIKESH',
        desc: `
       <p>Aventúrate en Rishikesh, India, para experimentar un poderoso cambio en tu vida: física, mental y espiritualmente. La formación de profesores de yoga de 200 horas en Yoga Vidya School te llevará a través de grandes intenciones de transformación personal. Este curso certificado por Yoga Alliance te hará avanzar&nbsp; en tu práctica, te capacitará con las mejores técnicas yóguicas, despertará tu energía en todos los aspectos de la vida y te hará más seguro, contento y saludable. Conéctate con una auténtica comunidad de profesores de yoga, eruditos y yoguis dedicados en la Capital Mundial del Yoga.</p><p>Desde el aprendizaje en grupo hasta la ejecución de la práctica , la sadhana personal y las técnicas de correcta alineación, tendrás la oportunidad de sumergirte profundamente en el arte del Yoga. En este curso de formación de Yoga, tendrás&nbsp; más de 14 asignaturas, que cubrirán los secretos ancestrales de la Vida Yóguica que puedes usar en tu vida diaria para equilibrar la vida personal, la vida social (familia) y la vida espiritual. La base de este curso se basa en la investigación de la alineación humana en la Asana funcional y las variaciones que ocurren dentro de los ajustes.</p><p>Y como estudiante, descubrirás cómo individualizar y comprender la práctica de Asana con respecto a tus necesidades espirituales y cuerpo físico.</p><p>Como mentor, tendrás la oportunidad de compartir este viaje yóguico de una manera auténtica, direccional, clara y que hará que tu voz sea más clara.</p><p>No solo obtendrás conocimientos sobre el yoga, sino que también experimentarás la unión sinérgica de almas únicas.</p>
        `,
      };
    } else if (this.slug == '300-hours-yoga-teacher-training-in-rishikesh') {
      this.aboutContent = {
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1675321902578.jpg',
        title: '300 Hours',
        secondTitle: 'Yoga Teacher Training in Rishikesh',
        desc: `
        <p>This 300 Hour Yoga Teacher Training in Rishikesh India is for&nbsp;<a href="https://www.yogavidyaschool.com/200-hours-yoga-teacher-training-in-rishikesh" style="color:#0563c1; text-decoration:underline">200 Hour Yoga TTC Rishikesh India</a>&nbsp;certified yoga practitioners and serious yoga practitioners coming to deepen their skill by joining Advanced Yoga Classes in Rishikesh, India. This Yoga course is for people who are fit, want to dedicate themselves to this inner spiritual practice, want to learn Yoga and believe in spreading knowledge, want to inspire, want to bring more happiness and peace into their community and others lives. Through this 300 hour YTTC, you are welcome to illuminate the yoga path and enlighten the deeper journey of self realization.</p>
       <p>Get trained at a beautiful venue in the lush green Himalayan forest, walking distance away from holy river Ganges. Surrounded by energy of rich nature, you will get guidance and support from best yoga masters&rsquo; team, led by Prashant J Yoga (most trusted yoga teacher on Youtube). Our advanced yoga program of 300 hours in Rishikesh will open the world of possibilities for your refined practice and confident leadership as a internationally certified yoga teacher. Thousands of our 300-hour certified students are teaching successfully in popular yoga schools, yoga retreats, yoga teacher training, yoga festivals and events around the world.</p>
        `,
      };
    } else if (
      this.slug == '200-hour-yoga-teacher-training-scholarship-in-rishikesh'
    ) {
      this.aboutContent = {
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1681706477336.jpg',
        title: '200 Hourr',
        secondTitle: 'Yoga Teacher Training Scholarship In Rishikesh',
        desc: `
      <p>Yoga is a holistic practice that aims for the betterment of human society by awakening conscience in people and promoting mental clarity, physical health, and spiritual well-being. At <a href="https://www.yogavidyaschool.com/">Yoga Vidya School</a>, yoga serves as the quintessential therapy to create balance in life. It is a way of life that uplifts an individual&rsquo;s sense of spirituality and encourages positivity in life. Whether it is meditation techniques, yoga poses, or yoga philosophy, all of it makes you understand the prominence of mental and physical disciplines possessing the power to change your individuality. No wonder yoga has become a global rage, especially amongst health freaks. Practise it on a daily basis and you are set to experience an unprecedented change in your mind and body. And when you are in Rishikesh, the experience is unparalleled.</p>
      <p>Yoga Vidya School strictly believes that knowledge should be available to everyone, irrespective of anything. It should be imparted without any kind of discrimination. Consequently, the school has introduced the 200 hour yoga teacher training scholarship program for those who do not have any financial means to access yoga education but are equally passionate to learn its dynamism. It has been introduced to support these individuals, break financial barriers, and promote inclusivity. So, get going now and be ready to enrol for the program!</p>`,
      };
    } else if (
      this.slug == '300-hour-yoga-teacher-training-scholarship-in-rishikesh'
    ) {
      this.aboutContent = {
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1681707192529.jpg',
        title: '300 Hours',
        secondTitle: 'Yoga Teacher Training Scholarship In Rishikesh',
        desc: `
       <p>Encompassing mental, physical, and spiritual disciplines, yoga has been helping people around the world cultivate mindfulness for thousands of years. It is a multidimensional practice rooted in the layers of the self and is an idyllic way to lead a healthy and peaceful life. It is on account of its holistic healing powers, yoga has been successful in becoming a global rage today. Hence, it is highly revered by health freaks and yoga enthusiasts across the world. At <a href="https://www.yogavidyaschool.com/">Yoga Vidya School</a>, yoga is what helps you keep your mind, body, and soul in harmony. It is the yogic lifestyle and daily yoga practice that nurture a state of heightened consciousness.</p>
      <p>So, with our <a href="https://www.yogavidyaschool.com/300-hours-yoga-teacher-training-in-rishikesh">300 hour yoga teacher training program</a>, get ready for a life-changing experience. Indulge in self-introspection and learn how to improve strength and flexibility in your body. Involve in some serious training sessions and understand how to create a balance in life with the help of breathing techniques and yoga asanas. Our specially-designed course with a detailed curriculum on Hatha Yoga and Ashtanga Yoga would help you focus on growth and inner-self. Learn how to open up your chakras and master mudras and mantras.</p>
      <p>To make yoga an indispensable part of everyone&rsquo;s life, Yoga Vidya School announces the <em>300-hour yoga teacher training scholarship program</em>. It aims at reaching out to those who don&#39;t have financial accessibility. It has been introduced to bring yoga to people of all backgrounds and socio-economic levels. So, be ready to gain some yogic wisdom like never before!</p>
        `,
      };
    } else if (this.slug == '200-hour-yoga-teacher-training-in-kerala-india') {
      this.aboutContent = {
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674211364306.jpeg',
        title: '200 Hour',
        secondTitle: 'Yoga Teacher Training in Kerala, India',
        desc: `
<p>Travel to the land of glistening backwaters, the above of nature's healing legacy, a place blessed with beauty that is akin to heaven, and the land of exotic fauna, Yoga Vidya School welcomes you to an extensive 200 Hour Yoga Teacher Training in Kerala, India. Travel into a world where time stands still with nature's bounty expressed through its picturesque and exceptionally clean beaches, lush rainforests, and hospitality expressed in its vibrant culture and ancient wisdom that thrives even after all these millennia. You are invited to experience and witness the positive transformation of the mind, body, and spirit through authentic teachings and practices of the Hatha and Ashtanga Yoga forms under the guidance of India's noted yoga masters. Redesign your diet and lifestyle that is aligned with the principles of Ayurveda and transition towards a more balanced body and mind. We also suggest you join our rejuvenative yoga retreats at Bali, which will allow you to experience the maximum healing powers of Yoga, to transform your overall wellness. Introduce yourself to the like-minded communities while discovering a blend of relaxation and enlightenment. Whether you are a beginner or a seasoned practitioner, joining the <a href='200-hour-yoga-teacher-training-in-bali'>200 Hour Yoga TTC in Bali</a> As well as Kerala will support you to deepen your practice. Be on your way to becoming a Yoga Alliance certified yoga teacher and a yogi of finesse imbibed from theoretical teachings from the sacred books of yoga and Vedas with Yoga Vidya School's 200 Hour Yoga Teacher Training in Kerala.</p>
        `,
      };
    } else if (this.slug == '300-hour-yoga-teacher-training-in-kerala-india') {
      this.aboutContent = {
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674213871201.jpeg',
        title: '300 Hour',
        secondTitle: 'Yoga Teacher Training in Kerala, India',
        desc: `
<p>Yoga Vidya School in Kerala, the noted destination for spiritual and vedic immersions, invites you to come along this sojourn of advanced yoga practices to further hone your skills and deepen your wisdom of the yogic art form through the 300 Hour Yoga TTC in Kerala. Take a step further into the world of yoga underneath the spellbinding shadow of the land of backwaters, exotic fauna and a humble lifestyle, Kerala. Become an advanced level yogi and indulge in more serious teachings of Hatha and Ashtanga Yoga in both theory and practice with exploratory references from the ancient text of yoga, the Bhagavad Gita, the Sutras of Patanjali, the Hatha Yoga Pradipika and more. We also offer the 200 hour and <a href="300-hour-yoga-teacher-training-in-bali">300 Yoga TTC in Bali</a>, for those seeking a magical and enchanting ambience to embark on a yogic journey. Get inspired by experienced international yoga trainers and be a part of an extremely supportive community by joining our courses in Bali as well. Upon completion of a 200 hour Yoga TTC, continue the journey of learning and teaching with our intensive 300 Hour Yoga Teacher Training in Kerala and be on your way to transition into a 300 Hour Yoga Alliance recognised yoga teacher and practitioner.</p>
        `,
      };
    } else if (this.slug == 'yoga-retreat-in-rishikesh-india') {
      this.aboutContent = {
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674209054855.jpg',
        title: 'Yoga Retreat',
        secondTitle: 'in Rishikesh India',
        desc: `
<p>Yoga Vidya School in Rishikesh welcomes you to immerse in life transformative authentic yogic practices. This yoga retreat is a unique and energetic program to experience authentic yoga, meditation and pranayama for deep relaxation and transformation. Break away from the mundane to reunite with your mind, body, and spirit through soulful yogic experiences. Also, during the retreat, get an opportunity to explore the yogic culture, Himalayan shrines, organic food, trips to temples and ashrams. Daily Yoga Asana classes in this best yoga retreat in Rishikesh covers both classical Hatha Yoga and Ashtanga Yoga. The yoga teachers who will conduct these classes, have learnt from popular Indian Ashrams and also trained in yoga therapy and modern yoga teaching methodologies.</p>
        `,
      };
    } else if (this.slug == 'yoga-retreat-in-kerala-india') {
      this.aboutContent = {
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674211364306.jpeg',
        title: 'Yoga Retreat',
        secondTitle: 'in Kerala, India',
        desc: `
<p>Yoga Vidya School in Kerala welcomes you to experience life transformative serious authentic yoga practice in an energetic environmentat the Indian Paradise of Kerala. Led by some of the best teachers in yoga, learn yogic movements, meditations, and mudras while leading a spiritual lifestyle. Break away from the humdrum of daily grind to indulge in soulful yoga retreats in the lush greenery of Kerala. Enjoy the Indian Yogic hospitality at our facility complete with beautiful accommodation and simple yet delectable South Indian food. We offer indulgent yoga retreats that also include cultural immersions through visits to the umpteen spellbinding waterfalls, lush green forests and such other jewels studded on the Kerala landscape.</p>
        `,
      };
    } else if (this.slug == 'pranayama-therapy-course-online') {
      this.aboutContent = {
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674308332559.jpg',
        title: 'Pranayama',
        secondTitle: 'Therapy Course Online',
        desc: `
<p>Many yoga practitioners tend to give more attention to the physical body exercises - aka the asanas - and ignore other important aspects of the yoga practice such as pranayama and meditation? However, breath is considered as a bridge between Physical and Psychic body, so in practice of Yoga it helps to operate efficiently with body and move attention to a subtle level work too. This special Pranayama Therapy Course was designed by our experienced certified yoga teacher Ksenia Ji and aimed to take your practice on a different level by gradual study of breath nature and its power as well as how to develop and use it for your yogic practices daily and in a therapeutic way.</p><p><strong>What is the Meaning of Pranayama ?</strong></p><p>The word Pranayama is consisted of two words. ‘Prana’ refers to the vital energy or breath that is responsible for life and ‘ayama’ means extension. Thus, Pranayama, in simple terms, is the practice of breath regulation which cause regulation of vital energy “prana” which on a physical level brings lightness to the body and remove diseases, while on psychic level it brings mental clarity, calms the mind and induces a meditative state. That is why in ancient scripts pranayama considered as a first step of stairs towards meditation?</p>
        `,
      };
    } else if (this.slug == 'adjustment-and-alignment') {
      this.aboutContent = {
        image: 'assets/adjustmentAndAlignment.jpeg',
        title: 'Adjustment',
        secondTitle: '& Alignment',
        desc: `
<p>The Asana Alignment and Adjustment course was personally constructed by the head teacher of the Yoga Vidya school <a href='https://www.yogavidyaschool.com/mentor/acharya-prashant-jakhmola'>Prashant Jakhmola</a>, who has many years experience in designing and teaching at yoga teacher training courses and various yoga programs in India, Nepal, China, Russia and Indonesia. The present course is ideal choice for all yoga practitioners who requires basement for their asana practice.</p><p><strong>Who is this course for ?</strong></p><p>The Asana Alignment and Adjustment Level 1 course is designed for those people who haven’t done any <a href='https://www.yogavidyaschool.com'>Yoga Teacher Training Course</a> and thinking to do, but need a preparation. In addition, this course is suitable for people who need further guidance in order to improve their personal self yoga practice. Absolute beginners in yoga also can find this course is very helpful to step on the yoga path.</p>
        `,
      };
    } else if (this.slug == 'adjustment-and-alignment-level-2') {
      this.aboutContent = {
        image: 'assets/adjustmentAndAlignment.jpeg',
        title: 'Adjustment',
        secondTitle: '& Alignment Level 2',
        desc: `
        <p>This Asana Alignment and Adjustment Level 2 course is designed for advanced certified practitioners who have already passed the <a href=''>200 yoga teacher training course</a>. The course aims to refine and refresh the knowledge of advanced practitioners for gaining a better comprehensive understanding of asanas, and their bodies.</p><p><strong>Why is this course important even to advanced yoga practitioners ?</strong></p><p>Our masters have been teaching in yoga teacher training courses for many years and they have noticed that although the yoga teacher training course is useful and practical its intensity leads people to misunderstand the knowledge given in the yoga teacher training course. We believe that mind and body need to study and gather the information in a peaceful gradual pace in order to digest the massive amount of yogic knowledge step by step and turn it into skills. This course is designed especially for this goal. The asana Alignment and Adjustment course was personally constructed by the head teacher of the school <a href='https://www.yogavidyaschool.com/mentor/acharya-prashant-jakhmola'>Prashant Jakhmola</a>, which has many years experience in designing and teaching yoga teacher training course and various other Yoga programs in India, Nepal, China, Russia and Indonesia.</p>
`,
      };
    } else if (this.slug == 'yoga-teacher-training-in-india') {
      this.aboutContent = {
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674308332559.jpg',
        title: 'Yoga',
        secondTitle: 'Teacher Training in India',
        desc: `
<p>Now that you have been practicing yoga for a while and are keen to learn the finer intricacies or nuances of this ancient philosophy, a yoga teacher training program is just apt. Also, accredited <a href="#">yoga teacher training courses</a> can empower you to make teaching yoga as a career option. Yoga is quite popular worldwide; hence, teaching yoga professionally can be a lucrative and fulfilling career option. You will not only gain knowledge and skills for enhancing your own health and well-being but also empower many others to enhance their quality of life. This can be a deeply gratifying experience.</p>
        `,
      };
    } else if (this.slug == 'drop-in-yoga-classes') {
      this.aboutContent = {
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674308332559.jpg',
        title: 'Drop-in',
        secondTitle: 'Yoga Classes',
        desc: `
<p>The Drop in yoga classes in Rishikesh are provided by Yoga Vidya School for the whole week with different yoga practices where a student can choose the ideal practice of their choice among those: pranayama, traditional hatha yoga, ashtanga vinyasa, vinyasa flow, beginner yoga, meditation, etc.</p><p><strong>Can I do Yoga Classes ?</strong></p><p>We believe that anyone, with enough well, discipline and training could control the yoga physical and philosophical aspects. There is a wide range spectrum of drop in classes where some are for beginners and others are for advanced. Yoga drop in classes are perfect option for those seekers and practitioners who don’t have enough time to be in Rishikesh but still want to know about their body through yogic practice, and those who wants to prepare oneself for the Yoga Teacher Training Certification Course or keep in shape after the course has finished.</p>
        `,
      };
    } else if (this.slug == 'pranic-purification') {
      this.ispranicPurificationImg = true;
      this.aboutContent = {
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/images/FERN8247.jpg',
        title: 'Pranic',
        secondTitle: 'Purification - Online Pranayama (Sadhana) PrashantJ',
        subTitle: '21 Days - Online Pranayama Course with PrashantJ Yoga',
        desc: `
<p>I believe you are learning and experiencing the pranayama breathing techniques through my video posts in YouTube and other social media as well. I am very happy that you have taken the first step towards the Pranayama journey by attending my free “<a href='/breath-detox-yoga'>BREATH DETOX</a>” online yoga course.&nbsp;</p><p>Oh 😯 -, maybe some of you didn’t join yoga classes yet and you are new to this page or Yoga Vidya School platform. If you are new then maybe you don’t know me well and about my teachings or <a href="/pranayama-course-online-pranarambha">online pranayama course.</a> So before you go ahead with the reading, I request and suggest you to have a short tour to my previous courses and content. It will help you to understand what I do. And definitely help you to build a small Pranayama routine in the morning. And you will be confident enough to take another step towards the self growth</p><p>When you practice pranayama yoga you get so many benefits. You become calmer, more attentive,&nbsp; joyful and lighter. And trust me, It is not limited to only these benefits from Pranayama practice, but you will get much more than this.</p><p><span style='text-decoration: underline;'><em>There are many more discoveries and pranayama breathing techniques ahead&nbsp;</em></span>If you continue on this path</p><p>I have been teaching <a href='https://en.wikipedia.org/wiki/Pranayama'>Pranayama</a> for a decade now. And over these years I have received appreciative feedback from many students around the world. It inspires me more when I hear their stories, how they transform their life not only physically but mentally emotionally and energetically.</p>
<h3><strong>Transformation I am talking about Through Pranayama classes online</strong></h3>
<ul>
<li> People find a way to get out of difficult situations</ul>
<li> Holistic Health- physical, mental and spiritual</ul>
<li> Find the path and purpose</ul>
<li> People get rid of addictions, panic attacks, confusion, stress and depression</ul>
<li> Achieve great success in work and become much more productive</ul>
<li> Improve their meditation and help them to dive deeper inside</ul>
<li> For many,&nbsp;  pranayama yoga has become a great boost for their mornings</ul>
<li>Pranayama has strong potential to change someone’s life for better. This is proved with my own experience, the transformation of many people whom I know the stories of hundreds of my students</ul>
<li>Therefore I know it for sure that pranayama can change your life too, if you give it such an opportunity.</ul>
<li>&nbsp;For now I invite you to my exclusive course -<strong>21 days</strong> of pranayama classes online “<strong>PRANIC PURIFICATION</strong>”</ul>
<li>&nbsp;The name itself tells the meaning- purification of pranic body (PranamayaKosha)</ul>
<li>The main goal of this online pranayama course is to understand your energy body and to help you to purify it in order to channelise your prana into right direction.</ul>
</ul>
        `,
      };
    } else if (this.slug == '21-days-ashtanga-yoga-immersion') {
      this.aboutContent = {
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1696226417204.jpg',
        title: '21 Days Ashtanga',
        secondTitle: 'Yoga Immersion Online',
        desc: `
<p>Grab the opportunity to dive into the ancient wisdom and traditional practice of Ashtanga Vinyasa &ndash; Primary Series. Covering the historical and philosophical underpinnings of this ancient form of Yoga, this Live Sadhana is created for anyone looking to start or deepen their Ashtanga yoga practice. A best suitable yoga course for those yoga enthusiasts who are looking for traditional, technical and anatomical angles of Ashtanga. In addition, specialised Pranayama and Meditation is also part of this 21 days online yoga course&nbsp;to strengthen inner organs for Vinyasa.</p>
        `,
      };
    } else if (this.slug == 'yoga-for-weight-loss') {
      this.aboutContent = {
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/images/wl-1_muamjw.jpg',
        title: 'Yoga',
        secondTitle: 'for Weight Loss',
        desc: `
<p><strong>Unlock Active and Effective Weight Loss with Yoga at Home!</strong></p>
<p>Through these Online Yoga Classes, Yoga Vidya School is Introducing the fastest way to reduce extra weight and body fat with Yoga in the comfort of your own home. Learn from the best yoga teachers of Rishikesh, guided by Prashant J Yogawho have created these classes with through research on &nbsp;proven methods, techniques, and processes related to Yoga, Pranayama, Mudras, Meditation and Yogic Diet.&nbsp;</p>
<p>Who says practising yoga won&#39;t help you lose weight? Whether you want to maintain your current weight or lose a few kgs, these online yoga classes for weight loss will take you through different types of practices to build core power, strength, a positive aura, mindfulness and a healthy energy to kick start your journey to a happier and healthier you!</p>
<p>Our weight loss Yoga program consists of chosen Hatha Yoga Asana series in combination with breath work and yogic diet suggestion that not only help you lose weight in a holistic way but also make yoga your daily practice with a spiritual essence.&nbsp;</p>
<p>We run these classes on weekends to ensure maximum people can take benefit of it without worrying about disturbing their professional or busy routine. Commence your healthy weight loss journey with these online yoga classes and grasp the natural techniques to combat obesity for a lifetime.&nbsp;</p>
`,
      };
    } else if (this.slug == 'online-hip-opening-workshop') {
      this.aboutContent = {
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/images/inschool_choiya.jpg',
        title: 'Hip Opening Yoga',
        secondTitle: 'Workshop Online',
        desc: `
<p>Live Course with Yogi Prashant from Rishikesh</p><p>Hips are comprises of more than 20 muscles including inner thigh muscles, outer thigh muscles, hip flexors, deep lateral rotators etc. and beneath the structure of these muscles, there is the largest ball and socket joint of the body, which is one of the major joints of the body that bears maximum body weight. If you are suffering from lower back pain, experience muscle spasms in the legs, or have trouble jumping, kicking or sprinting, maybe one of the reasons is the tight hips. And tight hips can not only host physical problems but it will affect your emotions too. Hip opening yoga postures or exercises can bring up a lot of releasing sensations to entire body and mind. If painful hips are limiting your range of movement and giving you a bad feeling all day, and you are searching the right hip opening sessions, this 45 minutes (for 21 days) live course from Rishikesh, India is the best fit for you.</p><p><strong>Things you need to practice with us</strong></p><p>Not a lot of equipment and accessories are required to attend this hip-opening session with us. Simplicity is the essence of our practice and we will show you how you can awaken your sacral and root chakras simply by perfecting our hip-opener yoga sequence. Get started with -</p><ul><li>Laptop, Smartphone, Tablet&nbsp;- Tune in to our daily Live using your smart device and a stable internet connection.</li><li>Telegram App&nbsp;- Download this free app on your device to stay connected with us</li><li>Yoga Mat&nbsp;- A vinyl or rubber yoga mat of medium thickness as per your comfort (rubber mats with jute in them are more eco-friendly!)</li><li>Yoga block&nbsp;- A block of wood, foam, or rubber for support</li><li>Yoga belt&nbsp;- A belt to help you hoist up your hip by yourself as required</li></ul><p>Lastly, keep 30-45 minutes of your time free from all engagements from evening 7 pm to attend this session without interruption, for you would really need to focus on the moves to get them right!</p>
`,
      };
    } else if (this.slug == '200-hours-yoga-teacher-training-online') {
      this.aboutContent = {
        image:
          'https://my-s3-images-bucket.s3.amazonaws.com/images/Gallery5_zoxhnn.jpg',
        title: '200 Hour Yoga',
        secondTitle: 'Teacher Training Course Online',
        desc: `
<h3>Led by Prashant J Yoga</h3>

<p><strong>Deepen Your Practice And Share The Sacred Wisdom Of Health And Happiness With The World By Becoming Certified Yoga Teacher!</strong></p>

<p>Understanding how challenging it is to step into the path of Yoga, while managing family, work and social life, Our online 200 hour yoga teacher training course&nbsp;is designed for dedicated students of all levels that are seeking traditional and authentic knowledge of yogic practices. After the series of triumphs over trials, these Interactive LIVE and Recorded sessions are at par with the quality that we offer in our Physical Yoga Teacher Training in India, Russia, Bali and other Locations.</p>

<p>Becoming a Registered Yoga Teacher and spreading the positivity in the society is a rewarding endeavour. Through virtual 200 hour and 300 Hour&nbsp;<a href="https://www.yogavidyaschool.com/" style="color:#467886; text-decoration:underline">yoga teacher training</a>, we are inspired to create an opportunity for everyone to experience this intellectual journey as a way of life and help others raise their health, mentally and physically through Yoga and related practices.&nbsp;</p>

<p>The Online Yoga Teacher Training of Yoga Vidya School is exclusively designed by Prashant Jakhamola, popular as Prashant J Yoga on Internet and Youtube. This special program is designed to make you a dedicated yoga practitioner as Sadhaka or devotee of the Yogic Science and the tradition. It is 12 weeks long course covers the deeper details of Hatha Yoga and Ashtanga Yoga with special focus on Alignments and Adjustments, along with Meditation, Pranayama, Philosophy and Teaching Methodology.</p>
<h2>Online Yoga Teacher Training at Yoga Vidya School Details:<strong> </strong></h2>

<p style="margin-left:0cm; margin-right:0cm"><strong>Date:</strong> 7<sup>th</sup> Febuary</p>

<p><strong>Duration:</strong> 12 Weeks</p>

<p><strong>Module:</strong> Live + Recordings</p>

<p><strong>Timing Options:</strong></p>

<!-- <p><strong>1<sup>st</sup> Batch:</strong> 7:00 AM to 9:30 AM (IST)-->
<p>05:00 AM - 07:30 AM (GMT)</p>
<!-- <strong>2<sup>nd</sup> Batch:</strong> 9:30 AM to 12:30 PM<br />-->
<p>06:00 AM - 08:30 AM (CET)</p>
<!-- <strong>3<sup>rd</sup> Batch: </strong>4:00 PM to 6:45 PM</p>-->
<p>10:30 AM  - 01:00 PM (IST)</p> 
<p>&nbsp;</p>
<!-- <h3 style="margin-left:0cm; margin-right:0cm">Online Hatha Yoga Teacher Training:</h3>

<p>7:00 AM to 9:30 AM (IST) and 9:30 AM to 12:30 PM (IST)</p>

<p>&nbsp;</p>

<h3>Online Ashtanga Yoga Teacher Training:</h3>

<p>4:00 PM to 6:45 PM (India Time)</p>-->
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
}
