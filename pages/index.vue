<template>
     <div class="main-wrapper">
        <!-- Header Section Start -->
        <div class="header-section">

            <!-- Header Main Start -->
            <div class="header-main">
                <div class="container">

                    <!-- Header Main Start -->
                    <div class="header-main-wrapper">

                        <!-- Header Logo Start -->
                        <div class="header-logo">
                            <a href="index.html"><img src="assets/images/logo.png" alt="Logo" width="168" height="60"></a>
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
                                    <a href="#all_courses">All Courses</a>
                                </li>
                            
                                <li><nuxt-link to="/contact">Contact us</nuxt-link></li>
                                <li><a class="sign-in" href="signin.html">Sign In</a></li>
                                <li><a class="sign-up" href="signup.html">Sign Up</a></li>
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
        <!-- Header Section End -->

        <!-- Mobile Menu Start -->
        <div class="mobile-menu">

            <!-- Menu Close Start -->
            <a class="menu-close" href="javascript:void(0)">
                <i class="icofont-close-line"></i>
            </a>
            <!-- Menu Close End -->

            <!-- Mobile Menu Start -->
            <div class="mobile-menu-items">
                <ul class="nav-menu">
                    <li><a href="#footer">Sign In</a></li>
                    <li><a href="#">All Courses</a></li>
                    <li><a href="contact.html">Contact us</a></li>
                </ul>
            </div>
            <!-- Mobile Menu End -->
            

        </div>
        <!-- Mobile Menu End -->

        <!-- Overlay Start -->
        <div class="overlay"></div>
        <!-- Overlay End -->

        <!-- Slider Start -->
        <div class="section slider-section">

            <!-- Slider Shape Start -->
            <!-- <div class="slider-shape">
                <img class="shape-1 animation-round" src="assets/images/shape/shape-8.png" alt="Shape">
            </div> -->
            <!-- Slider Shape End -->

            <div class="container">

                <!-- Slider Content Start -->
                <div class="slider-content">
                    <h2 class="main-title">It's time to learn and acquire digital Tech skills.</h2>
                    <br>
                    <h5 class="sub-title">Acquire the 21st century skills so as to improve your relevance and employability in this ever changing world.</h5>
                    <!-- <p>It has survived not only five centuries but also the leap into electronic typesetting.</p> -->
                    <a class="btn btn-hover-dark" href="#">Get Started</a>
                </div>
                <!-- Slider Content End -->

            </div>
            
            <!-- Slider Images Start -->
            <div class="slider-images">
                <div class="images">
                    
                    <img src="assets/images/slider/slider-1.png" alt="Slider" class="img1">
                    <img src="assets/images/slider/slider-2.png" alt="Slider" class="img2">
                    
                </div>
                <div class="app-shape-1">
                        <img src="assets/images/circleBackground.svg" alt="Slider" class="img-fluid">

                    </div>

                
            </div>
            <!-- Slider Images End -->

        </div>
        <!-- Slider End -->

        
        
        <!-- All Courses Start -->
        <div class="section section-padding-02" id="all_courses">
            <div class="container">

                <!-- All Courses Top Start -->
                <div class="courses-top">

                    <!-- Section Title Start -->
                    <div class="section-title shape-01">
                        <h2 class="main-title">Top <span>Courses</span> </h2>
                    </div>
                    <!-- Section Title End -->


                </div>
                <!-- All Courses Top End -->

                <!-- All Courses Tabs Menu Start -->
                <div class="courses-tabs-menu courses-active">
                    <div class="swiper-container">
                        <ul class="swiper-wrapper nav">
                            <li class="swiper-slide"><button class="active" data-bs-toggle="tab" data-bs-target="#tabs1">UI/UX Design</button></li>
                            <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs2">Development</button></li>
                            <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs3">Data Science</button></li>
                            <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs4">Business</button></li>
                            <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs5">Financial</button></li>
                            <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs6">Marketing</button></li>
                            <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs7">Design</button></li>
                        </ul>
                    </div>

                    <!-- Add Pagination -->
                    <div class="swiper-button-next"><i class="icofont-rounded-right"></i></div>
                    <div class="swiper-button-prev"><i class="icofont-rounded-left"></i></div>
                </div>
                <!-- All Courses Tabs Menu End -->

                <!-- All Courses tab content Start -->
                <div class="tab-content courses-tab-content">
                    <div class="tab-pane fade show active" id="tabs1">

                        <!-- All Courses Wrapper Start -->
                        <div class="courses-wrapper">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-01.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                            

                                            <h4 class="title"><a href="courses-details.html">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-02.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                            

                                            <h4 class="title"><a href="courses-details.html">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$420.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-03.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                            <h4 class="title"><a href="courses-details.html">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$295.00</span>
                                                    <span class="old-parice">$340.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-04.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                         
                                            <h4 class="title"><a href="courses-details.html">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">Free</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-05.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                         
                                            <h4 class="title"><a href="courses-details.html">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$136.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-06.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                            
                                            <h4 class="title"><a href="courses-details.html">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$237.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                            </div>
                        </div>
                        <!-- All Courses Wrapper End -->

                    </div>
                    <div class="tab-pane fade" id="tabs2">

                        <!-- All Courses Wrapper Start -->
                        <div class="courses-wrapper">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-02.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                       
                                            <h4 class="title"><a href="courses-details.html">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-05.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                           
                                            <h4 class="title"><a href="courses-details.html">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$420.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-01.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                           
                                            <h4 class="title"><a href="courses-details.html">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$295.00</span>
                                                    <span class="old-parice">$340.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-04.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                            
                                            <h4 class="title"><a href="courses-details.html">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">Free</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-06.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                        
                                            <h4 class="title"><a href="courses-details.html">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$136.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-03.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                         
                                            <h4 class="title"><a href="courses-details.html">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$237.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                            </div>
                        </div>
                        <!-- All Courses Wrapper End -->

                    </div>
                    <div class="tab-pane fade" id="tabs3">

                        <!-- All Courses Wrapper Start -->
                        <div class="courses-wrapper">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-05.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                        
                                            <h4 class="title"><a href="courses-details.html">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-06.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">                                           
                                            <h4 class="title"><a href="courses-details.html">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$420.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-03.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                           
                                            <h4 class="title"><a href="courses-details.html">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$295.00</span>
                                                    <span class="old-parice">$340.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-01.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                           
                                            <h4 class="title"><a href="courses-details.html">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">Free</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-02.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                         
                                            <h4 class="title"><a href="courses-details.html">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$136.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-04.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">

                                            <h4 class="title"><a href="courses-details.html">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$237.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                            </div>
                        </div>
                        <!-- All Courses Wrapper End -->

                    </div>
                    <div class="tab-pane fade" id="tabs4">

                        <!-- All Courses Wrapper Start -->
                        <div class="courses-wrapper">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-06.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                          
                                            <h4 class="title"><a href="courses-details.html">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-05.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-02.jpg" alt="Author"></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Pamela Foster</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="courses-details.html">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$420.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-04.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-03.jpg" alt="Author"></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Rose Simmons</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Science</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="courses-details.html">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$295.00</span>
                                                    <span class="old-parice">$340.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-03.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-04.jpg" alt="Author"></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Finance</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="courses-details.html">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">Free</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-02.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-05.jpg" alt="Author"></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Marketing</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="courses-details.html">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$136.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-01.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                            <div class="courses-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-06.jpg" alt="Author"></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">Design</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="courses-details.html">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$237.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                            </div>
                        </div>
                        <!-- All Courses Wrapper End -->

                    </div>
                    <div class="tab-pane fade" id="tabs5">

                        <!-- All Courses Wrapper Start -->
                        <div class="courses-wrapper">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-03.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                            
                                            <h4 class="title"><a href="courses-details.html">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-02.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                          
                                            <h4 class="title"><a href="courses-details.html">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$420.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-01.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                           
                                            <h4 class="title"><a href="courses-details.html">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$295.00</span>
                                                    <span class="old-parice">$340.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-06.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                            
                                            <h4 class="title"><a href="courses-details.html">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">Free</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-05.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                           
                                            <h4 class="title"><a href="courses-details.html">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$136.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-04.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                          
                                            <h4 class="title"><a href="courses-details.html">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$237.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                            </div>
                        </div>
                        <!-- All Courses Wrapper End -->

                    </div>
                    <div class="tab-pane fade" id="tabs6">

                        <!-- All Courses Wrapper Start -->
                        <div class="courses-wrapper">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-03.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                         
                                            <h4 class="title"><a href="courses-details.html">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-05.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                           
                                            <h4 class="title"><a href="courses-details.html">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$420.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-01.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                            
                                            <h4 class="title"><a href="courses-details.html">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$295.00</span>
                                                    <span class="old-parice">$340.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-04.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                          
                                            <h4 class="title"><a href="courses-details.html">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">Free</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-06.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                        
                                            <h4 class="title"><a href="courses-details.html">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$136.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-02.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                          
                                            <h4 class="title"><a href="courses-details.html">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$237.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                            </div>
                        </div>
                        <!-- All Courses Wrapper End -->

                    </div>
                    <div class="tab-pane fade" id="tabs7">

                        <!-- All Courses Wrapper Start -->
                        <div class="courses-wrapper">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-04.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                            
                                            <h4 class="title"><a href="courses-details.html">Data Science and Machine Learning with Python - Hands On!</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$385.00</span>
                                                    <span class="old-parice">$440.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-02.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                          
                                            <h4 class="title"><a href="courses-details.html">Create Amazing Color Schemes for Your UX Design Projects</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$420.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-06.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                          
                                            <h4 class="title"><a href="courses-details.html">Culture & Leadership: Strategies for a Successful Business</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$295.00</span>
                                                    <span class="old-parice">$340.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-05.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                     
                                            <h4 class="title"><a href="courses-details.html">Finance Series: Learn to Budget and Calculate your Net Worth.</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">Free</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-01.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                         
                                            <h4 class="title"><a href="courses-details.html">Build Brand Into Marketing: Tackling the New Marketing Landscape</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$136.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <!-- Single Courses Start -->
                                    <div class="single-courses">
                                        <div class="courses-images">
                                            <a href="courses-details.html"><img src="assets/images/courses/courses-03.jpg" alt="Courses"></a>
                                        </div>
                                        <div class="courses-content">
                                            
                                            <h4 class="title"><a href="courses-details.html">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</a></h4>
                                            <div class="courses-meta">
                                                <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i class="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div class="courses-price-review">
                                                <div class="courses-price">
                                                    <span class="sale-parice">$237.00</span>
                                                </div>
                                                <div class="courses-review">
                                                    <span class="rating-count">4.9</span>
                                                    <span class="rating-star">
															<span class="rating-bar" style="width: 80%;"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Courses End -->
                                </div>
                            </div>
                        </div>
                        <!-- All Courses Wrapper End -->

                    </div>
                </div>
                <!-- All Courses tab content End -->
                
                

            </div>
            
            <!-- All Courses BUtton Start -->
            <div class="courses-btn text-center container">
                <!-- <a href="courses.html" class="btn btn-secondary btn-hover-primary">Pagination</a> -->
                    <nav aria-label="Page navigation example">
                        <ul class="pagination btn-hover-primary" style="display: inline-flex !important;">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            
        </div>


        <!-- All Courses BUtton End -->
           
         
        <!-- All Courses End -->


        <!-- Brand Logo Start -->
        <div class="section section-padding-02" style="background-color: #f5f5f5; margin-top: 60px;">
            <div class="container added">

                <!-- Brand Logo Wrapper Start -->
                <div class="brand-logo-wrapper">
                   
            
                    <!-- Section Title Start -->
                    <div class="section-title shape-03 text-center">
                        <h2 class="main-title">Accreditation</h2>
                    </div>
                    <!-- Section Title End -->

                    <!-- Brand Logo Start -->
                    <div class="brand-logo brand-active">
                        <div class="swiper-container brands">
                            <div class="swiper-wrapper">

                                <!-- Single Brand Start -->
                                <div class="single-brand swiper-slide">
                                    <img src="assets/images/brand/brand-01.png" alt="Brand">
                                </div>
                                <!-- Single Brand End -->

                                <!-- Single Brand Start -->
                                <div class="single-brand swiper-slide">
                                    <img src="assets/images/brand/brand-02.png" alt="Brand">
                                </div>
                                <!-- Single Brand End -->

                                <!-- Single Brand Start -->
                                <div class="single-brand swiper-slide">
                                    <img src="assets/images/brand/brand-03.png" alt="Brand">
                                </div>
                                <!-- Single Brand End -->

                                <!-- Single Brand Start -->
                                <div class="single-brand swiper-slide">
                                    <img src="assets/images/brand/brand-04.png" alt="Brand">
                                </div>
                                <!-- Single Brand End -->

                                <!-- Single Brand Start -->
                                <div class="single-brand swiper-slide">
                                    <img src="assets/images/brand/brand-05.png" alt="Brand">
                                </div>
                                <!-- Single Brand End -->

                                <!-- Single Brand Start -->
                                <div class="single-brand swiper-slide">
                                    <img src="assets/images/brand/brand-06.png" alt="Brand">
                                </div>
                                <!-- Single Brand End -->

                            </div>
                        </div>
                    </div>
                    <!-- Brand Logo End -->

                </div>
                <!-- Brand Logo Wrapper End -->

            </div>
        </div>
        <!-- Brand Logo End -->
        <!-- How It Work End -->
        <div class="section section-padding mt-n1" id="sign_up">
            <div class="container">

                <!-- Section Title Start -->
                <div class="section-title shape-03 text-center">
                    <!-- <h5 class="sub-title">Over 1,235+ Course</h5> -->
                    <h2 class="main-title">How It <span> Work?</span></h2>
                </div>
                <!-- Section Title End -->

                <!-- How it Work Wrapper Start -->
                <div class="how-it-work-wrapper">

                    <!-- Single Work Start -->
                    <div class="single-work">

                        <div class="work-icon">
                            <i class="flaticon-transparency"></i>
                        </div>
                        <div class="work-content">
                            <h3 class="title">Find Your Course</h3>
                            <p>It has survived not only centurie also leap into electronic.</p>
                        </div>
                    </div>
                    <!-- Single Work End -->

                    

                    <!-- Single Work Start -->
                    <div class="single-work">

                        <div class="work-icon">
                            <i class="flaticon-forms"></i>
                        </div>
                        <div class="work-content">
                            <h3 class="title">Enroll</h3>
                            <p>It has survived not only centurie also leap into electronic.</p>
                        </div>
                    </div>
                    <!-- Single Work End -->

              

                    <!-- Single Work Start -->
                    <div class="single-work">

                        <div class="work-icon">
                            <i class="flaticon-badge"></i>
                        </div>
                        <div class="work-content">
                            <h3 class="title">Get Certificate</h3>
                            <p>It has survived not only centurie also leap into electronic.</p>
                        </div>
                    </div>
                    <!-- Single Work End -->

                </div>

            </div>
        </div>
        <!-- How It Work End -->

        <!-- Download App Start -->
        <div class="section section-padding download-section">

            <div class="app-shape-1"></div>
            <div class="app-shape-2"></div>
            <div class="app-shape-3"></div>
            <div class="app-shape-4"></div>

            <h2 class="main-title" style="color: white; font: size 14px; text-align: center; padding-bottom: 18px;">Looking for the course that interest you?</h2>

            <div class="container search_container">

            <div class="courses-search">
                <form action="#" style="justify-content: center;">
                    <input type="text" placeholder="Search your course">
                    <button><i class="flaticon-magnifying-glass"></i></button>
                </form>
            </div>
            </div>

            <!-- <div class="container">
                <div class="row">
                    
                         
                    
                </div>
                    <div class="row text-center">
                        <div class="col">
                        <div class="counter">
                  <i class="fa fa-code fa-2x"></i>
                  <h2 class="timer count-title count-number" data-to="100" data-speed="1500"></h2>
                   <p class="count-text ">Trained</p>
                </div>
                        </div>
                          <div class="col">
                           <div class="counter">
                  <i class="fa fa-coffee fa-2x"></i>
                  <h2 class="timer count-title count-number" data-to="1700" data-speed="1500"></h2>
                  <p class="count-text ">Certified</p>
                </div>
                          </div>
                          <div class="col">
                              <div class="counter">
                  <i class="fa fa-lightbulb-o fa-2x"></i>
                  <h2 class="timer count-title count-number" data-to="11900" data-speed="1500"></h2>
                  <p class="count-text ">Countries</p>
                </div></div>
                          <div class="col">
                          <div class="counter">
                  <i class="fa fa-bug fa-2x"></i>
                  <h2 class="timer count-title count-number" data-to="157" data-speed="1500"></h2>
                  <p class="count-text ">Courses</p>
                </div>
                          </div>
                     </div>
            </div> -->
        </div>
        <!-- Download App End -->

        <!-- Testimonial End -->
        <div class="section section-padding-02 mt-n1 mb-5">
            <div class="container">

                <!-- Section Title Start -->
                <div class="section-title shape-03 text-center">
                    <h2 class="main-title"> <span> Student Testimonial</span></h2>

                    <h5 class="sub-title" style="color: black;">Feedback From Student</h5>
                </div>
                <!-- Section Title End -->

                <!-- Testimonial Wrapper End -->
                <div class="testimonial-wrapper testimonial-active">
                    <div class="swiper-container testimonial">
                        <div class="swiper-wrapper">
                            <!-- Single Testimonial Start -->
                            <div class="single-testimonial swiper-slide">
                                <div class="testimonial-author">
                                    <div class="author-thumb">
                                        <img src="assets/images/author/author-06.jpg" alt="Author">

                                    </div>

                                    
                                </div>
                                <div class="testimonial-content">
                                    <p>Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not five centuries but also the leap into electronic.</p>
                                    <h4 class="name">Sara Alexander</h4>
                                    <span class="designation">Product Designer, USA</span>
                                </div>
                                <span class="rating-star">
                                    <span class="rating-bar" style="width: 80%;"></span>
                            </span>
                            </div>
                            <!-- Single Testimonial End -->

                            <!-- Single Testimonial Start -->
                            <div class="single-testimonial swiper-slide">
                                <div class="testimonial-author">
                                    <div class="author-thumb">
                                        <img src="assets/images/author/author-07.jpg" alt="Author">

                                    </div>

                                    
                                </div>
                                <div class="testimonial-content">
                                    <p>Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not five centuries but also the leap into electronic.</p>
                                    <h4 class="name">Sara Alexander</h4>
                                    <span class="designation">Product Designer, USA</span>
                                </div>
                                <span class="rating-star">
                                    <span class="rating-bar" style="width: 80%;"></span>
                            </span>
                            </div>
                            <!-- Single Testimonial End -->

                            <!-- Single Testimonial Start -->
                            <div class="single-testimonial swiper-slide">
                                <div class="testimonial-author">
                                    <div class="author-thumb">
                                        <img src="assets/images/author/author-09.jpg" alt="Author">

                                    </div>

                                    
                                </div>
                                <div class="testimonial-content">
                                    <p>Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not five centuries but also the leap into electronic.</p>
                                    <h4 class="name">Sara Alexander</h4>
                                    <span class="designation">Product Designer, USA</span>
                                </div>
                                <span class="rating-star">
                                    <span class="rating-bar" style="width: 80%;"></span>
                            </span>
                            </div>
                            <!-- Single Testimonial End -->

                             <!-- Single Testimonial Start -->
                             <div class="single-testimonial swiper-slide">
                                <div class="testimonial-author">
                                    <div class="author-thumb">
                                        <img src="assets/images/author/author-06.jpg" alt="Author">

                                    </div>

                                    
                                </div>
                                <div class="testimonial-content">
                                    <p>Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not five centuries but also the leap into electronic.</p>
                                    <h4 class="name">Sara Alexander</h4>
                                    <span class="designation">Product Designer, USA</span>
                                </div>
                                <span class="rating-star">
                                    <span class="rating-bar" style="width: 80%;"></span>
                            </span>
                            </div>
                            <!-- Single Testimonial End -->

                            <!-- Single Testimonial Start -->
                            <div class="single-testimonial swiper-slide">
                                <div class="testimonial-author">
                                    <div class="author-thumb">
                                        <img src="assets/images/author/author-07.jpg" alt="Author">

                                    </div>

                                    
                                </div>
                                <div class="testimonial-content">
                                    <p>Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not five centuries but also the leap into electronic.</p>
                                    <h4 class="name">Sara Alexander</h4>
                                    <span class="designation">Product Designer, USA</span>
                                </div>
                                <span class="rating-star">
                                    <span class="rating-bar" style="width: 80%;"></span>
                            </span>
                            </div>
                            <!-- Single Testimonial End -->

                            <!-- Single Testimonial Start -->
                            <div class="single-testimonial swiper-slide">
                                <div class="testimonial-author">
                                    <div class="author-thumb">
                                        <img src="assets/images/author/author-09.jpg" alt="Author">

                                    </div>

                                    
                                </div>
                                <div class="testimonial-content">
                                    <p>Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not five centuries but also the leap into electronic.</p>
                                    <h4 class="name">Sara Alexander</h4>
                                    <span class="designation">Product Designer, USA</span>
                                </div>
                                <span class="rating-star">
                                    <span class="rating-bar" style="width: 80%;"></span>
                            </span>
                            </div>
                            <!-- Single Testimonial End -->
                        </div>

                        <!-- Add Pagination -->
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                <!-- Testimonial Wrapper End -->

            </div>
        </div>
        <!-- Testimonial End -->

        <!-- Footer Start  -->
        <div class="section footer-section mt-5" id="footer">
            <div class="footer-widget-section">
                <div class="container">
                    <div class="row">
                        <div class="category col-lg-4 col-md-4 order-md-2 order-lg-2">
                                <div class="footer-widget">
                                    <h4 class="footer-widget-title">Category</h4>

                                    <ul class="widget-link">
                                        <li><a href="#">Digital Courses</a></li>
                                        <li><a href="#">Programming</a></li>
                                        <li><a href="#">Data Science</a></li>
                                        <li><a href="#">QHSE</a></li>
                                    </ul>

                                </div>
                        </div>
                        <div class="quick_link col-lg-4 col-md-4 order-md-2 order-lg-2">

                            <!-- Footer Widget Start -->
                            <div class="footer-widget">
                                <h4 class="footer-widget-title">Quick Links</h4>

                                <ul class="widget-link">
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Customer Support</a></li>
                                    <li><a href="#">Course FAQ’s</a></li>
                                </ul>

                            </div>
                            <!-- Footer Widget End -->

                        </div>
                        <div class="address col-lg-4 col-md-4 order-md-2 order-lg-2">

                            <!-- Footer Widget Start -->
                            <div class="footer-widget" style="margin-top: 25px">
                                

                                <div class="widget-address">
                                    <h4 class="footer-widget-title">Africa Trainovation</h4>
                                    <h4 class="footer-widget-title">Consulting</h4>
                                    <p style="color: black">Idi-Aba, Abeokuta.</p>
                                </div>

                                <ul class="widget-info">
                                    <li>
                                        <p> <i class="flaticon-email"></i> <a href="mailto:address@gmail.com">atc@gmail.com</a> </p>
                                    </li>
                                    <li>
                                        <p> <i class="flaticon-phone-call"></i> <a href="tel:+2349035807050">+234 903 580 7050</a> </p>
                                    </li>
                                </ul>

                                <ul class="widget-social">
                                    <li><a href="#"><i class="flaticon-facebook"></i></a></li>
                                    <li><a href="#"><i class="flaticon-twitter"></i></a></li>
                                    <li><a href="#"><i class="flaticon-linkedin"></i></a></li>
                                    <li><a href="#"><i class="flaticon-instagram"></i></a></li>
                                </ul>
                            </div>
                            <!-- Footer Widget End -->

                        </div>
                    </div>
                </div>


            </div>
            <!-- Footer Widget Section End -->
            <!-- Footer Copyright Start -->
            <div class="footer-copyright">
                <div class="container">

                    <!-- Footer Copyright Start -->
                    <div class="copyright-wrapper">
                        
                        <div class="copyright-text text-center">
                            <p>&copy; Copyright, ATC Hub 2021</p>
                        </div>
                    </div>
                    <!-- Footer Copyright End -->

                </div>
            </div>
            <!-- Footer Copyright End -->

        </div>
        <!-- Footer End -->

        <!--Back To Start-->
        <a href="#" class="back-to-top">
            <i class="icofont-simple-up"></i>
        </a>
        <!--Back To End-->

    </div>
</template>

<style>
body{
    font-family: Poppins !important
}

</style>
<script>
export default {
  name: 'IndexPage',
}
</script>
