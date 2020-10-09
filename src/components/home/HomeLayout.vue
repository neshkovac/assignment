<template>
  <div class="padding-top-bottom">
    <app-restaurants-listed-out></app-restaurants-listed-out>
  </div>
</template>

<script>
import RestaurantsListedOut from "@/components/home/RestaurantsListedOut.vue";
export default {
  components: {
    appRestaurantsListedOut: RestaurantsListedOut
  },
  name: 'home-layout'
}
</script>

<style scoped>

</style>