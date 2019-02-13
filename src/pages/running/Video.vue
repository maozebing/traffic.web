<template>
  <div class="video">
    <div class="video-control-button" title="视频列表" v-show="!showVideoList" @click="showVideoList=true"></div>
    <div class="video-list" v-show="showVideoList">
      <Tabs type="card" class="video-list-card">
        <Tab-pane label="视频列表" class="video-list-card">
          <div class="video-list-content" :style="{height: contentHeight+'px'}">
            <div class="video-list-content-body" v-for="item in videoData" @click="playVideo(item)">
              <img class="video-list-content-img" :src="item.videoPicture"/>
              <img class="video-list-content-play" src="../../../static/images/play.png"/>
              <div class="video-list-content-title">{{item.name}}</div>
            </div>
          </div>
        </Tab-pane>
        <Button @click="showVideoList=false" size="small" slot="extra">收起</Button>
      </Tabs>
    </div>
    <Modal
      v-model="videoModal"
      title="路况直播"
      footer-hide
      transfer>
      <div>
        <p class="video-list-modal-font">{{vidwoSelected.name}}</p>
        <video :src="vidwoSelected.videoUri" width="100%" height="300" controls autoplay></video>
      </div>
    </Modal>
  </div>
</template>
<script>
  import {api_getVideos} from '../../axios/api/traffic_api'

  export default {
    components: {},
    data() {
      return {
        contentHeight: 0,
        showVideoList: false,
        videoData: [],
        videoModal: false,
        vidwoSelected: {}
      }
    },
    methods: {
      refreshTabPannelHeight() {
        this.contentHeight = this.$parent.$parent.$el.offsetHeight - 98;
      },
      initData() {
        api_getVideos({
          pageIndex: 1
        }).then(res => {
          //格式化时间
          res.data.forEach(v => {
            if (new Date(v.occtime) >= this.$moment(new Date()).startOf('day')) {
              v.time = this.$moment(new Date(v.occtime)).format("HH:mm")
            } else if (new Date(v.occtime) >= this.$moment(new Date()).subtract(1, 'days').startOf('day')) {
              v.time = '昨天'
            } else if (new Date(v.occtime) >= this.$moment(new Date()).subtract(2, 'days').startOf('day')) {
              v.time = '前天'
            } else {
              v.time = '更早'
            }
          });
          //时间排序
          res.data.sort(function (a, b) {
            return new Date(a.occtime) < new Date(b.occtime) ? 1 : -1;
          });
          //赋值
          this.videoData = res.data;
        }).catch(err => {
        });
      },
      playVideo(item) {
        console.log(item)
        this.videoModal = true;
        this.vidwoSelected = item;
      }
    },
    mounted: function () {
      this.$root.$on('fullScreen', this.refreshTabPannelHeight);
      this.$nextTick(function () {
        this.refreshTabPannelHeight()
        this.initData()
      })
    },
    beforeDestroy() {
      this.$root.$off('fullScreen');
    }
  }
</script>
<style scoped>
  @import url("../../assets/css/running-video.css");
</style>
<style>
  .ivu-tabs-bar {
    border-bottom: 1px solid #dddee1;
    margin-bottom: 10px !important;
  }

  .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    margin: 0;
    height: 31px;
    padding: 5px 18px 4px;
    border: 0 !important;
    border-radius: 0 !important;
    transition: all .3s ease-in-out;
    background: #f8f8f9;
  }

  .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
    height: 32px;
    padding-bottom: 5px;
    background: #1B4C7B;
    transform: translateZ(0);
    color: #ffffff;
  }

  .ivu-tabs-nav-container:focus .ivu-tabs-tab-focused {
    /*border-color: #57a3f3!important;*/
  }

  .ivu-tabs-nav-right {
    float: right;
    margin-left: 5px;
    margin-top: 3px;
  }
</style>
