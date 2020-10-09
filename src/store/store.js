import Vue from 'vue';
import Vuex from 'vuex';
import dummyRestaurants from "@/data/dummyRestaurants.json";

Vue.use(Vuex)

const state = {
    restaurants: [],
    lastEnteredId: 0
}

const actions = {
    loadData({commit}) {
        const restaurants = JSON.parse(localStorage.getItem('restaurants'));
        if (restaurants.length) {
            commit('SET_RESTAURANTS', restaurants);
        }
    },
    addNewRestaurant({commit,getters}, restaurantDetails) {
        if (restaurantDetails.id !== 0 && restaurantDetails.name !== '') {
            commit('ADD_NEW_RESTAURANT', restaurantDetails);
            const newRestaurants = getters.getAllRestaurants;
            localStorage.setItem('restaurants',JSON.stringify(newRestaurants));
        }
    },
    initRestaurants({commit}) {
        localStorage.setItem('restaurants', JSON.stringify(dummyRestaurants));
        commit('SET_RESTAURANTS', dummyRestaurants);
    }
}

const mutations = {
    'SET_RESTAURANTS'(state, restaurants) {
        state.restaurants = restaurants;
    },
    'ADD_NEW_RESTAURANT'(state, restaurantDetails) {
        state.restaurants.push({
            id: restaurantDetails.id,
            restaurantName: restaurantDetails.restaurantName,
            cuisine: restaurantDetails.cuisine,
            location: restaurantDetails.location
        });
    }
}

const getters = {
    getAllRestaurants(state) {
        if (state.restaurants.length < 0) {
            return [];
        } else {
            return state.restaurants.sort((a,b) => {
                return a.restaurantName.localeCompare(b.restaurantName);
            });
        }
     }
     ,
    getAllRestaurantsDesc(state) {
        if (state.restaurants.length < 0) {
            return [];
        } else {
            return state.restaurants.sort((a,b)=> {
                return b.restaurantName.localeCompare(a.restaurantName);
            });
        }
    },
    getLastEnteredId(state){
        const ids = state.restaurants.sort((a,b) => {
            return b.id - a.id;
        });
        return parseInt(ids[0].id);
    }
}


export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});

