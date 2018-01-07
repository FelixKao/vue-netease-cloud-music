<template>
  <div class="recommend">
    <recommend-disc/> 
    <recommend-latest-songs/>
    <recommend-footer/>
  </div>
</template>

<script>
  import RecommendDisc from './modules/recommend-disc'
  import RecommendLatestSongs from './modules/recommend-latest-songs'
  import RecommendFooter from './modules/recommend-footer'

  export default {
    name: 'recommend',
    components: {
      RecommendDisc,
      RecommendLatestSongs,
      RecommendFooter
    }
  }
</script>

<style lang="stylus" scoped>
</style>
