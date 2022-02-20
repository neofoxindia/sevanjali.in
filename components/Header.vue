
<template>
    <div class="row p-0 m-0">
        <div class="col-12 bg-dark">
            <div class="row justify-content-between px-3">
                <div class="col-6 ">
                    <div class="row">
                        <div class="col-6">
                            <a class="text-white d-md-block d-none"
                               href="mailto:sevanjalifoundationggc@gmail.com">
                                <small>sevanjalifoundationggc@gmail.com</small>
                            </a>
                        </div>
                        <div class="col-md-6 col-12">
                            <nuxt-link class="btn btn-sm small btn-light const-font px-1 p-0 mr-3" :to="switchLocalePath('hi')">हिन्दी</nuxt-link>
                            <nuxt-link class="btn btn-sm btn-light const-font px-1 p-0" :to="switchLocalePath('en')">English</nuxt-link>
                        </div>
                    </div>

                </div>
                <div class="col-6 text-right">
                    <a class="text-white" href="tel:+919024050888"><small>+91-9024050888</small></a>
                </div>
            </div>
        </div>
        <div class="col-12 d-md-none d-flex align-content-center ">
            <NuxtLink :to="localePath('index')" class="text-center">
                <img src="/images/favicons/logo.png" class="w-75 " alt="Sevanjli">
            </NuxtLink>
        </div>
        <div class="col-12 py-3 shadow-sm sticky-top">
            <div class="row justify-content-md-center justify-content-around font-weight-bold align-content-center">
                <div class="col-5 d-md-block d-none">
                    <NuxtLink :to="{name: 'index'}">
                        <img src="/images/favicons/logo.png" class="logo" alt="Sevanjli">
                    </NuxtLink>
                </div>
                <div class="col-auto px-md-4 px-sm-0">
                    <NuxtLink :to="localePath('index')" class="text-dark">{{ $t('Home') }}</NuxtLink>
                </div>
                <div class="col-auto px-md-4 px-sm-0">
                    <NuxtLink :to="localePath('About')" class="text-dark">{{ $t('About') }}</NuxtLink>
                </div>
                <div class="col-auto px-md-4 px-sm-0">
                    <NuxtLink :to="localePath('Gallery')" class="text-dark">{{ $t('Gallery') }}</NuxtLink>
                </div>
                <div class="col-auto px-md-4 px-sm-0">
                    <NuxtLink :to="localePath('Contact')" class="text-dark">{{ $t('Contact') }}</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
.const-font{
    font-size: 17px !important;
}

</style>

<i18n lang="yaml">
en:
    Home: "Home"
    About: "About"
    Gallery: "Gallery"
    Contact: "Contact"
hi:
    Home: "घर"
    About: "हमारे बारे में"
    Gallery: "गेलरी"
    Contact: "संपर्क"
</i18n>

