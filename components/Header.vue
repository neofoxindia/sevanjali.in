<template>
    <div class="row p-0 m-0">
        <div class="col-12 bg-dark">
            <div class="row justify-content-between px-3">
                <div class="col-6">
                    <a class="text-white"
                       href="mailto:sevanjalifoundationggc@gmail.com">
                        <small>sevanjalifoundationggc@gmail.com</small>
                    </a>
                </div>
                <div class="col-6 text-right">
                    <a class="text-white" href="tel:+919024050888"><small>+91-9024050888</small></a>
                </div>
            </div>
        </div>
        <div class="col-12 d-md-none d-flex align-content-center ">
            <NuxtLink :to="{name: 'index'}" class="text-center">
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
                    <NuxtLink :to="{'name': 'index'}" class="text-dark">Home</NuxtLink>
                </div>
                <div class="col-auto px-md-4 px-sm-0">
                    <NuxtLink :to="{'name': 'About'}" class="text-dark">About</NuxtLink>
                </div>
                <div class="col-auto px-md-4 px-sm-0">
                    <NuxtLink :to="{'name': 'Gallery'}" class="text-dark">Gallery</NuxtLink>
                </div>
                <div class="col-auto px-md-4 px-sm-0">
                    <NuxtLink :to="{'name': 'Contact'}" class="text-dark">Contact</NuxtLink>
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

</style>
