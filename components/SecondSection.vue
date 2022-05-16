<template>
  <div class="section">
    <div class="container">
      <div class="row brands-i">
        <div class="col-md-2 brands-i-items">
          <img src="assets/images/brand/image 29.png" />
        </div>
        <div class="col-md-2 brands-i-items">
          <img src="assets/images/brand/image 32.png" />
        </div>
        <div class="col-md-2 brands-i-items">
          <img src="assets/images/brand/image 31.png" />
        </div>
        <div class="col-md-2 brands-i-items">
          <img src="assets/images/brand/image 28.png" />
        </div>
        <div class="col-md-2 brands-i-items">
          <img src="assets/images/brand/image 33.png" />
        </div>
        <div class="col-md-2 brands-i-items">
          <img src="assets/images/brand/image 30.png" />
        </div>
      </div>
      <div class="row brands">
        <div class="col-md-2 brand-item">
          <img src="assets/images/brand/ISPN.png" />
        </div>
        <div class="col-md-2 brand-item">
          <img src="assets/images/brand/IOSH.png" />
        </div>
        <div class="col-md-2 brand-item">
          <img src="assets/images/brand/AMBIOSH.png" />
        </div>
        <div class="col-md-2 brand-item">
          <img src="assets/images/brand/exemp.png" />
        </div>
        <div class="col-md-2 brand-item">
          <img src="assets/images/brand/ISO.png" />
        </div>
        <div class="col-md-2 brand-item">
          <img src="assets/images/brand/GRS.png" />
        </div>
      </div>

      <div class="row mobile-brands">
        <div class="col-4 brand-item">
        <img src="assets/images/brand/image 29.png" />
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/image 32.png" />
        </div>
        <div class="col-4 brand-item">
           <img src="assets/images/brand/image 31.png" />
        </div>
        <div class="col-4 brand-item">
           <img src="assets/images/brand/image 28.png" />
        </div>
        <div class="col-4 brand-item">
              <img src="assets/images/brand/image 33.png" />
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/image 30.png" />
        </div>
        <div class="col-4 brand-item">
         <img src="assets/images/brand/ISPN.png" />
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/IOSH.png" />
        </div>
        <div class="col-4 brand-item">
          <img src="assets/images/brand/AMBIOSH.png" />
        </div>
        <div class="col-4 brand-item">
            <img src="assets/images/brand/exemp.png" />
        </div>
        <div class="col-4 brand-item">
           <img src="assets/images/brand/ISO.png" />
        </div>
        <div class="col-4 brand-item">
            <img src="assets/images/brand/GRS.png" />
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


@media only screen and (max-width: 767px) {
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
      line-height: 1.7;
      font-size: 16px;
      margin-bottom: 20px;
      font-weight: 400;
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

@media only screen and (min-width: 768px){
  .texts{
    margin-top: 80px;
  }

  .mobile-brands{
    display: none;
  }
}

</style>
