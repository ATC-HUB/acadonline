<template>
  <div class="section section-padding-02">
    <div class="container">
      <div class="row main">
        <h3>Our Community</h3>
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="row">
                  <img src="assets/images/community.png">
              </div>
            </div>
            <div class="swiper-slide">
              <div class="row">
                  <img src="assets/images/community.png">
              </div>
            </div>
            <div class="swiper-slide">
              <div class="row">
                  <img src="assets/images/community.png">
              </div>
            </div>
          </div>
          <!-- If pagination is needed -->
          <div class="swiper-pagination"></div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  name: "TenthSection",
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
.main{
    justify-content: center;
    display: flex;
}

.main{
    text-align: center;
}

.swiper {
  height: 500px;
}
.swiper-slide {
  align-items: center;
  display: flex;
  justify-content: center;
background: linear-gradient(183.04deg, #150C21 11.1%, rgba(21, 12, 33, 0) 43.03%);
border-radius: 35px;
transform: rotate(180deg);
}

.swiper-slide img {
  border-radius: 35px;
transform: rotate(180deg);

}





</style>
