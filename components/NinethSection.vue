<template>
    <div class="section">
        <div class="container">
            <div class="row">
            <div class="col-sm-6 f-section">
                <h2 class="main-title">Do you have any issue finding a course?</h2>
                <div class="search_course">
                    <form action="#" class="search_f">
                        <input type="text" placeholder="Search your course here">
                        <button><i class="flaticon-magnifying-glass"></i></button>
                    </form>
                </div>
            </div>
            <div class="col-sm-6 img-section">
                <img src="assets/images/sm.png" class="img2">
            </div>
            </div>
        </div>
        </div>
</template>

<script> 
export default{
    name: "NinethSection"
}
</script>

<style scoped>
.section{
    position: relative;
    overflow: hidden;
}
.container{
  background: #1207ab;
    padding: 50px 50px;
}

.f-section{
    justify-content: start;
    display: block;
}
.s-section input, .s-section button{
    background-color: #1207ab;
    border-color: #fff;
    color: #fff;
}

.s-section button{
    padding-top: 5px;
}
.s-section input{
        height: 60px;
}

.s-section input::placeholder{
    color: #fff;
}

.s-section{
    margin-top: 90px;
    width: 450px;

}

.img-section{
    display: flex;
    justify-content: center;
}

.img-section .img2{
    position: absolute;
    right: -70px;
    top: -30px;
}

.main-title{
    color: #46E6E4;
    font-size: 50px;
    font-weight: 600;
    line-height: 60px;
}


.search_f{
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 1px solid #fff;
    border-radius: 5px;
    height: 60px;
    padding: 0px 20px;
    margin-top: 50px;
}

.search_f, .search_f input, .search_f button{
    background-color: #1207ab;

}

.search_f input, .search_f button{
    border: none;
    color: #fff;
}

.search_f input[type="text"] {
    color: #fff;
    outline: none;
    width: 100%;
}

.search_f input::placeholder{
    color: #fff;
}

@media only screen and (max-width: 575px) {
  .img-section{
      display: none;
  }

  .main-title{
    font-size: 30px;
    text-align: center;
    font-weight: 500;
    line-height: 45px;
    padding-top: 0px;


}
  }
</style>
