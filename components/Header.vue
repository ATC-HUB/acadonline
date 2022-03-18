<template>
    <div class="header-section">
            <div class="header-main">
                <div class="container">
                    <div class="header-main-wrapper">
                        <div class="header-logo">
                            <NuxtLink to="/"><img src="assets/images/logo.png"  class="desk-logo" alt="Logo" width="168"></NuxtLink>
                            <NuxtLink to="/"><img src="assets/images/Vector.png" class="mob-logo" alt="Logo"></NuxtLink>
                        </div>
                        <!-- Header Logo End -->
                        
                        <!-- Header Menu Start -->
                        <div class="header-menu d-none d-lg-block">
                            <ul class="nav-menu">
                                <div class="courses-search">
                                    <form action="#">
                                        <input type="text" placeholder="Search your courses">
                                        <button><i class="flaticon-magnifying-glass"></i></button>
                                    </form>
                                </div>
                            </ul>

                        </div>
                        <!-- Header Menu End -->

                        <!-- Header Sing In & Up Start -->
                        <div class="header-sign-in-up d-none d-lg-block">
                            <ul>
                                <li>
                                    <NuxtLink to="/allcourses">All Courses</NuxtLink>
                                </li>
                                <li><NuxtLink to="/contact">Contact us</NuxtLink></li>
                                <li><NuxtLink to="/login">Sign In</NuxtLink></li>
                                <li><NuxtLink to="/signup">Sign Up</NuxtLink></li>
                            </ul> 
                        </div>
                        <!-- Header Sing In & Up End -->

                        <!-- Header Mobile Toggle Start -->
                        <div class="header-toggle d-lg-none">
                            <a class="menu-toggle" href="javascript:void(0)">
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>
                        <!-- Header Mobile Toggle End -->

                    </div>
                    <!-- Header Main End -->

                </div>
            </div>
            <!-- Header Main End -->

        </div>
</template>

<script>
    export default{
        name: "Header"
    }
</script>

<style>

.mob-logo{
    width: 23px !important;
    height: 30px;
}
@media only screen and (max-width: 575px){
.sticky .header-main-wrapper {
    margin-left: -15px;
    margin-right: -15px;
    padding: 15px 15px;
}
.header-main-wrapper {
    margin-left: 0px;
    margin-right: 0px;
}
}
@media only screen and (min-width: 575px) {
  .sticky .header-main-wrapper .header-logo .mob-logo{
      display: none;
  }
  .mob-logo{
      display: none;
  }
}

@media only screen and (max-width: 575px) {
  .mob-logo{
      display: none;
  }

  .desk-logo{
      width: 80%;
  }

  .sticky .header-main-wrapper .header-logo .mob-logo{
      display: block;
  }
  .sticky .header-main-wrapper .header-logo .desk-logo{
      display: none;
  }
}
</style>