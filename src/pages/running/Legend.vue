<template>
  <div class="legend">
    <div class="legend-title">
      图例
    </div>
    <div>

    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {}
    },
    methods: {},
    mounted: function () {

    },
    beforeDestroy() {

    }
  }
</script>
<style scoped>
  .legend {
    height: 150px;
    width: 150px;
    position: absolute;
    cursor: pointer;
    left: 378px;
    top: 50px;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 10000;
  }

  .legend .legend-title {
    width: 100%;
    height: 25px;
    border-left: 2px solid #1B4C7B;
    padding-left: 10px;
    font-size: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
</style>
