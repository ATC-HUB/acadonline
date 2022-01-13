<template>
  <div
    class="section section-padding-02 add-top-bottom-margin">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
            <h4 class="text">Are You looking to train your team with Digital Skills?</h4>
            <p class="sm-text">A well trained personel is a guarantee for effective and efficient service delivery for optimum productivity. </p>
            <img src="assets/images/pic1.png" class="mob-imgs" width="100%">
            <div class="btn-align-center">
            <button class="btn">Contact US</button>
            </div>
        </div>
        <div class="col-md-6">
            <img src="assets/images/clusterImages.png" class="mt-4 desk-imgs">
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



.add-top-bottom-margin{
    background: #1207ab;
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
}

.btn{
    color: #fff;
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 20px 60px;
    margin-top: 50px;
}

.btn-align-center{
    justify-content: center;
    display: flex;
}
.btn:hover{
    color: #1207ab;
    background: #fff;
    border: 2px solid #fff;
}

@media only screen and (max-width: 578px){
  .desk-imgs{
    display: none;
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
      margin-bottom: 50px;
  }
}

@media only screen and (min-width: 578px){
  .mob-imgs{
    display: none;
  }
}
</style>
