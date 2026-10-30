import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routeEnum } from '../../../enum/routes';
import { s3Bucket } from '../../../enum/s3Bucket';
@Component({
  selector: 'app-excursions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.css'],
})
export class ExcursionsComponent implements OnInit {
  slug: any = '';
  title: any = '';
  exsData: any = {};
  noContent: boolean = false;
  s3Bucket = s3Bucket;
  routeEnum = routeEnum;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;
    if (this.slug == '100-hours-yoga-teacher-training-in-rishikesh') {
      this.noContent = false;
      this.title = '100 Hour Yoga Teacher Training in Rishikesh';
    } else if (this.slug == routeEnum.rishkesh200) {
      this.noContent = true;
      this.exsData = {
        title: '200 Hour Yoga Teacher Training in Rishikesh',
        desc: 'Experience the beauty of Rishikesh with guided excursions  and enhance your yoga journey with these enriching cultural and natural explorations',
        row1: {
          img: this.s3Bucket.Kunjapuri,
          title: 'Kunjapuri Temple',
          desc: 'Kunjapuri Temple visit is a spiritual tour with beautiful sunrise in the Himalayas. One of the highest points near Rishikesh, this temple is an energetic shakti peeth among 52 peeths of goddesss shakti. After trekking to the top, the entry gate has stairs that almost feels as if staircase of the heavens. A visit to Kunjapuri is one of the top attractions around Rishikesh which is worth the experience – the most stunning sunrise, the panoramic views of the Himalayan range, the local villages and the colorful shops.',
        },
        row2: {
          img: this.s3Bucket.gangaArti,
          title: 'World Famous Evening Ganga Aarti at Parmarth Niketans',
          desc: '‘Aarti’ is a prayer or one’s expression of devoted love towards God. It is an act of singing and chanting of mantras with meditative awareness and a deep sense of adoration. So in the Ganga Aarti ceremony, we express our devotion and love for mother Ganges. We visit Parmarth Ashram where this spiritual ceremony is performed on the Ganges with mantras, diyas and the beating drums. You can sit quietly or can sing the bhajans, chant mantras and swing in ecstasy as yogis do the Bhakti Yoga.',
        },
        row3: {
          img: this.s3Bucket.maunicave,
          title: 'Mauni Baba Cave',
          desc: 'A mysterious cave on the way to Neelkanth Mahadev temple. Surrounded by lush green Himalayan forest, this natural cave is a home of Himalayan ascetic sage who is also known as Jatadhari Baba. With a richness of meditative energy, this place has an interesting story about how the Guruji came here living the city life. Students can meditate in the small dome shaped cave and can also interact with the monk during their visit.',
        },
      };
    } else if (
      this.slug ==
      '200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh'
    ) {
      this.noContent = false;

      this.title = '200 HORAS DE FORMACIÓN DE PROFESORES DE YOGA EN RISHIKESH';
    } else if (this.slug == '300-hours-yoga-teacher-training-in-rishikesh') {
      this.noContent = false;

      this.title = '300 Hour Yoga Teacher Training In Rishikesh';
    } else if (
      this.slug == '200-hour-yoga-teacher-training-scholarship-in-rishikesh'
    ) {
      this.noContent = true;
      this.exsData = {
        title: '200 Hours Yoga Teacher Training Scholarship In Rishikesh',
        desc: 'The cultural trips and excursions at Yoga Vidya School open up your senses and allow you to explore the depths of your inner self and witness surroundings. Hence, these planned trips make for a valuable addition to the yoga program. Get a chance to explore different environments and integrate yoga into daily life as you connect with mother earth. The mindful movements such as cave exploration and temple hopping would help you explore your meditation skills and deepen your yoga practice.',
        row1: {
          img: 'https://my-s3-images-bucket.s3.amazonaws.com/images/kunjapuri_zj3ncv.webp',
          title: 'Kunjapuri Temple',
          desc: 'An experience worth remembering forever! Trek to the top of the Kunjapuri and witness the greatest spectacles of the Himalayas and the settlements of Rishikesh.',
        },
        row2: {
          img: 'https://my-s3-images-bucket.s3.amazonaws.com/images/ganga-aarti_h460fw.jpg',
          title: 'World Famous Evening Ganga Aarti at Parmarth Niketans',
          desc: 'One of the most popular rituals to witness in Rishikesh, Ganga Aarti at Pramarth Niketan is where you get to be one with the consciousness of the universe. Listen to the chanting of mantras and singing of religious hymns and songs to venture off on your spiritual journey.',
        },
        row3: {
          img: 'https://my-s3-images-bucket.s3.amazonaws.com/images/cave_afdsoz.jpg',
          title: 'Mauni Baba Cave',
          desc: 'A significant centre of nature and spirituality and a site of great historical and religious significance, Mauni Baba Cave sits in the midst of the Himalayan forest and is home to a sage named Jatadhari Baba. Visit here and spend some time in its meditative surroundings.',
        },
      };
    } else if (
      this.slug == '300-hour-yoga-teacher-training-scholarship-in-rishikesh'
    ) {
      this.noContent = false;

      this.title = '300 Hours Yoga Teacher Training Scholarship In Rishikesh';
    } else if (this.slug == routeEnum.mysore200) {
      this.noContent = true;
      this.exsData = {
        title: '200 Hour Yoga Teacher Training in Mysore',
        desc: 'Discover the spiritual heritage, ancient architecture, and natural beauty of Mysore through enriching excursions during your yoga journey.',
        row1: {
          img: this.s3Bucket.chamundeswari,
          title: 'Chamundeshwari Temple – The Sacred Hill of Mysore',
          desc: 'Located atop the beautiful Chamundi Hills, approximately 13 km from Mysore, the ancient Chamundeshwari Temple is dedicated to Goddess Chamundeshwari, a powerful form of Goddess Durga. Revered as the guardian deity of Mysore and the royal family, the temple holds deep spiritual and cultural significance.<br/>According to Hindu mythology, this is the sacred hill where Goddess Chamundeshwari defeated the demon Mahishasura. The temple offers an opportunity to experience traditional Indian devotion, beautiful Dravidian architecture, and breathtaking panoramic views of Mysore city.<br/>A visit here allows you to connect with the spiritual heritage and devotional traditions of Karnataka.',
        },
        row2: {
          img: this.s3Bucket.somnathpura,
          title: 'Somanathapura Temple – A Masterpiece of Hoysala Architecture',
          desc: 'Travel back in time with a visit to the magnificent Chennakeshava Temple at Somanathapura, located approximately 35 km from Mysore. Built in 1268 CE during the Hoysala dynasty, this temple is one of the finest examples of India’s ancient temple architecture.<br/>Dedicated to Lord Vishnu, the temple is renowned for its intricate stone carvings, beautifully sculpted pillars, geometric designs, and extraordinary architectural details.<br/>Every wall tells a story through sculptures depicting deities, mythological narratives, and scenes from ancient Indian traditions. This excursion offers a wonderful opportunity to explore India’s artistic heritage, ancient craftsmanship, and the cultural roots of its spiritual traditions.',
        },
        row3: {
          img: this.s3Bucket.karanjilake,
          title: 'Karanji Lake – A Peaceful Escape into Nature',
          desc: 'Experience the peaceful side of Mysore with a visit to Karanji Lake, a beautiful natural retreat surrounded by greenery and diverse birdlife.<br/>Away from the city’s busy streets, this tranquil destination offers a refreshing opportunity to connect with nature. Enjoy a relaxing walk along the lakeside, observe different species of birds, and experience the beauty of the surrounding landscape.<br/>The lake is also home to a nature park and butterfly park, making it a wonderful place to slow down, relax, and appreciate the natural environment.<br/>After days of dedicated yoga practice and study, this excursion offers a refreshing balance of relaxation, nature, and mindful exploration.',
        },
      };
    }
  }

  ngOnInit() {
    // console.log(this.exsData,'-');
  }
}
