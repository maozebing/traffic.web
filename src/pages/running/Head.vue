<template>
  <div class="head">
    <div class="head-title">
      <div class="head-title-content">甘肃省路网实时路况</div>
    </div>
  </div>
</template>
<style scoped>
  .head {
    position: absolute;
    width: 100%;
    height: 40px;
    z-index: 10000;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 4px 4px #969696; /*opera或ie9*/
    -moz-box-shadow: 0px 4px 4px #969696; /*firefox*/
    -webkit-box-shadow: 0px 4px 4px #969696; /*webkit*/
    /*display: flex;
    float: left;
    justify-content: center;
    align-items: center;*/
  }

  .head-title {
    border-color: #1B4C7B transparent transparent;
    border-style: solid solid none;
    border-width: 40px 40px 0;
    display: block;
    height: 40px;
    width: 400px;
    position: relative;
    margin: auto;
  }

  .head-title-content {
    position: absolute;
    color: #ffffff;
    font-size: 24px;
    top: -38px;
    left: 53px;
  }
</style>
