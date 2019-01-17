<template>
  <div class="head">
    <div class="head-title"></div>
    <div class="head-title-content">甘肃省路网实时路况</div>
  </div>
</template>
<style scoped>
  .head {
    position: absolute;
    width: 100%;
    height: 40px;
    z-index: 10000;
    background-color: rgba(255,255,255,0.8);
    box-shadow: 0px 4px 4px #88888860;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .head-title {
    border-color: #1B4C7B transparent transparent;
    border-style: solid solid none;
    border-width: 40px 40px 0;
    display: block;
    height: 40px;
    width: 400px;
  }

  .head-title-content {
    position: absolute;
    color: #ffffff;
    font-size: 24px;
  }
</style>
