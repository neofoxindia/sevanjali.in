<template>
    <div>
        <Header/>
        <Nuxt/>
        <Footer/>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from "~/components/Header";

export default {
    name: "default",
    components: {Footer, Header},
}
</script>

<style>
.nuxt-link-exact-active {
    font-weight: bold;
    font-size: 1.2em;
    transition-duration: 200ms;
}
</style>
