<template>
    <div class="section download-section">
        <div class="container">
            <div class="row">
            <div class="col-sm-6 f-section">
                <h2 class="main-title">Do you have any issue finding a course?</h2>
                <div class="courses-search s-section">
                    <form action="#" style="justify-content: center;">
                        <input type="text" placeholder="Search your course">
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
}

.main-title{
    color: #46E6E4;
    font-size: 50px;
    font-weight: 600;
    line-height: 60px;
    padding-top: 50px;
}

.download-section{
    padding-top: 80px;
    padding-bottom: 80px;}
</style>
