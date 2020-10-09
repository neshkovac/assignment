<template>
  <div class="admin-form-wrapper padding-top-double">
    <div class="row">
      <div class="col-md-12 offset-md-2">
        <form>
          <div class="form-group row padding-bottom-sm">
            <label for="restaurantName" class="col-sm-2 col-form-label">Restaurant
              name</label>
            <div class="col-sm-5">
              <input type="text"
                     class="form-control custom-text-input custom-focus-effect"
                     id="restaurantName"
                     placeholder="Restaurant name"
                     data-error="Restaurant name"
                     v-model="newRestaurantData.restaurantName"
                     @input="validateInput">
            </div>
          </div>
          <div class="form-group row padding-bottom-sm">
            <label for="cuisineOrigin" class="col-sm-2 col-form-label">Cuisine
              origin</label>
            <div class="col-sm-5">
              <input type="text"
                     class="form-control custom-text-input custom-focus-effect"
                     id="cuisineOrigin"
                     placeholder="Cuisine origin"
                     data-error="Cuisine origin"
                     v-model="newRestaurantData.cuisine"
                     @input="validateInput">
            </div>
          </div>
          <div class="form-group row">
            <label for="restaurantLocation" class="col-sm-2 col-form-label">Restaurant
              location</label>
            <div class="col-sm-5">
              <input type="text"
                     class="form-control custom-text-input custom-focus-effect"
                     id="restaurantLocation"
                     placeholder="Restaurant location"
                     data-error="Restaurant location"
                     v-model="newRestaurantData.location"
                     @input="validateInput">
            </div>
          </div>
        </form>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div class="row padding-top-sm form-data-wrapper form-data-wrapper-primary"
           v-if="!this.formErrors.length">
        <div class="col-md-12">
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-6 offset-md-3">
              <button @click.prevent="submitForm"
                      :disabled="buttonDisabled"
                      v-if="!formErrors.length"
                      class="btn btn-dark custom-hover-effect">
                Add restaurant
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <ul class="admin-form-errors-list">
          <li value="" :key="i" class="admin-form-errors-list-item" v-for="(error,i) in
            formErrors">
            <h3>Please enter a valid value in {{ error }} field.</h3>
          </li>
        </ul>
      </div>
    </transition>
    <transition mode="out-in" name="fade">
      <div v-if="formSubmitted"
           class="form-data-wrapper
           form-data-wrapper-secondary
           text-center
           padding-top-bottom">
        <h3>New restaurant has been successfully added.</h3>
        <button class="btn btn-dark custom-hover-effect" @click="addAnotherRestaurant">
          Add another one
        </button>
        <button class="btn btn-dark custom-hover-effect"
        @click="goToHome">Go back to home</button>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  data() {
    return {
      newRestaurantData: {
        id: this.$store.getters.getLastEnteredId + 1,
        restaurantName: '',
        cuisine: '',
        location: ''
      },
      formErrors: [],
      formSubmitted: false,
      buttonDisabled: true
    }
  },
  methods: {
    submitForm() {
      if (this.validateForm) {
        this.$store.dispatch('addNewRestaurant', this.newRestaurantData);
        this.formSubmitted = true;
      }
    },
    clearInputs() {
      this.newRestaurantData.restaurantName = '';
      this.newRestaurantData.cuisine = '';
      this.newRestaurantData.location = '';
    },
    addAnotherRestaurant() {
      this.clearInputs();
      this.formSubmitted = false;
    },
    validateInput($event) {
      let value = $event.target.value;
      let error = $event.target.dataset.error;
      let regex = /^[a-zA-Z]{3,}(\d|\s)*[a-zA-Z]*$/;
      if (value !== '' && regex.test(value)) {
        if (this.formErrors.includes(error)) {
          this.formErrors.splice(this.formErrors.indexOf(error), 1);
        } else if (!this.formErrors.length &&
            this.newRestaurantData.restaurantName !== '' &&
            this.newRestaurantData.cuisine !== '' &&
            this.newRestaurantData.location !== '') {
          this.buttonDisabled = false;
        }
      } else {
        if (!this.formErrors.includes(error)) {
          this.formErrors.push(error);
        }
      }
    },
    validateForm() {
      return this.formErrors.length;
    },
    goToHome(){
      this.$router.push({name:'home-layout'})
    }
  }
}
</script>

<style scoped>
button.btn-dark {
  background-color: #000000;
}

button.btn-dark:hover {
  background-color: #ffffff;
  color: #000000;
}
</style>