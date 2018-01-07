<template>
  <div class="tab">
    <router-link 
      tag="div"
      v-for="item in tabItems"
      :key="item.id"     
      :to="item.link"
      class="tab-item">
      <span class="tab-link">{{ item.name }}</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'tab',
    props: {
      tabItems: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/variable"

  .tab
    height: 40px
    display: flex
    border-bottom: 1px solid rgba(0,0,0,.1)
    .tab-item
      flex: 1
      font-size: $font-size-medium
      line-height: 40px
      text-align: center
      cursor: pointer
      .tab-link
        position: relative
        padding: 0 5px
        display: inline-block
      &.router-link-active
        color: $color-theme
        .tab-link:after
          content: ""
          position: absolute
          left: 0
          bottom: -1px
          width: 100%
          height: 2px
          background: $color-theme
</style>
