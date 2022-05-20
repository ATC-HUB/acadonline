<template>
  <div class="section sec1 slider-section">
    <div class="container">
      <div class="slider-content">
      <h1 class="title text-white mb-6">Become a Certified</h1>
        <h2 class="title text-white">
          Quality Health Safety and
Environmental Professional
        </h2>
        <br />
        <h6 class="sub-title">
          ATC is a training centre for professionals, students and companies. 
          We are certified by professional bodies such as AMBIOSH, NEBOSH, IOSH, AOSH etc

        </h6>
        <a class="btn  btn-hover-dark" href="#">Get Started with us</a>
      </div>
    </div>
    <div class="slider-images">
      <div class="images">
        <img
          src="assets/images/slider/helmet.png"
          alt="Slider"
          class="img1 mb-1"
        />
        <img
          src="assets/images/slider/helsmall.png"
          alt="Slider"
          class="img2"
        />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'animate.css';

export default {
  name: "FirstSection",
};
</script>

<style>

@media only screen and (max-width: 575px) {
  .slider-content .main-title {
    font-size: 10.5vw;
    font-weight: 600;
    margin-top: 0px;
    line-height: 55px;
  }
  .slider-content .sub-title{
    font-size: 16px;
    line-height: 1.7;
    font-weight: 400;
  }
  
}
.sec1{
  background: #11088A ;

}
.img1 {
    margin-bottom: -10rem !important;
    width:90%;
}

</style>
