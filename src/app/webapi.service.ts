import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './course/enum';
@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  private url = environment.apiUrl;
  public imageUrl = "https://my-s3-images-bucket.s3.amazonaws.com/img/";
  public imageUrlv2 = "https://yogavidyaschool.com:3000/public/img/";
  private youtubeApiKey = "AIzaSyBBWKHx71MmwvADlvncUc8ivZuJ0k5Wi44";
  // private youtubeChannelId = "UCp8TSIgLoBWsPS1knyeFhaw";
  // private videoUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=date&channelId=${this.youtubeChannelId}&key=${this.youtubeApiKey}&maxResults=4`;
  // private channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${this.youtubeChannelId}&key=${this.youtubeApiKey}`;

  constructor(private http: HttpClient) { }

  // getChannelDetails() {
  //   return this.http.get(this.channelUrl);
  // }

  // getVideoDetails() {
  //   return this.http.get(this.videoUrl);
  // }

  getCategory(id = "") {
    return this.http.get(this.url + "api/v1/getAllCategory" + id);
  }
  getCategoryTree(id = "") {
    return this.http.get(this.url + "api/v1/getCategoryTree" + id);
  }
  getCourseById(data: any) {
    return this.http.post(this.url + "api/v1/getCourseBySlug", data);
  }

  saveInquiry(data: any) {
    return this.http.post(this.url + "api/v1/inquiryEmail", data);

  }

  getSliders(id = "") {
    return this.http.get(this.url + "api/v1/getSlider" + id);
  }

  getHomeBlog(data: any) {
    return this.http.post(this.url + "api/v1/getHomeBlog", data);
  }
  getHomeMentors(data: any) {
    return this.http.post(this.url + "api/v1/getHomeMentors", data);
  }
  getMentorsForCoursePage(data: any) {
    return this.http.post(this.url + "api/v1/getMentorsForCoursePage", data);
  }
  getBlogs(data: any) {
    return this.http.post(this.url + "api/v1/getAllBlog", data);
  }
  getBlogBySlug(id: any) {
    return this.http.get(this.url + "api/v1/getBlogBySlug/" + id);
  }
  getSubCategoryByCatId(data: any) {
    return this.http.post(this.url + "api/v1/getSubCategoryByCatId/", data);
  }
  getSubCourseCategoryBySubCatId(data: any) {
    return this.http.post(this.url + "api/v1/getSubCourseCategoryBySubCatId/", data);
  }
  getAllMentors(id = "") {
    return this.http.get(this.url + "api/v1/getAllMentor" + id);
  }
  getMentorBySlug(id: any) {
    return this.http.get(this.url + "api/v1/getMentorBySlug/" + id);
  }
  saveContactInquiry(data: any) {
    return this.http.post(this.url + "api/v1/inquiryEmail", data);

  }
  getAllEvents(id = "") {
    return this.http.get(this.url + "api/v1/getAllEvents");
  }

  getKundaliniParichayRefferalCode() {
    return this.http.get(this.url + "api/v1/getKundaliniParichayRefferalCode");
  }

  getWebinarVideosByName(data: any) {
    return this.http.post(this.url + "api/v1/getWebinarVideosByName", data);
  }

  registerWebinarUser(data: any){
    return this.http.post(this.url + "api/v1/registerWebinarUser", data);
  }

  getAllOnlineEvents(id = "") {
    return this.http.get(this.url + "api/v1/getAllOnlineEvents");
  }
  login(data: any) {
    return this.http.post(this.url + "api/v1/loginWeb", data);
  }
  changeStudentPassword(data: any){
    return this.http.post(this.url + "api/v1/changePassword", data);
  }
  getUserById(id: any) {
    return this.http.get(this.url + "api/v1/student/" + id);
  }
  getCourseByIdV2(id: any) {
    return this.http.get(this.url + "api/v1/course/" + id);
  }
  getCourseVideo(data: any) {
    return this.http.post(this.url + "api/v1/getCourseVideo", data);
  }
  paidVideoVerifyUser(data: any) {
    return this.http.post(this.url + "api/v1/getValidation", data);
  }
  createFeedback(data: any) {
    return this.http.post(this.url + "api/v1/createFeedback", data);
  }
  createSubscriber(data: any) {
    return this.http.post(this.url + "api/v1/createSubscriber", data);
  }
  getFeedbackByCourse(data: any) {
    return this.http.post(this.url + "api/v1/getFeedbackByCourse", data);
  }
  stripeWithoutProduct(data: any) {
    return this.http.post(this.url + "api/v1/stripeWithoutProduct", data);
  }
  createAccessLog(data: any) {
    return this.http.post(this.url + "api/v1/createAccessLog", data);
  }
  getAccessLog(data: any) {
    return this.http.post(this.url + "api/v1/getAccessLog", data);
  }
  getcheckCourseStudent(data: any) {
    return this.http.post(this.url + "api/v1/getcheckCourseStudent", data);
  }
  uploadVideo(data: any) {
    return this.http.post(this.url + "api/v1/uploadVideo", data);
  }

  uploadReview(data: any) {
    return this.http.post(this.url + "api/v1/uploadReview", data);
  }

  getCourseVideoV2(data: any) {
    return this.http.post(this.url + "api/v1/getCourseVideosById", data);
  }
  stripe(data: any) {
    return this.http.post(this.url + "api/v1/stripe", data);
  }

  checkoutStripeForPranicPurification(data: any) {
    return this.http.post(this.url + "api/v1/checkoutStripeForPranicPurification", data);
  }

  checkoutStripeForLiveClasses(data: any) {
    return this.http.post(this.url + "api/v1/checkoutStripeForLiveClasses", data);
  }

  ccavenue(data: any) {
    return this.http.post(this.url + "api/v1/cc_test", data);
  }
  getPaymentResponse(data: any) {
    return this.http.post(this.url + "api/v1/getPaymentResponse", data);
  }
  getPaymentResponseV2(data: any) {
    return this.http.post(this.url + "api/v1/getPaymentResponseV2", data);
  }
  getPaymentResultPranicPurification(data: any) {
    return this.http.post(this.url + "api/v1/getPaymentResultPranicPurification", data);
  }

  getPaymentResultAndSendMailForLiveClass(data: any) {
    return this.http.post(this.url + "api/v1/getPaymentResultAndSendMailForLiveClass", data);
  }

  createStudent(data: any) {
    return this.http.post(this.url + "api/v1/createStudent", data);
  }
  updatePayment(data: any) {
    return this.http.post(this.url + "api/v1/updatePayment", data);
  }
  updateStudentCourse(data: any) {
    return this.http.post(this.url + "api/v1/updateStudentCourse", data);
  }
  sendOrderConfirmation(data: any) {
    return this.http.post(this.url + "api/v1/sendOrderConfirmation", data);
  }

  checkEmail(data: any) {
    return this.http.post(this.url + "api/v1/checkEmail", data);
  }

  createAnalytics(data: any) {
    return this.http.post(this.url + "api/v1/createAnalytics", data);
  }

  createRazorpayOrder(data: any) {
    return this.http.post(this.url + "api/v1/createRazorpayOrder", data);
  }

  verifyRazorpayPayment(data: any) {   
    return this.http.post(this.url + "api/v1/verifyRazorpayPaymentAndSendMail", data);
  }

   checkoutRazorpayNewPranaarabha(data: any) {
    return this.http.post(this.url + "api/v1/checkoutRazorpayNewPranaarabha", data);
  }

  getRazorpayPaymentResultForPranarambha(data: any) {   
    return this.http.post(this.url + "api/v1/getRazorpayPaymentResultForPranarambha", data);
  }

  checkoutRazorpayForPranicPurification(data: any) {
    return this.http.post(this.url + "api/v1/checkoutRazorpayForPranicPurification", data);
  }

  getRazorPaymentResultPranicPurification(data: any) {   
    return this.http.post(this.url + "api/v1/getRazorPaymentResultPranicPurification", data);
  }
}
