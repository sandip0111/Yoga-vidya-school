import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  week1:string[]=[];
  week2:string[]=[]
  week3:string[]=[]
  week4:string[]=[]
  displayData:string[]=[];
  selectedTab:string="";
  slug: any;
  weeKTitle: string='';
  weekPara:any='';
  is300HourBaliCourse: boolean= false;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    this.slug = this.activatedRoute.snapshot.routeConfig?.path;

    if(this.slug == '200-hour-yoga-teacher-training-in-bali'){

      this.week1=[
        `This is a week to introduce you to the world of Authentic Yoga practices. It starts with the Hatha Yoga Classes focused on- Pawan Mutasana Series covering joint and bone movement to prepare for the correct and advance yoga asanas.  Students will gain insights on the traditional way of doing Surya Namaskar as per different yoga traditions.
         In the Ashtanga Yoga Classes, we will teach you about standing foundational sequence of Ashtanga Yoga Primary series, also known as Yoga Chikitsa or Yoga Therapy.
         For Pranayama and Meditation, in the first week, we will focus on developing your mind and body to connect with your inner self and to regulate the Prana through the purification of the body.
         The first week of this yoga program is exciting for those who want to explore the yogic philosophy, as we introduce you to the Shat Darshana, and the purpose of Yoga as per Yoga Sutras of Patanjali.
        `,
        'Introduction to Authentic Yoga Practices'
      ]
      this.week2=[
      `We cover Vinyasa with the different types of flow and transitions required between the practice of Asanas. The students will start understanding the correct formation of the postures, with more synchronisation with breath and awareness. The continuous practice of this synchronisation will make you feel the special kind of control in your whole body, making it smooth and effortless even in some of the tough asanas which you always want to avoid.
       In the Yogic Anatomy Classes, you will understand the mechanism of the internal and external organs, muscles, bones and joints of the body, letting you practice yoga with more safety.
       The Philosophy Class in the second week of Yoga TTC is dedicated to the study of Sankya Yoga and Vedant Philosophy, in addition to continuation of Yoga Sutras.
      `,
      'Learning Vinyasa  Synchronizations, Yogic Anatomy and Yoga Philosophy'
      ]
      this.week3=[
        `After completing the second stage of purifying the Nadis (The panic or energy channels) through deeper practice of Pranayama, this week will make yourefreshed and more prepared to experience the deeper energy of yoga.  The Meditation Classes will let you attain the higher level of concentration and connection, by exploring more of Taratak, Ajanta Japa, and ChidakashDharana, etc. By the end of this week, you will also start to chant major Yogic Mantras and can feel a spiritual awakening inside you.
        For Hatha Yoga and Ashtanga Yoga, the third week is dedicated on static asana practice , in which you will understand the modifications and variations of the advanced versions. You will feel more flexible and more strong in your asana practice.
        `,
        'Hatha Yoga and Ashtanga Yoga Static Asana Practice, Meditation and Mantra Chanting '
      ]
      this.week4=[
       `During this final week of 200 hours in Bali, the students will get skilled with wide range of Hatha Yoga and Ashtanga Yoga Asanas related to standing, sitting, kneeling, prone, supine and Inversion Poses. You will start identifying and observing the movement of each muscles, joints and bones in specific yoga asana, making you understand the effects of asana more mindfully. Your postures will be more correct now, with maximum stability and strength.
       In this week, youwillhave more connection with your breathe and more clarity in mind with the practices of Pranayama and Meditation. All the Shatkarmas or Cleansing practices such as Dhouti,Vasti, Neti andNooliare finished. The students will reach at the final chapters of Yogic Philosophies related to Patanajali Yoga Sutra, Vedanta, Sankya and Buddhist Philosopy.
       The Teaching Methodology classes are at final phase helping you to understand how to create the intelligent sequences and classes, with correct hands on adjustment. You will gain the confidence and a voice of an expert Yoga Teacher on the end day of week 4.
      `,
      'Learning and Enhancements of Asana practice, Shatkarmas, Yogic Philosophies and Teaching Methodology'
      ]

    }
    else if(this.slug == '300-hour-yoga-teacher-training-in-bali'){
      this.is300HourBaliCourse = true;
      this.week1=[
        `<p><strong>Hatha Yoga classes</strong></p><p> Include the history of this style of yoga along with the foundational practice of asanas. Besides, the focus is also on understanding the upper body for asana practice and strengthening the asana series. Lastly, the asana philosophy and its many purposes are discussed in the classes. </p><p><strong>Pranayama yoga module</strong></p><p> Includes the practice of Pranayama Yoga Body Purification along with the concept of Pranamaya Kosha and its functionality. Furthermore, the module also includes purification methods and tranquilising practices. Besides, the concept of Dasham Vayu is explained along with its functionality. </p><p><strong>Philosophy classes</strong></p><p> This class will throw light on the famed Yoga sutras of Sage Patanjali and will cover its history. Besides, there is a brief discussion on Samadhi Pada. Furthermore, Klesha and its various repercussions on the mind are discussed. Lastly, a perspective is given pertaining to the quality of yoga practitioners and how these individual nuanced qualities affect the overall yoga training. Sutras from Patanjali Yoga Sutras discussed are: </p><ul class="orange-tick"><li>Yoga Samadhi</li><li>Yoga Sadhana</li><li>Yoga Vibhuti</li><li>Yoga Kaivalya</li></ul><p><strong>Shatkarma and meditation </strong></p><p> The Shatkarma modules will include the application of Jal Neti, Rabar Neti and Sutra Neti. In meditation, the traditional meditative posture is discussed along with concentration methods. Lastly, Yoga Nidra pertaining to the first and second levels is discussed. </p><p><strong>Alignment and adjustment and Ashtanga Vinyasa practice</strong></p><p> The course includes alignment of the entire Ashtanga Primary Series besides its complete practice. A lead on the Mysore style is discussed. </p>
        `
      ]
      this.week2=[
      `<p><strong>Hatha Yoga</strong></p><p>Includes perfecting Suryanamaskars and moon salutations. Besides, hip opening sequences and joint movements are delved into in detail. Also, the class discusses the central body vis-a-vis its upper body and lower body linkages. </p><p><strong>Pranayama and Shatkarma</strong></p><p> The classes preside over the prana awakening practice and the Apana work. Besides concepts of Mooladhara, 10 Vayu and the 16 foundations of the body are discussed. Lastly, the connection between the right and left nostril to balance the right and left brain are elucidated. The Kapalbhati pranayam and its various types - Sheet Kram, Vyutkram and Vaat Kram are explained and practised. </p><p><strong>Alignment and Adjustment &amp; Ashtanga Vinyasa </strong></p><p> The classes teach the six steps of performing asanas. Besides, the philosophy and purpose of asana are discussed through the ancient Hindu scriptures. Besides, students are expected to gain a deep understanding and perform at least 4 side-bending asanas. </p><p><strong>Mantra yoga and Meditation</strong></p><p> Various mantra chanting such as chanting mantras from Bhagavad Gita, and Patanjali Sutras are taught. Besides, mantras for memory are also presided over. </p>
      `
      ]
      this.week3=[
        `<p><strong>Hatha Yoga</strong></p><p>Hatha yoga classes include backward bending practice along with traditional Hatha Pradipika And Gherand Samhita asana practices. Besides, at this stage, the pupils are encouraged to make their own sequences. </p><p><strong>Ashtanga Vinyasa</strong></p><p> The classes delve upon the second series practice along with a lead on the Mysore Style. There is the practice of the Drishti and mind control during practice. Besides, handstand practice and jump forward and jump back techniques are taught. Lastly, your floating ability while the asana practice is enhanced. </p><p><strong>Pranayama</strong></p><p> At this stage, the pranayama classes cover the understanding of the storage of Prana. Besides, one delves into the various Nadis and their pathways. Lastly, an intense pranayama sequence entailing prana storage is taught. In a nutshell, the four weeks of pranayama will cover the following: </p><ul class="orange-tick"><li>Advanced pranayama breathing techniques</li><li>Variations and experiments</li><li>Chakra and Nadi awakening</li><li>Teaching practices and breathing mastery</li></ul><p><strong>Meditation and Mantra chanting</strong></p><p> This includes visualization practice and manifestation powers. Sound meditation and sound healing are taught at this stage. Furthermore, the traditional Bihar School Of Yoga method of Pratyahara is taught. The meditations of Ajapa Japa and Kaya Sthairyam are explained. Lastly, Naada Yoga, Bhagavad Gita Chanting and Prana Ji of Sutra chanting are delved upon. </p><p><strong>History of yoga and philosophy</strong></p><p> Origins of Hatha yoga and Ashtanga yoga are deciphered. Furthermore, Tantra yoga is introduced vis-a-vis Hatha Yoga. The evolution of yoga practice in India and its Westwards journey is discussed in classes. The philosophy classes throw light on Gyan Yoga, Bhakti Yoga and Bhagavad Gita. Besides, there are discussions pertaining to how our mind functions in the conscious state, in the sub-conscious state and when it's unconscious. </p><p><strong>Yoga Therapy and Ayurveda ( week 1, week 2, week 3)</strong></p><p>The following topics are covered in this area:</p><ul class="orange-tick"><li>Fundamentals and concepts of Ayurveda</li><li>Tridosha concept and functions</li><li>Agni and Ama types and functions</li><li> Trimalas and Trigunas and their relation with Tridoshas </li><li>Saptprakarti qualities and attributes</li><li>Importance of Sattvic diet</li><li>Food categories and their explanation</li><li> Therapeutic use of asanas, meditation, shatkarma and pranayama for treating various physical and mental disorders </li></ul>
        `
      ]
      this.week4=[
       `<p><strong>Teaching Methodology II</strong></p><p> Practice and perfect the art of yoga by becoming an ace yoga teacher under the tutelage of expert yoga masters such as Yoga Vidya School’s founder, Acharya Prashant Jakhola along with his expert team members that include Swami Atmattatwananda Saraswati (yoga philosophy) , Mitra Rawat (Hatha Yoga), Ksenia Rasapriya Bodhi Ji (yoga anatomy) and other teachers. Hone your teaching skills and develop a keen eye to gauge and assess each student for the purpose of customization of each posture and therefore for the overall benefit of the class at large. </p>
      `
      ]

    }
    else if(this.slug == '200-hour-yoga-teacher-training-in-kerala-india'){

      this.weekPara = 'The 200-Hour Yoga Teacher Training in Kerala encompasses a 4-week long training schedule. Connect with your inner light as you gain deep knowledge of different yogic practices at Yoga Vidya School in Kerala.'

      this.week1=[
        `<p>We begin our training by introducing you to the world of traditional and authentic yoga practices. We begin with sessions on Hatha Yoga. Classes focus on Pawan Muktasana  asana series covering joint and bone movement for preparing for ensuing advanced asana. Learn the traditional way of performing Suryanamaskars or Sun Salutations. Learn Yoga Chikitsa or Yoga Therapy ( Ashtanga Yoga Primary Series Standing Sequence). In Pranayama and Meditation sessions learn to connect with your inner light as you learn to regulate Prana and purify your body and mind of impurities. In the Yoga Philosophy classes we introduce you to concepts such as the purpose of Yoga, Shat Darshana and Patanjali Yoga Sutras.</p>
        `, 'Introduction to Traditional Yoga Practices'
      ]
      this.week2=[
      `<p>
      This week will cover Vinyasa with its varied Flow and transitions of asana practice. Learn correct posture formation aligned with breath and awareness. These sustained synchronisations will make you feel more confident and empowered as you perform even some advanced asanas with ease. In the Yogic Anatomy classes, you will learn various aspects of body anatomy vis-a-vis its biomechanics pertaining to internal and external organs, muscles, bones, joints etc that will let you practice yoga in a safe way. The Philosophy sessions are dedicated to understanding and studying about the Vedanta Philosophy, Sankhya Yoga and continued study of the Yoga Sutras.
      </p>
      `,'Understanding Vinyasa Flow and Transitions, Yogic Anatomy and Yoga Philosophy'
      ]
      this.week3=[
        `<p>
After learning how to purify the Nadis through deeper practice of Pranayama, this week further prepares you to experience the energy of yoga in a more profound way. In meditation, attain a heightened level of concentration and connection through explorations of the Taratak, Chidakasha Dharana, Ajanta Japa etc. Experience bliss and spiritual awakening as you learn to chant different Yogic Mantras. In Hatha and Ashtanga Yoga sessions, learn  variations and modifications of advanced level asanas as part of a static asana practice.
        </p>
        `,
        'Hatha Yoga and Ashtanga Yoga Static Asana Practice, Meditative Practices and Chanting Mantras '
      ]
      this.week4=[
       `<p>
During this final week of 200 Hours Yoga Teacher Training in Kerala, the students learn to practice a range of Hatha Yoga and Ashtanga Yoga Asanas pertaining to standing asanas, kneeling postures, seated poses, prone, supine and Inversion Postures. You will now identify and observe movement of different muscles, bones and joints in different yoga asanas, entailing a more mindful asana practice. You will now achieve optimal stability and strength as you perform yoga asanas with precision . Connect with your breath and gain more clarity of the mind with indulgent Pranayama and Meditation sessions. All the Shatkarmas or Cleansing practices of Dhouti,Vasti, Neti and Nooli are taught and performed in this week. The students get well-acquainted with Yogic Philosophies of Patanjali Yoga Sutra, Buddhist Philosophy,  Vedanta, and Sankya. The Teaching Methodology sessions culminate in the final phase as you understand and learn about cueing, demonstrations, hands-on adjustments and intelligent sequences.  Gain the confidence and capability of an expert yoga teacher  on the last day of week 4 of the 200-Hour Yoga Teacher Training in Kerala.
       </p>
      `,
      'Understanding and Advanced Practices of Yoga Asana , Shatkarmas, Yogic Philosophies and Teaching Methodology'
      ]

    }
    else if(this.slug == '300-hour-yoga-teacher-training-in-kerala-india'){

      this.week1=[
        `<p>We begin our training by introducing advanced practices pertaining to Hatha and Ashtanga Vinyasa Yoga. Classes in week 1 predominantly focus on learning and acing 60+ Hatha Yoga asanas in standing, seated, supine, kneeling and inversions. Practice hand-stands, grounding, arm-balancing sequences and Sivananda Yoga sequences of Hatha yoga. Gain knowledge pertaining to subtle differences between Sun Salutations and Moon Salutations.You will receive guidance to master the entire Ashtanga Vinyasa Primary series: its practice and related Alignment and Adjustment techniques for mastering the entire flow sequence. </p>
        <p>In Pranayama and Meditation sessions learn to connect with your inner light as you learn different techniques of Pranayama and Yogic Breath Work. In the Yoga Philosophy classes move towards more intense applications of the eight pillars of yoga.  Delve deeper into classical yoga literature such as the Bhagavad Gita, Patanjali Sutras and Gherand Samhita. Attend daily insightful and engaging sessions of Yoga Ethics</p>
        `, 'Introduction to Advanced Yoga Practices'
      ]
      this.week2=[
      `<p>
You will receive guidance to master the entire Primary series: its Practice and related Alignment and Adjustment techniques for mastering the entire flow sequence. Understand Ashtanga Yoga from a philosophical perspective and learn how to focus your Drishti & Breathing while performing the flowing movements of the Primary series. In the Yogic Anatomy classes, dive further into the labyrinths of human anatomy as you study the movement of each muscle and sync it with the breath through a proper application of pranic physiology.Undertake advanced study of the muscular and nervous system along with understanding energy flows to alleviate physical health issues and enhance pranic flows.
      </p>
      <p>The Philosophy sessions are dedicated to  studying more deeply about  the main aim of human life by reading the Chatusthay Purushartha by Sankhya Yoga. Attend daily insightful and engaging sessions of Yoga Ethics. </p>
      `,'Advanced Ashtanga Vinyasa (Complete Primary Series), Yogic Anatomy and Yoga Philosophy'
      ]
      this.week3=[
        `<p>
Learn different variations, alignment, adjustment and modification,static asana techniques pertaining to Hatha and Ashtanga Vinyasa Yoga. Fine-tune your yoga practice as you focus on  synchronisations of breath and movement.
        </p>
        <p>
        Adopt different Pranayama techniques to  purify the Nadis. This week get ready to experience yogic energy in a more profound way. In meditation, attain a heightened level of focus and connection by learning more than 10 techniques of meditations including mindful and dynamic meditations. Immerse in insightful sessions of Sound meditation, Chakra meditation and Prana meditation techniques. Chant different Mantras for spiritual healing of the body, mind and soul.
        </p>
        `,
        'Hatha Yoga and Ashtanga Yoga Advanced Asana Practice, Meditative Practices and Chanting Mantras'
      ]
      this.week4=[
       `<p>
During this final week of 300 Hours Yoga Teacher Training in Kerala, the students hone their practice of a range of Hatha Yoga asanas from standing asanas, kneeling postures, prone, seated poses and Inversion Postures. You will now immerse in a more mindful asana practice by  ironing out any shortcomings . You will now achieve optimal strength and stability as you perform more than 60+ yoga asanas with precision. After learning to perfect the Ashtanga Vinyasa Flow sequence, some of you will be introduced to the Ashtanga Intermediate Series.
Gain more calm and clarity of the mind  with different immersive Pranayama and Meditation techniques.Perform further cleansing of the energy channels (Nadis) through advanced Shat kriyas.Ace the art of full body cleansing in the form of Vaman Dhoti - Shankhaprakshalana.
       </p>
       <p>
        The students attain deep knowledge and insightful wisdom pertaining to Yogic Philosophies of Patanjali Yoga Sutra, Buddhist Philosophy, Sankya and Vedanta. The Teaching Methodology sessions reach their final stage as master the art of cueing, hands-on adjustments, demonstrations, and intelligent sequences to become an inspiring yoga teacher.
Secure the credence and competence of a yoga maestro on the last day of week 4 of the 300-Hour Yoga Teacher Training in Kerala.
       </p>
      `,
      'Acing Advanced Practices of Hatha Yoga and Ashtanga Vinyasa Yoga , Shatkarmas, Yogic Philosophies and Teaching Methodology'
      ]

    }

   }
  selectedData(type:number,selected:string){
    // e.preventDefault();
    this.selectedTab=selected;
    if(type==1){
      this.displayData=this.week1
      this.weeKTitle = this.week1[1];
    }
    else if(type==2){
      this.displayData=this.week2;
      this.weeKTitle = this.week2[1];

    }
    else if(type==3){
      this.displayData=this.week3;
      this.weeKTitle = this.week3[1];

    }
    else if(type==4){
      this.displayData=this.week4;
      this.weeKTitle = this.week4[1];

    }
  }
  ngOnInit() {
    this.selectedData(1,"week1")
  }

}
