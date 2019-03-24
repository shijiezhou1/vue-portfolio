<template>
  <div class="about">
    <b-container>
      <div class="logo-wrap mb-3">
        <a href="https://www.shijiezhou.com"><img
            alt="SZ logo"
            class="szlogo"
            src="../assets/logo_j.svg"
          ></a>
      </div>
      <div class="about-text">Shijie Zhou studies at University of California, San Diego in the Interdisciplinary Computer in Arts. He is also the member for design and construct web developer at the Worldview project organization.
        He was working on programming artist and digital image designer at the Digital Gym Cinema. He obtains Associate degree in Green River College, and also finish the B.A. degree at UCSD.
        He gained experience in media use and computer art. He also familiar with web design and selling ebay stuffs at leisure time..
      </div>
    </b-container>
    <section id="footer mt-3">
      <div class="">
        © Copyright Agency and contributors 2013 - {{new Date().getFullYear()}} - All Rights Reserved by -
        <a href="https://www.shijiezhou.com">Shijie Zhou</a>
      </div>
      <div class="clear"></div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.about {
  height: 800px;
}
.about-text {
  text-align: center;
}
.szlogo {
  width: 100px;
  height: 95px;
  border: 2px solid lightskyblue;
}
.szlogo:hover {
  -webkit-filter: invert(60%) !important;
}
</style>