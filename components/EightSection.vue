<template>
  <div class="section section-padding-02 mt-n1 mb-5">
    <div class="container">
      <!-- Section Title Start -->
      <div class="section-title text-center">
        <h2 class="main-title"><span> Student Testimonial</span></h2>

        <h5 class="sub-title" style="color: black">
          Feedback from our Students
        </h5>
      </div>
      <!-- Section Title End -->

      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="row">
              <div class="content-container">
                <div class="test-img">
                  <img src="assets/images/testi.png" />
                </div>
                <div>
                  <h6>
                    You are very close to become the person of your dream by
                    taking any of our online/offline tech track courses Read
                    More
                  </h6>
                  <span>Dada Adepoju (UX/UI)</span>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="row">
              <div class="content-container">
                <div class="test-img">
                  <img src="assets/images/testi.png" />
                </div>
                <div>
                  <h6>
                    You are very close to become the person of your dream by
                    taking any of our online/offline tech track courses Read
                    More
                  </h6>
                  <span>Dada Adepoju (UX/UI)</span>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="row">
              <div class="content-container">
                <div class="test-img">
                  <img src="assets/images/testi.png" />
                </div>
                <div>
                  <h6>
                    You are very close to become the person of your dream by
                    taking any of our online/offline tech track courses Read
                    More
                  </h6>
                  <span>Dada Adepoju (UX/UI)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- If pagination is needed -->
        <div class="swiper-pagination"></div>

        <!-- If navigation buttons are needed -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  name: "EightSection",
  mounted() {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // add or remove unused modules
    Swiper.use([Navigation, Pagination, Autoplay]);

    // init Swiper:
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      direction: "horizontal",
      loop: true,
      // remove unused modules if needed
      modules: [Navigation, Pagination, Autoplay],
      // Pagination if needed
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      // Autoplay if needed
      autoplay: {
        delay: 3000,
      },

      // Navigation arrows if needed
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // Configure other options. Not tested
    });
  },
};
</script>

<style scoped>
.swiper {
  height: 500px;
}
.swiper-slide {
  align-items: center;
  display: flex;
  justify-content: center;
}

.content-container {
  border: 1px solid #ded9d9;
  border-radius: 35px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  width: 800px;
}

.content-container h6 {
  padding-top: 40px;
  padding-bottom: 30px;
  color: #150c21b2;
  line-height: 1.7;
  font-size: 16px;
  width: 100%;
  padding-left: 300px;
}
.content-container span {
  border-top: 1px solid #000000;
  font-weight: 500;
  margin-bottom: 50px;
  margin-left: 300px;
}

.test-img {
  border: 15px solid #1207ab;
  border-radius: 35px;
  background: #1207ab;
  z-index: 17;
  width: 278px;
  position: absolute;
  right: 720px;
  top: 115px;
}
</style>
