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

<style>

</style>