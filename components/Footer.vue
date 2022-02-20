<template>
    <div>
        <footer class="site-footer">
            <div class="container">
                <div class="site-footer__one-top">
                    <div class="row justify-content-center">
                        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
                            <div class="footer-widget__column footer-widget__about">
                                <div class="footer-widget__logo">
                                    <NuxtLink :to="localePath('index')">
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
                                <div class="p-3 card shadow border-0">
                                    <!--                                    <h4 class="font-weight-bold">Bank Of Baroda</h4>-->

                                    <h4>Bank Details : </h4>
                                    <img src="/bob.png" alt="" style="width: 180px">
                                    <div>
                                        <h4 class="d-inline">Account Name : </h4>
                                        <h4 class="d-inline">Sevanjali Foundation</h4> <br>
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
                            <div class="footer-widget__column footer-widget__contact">
                                <h3 class="my-3">Contact</h3>
                                <ul class="list-group">
                                  <div class="card p-3 bg-warning border-0 shadow mb-2 rounded-4">
                                      <li class="list-group-item bg-transparent border-0 p-0">
                                          <div class="icon"><i class="fas fa-phone-square-alt"></i></div>
                                          <a class="font-weight-bold text-dark" href="tel:+91 90240 50888">+91 90240 50888</a>
                                      </li>
                                      <li class="list-group-item bg-transparent border-0 p-0">
                                          <div class="icon"><i class="fas fa-envelope"></i></div>
                                          <a class="font-weight-bold text-dark"
                                             href="mailto:sevanjalifoundationggc@gmail.com">sevanjalifoundationggc@gmail.com</a>
                                      </li>
                                  </div>
                                    <li class="list-group-item bg-transparent border-0 p-0">
                                        <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
                                        <div class="card p-3 bg-warning border-0 shadow mb-2 font-weight-bold text-dark p-4">A/23 Shivpuri Udai mode, Gangapur city, Dist: Sawai Madhopur 322201 (Rajasthan)</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 row justify-content-center mt-4">
                            <h3> Support </h3>
                            <img class="w-100" style="text-align: center" src="/code.svg" alt="UPI">
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
    </div>

</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>

</style>
