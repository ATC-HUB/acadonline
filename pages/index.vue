<template>
     <div class="main-wrapper">
            <Header />
            <MobileHeader />
        <div class="overlay"></div>
            <FirstSection />
            <SecondSection />
            <ThirdSection />

        
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
