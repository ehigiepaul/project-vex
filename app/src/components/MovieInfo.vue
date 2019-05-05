<template>
<div class="d-flex vh-100">
  <div class="movie-banner w-100 h-100 pos-relative">
    <div class="overlay">
    </div>
    <div class="info p-5 color-black">
      <ul class="credits p rm">
          <li>{{ release }}</li>
          <li>&#8226;</li>
          <li>{{ duration }}</li>
          <li>&#8226;</li>
          <li>{{ tmdbScore }}</li>
      </ul>
      <p class="m rm color-grey">{{released}}</p>
      <p class="text m rm white override movie-title">{{ movieTitle }}</p>
      <p class="text white override">{{ movieDesc }}</p>
      <p class="text m rm color-green">+{{ vexPoints }} VEX</p>
      <div class="m-fixed-t-20">
        <a class="btn outline yellow">Watch Now</a>
      </div>
    </div>
    <!-- <div class="about row w-100 m rm">
      <div class="p-l-2 w-100 border-box">
        <div class="border-box">
          <h3>Genre: {{ genre }}</h3>
        </div>
        <div class="col-md-3 border-box">
          <h3>Duration: {{ duration }}</h3>
        </div>
        <div class="col-md-3 border-box">
          <h3>Released: {{ released }}</h3>
        </div>
        <div class="col-md-3 border-box">
          <h3>Producer: {{ producer }}</h3>
        </div>
      </div>
    </div> -->
  </div>
</div>
</template>

<script>
export default {
  name: "MovieInfo",
  data() {
    return {
      movieTitle: "Proud Mary",
      movieDesc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      tmdbScore: 8.7,
      vexPoints: 50,
      genre: "Fantasy",
      duration: "45 mins",
      cast: "Someone, someone else, and another person",
      release: 2017,
      producer: "Edward Rajah"
    }
  }
}
</script>

<style scoped="css">
.movie-banner {
  background-image: url('../assets/img/proud-mary.jpg');
  background-size: cover;
}

.movie-banner .about {
  position: absolute;
  height: 200px;
  right: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.5);
  text-align: b
}

.color-black {
  color: black !important;
}

.border-box {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

.pos-relative {
  position: relative !important;
}

.w-500px {
  width: 500px;
}

.movie-banner .info{
  font-size: 24px;
  position: relative;
  z-index: 1;
  max-width: 500px;
  padding-top: calc(100% - 88%);
}

.movie-banner .overlay{
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 0;
}

.movie-banner .info .movie-title{
  font-size: 48px;
}

.movie-banner .info .credits {
  color: white;
  list-style-type: circle;
}

.movie-banner .info .credits li{
  display: inline;
  list-style-type: circle;
  padding: 5px;
}
</style>
