<template>
  <div class="section section-padding-02">
    <div class="container">
      <div class="row main">
        <h2 class="mb-5">Our Community</h2>
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="row">
                <img src="assets/images/gradient-b.png" class="b-img" />
                <img src="assets/images/community.png" class="img-1" />
              </div>
              <h6 class="text">
                We Nuture and build the future Tech Giants in Africa
              </h6>
            </div>
            <div class="swiper-slide">
              <div class="row">
                <img src="assets/images/gradient-b.png" class="b-img" />
                <img src="assets/images/community.png" class="img-1" />
              </div>
              <h6 class="text">
                We Nuture and build the future Tech Giants in Africa
              </h6>
            </div>
            <div class="swiper-slide">
              <div class="row">
                <img src="assets/images/gradient-b.png" class="b-img" />
                <img src="assets/images/community.png" class="img-1" />
              </div>
              <h6 class="text">
                We Nuture and build the future Tech Giants in Africa
              </h6>
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
.main {
  justify-content: center;
  display: flex;
}

.b-img {
  z-index: 1;
  position: absolute;
  border-radius: 35px;
  width: auto;
  top: -25px;
}
.main {
  text-align: center;
}

.swiper {
  height: fit-content;
}
.swiper-slide {
  align-items: center;
  display: flex;
  justify-content: center;
}

.img-1 {
  border-radius: 35px;
}

.text {
  position: absolute;
  color: #fff;
  padding-top: 325px;
  font-size: 40px;
  z-index: 1;
  padding-left: 240px;
  padding-right: 240px;
}

</style>
