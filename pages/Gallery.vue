<template>
    <div class="container">
        <div class="row py-5">
            <div v-for="i in 18" class="col-md-4 col-6 mt-3">
                <img @click="openImage(getImgName(i))" class="w-100 rounded" :src="getImgName(i)" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Gallery",
    methods:{
        getImgName(i){
            return `images/gallery/${i}.jpeg`
        },
        openImage(img){
            window.open(img, '_blank', 'height=800,width=1200')
        }
    }
}
</script>

<style scoped>
img{
    cursor: pointer;
    max-height: 300px;
    height: 300px;
    object-fit: cover;
}
</style>
