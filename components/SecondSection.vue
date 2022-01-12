<template>
  <div class="section">
    <div class="container">
      <div class="row desk">
        <div class="col-3 columns">
          <img src="assets/images/slider/img4.png" class="imgs" />
        </div>
        <div class="col-3 columns">
          <img src="assets/images/slider/img1.png" class="imgs" />
        </div>
        <div class="col-3 columns">
          <img src="assets/images/slider/img2.png" class="imgs" />
        </div>
        <div class="col-3 columns">
          <img src="assets/images/slider/img3.png" class="imgs" />
        </div>
      </div>
      <div class="row mob">
        <h6 class="texts">
          At ATC academy, we are here to support your dreams, and help you
          become Masters in your chosen career path. Our instructors will train,
          coach and mentor you.
        </h6>
      </div>

      <div class="row brands-i">
        <div class="col-md-2 brands-i-items">
          <img src="assets/images/brand/image 8.png" />
        </div>
        <div class="col-md-2 brands-i-items">
          <img src="assets/images/brand/image 9.png" />
        </div>
        <div class="col-md-2 brands-i-items">
          <img src="assets/images/brand/image 10.png" />
        </div>
        <div class="col-md-2 brands-i-items">
          <img src="assets/images/brand/image 11.png" />
        </div>
        <div class="col-md-2 brands-i-items">
          <img src="assets/images/brand/image 12.png" />
        </div>
        <div class="col-md-2 brands-i-items">
          <img src="assets/images/brand/image 13.png" />
        </div>
      </div>
      <div class="row brands">
        <div class="col-md-2 brand-item">
          <img src="assets/images/brand/Matplotlib.png" />
        </div>
        <div class="col-md-2 brand-item">
          <img src="assets/images/brand/Adobe.png" />
        </div>
        <div class="col-md-2 brand-item">
          <img src="assets/images/brand/Anaconda.png" />
        </div>
        <div class="col-md-2 brand-item">
          <img src="assets/images/brand/Facebook.png" />
        </div>
        <div class="col-md-2 brand-item">
          <img src="assets/images/brand/Django.png" />
        </div>
        <div class="col-md-2 brand-item">
          <img src="assets/images/brand/Figma.png" />
        </div>
      </div>
      <div class="row brands">
        <div class="col-md-2 brand-item">
          <img src="assets/images/brand/Tableu.png" />
        </div>
        <div class="col-md-2 brand-item">
          <img src="assets/images/brand/Vs code.png" />
        </div>
        <div class="col-md-2 brand-item">
          <img src="assets/images/brand/R studio.png" />
        </div>
        <div class="col-md-2 brand-item">
          <img src="assets/images/brand/Laravel.png" />
        </div>
        
        <div class="col-md-4 brand-item">
          <img src="assets/images/brand/Creative cloud.png" />
        </div>
        
      </div>

      <div class="row mobile-brands">
        <div class="col-4 brand-item">
          <img src="assets/images/brand/image 8.png"/>
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/image 9.png"/>
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/image 10.png"/>
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/image 11.png"/>
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/image 12.png"/>
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/image 13.png"/>
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/Matplotlib.png"/>
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/Adobe.png"/>
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/Anaconda.png"/>
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/Facebook.png"/>
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/Creative cloud.png"/>
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/Tableu.png"/>
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/Vs code.png"/>
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/R studio.png"/>
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/Laravel.png"/>
        </div>
        
        <div class="col-4 brand-item">
          <img src="assets/images/brand/Django.png"/>
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/Figma.png"/>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondSection",
};
</script>

<style scoped>
.imgs {
  border-radius: 20px;
  width: inherit;
}


.imgs:hover {
  -webkit-filter: grayscale(100%) !important;
  filter: grayscale(100%) !important;
  cursor: pointer;
  transform: scale(1.1);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  z-index: -2;
}

.columns {
  padding-left: 10px;
  padding-right: 10px;
}

.texts {
  margin-bottom: 40px;
  text-align: center;
  padding: 0 247px;
  color: #888888;
  font-size: 20px;
  font-family: "Poppins";
  font-weight: 300;
  line-height: 30px;
}

.brands {
  justify-content: center;
  vertical-align: middle;
  margin-top: 30px;
}
.brand-item {
  align-self: start;
  justify-content: center;
  display: flex;
  filter: opacity(0.5) drop-shadow(0 0 0 #888888);
}

.brands-i-items{
    align-self: end;
    justify-content: center;
    display: flex;
    filter: opacity(0.5) drop-shadow(0 0 0 #888888);
}

.brands-i{
    justify-content: center;
    vertical-align: middle;
    margin-top: 30px;
}


@media only screen and (max-width: 575px) {
  .desk, .brands, .brands-i{
      display: none;
  }

  .mobile-brands .brand-item{
    align-self: center;
    justify-content: center;
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .mob .texts{
      padding: 0px 0px;
      text-align: left;
      line-height: 30px;
      font-size: 20px;
      margin-bottom: 20px;
  }

  .mob{
      margin: 0px 0px
  }

}

@media only screen and (min-width: 578px) and (max-width: 992px) {
  .texts, .big-texts, .sm-texts{
    padding: 0px 80px;
  }
}

@media only screen and (min-width: 578px){
  .texts{
    margin-top: 80px;
  }

  .mobile-brands{
    display: none;
  }
}




</style>
