import { Injectable } from '@angular/core';

declare let fbq: Function;

@Injectable({
  providedIn: 'root'
})
export class PixelTrackingService {

  constructor() { }

  // Page View Events
  trackPageView(pageName: string, pageTitle?: string) {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'PageView', {
        page_name: pageName,
        page_title: pageTitle || document.title,
        page_location: window.location.href
      });
    }
  }

  // Content View Events
  trackViewContent(contentType: string, itemId: string) {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'ViewContent', {
        content_type: contentType,
        content_ids: [itemId],
        content_name: itemId        
      });
    }
  }

  // Course Selection Events
  trackCourseSelection(courseId: string, courseName: string, courseType: string) {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'ViewContent', {
        content_type: 'yoga_course',
        content_ids: [courseId],
        content_name: courseName,
        content_category: courseType
      });
    }
  }

  // Add to Cart Events
  trackAddToCart(courseId: string, courseName: string, value: number, currency: string = 'USD') {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'AddToCart', {
        content_ids: [courseId],
        content_name: courseName,
        content_type: 'yoga_course',
        value: value,
        currency: currency
      });
    }
  }

  // Initiate Checkout Events
  trackInitiateCheckout(courseName: string, value: number, currency: string = 'USD') {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'InitiateCheckout', {
        content_name: courseName,
        content_type: 'yoga_course',
        value: value,
        currency: currency,
        num_items: 1
      });
    }
  }

  // Purchase Events
  trackPurchase(transactionId: string, courseId: string, courseName: string, value: number, currency: string = 'USD') {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Purchase', {
        content_ids: [courseId],
        content_name: courseName,
        content_type: 'yoga_course',
        value: value,
        currency: currency,
        num_items: 1
      });
    }
  }

  // Video Events
  trackVideoPlay(videoTitle: string, videoDuration?: number) {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'ViewContent', {
        content_type: 'video',
        content_name: videoTitle,
        content_ids: [videoTitle]
      });
    }
  }

  trackVideoComplete(videoTitle: string, videoDuration?: number) {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'CompleteRegistration', {
        content_type: 'video',
        content_name: videoTitle,
        content_ids: [videoTitle]
      });
    }
  }

  // Scroll Events
  trackScroll(depth: number) {
    if (typeof fbq !== 'undefined') {
      fbq('trackCustom', 'ScrollDepth', {
        scroll_depth: depth,
        page_location: window.location.href
      });
    }
  }

  // Time on Page Events
  trackTimeOnPage(timeInSeconds: number) {
    if (typeof fbq !== 'undefined') {
      fbq('trackCustom', 'TimeOnPage', {
        time_in_seconds: timeInSeconds,
        page_location: window.location.href
      });
    }
  }

  // Custom Events
  trackCourseInterest(courseId: string, courseName: string, interestLevel: string) {
    if (typeof fbq !== 'undefined') {
      fbq('trackCustom', 'CourseInterest', {
        course_id: courseId,
        course_name: courseName,
        interest_level: interestLevel,
        page_location: window.location.href
      });
    }
  }

  // trackEnrollmentIntent(courseName: string, intentType: string) {
  //   if (typeof fbq !== 'undefined') {
  //     fbq('trackCustom', 'EnrollmentIntent', {
  //       course_name: courseName,
  //       intent_type: intentType,
  //       page_location: window.location.href
  //     });
  //   }
  // }

  trackBonusCourseClick(courseName: string, courseUrl: string) {
    if (typeof fbq !== 'undefined') {
      fbq('trackCustom', 'BonusCourseClick', {
        course_name: courseName,
        course_url: courseUrl,
        page_location: window.location.href
      });
    }
  }

  trackTestimonialEngagement(videoIndex: number, action: string) {
    if (typeof fbq !== 'undefined') {
      fbq('trackCustom', 'TestimonialEngagement', {
        video_index: videoIndex,
        action: action,
        page_location: window.location.href
      });
    }
  }

  // Lead Generation Events
  trackLead(source: string, formType: string) {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead', {
        content_name: formType,
        content_category: source
      });
    }
  }

  // Payment Events
  trackAddPaymentInfo(courseName: string, value: number, currency: string = 'USD') {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'AddPaymentInfo', {
        content_name: courseName,
        content_type: 'yoga_course',
        value: value,
        currency: currency
      });
    }
  }
}
