<template>
  <div class="modal-component-wrapper">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container text-center">
            <div class="modal-header">
              <h3 class="restaurant-name">{{ modalData.name }}</h3>
            </div>
            <div class="modal-content">
              <div class="modal-body">
                <h5 class="restaurant-cuisine">Cuisine origin:
                  {{ modalData.cuisine }}
                </h5>
              </div>
              <div class="modal-body">
                <h5 class="restaurant-location">Located in:
                  {{ modalData.location }}
                </h5>
              </div>
              <div class="modal-footer">
                <button class="btn btn-dark custom-hover-effect" @click="$emit('close')">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['modalData']
}
</script>

<style scoped>
.modal-component-wrapper {
  cursor: pointer;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  text-align: left;
}

.modal-header h3 {
  color: #000000;
  margin: 0 auto;
  font-weight: bold;
}
button.btn-dark:hover {
  background-color: #ffffff;
  color: #000000;
}
.modal-body {
  margin: 10px 0;
}

button.btn-dark {
  margin: 0 auto;
  padding: 10px 20px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}
.modal-content{
  border: 1px solid #343a40;
}
.modal-footer{
  border-top: 1px solid #343a40;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>