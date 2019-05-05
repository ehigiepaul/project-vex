<template>
    <div class="">
        <plyr>
            <video src="videofile.ogg" autoplay poster="posterimage.jpg">

            </video>
            <video src="video.mp4" autoplay poster="posterimage.jpg" type="video/mp4">

            </video>
        </plyr>
    </div>
</template>

<script>
import { PlyrVideo } from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';

export default {
    name: 'VideoPlayer',
    components: {
        VuePlyr
    }
}
</script>

<style lang="css">
</style>
