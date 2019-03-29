<template>
    <div class="TopNav" v-show="GET_NAV_SHOW" :class="[{ isHome: GET_IS_HOME }]">
        <div class="menus">
            <div class="logo">
                <!-- <router-link> -->
                    <img src="@/assets/images/logo.png" alt="">
                <!-- </router-link> -->
            </div>
            <div class="navBar">
                <ul class="navBarUl">
                    <li class="navBarli">HOME</li>
                    <li
                    class="navBarUl-Our navBarli"
                    @mouseenter.prevent="ServiceShow = true" 
                    @mouseleave.prevent="ServiceShow = false"
                    >
                    Our Service
                    <el-collapse-transition>
                        <div v-show="ServiceShow" class="showit transition-box">
                            <div class="showit-box">
                                <ul class="item">
                                    <li class="item-li">
                                        Product quality control
                                    </li>
                                    <li class="item-li Our-s">
                                    <router-link :to="{ name: 'articles' }">Initial Production Check</router-link>
                                    </li>
                                    <li class="item-li Our-s">
                                    <router-link :to="{ name: 'articles' }">During Production Inspection</router-link>
                                    </li>
                                    <li class="item-li Our-s">
                                    <router-link :to="{ name: 'articles' }">Final Random Inspection</router-link>
                                    </li>
                                    <li class="item-li Our-s">
                                    <router-link :to="{ name: 'articles' }">Loading Surpervison</router-link>
                                    </li>
                                    <li class="item-li Our-s">
                                    <router-link :to="{ name: 'articles' }">Sampling Picking Service</router-link>
                                    </li>
                                    <li class="item-li Our-s">
                                    <router-link :to="{ name: 'articles' }">100% Inspection</router-link>
                                    </li>
                                    <li class="item-li Our-s">
                                    <router-link :to="{ name: 'articles' }">Industrial Inspection</router-link>
                                    </li>
                                </ul>
                                <ul class="item">
                                    <li class="item-li">
                                        Select a good supplier
                                    </li>
                                    <li class="item-li Our-s">
                                    <router-link :to="{ name: 'articles' }">Factory Assessment service</router-link>
                                    </li>
                                </ul>
                                <ul class="item">
                                    <li class="item-li">
                                        Price&details
                                    </li>
                                    <li class="item-li Our-s">
                                    <router-link :to="{ name: 'articles' }">Our service price</router-link>
                                    </li>
                                    <li class="item-li Our-s">
                                    <router-link :to="{ name: 'articles' }">Our inspector coverage</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </el-collapse-transition>
                    </li>
                    <li 
                    class="navBarUl-Test navBarli"
                    @mouseenter.prevent="TestcooShow = true" 
                    @mouseleave.prevent="TestcooShow = false"
                    >
                    Why Testcoo
                    <el-collapse-transition>
                        <div v-show="TestcooShow" class="showit transition-box">
                            <div class="showit-box">
                                <ul class="item">
                                    <li class="item-li">
                                        Why us
                                    </li>
                                    <li class="item-li Our-s">
                                    <router-link :to="{ name: 'articles' }">Testcoo advantages & QC management</router-link>
                                    </li>
                                </ul>
                                <ul class="item">
                                    <li class="item-li">
                                        Q&A
                                    </li>
                                    <!-- <li class="item-li Our-s">
                                    <router-link :to="{ name: 'articles' }">Factory Assessment service</router-link>
                                    </li> -->
                                </ul>
                            </div>
                        </div>
                    </el-collapse-transition>
                    </li>
                    <li class="navBarUl-About navBarli"
                    @mouseenter.prevent="AboutShow = true" 
                    @mouseleave.prevent="AboutShow = false"
                    >
                    About us
                    <el-collapse-transition>
                        <div v-show="AboutShow" class="showit transition-box">
                            <div class="showit-box">
                                <ul class="item">
                                    <li class="item-li">
                                        About Testcoo
                                    </li>
                                    <li class="item-li Our-s">
                                    <router-link :to="{ name: 'articles' }">Who we are</router-link>
                                    </li>
                                </ul>
                                <ul class="item">
                                    <li class="item-li">
                                        Intelligent Platform
                                    </li>
                                    <li class="item-li Our-s">
                                    <router-link :to="{ name: 'articles' }">How to make order on Testcoo</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </el-collapse-transition>
                    </li>
                    <li class="navBarli">Contact us</li>
                </ul>
            </div>
            <div class="createAccount">
                <p>Chinese</p>
                <p>My System</p>
                <p class="createAccount-p">Create Your Account <span></span></p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'TopNav',
    data() {
        return {
            ServiceShow: false,
            TestcooShow: false,
            AboutShow: false,
        }
    },
    computed: {
    ...mapGetters ([
      'GET_NAV_SHOW',
      'GET_IS_HOME',
    //   'GET_LOGIN_STATUS'
    ])
  },
}
</script>

