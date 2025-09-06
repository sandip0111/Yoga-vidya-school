# Pixel Tracking Implementation for Yoga Vidya School

## Overview
This document outlines the comprehensive pixel tracking implementation for the 'get-certified-in-rishikesh' page and its sub-pages. The implementation includes Google Analytics 4 (GA4) events to track user behavior, engagement, and conversion funnel.

## Files Modified/Created

### 1. Pixel Tracking Service
**File:** `src/app/services/pixel-tracking.service.ts`
- Centralized service for all pixel tracking events
- Handles Google Analytics 4 (gtag) events
- Provides methods for different types of tracking events

### 2. Main Certified Component
**File:** `src/app/certified/certified.component.ts`
- Added page view tracking
- Implemented scroll depth tracking (25%, 50%, 75%, 100%)
- Added time on page tracking (30s, 1min, 2min, 5min)
- Tracks content view events

### 3. Training Path Component
**File:** `src/app/certified/trainning-path/trainning-path.component.ts`
- Tracks course selection clicks
- Implements add to cart events
- Tracks enrollment intent
- Maps course information for accurate tracking

### 4. Video Reviews Component
**File:** `src/app/course/video-reviews/video-reviews.component.ts`
- Tracks video play events
- Tracks video completion events
- Tracks video pause events
- Implements testimonial engagement tracking

### 5. Bonus Component
**File:** `src/app/certified/bonus/bonus.component.ts`
- Tracks bonus course link clicks
- Implements content view tracking for bonus courses

### 6. Booking Component
**File:** `src/app/book-now/book-now.component.ts`
- Tracks booking page views
- Implements payment initiation tracking
- Tracks add payment info events

### 7. Checkout Component
**File:** `src/app/checkout/checkout.component.ts`
- Tracks checkout page views
- Implements payment initiation tracking
- Tracks add payment info events
- Maps course information for accurate tracking

### 8. Success Payment Component
**File:** `src/app/success-payment/success-payment.component.ts`
- Tracks purchase completion events
- Implements transaction tracking
- Maps course information for purchase events

## Events Implemented

### Page View Events
- **PageView**: Tracks when users land on pages
- **ViewContent**: Tracks content engagement

### User Engagement Events
- **Scroll**: Tracks scroll depth (25%, 50%, 75%, 100%)
- **TimeOnPage**: Tracks time spent on page (30s, 1min, 2min, 5min)
- **VideoPlay**: Tracks video interactions
- **VideoComplete**: Tracks video completion

### Conversion Events
- **SelectContent**: Tracks course selection
- **AddToCart**: Tracks course interest
- **BeginCheckout**: Tracks checkout initiation
- **AddPaymentInfo**: Tracks payment form completion
- **Purchase**: Tracks successful enrollments

### Custom Events
- **CourseInterest**: Tracks course interest levels
- **EnrollmentIntent**: Tracks enrollment intent
- **BonusCourseClick**: Tracks bonus course interactions
- **TestimonialEngagement**: Tracks video testimonial interactions

## Event Parameters

All events include relevant parameters:
- `content_type`: Type of content (yoga_course, certified_page, etc.)
- `item_id`: Unique identifier for the course/page
- `item_name`: Human-readable name
- `value`: Monetary value (for purchase events)
- `currency`: Currency code (USD/INR)
- `page_location`: Current page URL
- `page_title`: Page title

## Course Mapping

The implementation includes comprehensive course mapping:

### Rishikesh Courses
- 100-Hour Yoga Teacher Training: $800
- 200-Hour Yoga Teacher Training: $1200
- 300-Hour Yoga Teacher Training: $1500

### Bali Courses
- 200-Hour Yoga Teacher Training Bali: $1400
- 300-Hour Yoga Teacher Training Bali: $1800

### Other Courses
- Pranic Purification Course
- Breath Detox Yoga
- Pranayama Course Online

## Implementation Details

### Scroll Tracking
- Tracks maximum scroll depth reached
- Prevents duplicate events for same threshold
- Uses window scroll events

### Time Tracking
- Uses setTimeout for time thresholds
- Tracks cumulative time on page
- Prevents duplicate events

### Video Tracking
- Tracks video index and title
- Monitors play, pause, and completion
- Includes video duration when available

### Payment Tracking
- Tracks payment initiation
- Monitors payment form completion
- Records successful purchases with transaction IDs

## Usage in GTM

To use these events in Google Tag Manager:

1. **Create Custom Events**: Set up triggers for each event type
2. **Configure Variables**: Map event parameters to GTM variables
3. **Set Up Tags**: Create GA4 tags for each event
4. **Test Implementation**: Use GTM preview mode to verify events

### Example GTM Configuration

```javascript
// Custom Event Trigger
Event Name: course_interest
Trigger Type: Custom Event

// GA4 Tag Configuration
Event Name: course_interest
Parameters:
- course_id: {{Course ID}}
- course_name: {{Course Name}}
- interest_level: {{Interest Level}}
```

## Testing

To test the implementation:

1. Open browser developer tools
2. Navigate to the certified pages
3. Check Network tab for gtag events
4. Verify event parameters are correct
5. Test conversion funnel end-to-end

## Benefits

This implementation provides:

1. **Complete Funnel Tracking**: From page view to purchase
2. **User Engagement Metrics**: Scroll, time, video interactions
3. **Conversion Optimization**: Identify drop-off points
4. **Course Performance**: Track which courses are most popular
5. **ROI Measurement**: Track revenue attribution
6. **User Behavior Insights**: Understand user journey patterns

## Maintenance

- Update course mappings when prices change
- Add new events for new features
- Monitor event firing in GA4
- Regular testing of conversion funnel
- Update documentation when changes are made

## Security Considerations

- No sensitive user data is tracked
- All tracking is client-side
- Respects user privacy preferences
- Uses standard GA4 implementation
