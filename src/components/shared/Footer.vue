<template>
  <div class="footer-wrapper padding-top-bottom text-center fixed-bottom">
      <h4><a :href="link">Github</a></h4>
  </div>
</template>

<script>
export default {
  data(){
    return {
      link: 'www.github.com/neshkovac/assignment'
    }
  }
}
</script>

<style scoped>
div.footer-wrapper {
  margin-left: 15px;
  margin-right: 15px;
  z-index: 999;
}
</style>