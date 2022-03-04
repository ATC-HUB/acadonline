<template>
  <div class="section section-padding-02">
    <div class="container">
      <div class="row top-texts">
        <h4>Why learn with Us.</h4>
        <p>
          You are very close to becoming the person of your dream by taking any
          of our online/offline tech track courses
        </p>
      </div>

      <div class="row mom">
        <div class="col-lg-4">
            <div class="step-mom first-col">
                <img src="assets/images/ico1.png" class="imgs">
            <h4>Easy learning</h4>
            <p>You are very close to becoming the person of your dream by taking any of our online/offline tech track </p>
            
            <img src="assets/images/ico2.png" class="mt-4 imgs">
            <h4>Life Projects</h4>
            <p>You are very close to becoming the person of your dream by taking any of our online/offline tech track </p>
        
            </div>
            
        </div>
        <div class="col-lg-4 middle-card">
            <div class="step-mom second-col">
                <img src="assets/images/ico3.png" class="imgs">
            <h4>In-person learning</h4>
            <p>You are very close to becoming the person of your dream by taking any of our online/offline tech track </p>
            
            <img src="assets/images/ico4.png" class="mt-4 imgs">
            <h4>Trusted certifications</h4>
            <p>You are very close to becoming the person of your dream by taking any of our online/offline tech track </p>
        
            </div>
            
        </div>
        <div class="col-lg-4" >
            <div class="step-mom third-col">
                <img src="assets/images/ico5.png" class="imgs">
            <h4>Tracking performance</h4>
            <p>You are very close to becoming the person of your dream by taking any of our online/offline tech track </p>
            
            <img src="assets/images/ico6.png" class="mt-4 imgs">
            <h4>Students’ support</h4>
            <p>You are very close to becoming the person of your dream by taking any of our online/offline tech track </p>
        
            </div>
            
        </div>
      </div>
      <div class="b-btn mt-4">
          <button class="btn">Get Stated</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FifthSection",
};
</script>
<style scoped>

.b-btn{
    justify-content: center;
    display: grid;
}
.middle-card{
  border-left: 1px solid #C4C4C4;
  border-right: 1px solid #C4C4C4;
}
.mom{
  display: flex;
  justify-content: space-around;
}


.first-col{
  padding-left: 0px;
  padding-right: 30px;

}

.second-col{
  padding-left: 30px;
  padding-right: 30px;

}
.third-col{
  padding-left: 30px;
  padding-right: 0px;

}

.step-mom h4{
  padding-top: 20px;
  font-weight: 500;
  font-size: 25px;
}



.step-mom p{
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
}
.top-texts h4{
    padding: 0px 180px;
    font-size: 40px;
    font-weight: 500;
    text-align: center;
}

.top-texts p{
    font-size: 20px;
    font-weight: 300;
    line-height: 35px;
    margin-top: 20px;
    padding: 0px 180px;
    text-align: center;
    margin-bottom: 50px;
}

.btn{
    color: #fff;
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 20px 60px;
    margin-top: 50px;
    background: #150C21E5;
}


.btn:hover{
    color: #150C21E5;
    background: #fff;
    border: 2px solid #150C21E5;
}

@media only screen and (max-width: 992px) {
.top-texts p{
  padding: 0px 15px;
  font-size: 16px;
  line-height: 1.7;
  font-weight: 400;
  margin-bottom: 0px;
  padding-bottom: 0px;

}

.top-texts h4{
    margin-top: 0px;
  padding: 0px 15px;
  font-size: 25px;
  font-weight: 600;
}

.mom{
  display: flex;
  justify-content: center;
  text-align: center;
}

.step-mom img h4 p{
  text-align: center;
  justify-content: center;
  display: flex;
}

.first-col{
  padding-left: 0px;
  padding-right: 0px;
}
.second-col{
  padding-left: 0px;
  padding-right: 0px;
}
.third-col{
  padding-left: 0px;
  padding-right: 0px;
}

.middle-card{
  border: none;
}

.btn{
  width: inherit;
  margin-top: 10px
}

.imgs{
  margin-top: 50px;
}
}
</style>
