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
                                <h4 class="title" style="font-size: 25px;">SIGN UP</h4>
                                <div class="socials mt-5">
                                  <a href="#" class="btn-face m-b-20">
                                    <img src="assets\images\SIGN UP WITH Google.png" alt="GOOGLE">
                                </a>
            
                                <a href="#" class="btn-face m-b-20">
                                    <img src="assets\images\SIGN UP WITH Facebook.png" alt="GOOGLE">
                                </a> 
                                </div>
                                
                                <h2 style="font-size: 15px; margin-top: 50px">OR</h2>
                                <div class="form-group">
                                    <label>Full Name</label>
                                    <input type="text" class="form-control" name="first_name" placeholder="Full Name" required="required">
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" name="email" placeholder="Email" required="required">
                                </div>
                                <div class="form-group">
                                    <label>Create Password</label>
                                    <input type="password" class="form-control" name="password" placeholder="Password" required="required">
                                </div>
                                <div class="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required">
                                </div>        
                                <div class="form-group">
                                    <label class="form-check-label">
                                    <input type="checkbox" required="required"> &nbsp; &nbsp;I accept the <a href="#">Terms of Use &nbsp;</a> &amp; <a href="#">&nbsp; Privacy Policy</a></label>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn signup-btn">SIGN UP</button>
                                </div>
                            </form>
                            <div class="text-center" style="margin-top: -20px;">Already have an account? <a href="signin.html" style="color: #1207ab">Login</a></div>
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
        name: "SignupPage"
    }

</script>

<style scope>

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