<template>
  <div>
    <m-title :level="2" title="推荐歌单"/>
    <div v-if="discList.length > 0">
      <disc-list :discList="discList" />
    </div>
    <div v-else>
      <loading/>
    </div>
  </div> 
</template>

<script>
  import MTitle from '@/components/m-title/m-title'
  import DiscList from '@/components/disc-list/disc-list'
  import Loading from '@/components/loading/loading'
  import { getDisc } from '@/api/recommend'

  export default {
    name: 'recommend-disc',
    components: {
      MTitle,
      DiscList,
      Loading
    },
    data () {
      return {
        discList: []
      }
    },
    created () {
      this._getDisc()
    },
    methods: {
      _getDisc: function () {
        getDisc().then(data => {
          this.discList = data
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
