<template>
    <div>
        <footer class="site-footer">
            <div class="container">
                <div class="site-footer__one-top">
                    <div class="row justify-content-center">
                        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
                            <div class="footer-widget__column footer-widget__about">
                                <div class="footer-widget__logo">
                                    <NuxtLink :to="{name: 'index'}">
                                        <img src="/images/favicons/logo.png" class="logo" alt="">
                                    </NuxtLink>
                                </div>
                                <p class="footer-widget__text"></p>
                                <!--                                <div class="site-footer__social">-->
                                <!--                                    <a href="#">-->
                                <!--                                        <i class="fab fa-twitter"></i>-->
                                <!--                                    </a>-->
                                <!--                                    <a class="clr-fb" href="#">-->
                                <!--                                        <i class="fab fa-facebook-square"></i>-->
                                <!--                                    </a>-->
                                <!--                                    <a class="clr-dri" href="#">-->
                                <!--                                        <i class="fab fa-dribbble"></i>-->
                                <!--                                    </a>-->
                                <!--                                    <a class="clr-ins" href="#">-->
                                <!--                                        <i class="fab fa-instagram"></i>-->
                                <!--                                    </a>-->
                                <!--                                </div>-->
                                <div class="p-2">
                                    <!--                                    <h4 class="font-weight-bold">Bank Of Baroda</h4>-->

                                    <h4>Bank Details : </h4>
                                    <img src="/bob.png" alt="" style="width: 150px">
                                    <div>
                                        <h4 class="d-inline">Account Name : </h4>
                                        <h4 class="d-inline">Sevanjli Foundation</h4> <br>
                                        <h4 class="d-inline">Account Number : </h4>
                                        <h4 class="d-inline">98460200003013</h4> <br>
                                        <h4 class="d-inline">IFSC Code : </h4>
                                        <h4 class="d-inline">
                                            <a href="https://banksifsccode.com/BARB0EXTGAN/">BARB0EXTGAN</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
                            <div class="footer-widget__column footer-widget__contact"><h3 class="footer-widget__title">
                                Contact</h3>
                                <ul class="list-unstyled footer-widget__contact-list"><!-- Site Footer One End-->
                                    <!-- Site Footer Bottom Start-->
                                    <li>
                                        <div class="icon"><i class="fas fa-phone-square-alt"></i></div>
                                        <div class="text"><p><a href="tel:+91 90240 50888">+91 90240 50888</a></p></div>
                                    </li>
                                    <li>
                                        <div class="icon"><i class="fas fa-envelope"></i></div>
                                        <div class="text">
                                            <p>
                                                <a href="mailto:sevanjalifoundationggc@gmail.com">sevanjalifoundationggc@gmail.com</a>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
                                        <div class="text"><p>A/23 shivpuri udai mode, gangapur city</p></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
                            <div class="footer-widget__column footer-widget__support">
                                <h3 class="footer-widget__title">
                                    Support
                                </h3>
                                <img style="transform: scale(1.5); text-align: center" src="/code.svg" alt="UPI">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="site-footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="site-footer-bottom__inner">
                            <div class="site-footer-bottom__left"><p>&copy; Copyright 2021 by <a
                                href="https://neofox.org/">neofox</a>
                            </p></div>
                            <ul class="site-footer-bottom__menu list-unstyled">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><span>/</span></li>
                                <li><a href="#">Terms of Condition</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile-nav__wrapper">
            <div class="mobile-nav__overlay side-menu__toggler mobile-nav__toggler"></div>
            <div class="mobile-nav__content">
        <span class="mobile-nav__close side-menu__toggler mobile-nav__toggler">
            <i class="fa fa-times"></i></span>
                <div class="logo-box">
                    <a href="index.html" aria-label="logo image">
                        <img src="assets/images/resources/logo-2.png" alt=""/></a>
                </div><!-- /.logo-box-->
                <div class="mobile-nav__container clearfix"></div><!-- /.mobile-nav__container-->
                <ul class="mobile-nav__contact list-unstyled">
                    <li><i class="fas fa-envelope"></i><a href="mailto:needhelp@asting.com">needhelp@asting.com</a></li>
                    <li><i class="fas fa-phone-square-alt"></i><a href="tel:666-888-0000">666 888 0000</a></li>
                </ul><!-- /.mobile-nav__contact-->
                <div class="mobile-nav__top">
                    <div class="mobile-nav__social">
                        <a href="#" aria-label="twitter">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" aria-label="facebook">
                            <i class="fab fa-facebook-square"></i>
                        </a>
                        <a href="#" aria-label="pinterest">
                            <i class="fab fa-pinterest-p"></i>
                        </a>
                        <a href="#" aria-label="instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>

</style>
