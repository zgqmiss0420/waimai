<template>
  <div class="msite">
    <!--首页头部-->
    <HeaderTop :title='address.name'>
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(smallCategory,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(c,index) in smallCategory" :key="index">
              <div class="food_container">
                <img :src="baseImgPath + c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        baseImgPath:'https://fuss10.elemecdn.com'
      }
    },
    computed :{
      ...mapState(['address','categorys']),

      categorysArr () {
        const categorysArr = []

        let smallCategory = []

        this.categorys.forEach(c => {
          if(smallCategory.length === 0){
            categorysArr.push(smallCategory)
          }
          smallCategory.push(c)

          if(smallCategory.length >= 8) {
            smallCategory = []
          }
        })
        return categorysArr
      }
    },

    mounted () {
      this.$store.dispatch('getShops')

      this.$store.dispatch('getCategorys')
      // 创建Swiper的实例对象, 实现轮播

    },
    watch : {
      categorys () {
        console.log(this);
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true, // 循环轮播
            pagination: {  // 分页器
              el: '.swiper-pagination',
            },
          })
        })
      }
    },

    components: {
      HeaderTop,
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .msite //首页
    width 100%

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
