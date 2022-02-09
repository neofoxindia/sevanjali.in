<template>
    <div class="page-wrapper">
        <section class="main-slider pb-5">
            <div>
                <div>
                    <div class="swiper-slide">
                        <transition duration="200">
                            <div class="image-layer" :style="backgroundImage" style="height: 100%;"></div>
                        </transition>
                        <div class="container" style="height: 80vh;"></div>
                    </div>
                </div>
                <div class="main-slider-nav">
                    <div @click="background-=1" class="arrow p-3 h1 text-left">❰</div>
                    <div @click="background+=1" class="arrow p-3 h1 text-right">❯</div>
                </div>
            </div>
        </section>
        <section class="welcome-two py-5 my-5">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <div class="welcome-two__left">
                            <div class="block-title text-left"><h4>Our Community</h4>
                                <h2>Welcome to Sevanjali Foundation</h2></div>
                            <div class="welcome-two__checks">
                                <a class="welcome-two__check-one" href="#">
                                    <i class="fa fa-check"></i>
                                    Improved health and Well-being
                                </a>
                                <a href="#">
                                    <i class="fa fa-check"></i>
                                    Improving health Of India
                                </a>
                            </div>
                            <p class="text-dark">Sevanjali Foundation, Our vision is about improved health and
                                well-being
                                and narrowing health. We seek to support our members to improve health in India, adding
                                value to the efforts of stakeholders in regions and states, in national and
                                international organisations, and individual public health professionals.
                            </p>

                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="welcome-two__right">
                            <div class="welcome-two__img mt-5">
                                <img class="mt-5" src="/images/backgrounds/back.jpg" alt="backgrounds"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="feature-one py-5 my-5">
            <div class="container">
                <div class="feature-one__inner">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4">
                            <div class="feature-one__single feature-one__single-first-item">
                                <div class="feature-one__icon-wrap">
                                    <div class="feature-one__icon-box"><span class="icon-heart"></span>
                                        <div class="feature-one__icon-box-img">
                                            <img src="/images/resources/three_iocn_box_bg.png" alt=""/>
                                        </div>
                                    </div>
                                    <div class="feature-one__icon-text-box"><h3>Our <br/> mission</h3></div>
                                </div>
                                <p class="text-dark">Our mission is to facilitate and activate a
                                    strong voice of the public health network by enhancing visibility of the evidence
                                    and by strengthening the capacity of public health professionals.</p></div>
                        </div>
                        <div class="col-xl-4 col-lg-4">
                            <div class="feature-one__single feature-one__single-second-item">
                                <div class="feature-one__icon-wrap">
                                    <div class="feature-one__icon-box feature-one__icon-box-two"><span
                                        class="icon-wallet-filled-money-tool"></span>
                                        <div class="feature-one__icon-box-img"><img
                                            src="/images/resources/three_iocn_box_bg-2.png" alt=""/></div>
                                    </div>
                                    <div class="feature-one__icon-text-box"><h3>Our definition of<br/> public health
                                    </h3></div>
                                </div>
                                <p class="text-dark">The science and art of
                                    preventing disease, prolonging life and promoting health and well-being through the
                                    organised efforts and informed choices of society, organisations.</p></div>
                        </div>
                        <div class="col-xl-4 col-lg-4"><!-- Three Icon Single-->
                            <div class="feature-one__single feature-one__single-third-item">
                                <div class="feature-one__icon-wrap">
                                    <div class="feature-one__icon-box feature-one__icon-box-three"><span
                                        class="icon-charity"></span>
                                        <div class="feature-one__icon-box-img"><img
                                            src="/images/resources/three_iocn_box_bg-3.png" alt=""/></div>
                                    </div>
                                    <div class="feature-one__icon-text-box"><h3>Start<br/> Donating</h3></div>
                                </div>
                                <p class="text-dark">When you support,
                                    you take a stand for a more equitable and respectful model of global health. Your
                                    donation not only helps us expand our reach, it is an investment in our shared
                                    values of
                                    health equity and solidarity.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="welcome-one mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <div class="welcome-one__left">
                            <div class="welcome-one__img wow slideInLeft">
                                <img src="/images/backgrounds/mission.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="welcome-one__right">
                            <div class="block-title text-left"><h4>Helping Today</h4>
                                <h2>Our Goal is to Help Sick People</h2></div>
                            <p class="text-dark">Helping ill unaware, uneducated people and Indian
                                communities. so that our society ,communities come to know about health and
                                keep them healthy and cleanliness.</p>
                            <div class="welcome-one__campaigns bg-light rounded shadow-sm">
                                <div class="iocn"><span class="icon-donation"></span></div>
                                <div class="text">
                                    <h2 class="counter font-weight-bold">1,700</h2>
                                    <p>Successful Campaigns</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "IndexPage",
    data: () => ({
        background: 1
    }),
    computed: {
        backgroundImage() {
            if (this.background > 9) {
                this.background = 1;
            } else if (this.background < 1) {
                this.background = 9;
            }
            return `background-image: url(/images/backgrounds/slider_${this.background}.jpg.webp)`;
        }
    },
    mounted() {
        setInterval(() => {
            this.background++;
        }, 4000);
    }
}
</script>

<style scoped>
.image-layer {
    transition-duration: 200ms;
}

.arrow {
    background: rgba(75, 52, 52, 0.6);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    line-height: 40px;
    cursor: pointer;
    user-select: none;
}

.arrow:hover {
    transform: scale(1.2);
    transition-duration: 500ms;
}
</style>
