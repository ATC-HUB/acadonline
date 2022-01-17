<template>
  <div class="section section-padding mt-n1">
    <div class="container">
      <div class="section-title shape-03 text-center">
        <h2 class="main-title">How It Work?</h2>
      </div>
      <div class="row mt-5">
        <div class="col-1"></div>
        <div class="col-10 how">
          <img src="assets/images/howitworks.png" />
        </div>
        <div class="col-1"></div>
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

.b-btn{
    justify-content: center;
}

.btn:hover{
    color: #150C21E5;
    background: #fff;
    border: 2px solid #150C21E5;
}
</style>
