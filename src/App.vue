<template>
  <div id="app">
    <m-header/>
    <m-tab :tabItems="tabItems" />
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import MHeader from '@/components/m-header/m-header'
  import MTab from '@/components/m-tab/m-tab'

  export default {
    name: 'app',
    components: {
      MHeader,
      MTab
    },
    data () {
      return {
        tabItems: [
          {
            id: 0,
            name: '推荐音乐',
            link: '/recommend'
          },
          {
            id: 1,
            name: '热歌榜',
            link: '/rank'
          },
          {
            id: 2,
            name: '搜索',
            link: '/search'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
