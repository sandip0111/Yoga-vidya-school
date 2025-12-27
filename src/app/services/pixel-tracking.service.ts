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
      // Send as PageView to avoid ViewContent diagnostics
      fbq('track', 'PageView', {
        content_type: contentType,
        content_ids: [itemId],
        content_name: itemId,
        page_location: window.location.href
      });
    }
  }

  // Course Selection Events
  trackCourseSelection(courseId: string, courseName: string, courseType: string) {
    if (typeof fbq !== 'undefined') {
      // Use a custom event instead of ViewContent
      fbq('trackCustom', 'CourseViewed', {
        content_type: 'yoga_course',
        content_ids: [courseId],
        content_name: courseName,
        content_category: courseType,
        page_location: window.location.href
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
    // if (typeof fbq !== 'undefined') {
    //   fbq('track', 'Purchase', {
    //     content_ids: [courseId],
    //     content_name: courseName,
    //     content_type: 'yoga_course',
    //     value: value,
    //     currency: currency,
    //     num_items: 1
    //   });
    // }
  }

  trackPurchase200ttc(transactionId: string, courseId: string, courseName: string, value: number, currency: string = 'USD') {
  if (typeof fbq !== 'undefined') {   
    const eventId = "200_ttc";
    
    fbq('track', 'Purchase', {
      content_ids: ["200_ttc"],
      content_name: "200 Hours Online Yoga Teacher Training Course",
      content_type: 'online_ttc',
      value: value,
      currency: currency,
      num_items: 1
    }, {
      eventID: eventId 
    });
  }
}

trackPurchasePranicPurification(transactionId: string, courseId: string, courseName: string, value: number, currency: string = 'USD') {
  if (typeof fbq !== 'undefined') {   
    const eventId = "pranic_purification";
    
    fbq('track', 'Purchase', {
      content_ids: ["pranic_purification"],
      content_name: "Pranic Purification - Best online pranayama sadhana",
      content_type: 'pranic_purification',
      value: value,
      currency: currency,
      num_items: 1
    }, {
      eventID: eventId 
    });
  }
}

 trackPurchaseRishikeshTTC(transactionId: string, courseId: string, courseName: string, value: number, currency: string = 'USD') {
  if (typeof fbq !== 'undefined') {   
    const eventId = "rishikesh_ttc";
    
    fbq('track', 'Purchase', {
      content_ids: ["rishikesh_ttc"],
      content_name: "Rishikesh Yoga Teacher Training Course",
      content_type: 'rishikesh_ttc',
      value: value,
      currency: currency,
      num_items: 1
    }, {
      eventID: eventId 
    });
  }
}    

trackPurchaseLiveClasses(transactionId: string, courseId: string, courseName: string, value: number, currency: string = 'USD') {
  if (typeof fbq !== 'undefined') {   
    const eventId = "live_classes";
    
    fbq('track', 'Purchase', {
      content_ids: ["live_classes"],
      content_name: "Live Yoga Classes",
      content_type: 'live_yoga_classes',
      value: value,
      currency: currency,
      num_items: 1
    }, {
      eventID: eventId 
    });
  }
}
  // Video Events
  trackVideoPlay(videoTitle: string, videoDuration?: number) {
    if (typeof fbq !== 'undefined') {
      // Use a custom event instead of ViewContent
      fbq('trackCustom', 'VideoView', {
        content_type: 'video',
        content_name: videoTitle,
        content_ids: [videoTitle],
        page_location: window.location.href
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
