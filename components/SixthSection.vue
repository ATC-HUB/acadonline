<template>
  <div class="section section-padding-02">
    <div class="container">
        <div class="row youtube-video-section">
            <img src="assets/images/backg.png" class="b-img">
            <div class="col-5">
                <h4>Design School Presentation</h4>
                <p>You are very close to become the person of your dream by taking any of our online/ offline tech track courses <br>Read More</p>
            </div>
            <div class="col-7">
                <h5>MOMENTS FROM THE INSTITUTE</h5>
                <h3>Hands on Project Defence <br>in the course of studying</h3>
                <div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
export default {
  name: "SixthSection",
};
</script>


<style scoped>
.b-img{
    z-index: -1;
    position: absolute;
    right: 816px;
    width: 550px;
    height: 810px;
}

.youtube-video-section{
    height: 850px;
}

.col-5 h4{
    color: #1207ab;
    font-weight: 600;
    font-size: 20px;
}

.col-5 p{
    font-size: 18px;
    font-weight: 400;
    line-height: 1.7;
    padding-top: 30px;
    padding-right: 90px
}

.col-5{
    align-self: center;
}

.col-7 h5{
    margin-top: 70px;
    font-size: 16px;
    font-weight: 500;
}

.col-7 h3{
    font-size: 37px;
    color: #1207ab;
    font-weight: 500;
}
</style>