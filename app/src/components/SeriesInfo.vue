<template>
<div class="d-flex vh-100">
  <div class="series-banner w-100 h-100 pos-relative">
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
    <div class="toggle-contain" :class="{ expanded: isExpanded }">
      <div class="toggle" @click="isExpanded = !isExpanded">
        <img class="resize mx-auto d-block" src="../assets/img/resize.png">
      </div>
      <div class="expand">
        <div class="accordion-item">
            <h2>Season 1</h2>
            <div>
                <ul class="episodes">
                    <li><a href="#">Episode 1 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 2 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 3 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 4 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 5 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 6 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 7 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 8 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 9 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 10 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 11 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 12 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 13 - {{episodeTitle}}</a></li>
                </ul>
            </div>
          </div>
          <div class="accordion-item">
            <h2>Season 2</h2>
            <div>
                <ul class="episodes">
                    <li><a href="#">Episode 1 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 2 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 3 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 4 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 5 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 6 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 7 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 8 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 9 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 10 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 11 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 12 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 13 - {{episodeTitle}}</a></li>
                </ul>
            </div>
          </div>
          <div class="accordion-item">
            <h2>Season 3</h2>
            <div>
                <ul class="episodes">
                    <li><a href="#">Episode 1 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 2 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 3 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 4 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 5 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 6 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 7 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 8 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 9 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 10 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 11 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 12 - {{episodeTitle}}</a></li>
                    <li><a href="#">Episode 13 - {{episodeTitle}}</a></li>
                </ul>
            </div>
          </div>
          
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "SeriesInfo",
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
      producer: "Edward Rajah",
      isExpanded : false,
      episodeTitle: 'Pay us more, #shaladoza'
    }
  },
  mounted(){
    //  Accordion Js
    var accordionItems = new Array();

    accordionItems = document.querySelectorAll('.accordion-item');

    for (let i = 0; i < accordionItems.length; i++) {
        var h2 = getFirstChildWithTagName(accordionItems[i], 'H2');
        h2.onclick = toggleItem;
    }

    for (var i = 1; i < accordionItems.length; i++) {
        accordionItems[i].className = 'accordion-item hide';
    }

    var firstDiv = accordionItems[0].getElementsByTagName('div')[0];
    firstDiv.style.height = "auto";
    var firstDivHeight = firstDiv.offsetHeight;
    firstDiv.style.height = firstDivHeight + 'px';

    function toggleItem() {
        var itemClass = this.parentNode.className;

        for (var i = 0; i < accordionItems.length; i++) {
            accordionItems[i].className = 'accordion-item hide';
            accordionItems[i].getElementsByTagName('div')[0].style.height = "0";
        }

        if (itemClass == 'accordion-item hide') {
            var accordionItemContent = this;
            do accordionItemContent = accordionItemContent.nextSibling; while(accordionItemContent && accordionItemContent.nodeType !== 1);

            accordionItemContent.style.height = "auto";
            var divHeight = accordionItemContent.offsetHeight;
            accordionItemContent.style.height = "";
            this.parentNode.className = 'accordion-item';
            window.setTimeout(function () {
                accordionItemContent.style.height = divHeight + 'px';
            }, 50);
        }
    }

    function getFirstChildWithTagName(element, tagName) {
        for (var i = 0; i < element.childNodes.length; i++) {
            if (element.childNodes[i].nodeName == tagName) return element.childNodes[i];
        }
    }

  }
}
</script>

<style scoped="css">
/* .accordion-item h2 {
    cursor: pointer;
}

.accordion-item div {
    overflow: hidden;
    -webkit-transition: 0.5s height;
    transition: 0.5s height;
    height: 0;
} */
@import "../assets/css/accordion.css";

.series-banner {
  background-image: url('../assets/img/stranger-things.jpg');
  background-size: cover;
  overflow-x: hidden;
}

.series-banner .about {
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

.series-banner .info{
  font-size: 24px;
  position: relative;
  z-index: 1;
  max-width: 500px;
  padding-top: calc(100% - 88%);
}

.series-banner .overlay{
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 0;
}

.series-banner .info .movie-title{
  font-size: 48px;
}

.series-banner .info .credits {
  color: white;
  list-style-type: circle;
}

.series-banner .info .credits li{
  display: inline;
  list-style-type: circle;
  padding: 5px;
}

.toggle:hover{
  background-color: rgba(16,35,39,0.9);
}
.toggle-contain{
  position: absolute;
  right: 0px;
  height: 100%;
  top: 0px;
}
.toggle{
  position: relative;
  height:100px;
  background-color: rgba(16,35,39,0.5);
  width: 60px;
  display: table;
  right: 0px;
  top: calc(50% - 50px);
  cursor: pointer;
  -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
  transition: .3s all ease;
  -webkit-transition: .3s all ease;
  -moz-transition: .3s all ease;
}

.toggle img{
  width: 36px;
  top: calc(50% - 18px);
  left: calc(50% - 18px);
  position: absolute;
}

.expand{
  width: 300px;
  height: 100%;
  top: 0px;
  position: absolute;
  right: -300px;
  overflow-x: hidden;
  transition: .3s all ease;
  -webkit-transition: .3s all ease;
  -moz-transition: .3s all ease;
  background-color: rgba(16,35,39,0.9);
  padding: 2rem;
  box-sizing: border-box;
}

.expand ul{
  margin: 0px;
  list-style-type: none;
  padding-left: 10px;
}

.expand ul li{
  padding: 5px;
}

.expand ul li a{
    color: white;
    transition: .5s all ease;
    text-decoration: none;
}

.expand ul li a:hover{
    color: #FEBA2A;
}

.toggle-contain.expanded .expand{
  right: 0px;
}

.toggle-contain.expanded .toggle{
  right: 300px;
}
</style>
