<template>
  <div>
    <m-title :level="2" title="最新音乐"/>
    <div v-if="songList.length > 0">
      <song-list :songList="songList" />
    </div>
    <div v-else>
      <loading/>
    </div>
  </div> 
</template>

<script>
  import MTitle from '@/components/m-title/m-title'
  import SongList from '@/components/song-list/song-list'
  import Loading from '@/components/loading/loading'
  import { getLatestSongs } from '@/api/recommend'

  export default {
    name: 'recommend-latest-songs',
    components: {
      MTitle,
      SongList,
      Loading
    },
    data () {
      return {
        songList: []
      }
    },
    created () {
      this._getLatestSongs()
    },
    methods: {
      _getLatestSongs: function () {
        getLatestSongs().then((data) => {
          data.result.map(item => {
            const song = {}
            song.id = item.id // id
            song.name = item.song.name // 歌曲名称

            // 获取歌曲别名
            const aliasNames = []
            item.song.alias.map(item => {
              aliasNames.push(item)
            })
            song.alias = aliasNames.join(' / ')

            // 获取歌曲所有演唱者
            const artistNames = []
            item.song.artists.map(artist => {
              artistNames.push(artist.name)
            })
            song.artist = artistNames.join(' / ')

            // 获取歌曲所属专辑名称
            song.album = item.song.album.name
            this.songList.push(song)
          })
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
