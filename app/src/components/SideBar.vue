 <template>
   <div class="sidebar left w-200">
      <nav role="navigation">
          <div class="sidebar logo">
              <h2 class="brand vex"><u>VEX</u></h2>
          </div>
          <div class="d-flex center p-1 rm-b">
              <img src="../assets/img/default-avatar.jpg" class="img circle" width="100" height="100">
          </div>
          <div class="d-flex center">
              <p class="sidebar profile-info m rm-t rm-b">{{ username }}</p>
          </div>
          <div class="d-flex center p-fixed-t-6 p-fixed-b-6">
              <div class="prog-bar-light-grey prog-bar-round-xlarge">
                  <div class="prog-bar-container prog-bar-grey prog-bar-round-xlarge" style="width:25%"></div>
              </div>
          </div>
          <div class="d-flex center">
              <p class="sidebar vex points m rm-t rm-b">{{ vexPoints }}</p>
          </div>
          <div class="d-flex center p-1 p rm-b">
              <span class="fa fa-search"></span>
              <input type="text" name="search" placeholder="Search" class="search" v-model="searchMessage" @keyup="updateSearchMessage" @focus="updateFocus" @blur="updateFocus">
          </div>
          <div class="d-flex col">
            <div class="container grow-1">
                <ul class="sidebar menu items p rm">
                    <li><router-link :to="{ name: 'home' }" class="active">Home</router-link></li>
                    <li><router-link :to="{ name: 'discover' }">Discover</router-link></li>
                    <li><router-link :to="{ name: 'trending' }">Trending</router-link></li>
                    <li><router-link :to="{ name: 'movies' }">Movies</router-link><li>
                    <!-- <li><router-link :to="{ name: 'movieInfo', params: { id: 123 } }">Movies</router-link><li> -->
                    <li><router-link :to="{ name: 'series' }">Series</router-link></li>
                    <li><router-link :to="{ name: 'educational' }">Educational</router-link></li>
                    <li><router-link :to="{ name: 'aunRadio' }">AUN Radio</router-link></li>
                    <li><router-link :to="{ name: 'chat' }">Chat</router-link></li>
                </ul>
            </div>
            <div class="no-grow sidebar-footer bg brown-grey">
                <ul class="sidebar menu items acct p-fixed-l-40 p rm">
                    <li><router-link :to="{ name: 'userSettings' }">User Settings</router-link></li>
                    <li><router-link :to="{ name: 'subscription' }">Subscription</router-link></li>
                    <li><router-link :to="{ name: 'rewards' }">Rewards</router-link></li>
                    <li><router-link :to="{ name: 'request' }">Request</router-link></li>
                    <li><router-link :to="{ name: 'login'}">Logout</router-link></li>
                </ul>
            </div>
          </div>
      </nav>
    </div>
 </template>

 <script>
 export default {
   name: 'SideBar',
   props: {
     msg: String
   },
   data(){
     return {
       username: "Edward Rajah",
       vexPoints: 500,
       isFocused : false,
       searchMessage: ''
     }
   },
   methods: {
        updateSearchMessage (event) {
          this.$emit('updateSearchMessage', this.searchMessage);
        },
        updateFocus (event) {
          this.isFocused = !this.isFocused
          console.log('focused')
          this.$emit('updateFocus', this.isFocused)
        }
   }
 }
 </script>
