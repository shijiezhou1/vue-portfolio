<template>
  <div class="home">
    <Header />
    <!-- Content here -->
    <div class="showjson">{{ json }}</div>
    <hr>
    <I18n />
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
    </div> -->
    <!-- <b-container>
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
import Header from '@/components/Header.vue';
import I18n from '@/components/HelloI18n.vue';
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      showInfo: true,
      json: null,
      firstAPI: "https://jsonplaceholder.typicode.com/comments",
      secondAPI: "https://raw.githubusercontent.com/typicode/jsonplaceholder/master/data.json"
    };
  },
  name: "home",
  components: {
    Header,
    I18n
  },
  // methods: {
  //   async doThis(){
  //     let comment = await fetch(this.firstAPI);
  //     let json1 = await comment.json();
  //     let post = await fetch(this.secondAPI);
  //     let json2 = await post.json();
  //     return {   
  //       co: json1,
  //       po: json2
  //     }
  //   },
  //   loadJson: function() {
  //     this.showInfo = true;
  //   },
  //   getFireBaseData: function() {
  //     // console.log(defaultApp.name); // "[DEFAULT]"
  //     // console.log(defaultApp); // "[DEFAULT]"
  //   },
  //   getJson: function(){
  //       // var _this = this;
  //       // $.getJSON('https://shijie.000webhostapp.com/test.json', function (json) {
  //       //     _this.json = json;
  //       // });

  //         // $.ajax({
  //         // // url: 'https://cors.io/?http://shijie.000webhostapp.com/test.json',
  //         // url: 'https://shijie.000webhostapp.com/output.php',
  //         // type: "GET", /* or type:"GET" or type:"PUT" */
  //         // dataType: 'json',
  //         // data: {
  //         // },
  //         // success: function (result) {
  //         // console.log(result.posts);    
  //         // _this.json = result;
  //         // },
  //         // error: function () {
  //         // console.log("error");
  //         // }
  //         // });
          
  //         // fetch(this.firstAPI)
  //         // .then(response => response.json())
  //         // .then(json => console.log(json));


  //         // fetch(this.secondAPI)
  //         // .then(response => response.json())
  //         // .then(json => console.log(json));
  //         // console.log('hahaha');
  //       //  this.doThis().
  //       //  then(results => {
  //       //    console.log(`what is the results now : ${JSON.stringify(results)}`);
  //       //  }).catch(err => console.error(err));
  //   },
  // },
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
.home_new {
  color: blue;
}
#featuredMovie {
  width: 100%;
}
.testimage {
  width: 100%;
}
</style>
