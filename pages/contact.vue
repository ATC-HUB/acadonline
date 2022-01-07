<template>
    <div class="main-wrapper">
      <!-- Header Section Start -->
      <div class="header-section">
        <!-- Header Main Start -->
        <div class="header-main">
          <div class="container">
            <!-- Header Main Start -->
            <div class="header-main-wrapper">
              <!-- Header Logo Start -->
              <div class="header-logo">
                <a href="index.html"
                  ><img
                    src="assets/images/logo.png"
                    alt="Logo"
                    width="168"
                    height="50"
                /></a>
              </div>
              <!-- Header Logo End -->

              <!-- Header Menu Start -->
              <div class="header-menu d-none d-lg-block">
                <ul class="nav-menu">
                  <div class="courses-search">
                    <form action="#">
                      <input type="text" placeholder="Search your course" />
                      <button><i class="flaticon-magnifying-glass"></i></button>
                    </form>
                  </div>
                </ul>
              </div>
              <!-- Header Menu End -->

              <!-- Header Sing In & Up Start -->
              <div class="header-sign-in-up d-none d-lg-block">
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li>
                    <a href="#all_courses">All Course</a>
                  </li>

                  <li><a href="contact.html">Contact</a></li>
                  <li><a class="sign-in" href="#sign_in">Sign In</a></li>
                  <li><a class="sign-up" href="signup.html">Sign Up</a></li>
                </ul>
              </div>
              <!-- Header Sing In & Up End -->

              <!-- Header Mobile Toggle Start -->
              <div class="header-toggle d-lg-none">
                <a class="menu-toggle" href="javascript:void(0)">
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              <!-- Header Mobile Toggle End -->
            </div>
            <!-- Header Main End -->
          </div>
        </div>
        <!-- Header Main End -->
      </div>
      <!-- Header Section End -->

      <!-- Mobile Menu Start -->
      <div class="mobile-menu">
        <!-- Menu Close Start -->
        <a class="menu-close" href="javascript:void(0)">
          <i class="icofont-close-line"></i>
        </a>
        <!-- Menu Close End -->

        <!-- Mobile Menu Start -->
        <div class="mobile-menu-items">
          <ul class="nav-menu">
            <li><a href="#footer">Sign In</a></li>
            <li><a href="index.html">Home</a></li>
            <li><a href="#">All Course</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <!-- Mobile Menu End -->
      </div>
      <!-- Mobile Menu End -->

      <!-- Overlay Start -->
      <div class="overlay"></div>
      <!-- Overlay End -->

      <!-- Page Banner Start -->
      <div class="section page-banner"></div>
      <!-- Page Banner End -->

      <!-- Contact Start -->
      <div class="section section-padding">
        <div class="container">
          <!-- Contact Wrapper Start -->
          <div class="contact-wrapper">
            <div class="row align-items-center">
              <h4
                class="title text-center"
                style="font-size: 35px; padding-bottom: 60px"
              >
                Get in touch with us
              </h4>

              <div class="col-lg-6">
                <div class="contact-map-wrapper">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.855320804439!2d3.3765900143087886!3d7.142723617637488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4b08f0170e29%3A0x7acce266df150aff!2sAFRICA%20TRAINOVATION%20CONSULTING!5e0!3m2!1sen!2sng!4v1628944851717!5m2!1sen!2sng"
                    width="600"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div class="col-lg-6">
                <!-- Contact Form Start -->
                <div class="contact-form">
                  <div class="form-wrapper">
                    <form
                      id="contact-form"
                      action="https://htmlmail.hasthemes.com/humayun/edule-contact.php"
                      method="POST"
                    >
                      <!-- Single Form Start -->
                      <div class="single-form">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                      <!-- Single Form End -->
                      <!-- Single Form Start -->
                      <div class="single-form">
                        <input type="email" name="email" placeholder="Email" />
                      </div>
                      <!-- Single Form End -->
                      <!-- Single Form Start -->
                      <div class="single-form">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                      <!-- Single Form End -->
                      <!-- Single Form Start -->
                      <div class="single-form">
                        <textarea
                          name="message"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <!-- Single Form End -->
                      <p class="form-message"></p>
                      <!-- Single Form Start -->
                      <div class="single-form">
                        <button
                          class="btn btn-primary btn-hover-dark w-100"
                          style="color: #fff; background-color: #1207ab"
                        >
                          Send Message <i class="flaticon-right"></i>
                        </button>
                      </div>
                      <!-- Single Form End -->
                    </form>
                  </div>
                </div>
                <!-- Contact Form End -->
              </div>
            </div>
          </div>
          <!-- Contact Wrapper End -->
        </div>
      </div>
      <!-- Contact End -->

      <!-- Footer Start  -->
      <div class="section footer-section mt-5" id="footer">
        <div class="footer-widget-section">
          <div class="container">
            <div class="row">
              <div class="category col-lg-4 col-md-4 order-md-2 order-lg-2">
                <div class="footer-widget">
                  <h4 class="footer-widget-title">Category</h4>

                  <ul class="widget-link">
                    <li><a href="#">Digital Courses</a></li>
                    <li><a href="#">Programming</a></li>
                    <li><a href="#">Data Science</a></li>
                    <li><a href="#">QHSE</a></li>
                  </ul>
                </div>
              </div>
              <div class="quick_link col-lg-4 col-md-4 order-md-2 order-lg-2">
                <!-- Footer Widget Start -->
                <div class="footer-widget">
                  <h4 class="footer-widget-title">Quick Links</h4>

                  <ul class="widget-link">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Customer Support</a></li>
                    <li><a href="#">Course FAQ’s</a></li>
                  </ul>
                </div>
                <!-- Footer Widget End -->
              </div>
              <div class="address col-lg-4 col-md-4 order-md-2 order-lg-2">
                <!-- Footer Widget Start -->
                <div class="footer-widget" style="margin-top: 25px">
                  <div class="widget-address">
                    <h4 class="footer-widget-title">Africa Trainovation</h4>
                    <h4 class="footer-widget-title">Consulting</h4>
                    <p style="color: black">Idi-Aba, Abeokuta.</p>
                  </div>

                  <ul class="widget-info">
                    <li>
                      <p>
                        <i class="flaticon-email"></i>
                        <a href="mailto:address@gmail.com">atc@gmail.com</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i class="flaticon-phone-call"></i>
                        <a href="tel:+2349035807050">+234 903 580 7050</a>
                      </p>
                    </li>
                  </ul>

                  <ul class="widget-social">
                    <li>
                      <a href="#"><i class="flaticon-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="flaticon-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="flaticon-linkedin"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="flaticon-instagram"></i></a>
                    </li>
                  </ul>
                </div>
                <!-- Footer Widget End -->
              </div>
            </div>
          </div>
        </div>
        <!-- Footer Widget Section End -->
        <!-- Footer Copyright Start -->
        <div class="footer-copyright">
          <div class="container">
            <!-- Footer Copyright Start -->
            <div class="copyright-wrapper">
              <div class="copyright-text text-center">
                <p>&copy; Copyright, ATC Hub 2021</p>
              </div>
            </div>
            <!-- Footer Copyright End -->
          </div>
        </div>
        <!-- Footer Copyright End -->
      </div>
      <!-- Footer End -->

      <!--Back To Start-->
      <a href="#" class="back-to-top">
        <i class="icofont-simple-up"></i>
      </a>
      <!--Back To End-->
    </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>