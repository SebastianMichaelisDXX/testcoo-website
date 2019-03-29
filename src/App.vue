<template>
  <div id="app">
    <top-nav></top-nav>
    <div class="main">
      <router-view></router-view>
    </div>
    <footer-nav></footer-nav>
    <!-- <div class="top" @click='backtotop' v-show="totop">
      <img src="" alt="top">
    </div> -->
  </div>
</template>

<script>
import TopNav from '@/components/TopNav'
import FooterNav from '@/components/FooterNav'
export default {
  name: 'app',
  data () {
    return {
      totop: false,
    }
  },
  components: {
    TopNav,
    FooterNav
  },
  methods:{
    handleScroll (e) {
      console.log('滚动了啊')
      let s = document.querySelector('.s-left')
      
      if (this.$route.name == 'home') {
        // console.log(window.scrollY)
        if(window.scrollY >= 100){
          this.$store.commit('BG_SHOW_NAV')
        } else {
          this.$store.commit('BG_HIDE_NAV')
        }
      } else {
        this.$store.commit('BG_SHOW_NAV')
      }
      if (window.scrollY >= 1000) {
        this.totop = true
      } else {
        this.totop = false
      }
    },
    backtotop () {
        var timer = setInterval(() => {
        let h = document.documentElement.scrollTop || document.body.scrollTop;
        let nowH = h
        var speed = (0 - nowH) / 5;                     // 随着高度减速  
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);  
        if (h === 0) {                          //当前高度为零,停止这次计时器  
          clearInterval(timer);                             // C1  
        }
        document.documentElement.scrollTop = h + speed
        document.body.scrollTop = h + speed
      }, 30)
    },
  },
  mounted() {
    this.$nextTick ( () => {
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="less">
#app {
  min-width: 1115px;
  .main{
    
  }
}
</style>
