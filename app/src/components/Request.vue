<template lang="html">
  <div class="d-flex vh-100">
      <div class="container">
        <div class="p-fixed-l-25">
          <p class="section header">Requested Movies</p>
          <div class="section d-flex row wrap discover-items">
            <a href="#">
              <img src="../assets/img/movies_covers/wonder_woman_poster_4.jpg" class="movie-cover">
              <p>{{ movieTitle }}</p>
              <p class="request-date">{{ requestDate1 }}</p>
            </a>
            <a href="#">
              <img src="../assets/img/movies_covers/iron_man.jpg" class="movie-cover">
              <p>{{ movieTitle }}</p>
              <p class="request-date">{{ requestDate }}</p>
            </a>
            <a href="#">
              <img src="../assets/img/movies_covers/tomb_raider.jpg" class="movie-cover">
              <p>{{ movieTitle }}</p>
              <p class="request-date">{{ requestDate1 }}</p>
            </a>
            <a href="#">
              <img src="../assets/img/movies_covers/bushwick.jpg" class="movie-cover">
              <p>{{ movieTitle }}</p>
              <p class="request-date">{{ requestDate2 }}</p>
            </a>
            <a href="#">
              <img src="../assets/img/movies_covers/guardians_galaxy.jpg" class="movie-cover">
              <p>{{ movieTitle }}</p>
              <p class="request-date">{{ requestDate3 }}</p>
            </a>
            <a href="#">
              <img src="../assets/img/movies_covers/Rings-2016-movie-poster.jpg" class="movie-cover">
              <p>{{ movieTitle }}</p>
              <p class="request-date">{{ requestDate3 }}</p>
            </a>
            <a href="#">
              <img src="../assets/img/movies_covers/rogueone_Star-war-8.jpg" class="movie-cover">
              <p>{{ movieTitle }}</p>
              <p class="request-date">{{ requestDate1 }}</p>
            </a>
            <a href="#">
              <img src="../assets/img/movies_covers/b773ebf36aaa36abe51a393afbd58cf9.jpg" class="movie-cover">
              <p>{{ movieTitle }}</p>
              <p class="request-date">{{ requestDate2 }}</p>
            </a>
            <a href="#">
              <img src="../assets/img/movies_covers/life.jpg" class="movie-cover">
              <p>{{ movieTitle }}</p>
              <p class="request-date">{{ requestDate1 }}</p>
            </a>
            <a href="#">
              <img src="../assets/img/movies_covers/thor_ragnarok_2017____movie_poster_by_jfourpvfx-da8irkw.jpg" class="movie-cover">
              <p>{{ movieTitle }}</p>
              <p class="request-date">{{ requestDate3 }}</p>
            </a>
            <a href="#">
              <img src="../assets/img/movies_covers/Spiderman-poster-7-large.jpg" class="movie-cover">
              <p>{{ movieTitle }}</p>
              <p class="request-date">{{ requestDate2 }}</p>
            </a>
            <a href="#">
              <img src="../assets/img/movies_covers/mummy.jpeg" class="movie-cover">
              <p>{{ movieTitle }}</p>
              <p class="request-date">{{ requestDate }}</p>
            </a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Request",
  data() {
    return {
      movieTitle: "Vikings",
      requestDate: "5 minutes ago",
      requestDate1: "6 Oct 2018",
      requestDate2: "1 year ago",
      requestDate3: "4 years ago"
    }
  }
}
</script>

<style lang="css" scoped="css">

.vertical-container{
    display: table;
}

.vertical-align{
  display: table-cell;
  vertical-align: middle;
}

.request-date {
    font-style: italic;
    font-size: 14px;
    color: #c3890d;
}

.search-section {
    display: flex;
    flex-direction: row;
}

.search-section .fa-search {
    padding: 0px;
    margin: 0px;
}

</style>
