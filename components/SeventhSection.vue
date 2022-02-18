<template>
  <div class="section section-padding mt-n1">
    <div class="container">
      <div class="section-title text-center">
        <h2 class="main-title">How It Work?</h2>
      </div>
      <div class="row how_it_works mt-5">
        <div class="col-sm-4">
            <div class="step-mom first-col">
            <h4>Find your course</h4>
            <p>It has survived not only centurie also leap into electronics </p>
            
            </div>
            
        </div>
        <div class="col-sm-4 middle-card">
            <div class="step-mom second-col">
            <h4>Enroll</h4>
            <p>It has survived not only centurie also leap into electronics </p>
            
          
            </div>
            
        </div>
        <div class="col-sm-4" >
            <div class="step-mom third-col">
            <h4>Get Certified</h4>
            <p>It has survived not only centurie also leap into electronics </p>
            
            </div>
            
        </div>
      </div>
      <div class="row b-btn">
          <button class="btn">Get Stated</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeventhSection",
};
</script>

<style scoped>

.how_it_works{
  background: url("static/assets/images/howitworks.png");
  background-repeat: no-repeat;
  background-size: inherit;
  background-position: center;
  padding-top: 160px;
    padding-bottom: 160px;
}
.how {
  justify-content: center;
}

.btn{
    color: #fff;
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 20px 60px;
    margin-top: 50px;
    background: #150C21E5;
    width: 20%;
}

.step-mom h4{
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 500;
  font-size: 33px;
}



.step-mom p{
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
}
.b-btn{
    justify-content: center;
}

.btn:hover{
    color: #150C21E5;
    background: #fff;
    border: 2px solid #150C21E5;
}

.step-mom{
  text-align: center;
}
.first-col{
  padding-left: 80px;
  padding-right: 0px;

}

.second-col{
  padding-left: 40px;
  padding-right: 40px;

}
.third-col{
  padding-left: 0px;
  padding-right: 80px;

}



@media only screen and (max-width: 575px) {

.btn{
  width: inherit;
  margin-top: 10px
}

}
</style>
