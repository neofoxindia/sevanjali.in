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
* {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;

}
.nuxt-link-exact-active {
    font-weight: bold;
    font-size: 1.2em;
    transition-duration: 200ms;
}
h1, h2, h3, h4 {
    font-family: 'Oswald', sans-serif;
}

.logo {
    width: 150px;
}
</style>
