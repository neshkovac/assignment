<template>
  <div class="navigation-wrapper padding-top-bottom text-center">
    <div class="row">
      <div class="col-md-2 offset-md-5">
        <label for="navigationLinks">
          Navigate
        </label>
        <select name="navigation-links" id="navigationLinks" @change="changeRoute"
                class="custom-select text-center custom-focus-effect">
          <option class="custom-hover-effect"
                  :key="link.id"
                  v-for="link in links"
                  :value="link.name">
            {{ link.text }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          text: 'Home',
          name: 'home-layout'
        },
        {
          id: 2,
          text: 'Admin',
          name: 'admin-page-layout'
        }
      ]
    }
  },
  methods: {
    changeRoute($event) {
      this.$router.push({name: $event.target.value})
    }
  }
}
</script>

<style scoped>
div.navigation-wrapper {
}
</style>