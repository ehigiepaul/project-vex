<template>
    <div class="banner">
        <div class="info z-index-2">
            <h1>{{ movieTitle }}</h1>
            <p class="desc">{{ movieDesc }}</p>
            <a class="text imdb score">TMDb: {{ score }}</a>&emsp;<a class="text vex points">+{{ vexPoints }} VEX</a>
            <p><a class="btn outline yellow">Watch Now</a></p>
        </div>
        <div class="overlay"></div>
    </div>
</template>

<script>
  export default {
    name: 'DiscoverBanner',
    props: {
      msg: String
    },
    data() {
      return {
        movieTitle: "Vikings",
        movieDesc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        score: 250,
        vexPoints: 50
      }
    }
  }
</script>

<style scoped="css">
    /* .banner,
    .banner .overlay {
        border-bottom-left-radius: 10%;
        border-bottom-right-radius: 10%;
    } */
</style>
