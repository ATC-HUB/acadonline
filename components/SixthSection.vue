<template>
  <div class="section section-padding-02 mt-5">
    <div class="container">
      <div class="row youtube-video-section">
        <img src="assets/images/mob-bg.png" class="mb-img">
        <img src="assets/images/backg.png" class="b-img" />
        <div class="col-lg-5 design_school_desk">
          <h4>Design School Presentation</h4>
          <p>
            You are very close to become the person of your dream by taking any
            of our online/ offline tech track courses <br />Read More
          </p>
        </div>

        <div class="col-lg-7 slider_desk">
          <h5>MOMENTS FROM THE INSTITUTE</h5>
          <h3>Hands on Project Defence <br class="breaks"/>in the course of studying</h3>
          <div class="swiper-c mt-5">
            <div class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <iframe
                      width="100%"
                      height="500px"
                      src="https://www.youtube.com/embed/rjrPx_2GzyU"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                </div>
                <div class="swiper-slide">
                    <iframe
                      width="100%"
                      height="500px"
                      src="https://www.youtube.com/embed/GUe9yKnSsYE"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                </div>
                <div class="swiper-slide"> 
                    <iframe
                      width="100%"
                      height="500px"
                      src="https://www.youtube.com/embed/RUt-ySO5du0"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
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
        <div class="col-lg-7 slider_mob">
          <h5 class="mob_text2">MOMENTS FROM THE INSTITUTE</h5>
          <h3 class="desk_text">Hands on Project Defence <br />in the course of studying</h3>
          <h4 class="mob_text">Hands on Project Defence in the course of studying</h4>

          <div class="swiper-c mt-5">
            <div class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <iframe
                      width="100%"
                      height="500px"
                      src="https://www.youtube.com/embed/rjrPx_2GzyU"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                </div>
                <div class="swiper-slide">
                    <iframe
                      width="100%"
                      height="500px"
                      src="https://www.youtube.com/embed/GUe9yKnSsYE"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                </div>
                <div class="swiper-slide"> 
                    <iframe
                      width="100%"
                      height="500px"
                      src="https://www.youtube.com/embed/RUt-ySO5du0"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
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
        <div class="col-lg-5 design_school_mob">
          <h4><span class="small_box"></span> Design School Presentation</h4>
          <p>
            You are very close to become the person of your dream by taking any
            of our online/ offline tech track courses <br />Read More
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  mounted() {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // add or remove unused modules
    Swiper.use([Navigation, Pagination]);

    // init Swiper:
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      direction: "horizontal",
      loop: true,
      // remove unused modules if needed
      modules: [Navigation, Pagination],
      // Pagination if needed
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      // Autoplay if needed
     // autoplay: {
        //delay: 5000,
      //},
      // Navigation arrows if needed
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // Configure other options. Not tested
    });
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

.small_box{
  display: none;
}

.youtube-video-section {
  height: 850px;
}

.swiper-button-next, .swiper-button-prev {
    position: absolute !important;
    top: 50% !important;
    width: calc(var(--swiper-navigation-size)/ 44 * 27) !important;
    height: var(--swiper-navigation-size) !important;
    margin-top: calc(0px - (var(--swiper-navigation-size)/ 2)) !important;
    z-index: 10 !important;
    cursor: pointer !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    color: var(--swiper-navigation-color,var(--swiper-theme-color)) !important;
}

.col-lg-5 h4 {
  color: #1207ab;
  font-weight: 600;
  font-size: 20px;
}

.col-lg-5 p {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
  padding-top: 30px;
  padding-right: 90px;
}

.col-lg-5 {
  align-self: center;
}

.col-lg-7 h5 {
  margin-top: 70px;
  font-size: 16px;
  font-weight: 500;
}

.col-lg-7 h3 {
  font-size: 37px;
  color: #1207ab;
  font-weight: 500;
}

.mb-img, .design_school_mob, .slider_mob, .mob_text{
  display: none;
}
.swiper {
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
  border-radius: 37px;
}



.swiper-c {
  width: 100%;
  height: 490px;
  background: #11088a;
  box-shadow: #1207ab -10px -10px;
  border-radius: 35px;
}

@media only screen and (max-width: 992px) {
  .mb-img{
    display: block;
    z-index: -1;
    position: absolute;
    padding: 0;
    height: 1080px;
    right: 0px;
  }
  .design_school_mob, .slider_mob, .mob_text{
    display: block;
  }
  
  .section-padding-02{
    margin-bottom: 170px;
  }
  .small_box{
    display: block;
    width: 15px;
    height: 15px;
    background-color: #1207ab;
    align-self: center;
    margin-right: 15px;

  }
  .design_school_desk, .slider_desk, .desk_text{
    display: none;
  }

  .design_school_mob h4{
    display: flex;
    font-size: 18px;
  }


.col-lg-7 h5 {
  margin-top: 140px;
  
}

  .mob_text{
    font-size: 30px;
    color: #1207ab;
    font-weight: 500;
    margin-top: 40px
  }

  .design_school_mob h4{
    margin-top: 40px;
  }
  .swiper-c {
  width: 100%;
  height: 290px;
}

.swiper-slide iframe{
  height: inherit
}

.breaks{
  display: none;
}

.col-lg-5 p{
  padding: 0px;
  margin-top: 40px;
}

}
</style>
