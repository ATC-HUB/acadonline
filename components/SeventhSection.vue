<template>
  <div class="section section-padding">
    <div class="container">
      <div class="section-title text-center">
        <h2 class="main-title">How It Work?</h2>
      </div>
      <div class="how_it_works mt-5">
        <div class="mom">
            <div class="step-mom first-col">
            <h4>Find your course</h4>
            <p>It has survived not only centurie also leap into electronics </p>
            
            </div>
            
        </div>
        <div class="mom">
            <div class="step-mom second-col">
            <h4>Enroll</h4>
            <p>It has survived not only centurie also leap into electronics </p>
            
          
            </div>
            
        </div>
        <div class="mom" >
            <div class="step-mom third-col">
            <h4>Get Certified</h4>
            <p>It has survived not only centurie also leap into electronics </p>
            
            </div>
            
        </div>
      </div>
      <div class="b-btn">
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

.main-title{
  font-size: 30px;
}


.how {
  justify-content: center;
}

.btn{
    color: #fff;
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 20px 90px;
    margin-top: 50px;
    background: #150C21E5;
}

.step-mom h4{
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 500;
  font-size: 33px;
  padding-left: 10px;
  padding-right: 10px;
}

.step-mom p{
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
}
.b-btn{
    justify-content: center;
    display: grid;
}

.btn:hover{
    color: #150C21E5;
    background: #fff;
    border: 2px solid #150C21E5;
}


.how_it_works{
  background: url("static/assets/images/howitworks.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding-bottom: 50px;
  display: flex;
  
}

.step-mom{
  text-align: center;
  height: 365px;
  padding-top: 100px;
}

.first-col{

  padding-left: 100px;
    padding-right: 10px;

}
.second-col{
  padding-left: 50px;
  padding-right: 50px;

}

.third-col{
  padding-left: 10px;
  padding-right: 100px;
}

.third-col h4{
  padding-right: 50px;
  padding-left: 50px;
}

@media only screen and (max-width: 992px) {
.how_it_works{
  display: grid;
  background: none;
  justify-content: center !important;

}

.section-padding{
  padding-top: 70px;
  margin-top: 70px;
}

.step-mom{
  text-align: center;
  height: 365px;
  padding-top: 80px;
}

.first-col{

  padding-left: 50px;
    padding-right: 20px;
      padding-top: 70px;

    background: url("static/assets/images/how1.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
    margin-bottom: 50px;


}
.second-col{
  padding-left: 30px;
    padding-right: 30px;
    padding-top: 100px;

  background: url("static/assets/images/how2.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
    margin-bottom: 50px;


}
.third-col{

  padding-left: 20px;
    padding-right: 20px;
    background: url("static/assets/images/how3.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

}

.third-col h4{
  padding-right: 60px;
  padding-left: 60px;
}
.mom{
  display: grid;
  justify-content: center;

}

.btn{
  width: inherit;
  margin-top: 10px
}

}

@media screen and (min-width: 425px) and (max-width: 764px) {
  .step-mom{
  text-align: center;
  height: 365px;
  padding-top: 80px;
}

.first-col{

  padding-left: 120px;
    padding-right: 90px;
      padding-top: 70px;

    background: url("static/assets/images/how1.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

}
.second-col{
  padding-left: 100px;
    padding-right: 100px;
    padding-top: 100px;
    margin-top: 50px;
    margin-bottom: 50px;
  background: url("static/assets/images/how2.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

}
.third-col{

  padding-left: 90px;
    padding-right: 90px;
    background: url("static/assets/images/how3.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

}

.third-col h4{
  padding-right: 30px;
  padding-left: 30px;
}
}

@media screen and (min-width: 765px) and (max-width: 992px) {
  .step-mom{
  text-align: center;
  height: 365px;
  padding-top: 80px;
}

.first-col{

  
      padding-top: 70px;

}

.first-col p{
  padding-left: 200px;
  padding-right: 200px;
}

.first-col h4{
  padding-left: 210px;
  padding-right: 210px;
}
.second-col{
    padding-top: 100px;
    margin-top: 50px;
    margin-bottom: 50px;
}
.second-col p{
  padding-left: 200px;
  padding-right: 200px;
}

.second-col h4{
  padding-left: 210px;
  padding-right: 210px;
}
.third-col p{
  padding-left: 200px;
  padding-right: 200px;
}

.third-col h4{
  padding-left: 210px;
  padding-right: 210px;
}
}
</style>
