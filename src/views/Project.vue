<template>
  <div class="project">
    <div class="container">
      <div class="row about_cardStyle">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue"

export default {
  components: {
    Card
  }
};
</script>

<style scoped>
.about_cardStyle{
  margin: 0px auto;
  padding: 10px;
}
</style>