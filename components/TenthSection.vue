<template>
  <div class="section section-padding-02 mt-5">
    <div class="container">
      <div class="row main">
        <h2 class="mb-5">Our Community</h2>
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="row community container">
              </div>
              <h6 class="text">
                We Nuture and build the future Tech Giants in Africa
              </h6>
            </div>
            <div class="swiper-slide">
              <div class="row community container">
              </div>
              <h6 class="text">
                We Nuture and build the future Tech Giants in Africa
              </h6>
            </div>
            <div class="swiper-slide">
              <div class="row community container">
              </div>
              <h6 class="text">
                We Nuture and build the future Tech Giants in Africa
              </h6>
            </div>
          </div>

          <!-- If pagination is needed -->

          <div class="swiper-pagination"></div>
        </div>

        <div class="b-btn">
          <button class="btn">Join our community</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
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
.community {
    background-image: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), url("static/assets/images/community.png");
    border-radius: 35px;
    width: 100%;
    height: 51vw;
    background-size: contain;
    background-repeat: no-repeat ;
    color: white;
    padding: 20px;
}
.main {
  justify-content: center;
  display: flex;
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
  height: 100%;
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

.btn{
        color: rgba(21,12,33,0.89804);
    border: 2px solid rgba(21,12,33,0.89804);
    border-radius: 10px;
    padding: 20px 20px;
    margin-top: 50px;
    background: #fff;
    font-size: 22px;
    font-weight: 500;
}

.b-btn{
    justify-content: center;
    display: grid;
}

.btn:hover{
    color: #fff;
    background: #150C21E5;
    border: 2px solid #150C21E5;
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .swiper-slide h6{
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom: 80px;
  }

}

@media screen and (min-width: 390px) and (max-width: 767px) {
  .swiper-slide h6{
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 200px;
    font-size: 25px
  }
}

@media screen and (max-width: 389px) {
  .swiper-slide h6{
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 260px;
    font-size: 20px
  }

  .community{
    height: 58vw;
  }


}
</style>
