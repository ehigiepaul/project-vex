<template>
<div class="d-flex bg-discover">
  <router-view></router-view>
  <div class="container">
    <DiscoverBanner></DiscoverBanner>
    <div class="p-fixed-l-25">
      <p class="section header">Discover</p>
      <div class="section d-flex row wrap discover-items">
        <a href="#">
          <img src="../assets/img/movies_covers/wonder_woman_poster_4.jpg" class="movie-cover">
          <p class="text-18pt">{{ movieTitle }}</p>
          <p class="vex-points">{{ points }}</p>
        </a>
        <a href="#">
          <img src="../assets/img/movies_covers/iron_man.jpg" class="movie-cover">
          <p class="text-18pt">{{ movieTitle }}</p>
          <p class="vex-points">{{ points }}</p>
        </a>
        <a href="#">
          <img src="../assets/img/movies_covers/tomb_raider.jpg" class="movie-cover">
          <p class="text-18pt">{{ movieTitle }}</p>
          <p class="vex-points">{{ points }}</p>
        </a>
        <a href="#">
          <img src="../assets/img/movies_covers/bushwick.jpg" class="movie-cover">
          <p class="text-18pt">{{ movieTitle }}</p>
          <p class="vex-points">{{ points }}</p>
        </a>
        <a href="#">
          <img src="../assets/img/movies_covers/guardians_galaxy.jpg" class="movie-cover">
          <p class="text-18pt">{{ movieTitle }}</p>
          <p class="vex-points">{{ points }}</p>
        </a>
        <a href="#">
          <img src="../assets/img/movies_covers/Rings-2016-movie-poster.jpg" class="movie-cover">
          <p class="text-18pt">{{ movieTitle }}</p>
          <p class="vex-points">{{ points }}</p>
        </a>
        <a href="#">
          <img src="../assets/img/movies_covers/rogueone_Star-war-8.jpg" class="movie-cover">
          <p class="text-18pt">{{ movieTitle }}</p>
          <p class="vex-points">{{ points }}</p>
        </a>
        <a href="#">
          <img src="../assets/img/movies_covers/b773ebf36aaa36abe51a393afbd58cf9.jpg" class="movie-cover">
          <p class="text-18pt">{{ movieTitle }}</p>
          <p class="vex-points">{{ points }}</p>
        </a>
        <a href="#">
          <img src="../assets/img/movies_covers/life.jpg" class="movie-cover">
          <p class="text-18pt">{{ movieTitle }}</p>
          <p class="vex-points">{{ points }}</p>
        </a>
        <a href="#">
          <img src="../assets/img/movies_covers/thor_ragnarok_2017____movie_poster_by_jfourpvfx-da8irkw.jpg" class="movie-cover">
          <p class="text-18pt">{{ movieTitle }}</p>
          <p class="vex-points">{{ points }}</p>
        </a>
        <a href="#">
          <img src="../assets/img/movies_covers/Spiderman-poster-7-large.jpg" class="movie-cover">
          <p class="text-18pt">{{ movieTitle }}</p>
          <p class="vex-points">{{ points }}</p>
        </a>
        <a href="#">
          <img src="../assets/img/movies_covers/mummy.jpeg" class="movie-cover">
          <p class="text-18pt">{{ movieTitle }}</p>
          <p class="vex-points">{{ points }}</p>
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import DiscoverBanner from './DiscoverBanner.vue'

export default {
  name: 'Discover',
  components: {
    "DiscoverBanner": DiscoverBanner
  },
  data() {
    return {
      movieTitle: "Vikings",
      points: 50
    }
  }
}
</script>
