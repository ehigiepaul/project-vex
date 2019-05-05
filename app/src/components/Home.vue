<template lang="html">
  <div class="d-flex" id="bgHome">
      <div class="container scroll-y w-100">
          <div class=" border-box">
            <p class="section header home-push">Top Requests</p>
            <div class="section d-flex row wrap discover-items p-fixed-l-25 p-fixed-r-25 pos-relative">
              <button type='button' class='slide-prev' @click="prevRequests"><img class='chevron-left' src='../assets/img/chevron-left-white.png'></button>
              <button type='button' class='slide-next' @click="nextRequests"><img class='chevron-right' src='../assets/img/chevron-right-white.png'></button>
              <slick ref="slickRequests" :options="slickOptions">
                <div>
                  <a href="#">
                      <img src="../assets/img/movies_covers/wonder_woman_poster_4.jpg" class="movie-cover">
                      <p class="text-18pt">{{ movieTitle }}</p>
                      <p class="vex-points">{{ points }}</p>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src="../assets/img/movies_covers/iron_man.jpg" class="movie-cover">
                      <p class="text-18pt">{{ movieTitle }}</p>
                      <p class="vex-points">{{ points }}</p>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src="../assets/img/movies_covers/tomb_raider.jpg" class="movie-cover">
                      <p class="text-18pt">{{ movieTitle }}</p>
                      <p class="vex-points">{{ points }}</p>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src="../assets/img/movies_covers/bushwick.jpg" class="movie-cover">
                      <p class="text-18pt">{{ movieTitle }}</p>
                      <p class="vex-points">{{ points }}</p>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src="../assets/img/movies_covers/guardians_galaxy.jpg" class="movie-cover">
                      <p class="text-18pt">{{ movieTitle }}</p>
                      <p class="vex-points">{{ points }}</p>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src="../assets/img/movies_covers/Rings-2016-movie-poster.jpg" class="movie-cover">
                      <p class="text-18pt">{{ movieTitle }}</p>
                      <p class="vex-points">{{ points }}</p>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src="../assets/img/movies_covers/rogueone_Star-war-8.jpg" class="movie-cover">
                      <p class="text-18pt">{{ movieTitle }}</p>
                      <p class="vex-points">{{ points }}</p>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src="../assets/img/movies_covers/b773ebf36aaa36abe51a393afbd58cf9.jpg" class="movie-cover">
                      <p class="text-18pt">{{ movieTitle }}</p>
                      <p class="vex-points">{{ points }}</p>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src="../assets/img/movies_covers/life.jpg" class="movie-cover">
                      <p class="text-18pt">{{ movieTitle }}</p>
                      <p class="vex-points">{{ points }}</p>
                  </a>
                </div>
              </slick>
            </div>
          </div>
          <div class="">
              <p class="section header">Newly Released</p>
              <div class="section d-flex row wrap discover-items p-fixed-l-25 p-fixed-r-25 pos-relative">
                <button type='button' class='slide-prev' @click="prevReleased"><img class='chevron-left' src='../assets/img/chevron-left-white.png'></button>
                <button type='button' class='slide-next' @click="nextReleased"><img class='chevron-right' src='../assets/img/chevron-right-white.png'></button>
                <slick ref="slickReleased" :options="slickOptions">
                  <div>
                    <a href="#">
                        <img src="../assets/img/movies_covers/wonder_woman_poster_4.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/iron_man.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/tomb_raider.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/bushwick.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/guardians_galaxy.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/Rings-2016-movie-poster.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/rogueone_Star-war-8.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/b773ebf36aaa36abe51a393afbd58cf9.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/life.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                </slick>
              </div>
          </div>
          <div class="">
              <p class="section header">Movies - Most Watched</p>
              <div class="section d-flex row wrap discover-items p-fixed-l-25 p-fixed-r-25 pos-relative">
                <button type='button' class='slide-prev' @click="prevWatchedMovies"><img class='chevron-left' src='../assets/img/chevron-left-white.png'></button>
                <button type='button' class='slide-next' @click="nextWatchedMovies"><img class='chevron-right' src='../assets/img/chevron-right-white.png'></button>
                <slick ref="slickWatchedMovies" :options="slickOptions">
                  <div>
                    <a href="#">
                        <img src="../assets/img/movies_covers/wonder_woman_poster_4.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/iron_man.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/tomb_raider.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/bushwick.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/guardians_galaxy.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/Rings-2016-movie-poster.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/rogueone_Star-war-8.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/b773ebf36aaa36abe51a393afbd58cf9.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/life.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                </slick>
              </div>
          </div>
          <div class="">
              <p class="section header">Series - Most Watched</p>
              <div class="section d-flex row wrap discover-items p-fixed-l-25 p-fixed-r-25 pos-relative">
                <button type='button' class='slide-prev' @click="prevWatchedSeries"><img class='chevron-left' src='../assets/img/chevron-left-white.png'></button>
                <button type='button' class='slide-next' @click="nextWatchedSeries"><img class='chevron-right' src='../assets/img/chevron-right-white.png'></button>
                <slick ref="slickWatchedSeries" :options="slickOptions">
                  <div>
                    <a href="#">
                        <img src="../assets/img/movies_covers/wonder_woman_poster_4.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/iron_man.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/tomb_raider.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/bushwick.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/guardians_galaxy.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/Rings-2016-movie-poster.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/rogueone_Star-war-8.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/b773ebf36aaa36abe51a393afbd58cf9.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/life.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                </slick>
              </div>
          </div>
          <div class="">
              <p class="section header">Tutorials - Most Watched</p>
              <div class="section d-flex row wrap discover-items p-fixed-l-25 p-fixed-r-25 pos-relative">
                <button type='button' class='slide-prev' @click="prevWatchedTutorials"><img class='chevron-left' src='../assets/img/chevron-left-white.png'></button>
                <button type='button' class='slide-next' @click="nextWatchedTutorials"><img class='chevron-right' src='../assets/img/chevron-right-white.png'></button>
                <slick ref="slickWatchedTutorials" :options="slickOptions">
                  <div>
                    <a href="#">
                        <img src="../assets/img/movies_covers/wonder_woman_poster_4.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/iron_man.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/tomb_raider.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/bushwick.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/guardians_galaxy.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/Rings-2016-movie-poster.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/rogueone_Star-war-8.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/b773ebf36aaa36abe51a393afbd58cf9.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src="../assets/img/movies_covers/life.jpg" class="movie-cover">
                        <p class="text-18pt">{{ movieTitle }}</p>
                        <p class="vex-points">{{ points }}</p>
                    </a>
                  </div>
                </slick>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
