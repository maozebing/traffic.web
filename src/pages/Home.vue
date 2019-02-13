<template>
  <div class="home-page">
    <transition name="move" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    data() {
      return {}
    },
    methods: {},
    mounted: function () {

    }
  }
</script>
<style scoped>

</style>
