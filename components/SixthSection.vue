<template>
  <div class="section section-padding-02">
    <div class="container">
      <div class="row youtube-video-section">
        <img src="assets/images/backg.png" class="b-img" />
        <div class="col-5">
          <h4>Design School Presentation</h4>
          <p>
            You are very close to become the person of your dream by taking any
            of our online/ offline tech track courses <br />Read More
          </p>
        </div>
        <div class="col-7">
          <h5>MOMENTS FROM THE INSTITUTE</h5>
          <h3>Hands on Project Defence <br />in the course of studying</h3>
          <div class="swiper-c">
            <div class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="slider-content">
                    
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="slider-content">Slide Two</div>
                </div>
                <div class="swiper-slide">
                  <div class="slider-content">Slide Three</div>
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
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {mounted() {
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
    })
  },
  name: "SixthSection",
  
};
</script>

<style scoped>
.b-img {
  z-index: -1;
  position: absolute;
  right: 816px;
  width: 550px;
  height: 810px;
}

.youtube-video-section {
  height: 850px;
}

.col-5 h4 {
  color: #1207ab;
  font-weight: 600;
  font-size: 20px;
}

.col-5 p {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
  padding-top: 30px;
  padding-right: 90px;
}

.col-5 {
  align-self: center;
}

.col-7 h5 {
  margin-top: 70px;
  font-size: 16px;
  font-weight: 500;
}

.col-7 h3 {
  font-size: 37px;
  color: #1207ab;
  font-weight: 500;
}

.swiper {
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
  border-radius: 37px;
}
.swiper-slide {
  align-items: center;
  display: flex;
  justify-content: center;
}
.slider-content {
  color: #000;
}


.swiper-c{
width: 100%;
height: 518px;
background: #11088A;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 35px;
}
</style>
