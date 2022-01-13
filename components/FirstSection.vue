<template>
  <div class="section slider-section">
    <div class="container">
      <div class="slider-content">
        <h2 class="main-title">
          It's time to learn and acquire digital Tech skills.
        </h2>
        <br />
        <h6 class="sub-title">
          Acquire the 21st century skills so as to improve your relevance and
          employability in this ever changing world.
        </h6>
        <a class="btn btn-hover-dark" href="#">Get Started</a>
      </div>
    </div>
    <div class="slider-images">
      <div class="images">
        <img
          src="assets/images/slider/slider-1.png"
          alt="Slider"
          class="img1"
        />
        <img
          src="assets/images/slider/slider-3.png"
          alt="Slider"
          class="img2"
        />
      </div>
      <div class="app-shape-1">
        <img
          src="assets/images/circleBackground.svg"
          alt="Slider"
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstSection",
};
</script>

<style>

@media only screen and (max-width: 575px) {
  .slider-content .main-title {
    font-size: 10.5vw;
    font-weight: 600px;
    margin-top: 0px;
    line-height: 55px;
  }
  .slider-content .sub-title{
    font-size: 20px;
    line-height: 30px;
    font-weight: 0 !important;
  }
}

</style>