<style lang="less" scoped>
.TopNav{
    height:67px;
    position: fixed;
    top: 0;
    background: transparent;
    width: 100%;
    transition: all 0.45s;
    z-index: 9;
    padding-top:23px;
    // background:rgba(51,55,67,1);
    .menus{
        max-width: 1400px;
        box-sizing: border-box;
        margin: 0 auto;
        // display: flex;
        // justify-content: space-around;
        overflow: hidden;
        .logo{
            margin-right:5.72%;
            height:49px;
            overflow: hidden;
            // -webkit-flex: 1;
            float: left;
            padding-top:9px;
            cursor: pointer;
        }
        .navBar{
            // display: flex;
            float:left;
            .navBarUl{
                font-size:14px;
                padding:14px 0 0 0;
                overflow: hidden;
                float:left;
                font-family:Helvetica Neue;
                // margin-right:14%;
                .navBarli{
                    float:left;
                    // line-height: 90px;
                    margin:0 20px;
                    // height:53px;
                    padding-bottom:10px;
                    cursor: pointer;
                    color: rgba(255,255,255,1);
                    // box-sizing: border-box; 
                }
                .navBarli:nth-child(1){
                    color:rgba(255,168,0,1);
                    border-bottom:2px solid rgba(255,168,0,1);
                }
                .navBarUl-Our,.navBarUl-Test,.navBarUl-About{
                    .showit{
                        position: absolute;
                        left: 0;
                        top: 90px;
                        // min-width:868px;
                        width:100%;
                        // height:340px;
                        background:rgba(239,243,246,1);
                        .showit-box{
                            max-width: 939px;
                            margin: 0 auto;
                            padding:38px 0 74px 0;
                            overflow: hidden;
                            .item{
                                float:left;
                                margin-right: 9.5%;
                                .item-li{
                                    float:none;
                                    transition: all 0.45s;
                                    -webkit-transition: all 0.45s;
                                    -moz-transition: all 0.45s;
                                    margin-bottom:12px;
                                    a{
                                        font-size:14px;
                                        color:rgba(102,102,102,1);
                                    }
                                }
                                .item-li:nth-child(1){
                                    font-size:20px;
                                    color:rgba(51,51,51,1);
                                    margin-bottom: 15px;
                                }
                                .Our-s:hover a{
                                    color:rgba(255,165,0,1);
                                }
                            // padding-left: 20px;
                            }
                            .item:last-child{
                                margin-right:0;
                            }
                        }
                    }
                }
                .navBarli:hover{
                    color:rgba(255,168,0,1);
                    // margin
                    border-bottom:2px solid rgba(255,168,0,1);
                }
            }
        }
        .createAccount{
            float:right;
            // line-height: 67px;
            p{
                float:left;
                cursor: pointer;
                color:rgba(255,255,255,1);
            }
            p:nth-child(1){
                padding-top:15px;
            }
            p:nth-child(2){
                padding-top:15px;
                margin:0 20px;
            }
            .createAccount-p{
                width:185px;
                height:46px;
                line-height: 46px;
                text-align: center;
                color: rgba(255,168,0,1);
                border-radius:23px;
                border:1px solid rgba(255,168,0,1);
                position: relative;
                span{
                    display: inline-block;
                    width:185px;
                    height:46px;
                    border-radius:23px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background:rgba(255,165,0,1);
                    opacity: 0;
                    
                }
            }
            .createAccount-p:hover span{
                opacity: .2;
            }
        }
    }
}
.isHome{
        background: rgba(51,55,67,1) ;
        // padding-top: 23px ; 
    }

</style>


