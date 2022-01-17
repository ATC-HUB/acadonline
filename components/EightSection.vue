<template>
    <div class="section section-padding-02 mt-n1 mb-5">
            <div class="container">

                <!-- Section Title Start -->
                <div class="section-title shape-03 text-center">
                    <h2 class="main-title"> <span> Student Testimonial</span></h2>

                    <h5 class="sub-title" style="color: black;">Feedback from our Students</h5>
                </div>
                <!-- Section Title End -->

                <!-- Testimonial Wrapper End -->
                <div class="testimonial-wrapper testimonial-active">
                    <div class="swiper">
              <div class="swiper-wrapper">
                <div v-for="i in 6" :key="i" class="swiper-slide" :class="`slide--${i}`">
                  <div class="slider-content">Slide {{ i }}</div>
                </div>
              </div>
              <!-- If pagination is needed -->
              <div class="swiper-pagination"></div>

              <!-- If navigation buttons are needed -->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>                        
                </div>
                <!-- Testimonial Wrapper End -->

            </div>
        </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default{
    name: "EightSection",
    mounted() {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // add or remove unused modules
    Swiper.use([Navigation, Pagination, Autoplay])
    
    // init Swiper:
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      direction: 'horizontal',
      loop: true,
      // remove unused modules if needed
      modules: [Navigation, Pagination, Autoplay],
      // Pagination if needed
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      // Autoplay if needed
      autoplay: {
        delay: 3000
      },
      // Navigation arrows if needed
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
      // Configure other options. Not tested
    })}
}
</script>

<style scoped>

</style>