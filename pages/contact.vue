<template>
  <div class="main-wrapper">
    <Header />
    <MobileHeader />
    <div class="overlay"></div>
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
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                    <!-- Single Form End -->
                    <!-- Single Form Start -->
                    <div class="single-form">
                      <textarea name="message" placeholder="Message"></textarea>
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
    <Footer />
    <Backtotop />
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>
