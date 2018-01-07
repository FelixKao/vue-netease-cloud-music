<script>
  export default {
    name: 'm-title',
    props: {
      level: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    },
    render: function (createElement) {
      return createElement(
        'h' + this.level,
        {
          'class': {
            title: true
          }
        },
        this.title
      )
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/variable"

  .title
    padding-left: 9px
    margin: 20px 0 14px 0
    font-size: $font-size-medium-x
    height: 20px
    lineHeight: 20px
    border-left: 2px solid $color-theme
</style>
