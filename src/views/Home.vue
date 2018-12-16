<template>
  <div class="home">
    <h1>It is a home page</h1>
    <!-- Content here -->
    <div>
      <b-button href="#">click to show json</b-button>
    </div>
    <div class="showjson">{{ json }}</div>
    <!-- <div class="homepage-video-layer">
      <video
        id="featuredMovie"
        preload="auto"
        loop="loop"
        autoplay="autoplay"
        muted="muted"
        data-themepath="https://www.videvo.net/wp-content/themes/ViDEVO"
      >
        <source
          src="https://www.videvo.net/wp-content/themes/ViDEVO/home-videos/6.mp4"
          type="video/mp4"
        >
        <source
          src="https://www.videvo.net/wp-content/themes/ViDEVO/home-videos/6.webm"
          type="video/webm"
        >
        <source
          src="https://www.videvo.net/wp-content/themes/ViDEVO/home-videos/6.ogv"
          type="video/ogg"
        >Your browser does not support the html video player.
      </video>
    </div>
    <b-container>
      <b-row>
        <b-col cols="3">
          <img
            class="testimage"
            src="https://www.alambassociates.com/wp-content/uploads/2016/10/maxresdefault.jpg"
          >
        </b-col>
        <b-col cols="8">
          <img
            class="testimage"
            src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ce2ece60-9b32-11e6-95ab-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg"
          >
        </b-col>
      </b-row>
    </b-container> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      showInfo: true,
      json: null
    };
  },
  name: "home",
  components: {
    // HelloWorld
  },
  methods: {
   
    loadJson: function() {
      this.showInfo = true;
    },
    getFireBaseData: function() {
      // console.log(defaultApp.name); // "[DEFAULT]"
      // console.log(defaultApp); // "[DEFAULT]"
    },
    getJson: function(){
        // var _this = this;
        // $.getJSON('https://shijie.000webhostapp.com/test.json', function (json) {
        //     _this.json = json;
        // });

          // $.ajax({
          // // url: 'https://cors.io/?http://shijie.000webhostapp.com/test.json',
          // url: 'https://shijie.000webhostapp.com/output.php',
          // type: "GET", /* or type:"GET" or type:"PUT" */
          // dataType: 'json',
          // data: {
          // },
          // success: function (result) {
          // console.log(result.posts);    
          // _this.json = result;
          // },
          // error: function () {
          // console.log("error");
          // }
          // });
          
    },
  },
  beforeMount() {
    // this.getFireBaseData();
    // this.getJson();
    // this.loadMongoDB();
  }
};
</script>

<style scoped>
.home {
  height: 800px;
}
.homepage-video-layer {
}
#featuredMovie {
  width: 100%;
}
.testimage {
  width: 100%;
}
</style>
