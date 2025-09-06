# Facebook Pixel Implementation for Yoga Vidya School

## Overview
This document outlines the Facebook Pixel implementation for the 'get-certified-in-rishikesh' page and its sub-pages. The implementation uses Facebook Pixel events to track user behavior, engagement, and conversion funnel for Facebook advertising optimization.

## Facebook Pixel Setup

### 1. Add Facebook Pixel Base Code
Add this code to your `index.html` file in the `<head>` section:

```html
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
```

Replace `YOUR_PIXEL_ID` with your actual Facebook Pixel ID.

### 2. Alternative: Add via GTM
If you're using Google Tag Manager, add the Facebook Pixel as a Custom HTML tag:

```html
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

## Events Implemented

### Standard Facebook Pixel Events

#### 1. PageView
- **When**: User lands on any page
- **Event**: `fbq('track', 'PageView')`
- **Parameters**: page_name, page_title, page_location

#### 2. ViewContent
- **When**: User views course content or videos
- **Event**: `fbq('track', 'ViewContent')`
- **Parameters**: content_type, content_ids, content_name, value, currency

#### 3. AddToCart
- **When**: User shows interest in a course
- **Event**: `fbq('track', 'AddToCart')`
- **Parameters**: content_ids, content_name, content_type, value, currency

#### 4. InitiateCheckout
- **When**: User starts the checkout process
- **Event**: `fbq('track', 'InitiateCheckout')`
- **Parameters**: content_ids, content_name, content_type, value, currency, num_items

#### 5. AddPaymentInfo
- **When**: User adds payment information
- **Event**: `fbq('track', 'AddPaymentInfo')`
- **Parameters**: content_ids, content_name, content_type, value, currency

#### 6. Purchase
- **When**: User completes enrollment
- **Event**: `fbq('track', 'Purchase')`
- **Parameters**: content_ids, content_name, content_type, value, currency, num_items

#### 7. Lead
- **When**: User submits a form or shows lead intent
- **Event**: `fbq('track', 'Lead')`
- **Parameters**: content_name, content_category

### Custom Facebook Pixel Events

#### 1. ScrollDepth
- **When**: User scrolls to specific depths (25%, 50%, 75%, 100%)
- **Event**: `fbq('trackCustom', 'ScrollDepth')`
- **Parameters**: scroll_depth, page_location

#### 2. TimeOnPage
- **When**: User spends specific time on page (30s, 1min, 2min, 5min)
- **Event**: `fbq('trackCustom', 'TimeOnPage')`
- **Parameters**: time_in_seconds, page_location

#### 3. CourseInterest
- **When**: User shows interest in specific courses
- **Event**: `fbq('trackCustom', 'CourseInterest')`
- **Parameters**: course_id, course_name, interest_level, page_location

#### 4. EnrollmentIntent
- **When**: User shows intent to enroll
- **Event**: `fbq('trackCustom', 'EnrollmentIntent')`
- **Parameters**: course_id, course_name, intent_type, page_location

#### 5. BonusCourseClick
- **When**: User clicks on bonus course links
- **Event**: `fbq('trackCustom', 'BonusCourseClick')`
- **Parameters**: course_name, course_url, page_location

#### 6. TestimonialEngagement
- **When**: User interacts with testimonial videos
- **Event**: `fbq('trackCustom', 'TestimonialEngagement')`
- **Parameters**: video_index, action, page_location

## Event Flow

### Main Page (get-certified-in-rishikesh)
1. **PageView** - User lands on page
2. **ViewContent** - User views certified page content
3. **ScrollDepth** - User scrolls through content
4. **TimeOnPage** - User spends time on page
5. **ViewContent** - User views testimonial videos
6. **TestimonialEngagement** - User interacts with videos
7. **BonusCourseClick** - User clicks bonus course links

### Course Selection Flow
1. **ViewContent** - User views course details
2. **CourseInterest** - User shows interest in course
3. **AddToCart** - User clicks "See more details"
4. **EnrollmentIntent** - User shows enrollment intent

### Checkout Flow
1. **InitiateCheckout** - User starts checkout process
2. **AddPaymentInfo** - User adds payment information
3. **Purchase** - User completes enrollment

## Course Mapping

### Rishikesh Courses
- **100-Hour TTC**: $800 USD
- **200-Hour TTC**: $1200 USD
- **300-Hour TTC**: $1500 USD

### Bali Courses
- **200-Hour TTC Bali**: $1400 USD
- **300-Hour TTC Bali**: $1800 USD

## Testing

### 1. Facebook Pixel Helper
Install the Facebook Pixel Helper Chrome extension to test events:
- Navigate to your pages
- Check that events are firing correctly
- Verify event parameters

### 2. Facebook Events Manager
- Go to Facebook Events Manager
- Check "Test Events" tab
- Verify events are being received

### 3. Browser Console
Check browser console for any JavaScript errors:
```javascript
// Test if fbq is available
console.log(typeof fbq);
```

## Facebook Ads Optimization

### 1. Custom Audiences
Create custom audiences based on:
- **PageView** - All website visitors
- **ViewContent** - Course viewers
- **AddToCart** - High-intent users
- **InitiateCheckout** - Checkout starters
- **Purchase** - Converted customers

### 2. Lookalike Audiences
Create lookalike audiences from:
- **Purchase** events (best converters)
- **InitiateCheckout** events (high-intent users)
- **AddToCart** events (interested users)

### 3. Conversion Campaigns
Optimize for:
- **Purchase** - For direct enrollment campaigns
- **InitiateCheckout** - For lead generation campaigns
- **AddToCart** - For awareness campaigns

## Implementation Files

### Modified Files:
1. `src/app/services/pixel-tracking.service.ts` - Main tracking service
2. `src/app/certified/certified.component.ts` - Main page tracking
3. `src/app/certified/trainning-path/trainning-path.component.ts` - Course selection
4. `src/app/course/video-reviews/video-reviews.component.ts` - Video tracking
5. `src/app/certified/bonus/bonus.component.ts` - Bonus course tracking
6. `src/app/book-now/book-now.component.ts` - Booking tracking
7. `src/app/checkout/checkout.component.ts` - Checkout tracking
8. `src/app/success-payment/success-payment.component.ts` - Purchase tracking

## Benefits

This Facebook Pixel implementation provides:

1. **Accurate Conversion Tracking** - Track actual enrollments
2. **Audience Building** - Create custom audiences for retargeting
3. **Lookalike Audiences** - Find similar users to your best customers
4. **Campaign Optimization** - Optimize ads for specific actions
5. **Attribution** - Track which ads lead to conversions
6. **ROI Measurement** - Measure return on ad spend
7. **User Journey Insights** - Understand user behavior patterns

## Troubleshooting

### Common Issues:
1. **Events not firing** - Check if fbq is loaded
2. **Wrong parameters** - Verify event parameter names
3. **Duplicate events** - Check for multiple pixel installations
4. **Missing events** - Verify component initialization

### Debug Mode:
Add this to enable Facebook Pixel debug mode:
```javascript
fbq('init', 'YOUR_PIXEL_ID', {}, {
  debug: true
});
```

## Privacy Considerations

- Ensure compliance with GDPR/CCPA
- Implement cookie consent if required
- Consider using Facebook's Limited Data Use feature
- Review Facebook's Data Processing Terms