// import $ from "jquery";
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
import $ from 'jquery';
// import 'slick-carousel/slick/slick-theme.css';

export default {
  name: "Home",
  data() {
    return {
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        prevArrow: false,
        nextArrow: false,
        variableWidth: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          }
        ]
      },
      movieTitle: "Vikings",
      points: 6
    }
  },
  mounted() {
    $(window).scroll(function() {
      var pTopRequests = document.querySelector("p").offsetTop;
      // console.log(pTopRequests);
      if (window.pageYOffset > 0) {
        // console.log(window.pageYOffset);
        var alpha = (window.pageYOffset / pTopRequests);
        document.getElementById("bgHome").style.background = "linear-gradient(rgba(16, 35, 39, " + alpha + "), rgba(0, 0, 0, 0.8)), url('http://192.168.43.120/img/home-background-pacific-rim-2.jpg')";
        document.getElementById('bgHome').style.backgroundAttachment = 'fixed';
        document.getElementById('bgHome').style.backgroundRepeat = 'no-repeat';
        document.getElementById('bgHome').style.backgroundSize = 'cover';
      }
    });
  },

  methods: {
    nextRequests() {
      this.$refs.slickRequests.next()
    },
    nextReleased() {
      this.$refs.slickReleased.next()
    },
    nextWatchedMovies() {
      this.$refs.slickWatchedMovies.next()
    },
    nextWatchedSeries() {
      this.$refs.slickWatchedSeries.next()
    },
    nextWatchedTutorials() {
      this.$refs.slickWatchedTutorials.next()
    },
    prevRequests() {
      this.$refs.slickRequests.prev()
    },
    prevReleased() {
      this.$refs.slickReleased.prev()
    },
    prevWatchedMovies() {
      this.$refs.slickWatchedMovies.prev()
    },
    prevWatchedSeries() {
      this.$refs.slickWatchedSeries.prev()
    },
    prevWatchedTutorials() {
      this.$refs.slickWatchedTutorials.prev()
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      });
    },

    // Events listeners
    // handleAfterChange(event, slick, currentSlide) {
    //     console.log('handleAfterChange', event, slick, currentSlide);
    // },
    // handleBeforeChange(event, slick, currentSlide, nextSlide) {
    //     console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
    // },
    // handleBreakpoint(event, slick, breakpoint) {
    //     console.log('handleBreakpoint', event, slick, breakpoint);
    // },
    // handleDestroy(event, slick) {
    //     console.log('handleDestroy', event, slick);
    // },
    // handleEdge(event, slick, direction) {
    //     console.log('handleEdge', event, slick, direction);
    // },
    // handleInit(event, slick) {
    //     console.log('handleInit', event, slick);
    // },
    // handleReInit(event, slick) {
    //     console.log('handleReInit', event, slick);
    // },
    // handleSetPosition(event, slick) {
    //     console.log('handleSetPosition', event, slick);
    // },
    // handleSwipe(event, slick, direction) {
    //     console.log('handleSwipe', event, slick, direction);
    // },
    // handleLazyLoaded(event, slick, image, imageSource) {
    //     console.log('handleLazyLoaded', event, slick, image, imageSource);
    // },
    // handleLazeLoadError(event, slick, image, imageSource) {
    //     console.log('handleLazeLoadError', event, slick, image, imageSource);
    // },
  },
  components: {
    Slick
  },
}
</script>

<style lang="css" scoped>
@import "../assets/css/slick.css";

.section.header {
  padding-left: 40px !important;
}
.home-push {
  margin-top: calc(20% + 10px) !important;
}
</style>
