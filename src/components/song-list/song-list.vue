<template>
  <div v-if="songList.length > 0">
    <router-link tag="div" v-for="song in songList" :key="song.id" to="" class="song-item">
      <div class="song-item-wrapper">
        <div class="song-info">
          <div class="song-name">
            {{ song.name }}
            <span v-if="song.alias !== ''" class="song-alias">({{ song.alias }})</span>
          </div>
          <div class="song-artist-album">
            <!--没找到音质图标是根据哪个字段显示的，这里就随机显示-->
            <i v-if="song.id % 10 > 5" class="song-quality"></i>
            {{ song.artist }} - {{ song.album }}
          </div>
        </div>
        <div class="play-control">
          <span class="play-btn"></span>
        </div>
      </div>    
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'song-list',
    props: {
      songList: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/variable'

  .song-item
    padding-left: 10px    
    .song-item-wrapper
      display: flex
      border-bottom: 1px solid rgba(0, 0, 0, .1)
    .song-info
      padding: 6px 0
      flex: 1 1 auto
      .song-name
        height: 25px
        line-height: 25px
        font-size: $font-size-medium-x
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        word-break: normal
        .song-alias
          color: $color-text-light
      .song-artist-album
        height: 18px
        line-height: 18px
        font-size: $font-size-small-s
        color: $color-text-light
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        word-break: normal
        .song-quality
          display: inline-block
          width: 12px
          height: 8px
          margin-right: 4px
          background: url('http://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28c3767') no-repeat
          background-size: 166px 97px
    .play-control
        padding: 0 10px
        display: flex
        align-items: center
        .play-btn
          width: 22px
          height: 22px
          background: url('http://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28c3767') no-repeat
          background-size: 166px 97px
          background-position: -24px 0
</style>
