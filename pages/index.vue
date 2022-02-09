<template>


    <IndexPage/>

</template>

<script>
import Footer from '../components/Footer.vue'
import Header from "~/components/Header";
import IndexPage from "~/components/IndexPage";

export default {
    name: 'Index',
    components: {Footer, Header, IndexPage},
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;

}

h1, h2, h3, h4 {
    font-family: 'Oswald', sans-serif;
}

.logo {
    width: 150px;
}
</style>
