<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <app-header></app-header>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <transition name="fade" mode="out-in">
            <router-view style="animation-duration: .25s"></router-view>
          </transition>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <app-footer></app-footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/shared/Footer.vue";
import Header from "@/components/shared/Header.vue";

export default {
  data() {
    return {}
  },
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  created() {
    this.$store.dispatch('initRestaurants');
  }
}
</script>

<style>
.padding-top {
  padding-top: 20px;
}

.padding-top-double {
  padding-top: 40px;
}

.padding-top-sm {
  padding-top: 10px;
}

.padding-bottom-sm {
  padding-bottom: 10px;
}

.padding-bottom {
  padding-bottom: 20px;
}

.padding-top-bottom {
  padding: 20px 0;
}

input.custom-text-input {
  border-radius: .25rem;
  border: 1px solid #2466f5;
  padding: .375rem 1.75rem .375rem .75rem;
}

input.custom-text-input:focus {
  box-shadow: 0 0 0 .05rem #2466f5;
}

input.custom-text-input::placeholder {
  color: #0042d1;
  opacity: 1;
}

select.custom-select {
  border: 1px solid #2466f5;
  color: #0042d1;
}

option {
  background-color: #2466f5;
  color: #0042d1;
}

.custom-focus-effect:focus {
  box-shadow: 0 0 0 .05rem #2466f5;
  border-color: #2466f5;
}

.custom-hover-effect {
  transition: color .35s linear, background-color .35s linear;
}
</style>
