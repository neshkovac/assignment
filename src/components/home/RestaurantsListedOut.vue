<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-5 offset-md-1 text-center">
          <label for="sortRestaurants">
            Sort by name:
            <select class="custom-select custom-focus-effect"
                    name="sort-restaurants"
                    id="sortRestaurants"
                    @change="sort">
              <option value="asc">Sort asc</option>
              <option value="desc">Sort desc</option>
            </select>
          </label>
        </div>
        <div class="col-md-3 offset-md-1 text-center">
          <label for="searchRestaurants">
            Search:
            <input type="text" id="searchRestaurants"
                   placeholder="Search by name"
                   class="custom-text-input custom-focus-effect form-control"
                   v-model="restaurantsSearch">
          </label>
        </div>
      </div>
      <div class="row padding-top">
        <div class="col-md-6 offset-md-3 text-center">
          <ul class="restaurants-list text-center padding-top"
              v-if="restaurants.length > 0">
            <transition-group name="fade">
              <li :key="restaurant.id" class="restaurants-list-item padding-top-bottom"
                  v-for="restaurant in
      restaurants" @click="passModalData(restaurant)">
                <h5>{{ restaurant.restaurantName }}</h5>
              </li>
            </transition-group>
          </ul>
          <ul class="restaurants-list text-center padding-top" v-else>
            <li class="restaurants-list-item no-restaurants-to-show">
              <h2>We're sorry, no restaurants available. Try again soon!</h2>
            </li>
          </ul>
        </div>
      </div>
      <!--  <button id="show-modal" @click="showModal = true">Show modal</button>-->
      <transition name="fade" mode="out-in">
        <app-restaurant-modal :modal-data="modalData" v-if="showModal"
                              @close="showModal =
    false" style="animation-duration: 0.45s">
        </app-restaurant-modal>
      </transition>
    </div>
  </div>
</template>

<script>
import RestaurantModal from "@/components/home/RestaurantModal.vue";

export default {
  data() {
    return {
      showModal: false,
      restaurantsSorted: false,
      restaurantsSearch: '',
      modalData: {
        name: '',
        cuisine: '',
        location: ''
      }
    }
  },
  computed: {
    restaurants() {
      if (this.restaurantsSearch !== '') {
        let value = this.restaurantsSearch;
        if (!this.restaurantsSorted) {
          return this.checkSearchByName('asc', value);
        } else {
          return this.checkSearchByName('desc', value);
        }
      } else if (!this.restaurantsSorted) {
        return this.$store.getters.getAllRestaurants;
      } else {
        return this.$store.getters.getAllRestaurantsDesc;
      }
    }
  },
  components: {
    appRestaurantModal: RestaurantModal
  },
  methods: {
    sort($event) {
      return this.restaurantsSorted = $event.target.value !== 'asc';
    },
    checkSearchByName(type, value) {
      if (type === 'asc') {
        return this.$store.getters.getAllRestaurants.map(function (x) {
          if (x.restaurantName.toLowerCase().includes(value.toLowerCase())) {
            return x;
          } else {
            return {};
          }
        })
      } else {
        return this.$store.getters.getAllRestaurantsDesc.map(function (x) {
          if (x.restaurantName.toLowerCase().includes(value.toLowerCase())) {
            return x;
          } else {
            return {};
          }
        })
      }
    },
    passModalData(restaurantData) {
      this.modalData.name = restaurantData.restaurantName;
      this.modalData.cuisine = restaurantData.cuisine;
      this.modalData.location = restaurantData.location;
      this.showModal = true;
    }

  }
}
</script>

<style scoped>
ul.restaurants-list {
  list-style-type: none;
}

ul.restaurants-list li.restaurants-list-item {
  box-shadow: 0.35rem 0.05rem 1rem #e1e1e1, 0.2rem 0.3rem 1rem #afafaf;
  background-color: #fafafa;
  color: #1d1f20;
}

ul.restaurants-list li.restaurants-list-item:hover {
  cursor: pointer;
}
</style>