<template>
    <div class="footersnav">
        <div class="footersnav_middle">
            <div class="footersnav_info">
                <ul class="SERVICE info_ul">
                    <li class="SERVICE-li title">
                        SERVICE
                    </li>
                    <li class="SERVICE-li">
                        <router-link :to="{ name: 'dynamic' }">Inspection Service</router-link>
                    </li>
                    <li class="SERVICE-li">
                        <router-link :to="{ name: 'dynamic' }">Loading Supervision</router-link>
                    </li>
                    <li class="SERVICE-li">
                        <router-link :to="{ name: 'dynamic' }">Factory Assesment</router-link>
                    </li>
                </ul>
                <ul class="TESTCOO info_ul">
                    <li class="SERVICE-li title">
                        TESTCOO
                    </li>
                    <li class="SERVICE-li">
                        <router-link :to="{ name: 'dynamic' }">About Us</router-link>
                    </li>
                    <li class="SERVICE-li">
                        <router-link :to="{ name: 'dynamic' }">Why Us</router-link>
                    </li>
                    <li class="SERVICE-li">
                        <router-link :to="{ name: 'dynamic' }">Our Exhibitions</router-link>
                    </li>
                </ul>
                <ul class="CONTACT info_ul">
                    <li class="title">CONTACT US</li>
                    <li class="info_li">E-Mail: general@testcoo.com</li>
                    <li class="info_li">Tel: +086 571 8680 8908</li>
                    <li class="info_li">Web: en.testcoo.com</li>
                </ul>
                <ul class="FOLLOW info_ul">
                    <li class="title">FOLLOW US</li>
                    <li>
                        <a href="" title="in" target="_blank"><img scale="1.6" src="../assets/images/in.png" alt=""></a>
                        <a href="" title="in" target="_blank"><img src="../assets/images/f.png" alt=""></a>
                        <a href="" title="in" target="_blank"><img src="../assets/images/T.png" alt=""></a>
                    </li>
                </ul>
            </div>
            <p class="atbottom">
                Testcoo @ 2019
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footersnav',
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.footersnav{
    width:100%;
    // height:266px;
    background:rgba(34,37,49,1);
    .footersnav_middle{
        max-width: 1400px;
        margin: 0 auto;
        padding: 42px 0 0 0;
        .footersnav_info{
            display: -webkit-box; 
            display: -moz-box; 
            display: -webkit-flex; 
            display: -moz-flex;
            display: -ms-flexbox;
            display: flex;
            justify-content: space-between;
            padding: 0 84px 39px;
            border-bottom: 2px solid rgba(51,55,67,1);;
            .info_ul{
                .SERVICE-li{
                    height:18px;
                    line-height:18px;
                    margin-bottom: 16px;
                    cursor: pointer;
                    a{
                        font-size:16px;
                        font-family:Arial;
                        color:rgba(221,221,221,1);
                    }
                }
                .info_li{
                    height:18px;
                    font-size:16px;
                    font-family:Arial;
                    color:rgba(221,221,221,1);
                    line-height:18px;
                    margin-bottom: 16px;
                }
                .title{
                    height:22px;
                    font-size:18px;
                    font-family:Arial;
                    color:rgba(255,255,255,1);
                    line-height:22px;
                    margin-bottom: 20px;
                }
            }
            .FOLLOW{
                a{
                    img{
                        width:36px;
                        height:36px;
                    }
                }
                a:nth-child(2){
                    margin: 0 18px;
                }
            }
        }
        .atbottom{
            height: 55px;
            line-height: 55px;
            text-align: center;
            font-size:16px;
            font-family:Arial;
            color:rgba(255,255,255,1);
            letter-spacing: 2px;
        }
    }
}
</style>

<style lang="less">
// elemenui

</style>



