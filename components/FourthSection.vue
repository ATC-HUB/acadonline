<template>
  <div
    class="section add-top-bottom-margin">
    <div class="container">
      <div class="row pt-5">
        <div class="col-lg-6">
            <h4 class="text">We deliver and consult on Quality Health safety and Environment services across the globe.</h4>
            <p class="sm-text">You are very close to becoming the person of your dream
by taking any of our online/offline QHSE Courses. </p>
            <img src="assets/images/mobileClusterImages.png" class="mob-imgs" width="100%"/>
            <!-- <img src="assets/images/mobileCircle.png" class="mob-circle-imgs img-fluid"/> -->
            <div class="btn-align-center">
            <button class="btn">Get started</button>
            </div>
        </div>
        <div class="col-lg-6">
            <img src="assets/images/clusterImages.png" class="desk-imgs"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FourthSection",
};
</script>

<style scoped>
.container{
  background: #1207ab;
    padding: 0px 50px;
}

.col-lg-6{
      padding-left: 0px;
    padding-right: 0px;
}

.add-top-bottom-margin{
    margin-top: 40px;
    padding-bottom: 50px;
}
.text{
    color: #46E6E4;
    font-size: 50px;
    padding-top: 30px;
    font-weight: 600;
    line-height: 60px;
}

.sm-text{
    color: #fff;
    font-size: 16px;
    line-height: 1.7;
    margin-top: 50px;
    font-weight: 400;
    padding-right: 90px;
}

.btn{
    color: #fff;
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 20px 60px;
    margin-top: 50px;
    margin-bottom: 50px;
}


.btn:hover{
    color: #1207ab;
    background: #fff;
    border: 2px solid #fff;
}
.mob-circle-imgs{
  display: none;
}

.desk-imgs{
  margin: 20px 0px;
  position: absolute;
    right: -35px;
}

@media only screen and (min-width: 1200px){
  .desk-imgs{
    width: 83%;
  }}

@media only screen and (max-width: 992px){
  .desk-imgs{
    display: none;
  }

  .mob-circle-imgs{
    display: block;
    position: absolute;
    z-index: -1;
  }
.btn-align-center{
    justify-content: center;
    display: flex;
}
  .mob-imgs{
    width: 100%;
  }

  .text{
      font-size: 30px;
      font-weight: 600;
      line-height: 40px;
  }

  .sm-text{
      font-size: 16px;
      font-weight: 400;
      line-height: 1.7;
      margin-bottom: 40px;
    margin-top: 35px;
      padding-right: 0px;
  }
}

@media only screen and (min-width: 992px){
  .mob-imgs{
    display: none;
  }
}

@media only screen and (max-width: 1440px){
  .section{
    background: #1207ab;
  }
}
</style>
