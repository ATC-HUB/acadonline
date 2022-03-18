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
                                <span>Don't have an account yet? <a href="signup.html">Sign up</a></span>  
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

<style>

</style>