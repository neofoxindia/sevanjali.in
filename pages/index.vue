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
                            <div class="block-title text-left">
                                <h4>{{ $t("Community") }}</h4>
                                <h2>{{ $t("Welcome") }}</h2></div>
                            <div class="welcome-two__checks">
                                <a class="welcome-two__check-one" href="#">
                                    <i class="fa fa-check"></i>
                                    {{ $t("Improved") }}
                                </a>
                                <a href="#">
                                    <i class="fa fa-check"></i>
                                    {{ $t("Improving") }}
                                </a>
                            </div>
                            <p class="text-dark">
                                {{ $t("Vision") }}
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
                                    <div class="feature-one__icon-text-box"><h3>{{ $t('OurMission') }}</h3></div>
                                </div>
                                <p class="text-dark">{{ $t("Mission") }}</p></div>
                        </div>
                        <div class="col-xl-4 col-lg-4">
                            <div class="feature-one__single feature-one__single-second-item">
                                <div class="feature-one__icon-wrap">
                                    <div class="feature-one__icon-box feature-one__icon-box-two"><span
                                        class="icon-wallet-filled-money-tool"></span>
                                        <div class="feature-one__icon-box-img"><img
                                            src="/images/resources/three_iocn_box_bg-2.png" alt=""/></div>
                                    </div>
                                    <div class="feature-one__icon-text-box">
                                        <h3>{{ $t("OurDefinition") }}</h3>
                                    </div>
                                </div>
                                <p class="text-dark">{{ $t("Science") }}</p></div>
                        </div>
                        <div class="col-xl-4 col-lg-4"><!-- Three Icon Single-->
                            <div class="feature-one__single feature-one__single-third-item">
                                <div class="feature-one__icon-wrap">
                                    <div class="feature-one__icon-box feature-one__icon-box-three"><span
                                        class="icon-charity"></span>
                                        <div class="feature-one__icon-box-img"><img
                                            src="/images/resources/three_iocn_box_bg-3.png" alt=""/></div>
                                    </div>
                                    <div class="feature-one__icon-text-box">
                                        <h3>{{ $t('StartDonating') }}</h3>
                                    </div>
                                </div>
                                <p class="text-dark">{{ $t('Support') }}</p></div>
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
                            <div class="block-title text-left">
                                <h4>{{ $t('HelpingToday') }}</h4>
                                <h2>{{ $t('OurGoal') }}</h2>
                            </div>
                            <p class="text-dark">{{ $t('Helping') }}</p>
                            <div class="welcome-one__campaigns bg-light rounded shadow-sm">
                                <div class="iocn"><span class="icon-donation"></span></div>
                                <div class="text">
                                    <h2 class="counter font-weight-bold">1,700</h2>
                                    <p>{{ $t('SuccessfulCampaigns') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div style="visibility: hidden;z-index: -10000;position: absolute">
            <div v-for="i in 9" :style="`backgroundImage: url('/images/backgrounds/slider_${i}.jpg.webp')`">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    data: () => ({
        background: 1
    }),
    methods: {},
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


<i18n lang="yaml">
en:
    Community: "Our Community"
    Welcome: "Welcome to Sevanjali Foundation"
    Improved: "Improved health and Well-being"
    Improving: "Improving health Of India"
    Vision: "Sevanjali Foundation, Our vision is about improved health and well-being and narrowing health.
            We seek to support our members to improve health in India, adding value to the efforts of stakeholders in regions and states,
            in national and international organisations, and individual public health professionals."
    Mission: "Our mission is to facilitate and activate a strong voice of the public health network by enhancing
            visibility of the evidence and by strengthening the capacity of public health professionals."
    Science: "The science and art of preventing disease, prolonging life and promoting health and well-being
            through the organised efforts and informed choices of society, organisations."
    Support: "When you support,you take a stand for a more equitable and respectful model of
            global health. Your donation not only helps us expand our reach, it is an investment
            in our shared values of health equity and solidarity."
    OurMission: "Our Mission"
    OurDefinition: "Our definition of health"
    StartDonating: "Start Donating"
    HelpingToday: "Helping Today"
    OurGoal: "Our Goal is to Help Sick People"
    Helping: "Helping ill unaware, uneducated people and Indian communities. so that our society ,
              communities come to know about health and keep them healthy and cleanliness."
    SuccessfulCampaigns: "Successful Campaigns"
hi:
    Community: "हमारे समुदाय"
    Welcome: "सेवांजलि फाउंडेशन में आपका स्वागत है"
    Improved: "बेहतर स्वास्थ्य और भलाई"
    Improving: "भारत के स्वास्थ्य में सुधार"
    Vision: "सेवांजलि फाउंडेशन, हमारी दृष्टि बेहतर स्वास्थ्य और भलाई और स्वास्थ्य को कम करने के बारे में है।
         हम भारत में स्वास्थ्य में सुधार के लिए अपने सदस्यों का समर्थन करना चाहते हैं, क्षेत्रों और राज्यों में हितधारकों के प्रयासों में मूल्य जोड़ना,
         राष्ट्रीय और अंतर्राष्ट्रीय संगठनों और व्यक्तिगत सार्वजनिक स्वास्थ्य पेशेवरों में।"
    Mission: "हमारा मिशन को बढ़ाकर सार्वजनिक स्वास्थ्य नेटवर्क की एक मजबूत आवाज को सुगम बनाना और सक्रिय करना है
         साक्ष्य की दृश्यता और सार्वजनिक स्वास्थ्य पेशेवरों की क्षमता को मजबूत करके।"
    Science: "बीमारी को रोकने, जीवन को लम्बा करने और स्वास्थ्य और कल्याण को बढ़ावा देने का विज्ञान और कला
         संगठित प्रयासों और समाज, संगठनों के सूचित विकल्पों के माध्यम से।"
    Support: "जब आप समर्थन करते हैं, तो आप अधिक न्यायसंगत और सम्मानजनक मॉडल के लिए एक स्टैंड लेते हैं
         वैश्विक स्वास्थ्य। आपका दान न केवल हमें अपनी पहुंच बढ़ाने में मदद करता है, यह एक निवेश है
         स्वास्थ्य समानता और एकजुटता के हमारे साझा मूल्यों में।"
    OurMission: "हमारा विशेष कार्य"
    OurDefinition: "स्वास्थ्य की हमारी परिभाषा"
    StartDonating: "दान करना शुरू करें"
    HelpingToday: "आज मदद"
    OurGoal: "हमारा लक्ष्य बीमार लोगों की मदद करना है"
    Helping: "बीमार अनजान, अशिक्षित लोगों और भारतीय समुदायों की मदद करना। ताकि हमारा समाज,
           समुदाय स्वास्थ्य के बारे में जानेंगे और उन्हें स्वस्थ और साफ रखेंगे।"
    SuccessfulCampaigns: "सफल अभियान"
</i18n>
