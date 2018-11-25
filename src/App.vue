<template>
  <div id="app">
      <H_eader/>
      <section class="middle">
        <transition>
            <router-view>
            </router-view>
        </transition>
        </section>
     <N_avbar/>
  </div>
  
</template>

<script>
import H_eader from "./components/H_eader";
import N_avbar from "./components/N_avbar";

export default {
  components: {
    H_eader,
    N_avbar
  }
};
</script>

<style>
.middle{
  overflow-x: hidden;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
#app {
  padding-top: 41px;
  padding-bottom: 50px;
}
</style>
