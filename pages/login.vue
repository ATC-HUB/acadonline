<template>
<div class="main-wrapper">
    <Header />
    <MobileHeader />
    <div class="section">
            <div class="container">

                <!-- Contact Wrapper Start -->
                <div class="contact-wrapper">
                    <div class="row align-items-center">
                        <div class="signup-form">
                            <form action="/examples/actions/confirmation.php" method="post">
                                <div class="signin-head">
                                  <h4 class="title" style="font-size: 25px;">LOGIN </h4>
                                <span>Don't have an account yet? <NuxtLink to="/signup">Sign up</NuxtLink></span>  
                                </div>
                                
                                <div class="socials mt-5">
                                  <a href="#" class="btn-face m-b-20">
                                    <img src="assets\images\CONTINUE WITH Google.png" alt="GOOGLE">
                                </a>
            
                                <a href="#" class="btn-face m-b-20">
                                    <img src="assets\images\CONTINUE WITH Facebook.png" alt="GOOGLE">

                                </a> 
                                </div>
                                
                                <h2 style="font-size: 15px; margin-top: 50px">OR</h2>
                                
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" name="email" placeholder="Email" required="required">
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control" name="password" placeholder="Password" required="required">
                                </div>
                                
                                <div class="form-group">
                                    <button type="submit" class="btn signup-btn">LOGIN</button>
                                </div>
                                <div class="text-left mt-5" style="margin-top: -20px;"> <span type="button" style="color: #1207ab" data-bs-toggle="modal" data-bs-target="#exampleModal">Forgot password?</span></div>
                            </form>


  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" style="justify-content: center;">
      <div class="modal-content" style="width: 70% !important; border-radius: 30px;">
        
          <h4 class="mt-5" style="text-align: center !important;">FORGOT PASSWORD</h4>

        <div class="modal-body">
            <form>
                <div class="mb-3 mt-3">
                  <label for="recipient-name" class="col-form-label">Email</label>
                  <input type="text" placeholder="Enter your email" class="form-control" id="recipient-name">
                </div>
                <button type="button" class="btn btn-primary continue mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal1">Continue</button>

              </form>
        </div>
      </div>
    </div>
  </div>


  <button type="button" class="btn btn-primary continue mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal1">Confirm</button>
  <button type="button" class="btn btn-primary continue mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal2">Successful</button>


  <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" style="justify-content: center;">
      <div class="modal-content" style="width: 70% !important; border-radius: 30px;">
        
          <h5 class="mt-5" style="text-align: center !important;">CREATE NEW PASSWORD</h5>

        <div class="modal-body">
            <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Create new password</label>
                  <input type="text" placeholder="Enter new password" class="form-control" id="recipient-name">
                </div>
                <div class="mb-3 mt-5">
                    <label for="recipient-name" class="col-form-label">Confirm new password</label>
                    <input type="text" placeholder="Confirm password" class="form-control" id="recipient-name">
                  </div>
                <button type="button" class="btn btn-primary continue mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal2">Confirm</button>

              </form>
        </div>
      </div>
    </div>
  </div>


  
  <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" style="justify-content: center;">
      <div class="modal-content" style="width: 70% !important; border-radius: 30px;">
        
          <h5 class="mt-5" style="text-align: center !important;">Password changed <br> successfully</h5>

        <div class="modal-body">
            <div class="markss">
                <img src="assets\images\Group 144.png">
            </div>
            <div class="success">
            <button type="button" class="btn btn-primary continue2 mt-5">Continue to Dashboard</button>
            </div>

        </div>
      </div>
    </div>
  </div>
                        </div>
                        
                    </div>
                </div>
                <!-- Contact Wrapper End -->

            </div>
        </div>
    
    <Footer />
    <Backtotop />
  </div>
    
</template>

<script>
    export default{
        name: "LoginPage"
    }

</script>

<style scoped>

.section{
  margin-top: 120px;
}
.form-control {
	background: #F5F7FA;
border: 1px solid #DFDFDF;
box-sizing: border-box;
border-radius: 5px;
height: 50px;
padding: 0 1rem !important;
font-size: 15px;
}
.form-control:focus {
	border-color: #1207ab;
}
.form-control, .btn {        
	border-radius: 3px;
}
.signup-form {
	width: 620px;
	margin: 0 auto;
  	font-size: 15px;
}
.signup-form h2 {
	color: #636363;
	margin: 0 0 15px;
	position: relative;
	text-align: center;
}
.signup-form h2:before, .signup-form h2:after {
	content: "";
	height: 2px;
	width: 30%;
	background: #d4d4d4;
	position: absolute;
	top: 50%;
	z-index: 2;
}	
.signup-form h2:before {
	left: 0;
}
.signup-form h2:after {
	right: 0;
}
.signup-form .hint-text {
	color: #999;
	margin-bottom: 30px;
	text-align: center;
}
.signup-form form {
	color: #999;
	margin-bottom: 15px;
	padding: 30px;
}
.signup-form .form-group {
	margin-bottom: 20px;
}
.signup-form input[type="checkbox"] {
	margin-top: 1px;
	zoom:1.5;
}
.signup-form .btn {        
	font-size: 10px;
	font-weight: bold;		
	min-width: 140px;
	outline: none !important;
}
.signup-form .row div:first-child {
	padding-right: 10px;
}
.signup-form .row div:last-child {
	padding-left: 10px;
}    	
.signup-form a {
	color: #fff;
	text-decoration: underline;
}
.signup-form a:hover {
	text-decoration: none;
}
.signup-form form a {
	color: #1207ab;
	text-decoration: none;
}	
.signup-form form a:hover {
	text-decoration: underline;
}  

.btn-face,
.btn-google {
  font-size: 18px;
  line-height: 1.2;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: calc((100% - 20px) / 2);
  height: 50px;
  border-radius: 5px;
  box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
  -ms-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  position: relative;
  z-index: 1;
}

.btn-face {
  color: #fff;
  background-color: #F5F7FA;
}



.btn-google {
  color: #555555;
  background-color: #F5F7FA;
}

.btn-google img {
  width: 30px;
  margin-right: 15px;
  padding-bottom: 3px;
}

.btn-face:hover:before,
.btn-google:hover:before {
  opacity: 1;
}

.btn-face:hover,
.btn-google:hover {
  color: #fff;
  box-shadow: 0 5px 5px 0px rgba(0, 0, 0, 0.2);
}

.socials{
	justify-content: space-between;
    position: relative;
    display: flex;
}

.signup-btn{
	font-size: 15px !important; 
	width: 100%; 
	color: #fff; 
	background-color: #1207ab;
}

.signup-btn:hover{
	color: #1207ab; 
	background-color: #fff;
	border: 1px solid #1207ab;
}


.signin-head{
	display: flex;
    justify-content: space-between;
}


.continue{
	width: 100%; 
	color: #fff; 
	background-color: #1207ab;
	font-size: 15px !important;
}

.continue:hover{
	color: #1207ab; 
	background-color: #fff;
	border: 1px solid #1207ab;
}


.markss{
	display: flex;
    justify-content: center;
    margin-bottom: 25px;
}


.continue2{
	width: 70%; 
	color: #fff; 
	background-color: #1207ab;
	font-size: 15px !important;
}

.continue2:hover{
	color: #1207ab; 
	background-color: #fff;
	border: 1px solid #1207ab;
}

.success{
	display: flex;
	justify-content: center;
}
</style>