<template>
    <section class="Home">
        <div class="banner">
            <!-- <p class="banner_Get">
                Get Started
            </p> -->
        </div>
        <div class="banner_Exhibitions">
            <div class="banner_Exhibitions_mid">
                <div class="banner_Exhibitions_mid_T">
                    <p>Upcoming Exhibitions</p>
                    <p>2 0 1 9</p>
                </div>
                <div class="figure">
                    <el-carousel height="104px" :interval="0" arrow="always">
                        <el-carousel-item v-for="item in 5" :key="item">
                        <!-- <h3>{{ item }}</h3> -->
                        <ul class="figure_ul">
                            <li>
                                <p>The 125th Canton Fair</p>
                                <p>Time: 15 APR-05 May,2019</p>
                            </li>
                            <li class="figure_li_mid"></li>
                            <li>
                                <p>Denver Outdoor Retailer Summer Market</p>
                                <p>Time: 18-20 JUN,2019</p>
                            </li>
                        </ul>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>
        <div class="banner_Advantages">
            <div class="middle">
                <div class="title">
                    <p>Our Advantages</p>
                    <p>More <i class="iconfont"></i></p>
                </div>
                <div class="Testcoo">
                    <div class="QC coo">
                        <div class="bg_opacity">
                            <img class="coo_img" src="@/assets/images/QC.png" alt="">
                            <p class="coo_title">Testcoo QC</p>
                            <p class="Rung"><span></span></p>
                            <p>15,000+ inspectors based at 10+</p>
                            <p>countries like China, Thailand, Indonesia,</p>
                            <p>Malaysia, Korea, Cambodia, Pakistan,</p>
                            <p>India, Bangladesh, Vietnam, Philippines</p>
                            <p>and Turkey, etc.</p>
                            <p class="click">Pick My QC</p>
                        </div>
                    </div>
                    <div class="Platform coo">
                        <div class="bg_opacity">
                            <img class="coo_img" src="@/assets/images/Platform.png" alt="">
                            <p class="coo_title">Intelligent Platform</p>
                            <p class="Rung"><span></span></p>
                            <p>Testcoo platform, trusted by 2000+</p>
                            <p>brands, retailers and importers helps</p>
                            <p>manage your supplier chain, supervises</p>
                            <p>whole inspection process.</p>
                            <p class="click">Book Now</p>
                        </div>
                    </div>
                    <div class="Clients coo">
                        <div class="bg_opacity">
                            <img class="coo_img" src="@/assets/images/Clients.png" alt="">
                            <p class="coo_title">Testcoo Clients</p>
                            <p class="Rung"><span></span></p>
                            <p>$119/MD for Inspection in China, 5</p>
                            <p>minutes to make a online order,get order</p>
                            <p>scheduled and receive report fastest</p>
                            <p>within 24 hours in international</p>
                            <p>standards.</p>
                            <p class="click">Schedule Order</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner_Service">
            <div class="middle">
                <div class="title">
                    <p>Our Service</p>
                    <p>More <i class="iconfont"></i></p>
                </div>
                <div class="Service_mid">
                    <div class="Service_mid_show">
                        <p class="Service_img1"></p>
                        <p class="Service_title">Product Inspection</p>
                        <p class="Service_bg"></p>
                    </div>
                    <div class="Service_mid_show">
                        <p class="Service_img2"></p>
                        <p class="Service_title">Factory Assesment</p>
                        <p class="Service_bg"></p>
                    </div>
                    <div class="Service_mid_show">
                        <p class="Service_img3"></p>
                        <p class="Service_title">Loading Supervision</p>
                        <p class="Service_bg"></p>
                    </div>
                    <div class="Service_mid_show">
                        <p class="Service_img4"></p>
                        <p class="Service_title">Industrial Inspection</p>
                        <p class="Service_bg"></p>
                    </div>
                </div>
                <div class="Service_download">
                    <p>Download Sample report</p>
                </div>
            </div>
        </div>
        <div class="banner_Book">
            <div class="middle">
                <div class="title">
                    <p>Book Inspection on Testcoo</p>
                </div>
                <div class="step_img">
                    <p class="orderStep1"></p>
                    <p class="jt"> <i class="iconfont icon-icon1"></i> </p>
                    <p class="orderStep2"></p>
                    <p class="jt"><i class="iconfont icon-icon1"></i></p>
                    <p class="orderStep3"></p>
                </div>
                <div class="step_title">
                    <p>
                        <span >First Step</span><span>Click“Create Your Account” Button on Top Right</span>
                    </p>
                    <p>
                        <span>Second Step</span><span>Select "Instant Placing Order "</span>
                    </p>
                    <p>
                        <span>Third Step</span><span>Fullfill Your Infromation and Submit</span>
                    </p>
                </div>
                <div class="Account">
                    <p>Create Your Account</p>
                </div>
            </div>
        </div>
        <div class="banner_AboutUs">
            <div class="middle">
                <div class="title">
                    <p>More About US</p>
                </div>
                <div class="Videos">
                    <video width="1008" height="567" style="cursor:pointer;" poster="../assets/images/video_img.png"  preload="auto" controls="controls"><source src="http://www.youname.com/images/first.ogv" /><source src="http://www.youname.com/images/first.ogg" /></video>
                    <div class="V_aside">
                        <p class="V_aside_title">
                            Company News
                        </p>
                        <div class="V_aside_img">
                            <p class="V_aside_img_t">
                                <img src="" alt="">
                                <span>The 2015 Post-San Diego Comic Con</span>
                                <span>Guide</span>
                            </p>
                            <p class="V_aside_img_t">
                                <img src="" alt="">
                                <span>The 2015 Post-San Diego Comic Con</span>
                                <span>Guide</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="Industry_News">
                    <p class="Industry_News_t">
                        Industry News
                    </p>
                    <div class="Industry_News_img">
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner_Partners">
            <div class="middle">
                <p class="title">
                    Our Partners
                </p>
                <p class="all_Partners">
                    
                </p>  
            </div>
        </div> 
    </section>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {

        }
    },
    components: {

    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.Home{
    .banner{
        width:100%;
        height:699px;
        background-image:url(../assets/images/home_banner.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        // position: relative;
        // padding-top:64.2%;
        cursor: pointer;
        .banner_Get{
            width:250px;
            height:50px;
            background:rgba(255,168,0,1);
            border-radius:25px;
            line-height: 50px;
            text-align: center;
            font-size:20px;
            font-family:Arial;
            color:rgba(255,255,255,1);
            // position: absolute;
            // margin:0 auto;
            // margin-top: 64%;
            // margin-left: 50%;
            // -webkit-transform:translate(-50%,-50%);
        }
    }
    .banner_Exhibitions{
        // width:1920px;
        width: 100%;
        height:104px;
        background:rgba(71,107,164,1);
        border:none;
        .banner_Exhibitions_mid{
            max-width: 1400px;
            height:104px;
            margin: 0 auto;
            .banner_Exhibitions_mid_T{
                width: 28.5%;
                height: 80px;
                padding-top: 24px;
                background:rgba(252,252,252,1);
                float: left;
                p{
                    height:27px;
                    font-size:24px;
                    color:rgba(71,107,164,1);
                    line-height:28px;
                    text-align: center;
                }
                p:nth-child(1){
                    margin-bottom:5px;
                }
            }
            .figure{
                float: left;
                width: 71.4%;
                .figure_ul{
                    padding:24px 0 18px 152px;
                    li{
                        float: left;
                        width: 358px;
                        p{
                            height: 28px;
                            line-height: 28px;
                            font-size:16px;
                            color:rgba(255,255,255,1);
                            margin-bottom: 5px;
                        }
                        p:last-child{
                            margin: 0;
                        }
                    }
                    .figure_li_mid{
                        width: 1px;
                        height: 39px;
                        background: rgba(255,255,255,1);
                        margin:8px 40px 0 0;

                    }
                }
            }
        }
    }
    .banner_Advantages{
        width: 100%;
        padding: 50px 0 64px;
        background:rgba(236,236,236,1);
        .middle{
            max-width: 1400px;
            margin:0 auto;
            .title{
                height: 36px;
                line-height: 36px;
                // text-align: center;
                margin-bottom: 50px;
                p:first-child{
                    float:left;
                    margin-left: 586px;
                    font-size:32px;
                    font-family:Arial;
                    color:rgba(51,51,51,1);
                }
                p:last-child{
                    float: right;
                    color:rgba(51,51,51,1);
                    font-size: 16px;
                    cursor: pointer;
                }
            }
            .Testcoo{
                // overflow: hidden;
                display: -webkit-box; 
                display: -moz-box; 
                display: -webkit-flex; 
                display: -moz-flex;
                display: -ms-flexbox;
                display: flex;
                justify-content: space-between; 
                .coo{
                    // float:left;
                    width:400px;
                    height:457px;
                    text-align: center;
                    padding-top:63px;
                    // background:rgba(255,255,255,1);
                    box-shadow:0px 2px 5px 0px rgba(51,51,51,0.5);
                    border-radius:4px;
                    overflow: hidden;
                    position: relative;
                    cursor: pointer;
                    .bg_opacity{
                        width:400px;
                        height:457px;
                        padding-top:63px;
                        // background:rgba(3,19,44,0.6);
                        // opacity: .6;
                        background:rgba(255,255,255,1);
                        position: absolute;
                        top: 0;
                        left: 0;
                        // z-index: 0;
                        // background-image: url(../assets/images/QC_bg.png);
                        // background-size:cover;
                        // display: none; 
                        .coo_img{
                            width:88px;
                            height:80px;
                            margin-bottom: 22px;
                        }
                        p{
                            height: 16px;
                            line-height: 16px;
                            font-size:14px;
                            font-family:Arial;
                            color:rgba(51,51,51,1);
                            margin-bottom:12px;
                            z-index: 3;
                        }
                        .coo_title{
                            height:33px;
                            font-size:30px;
                            font-family:Arial;
                            color:rgba(51,51,51,1);
                            line-height:33px;
                        }
                        .Rung{
                            text-align: center;
                            span{
                                display: inline-block;
                                width:30px;
                                height:2px;
                                background:rgba(51,51,51,1);
                            }
                        }
                        .click{
                            width:130px;
                            height:40px;
                            background:rgba(255,168,0,1);
                            border-radius:20px;
                            line-height:  40px;
                            text-align: center;
                            font-size:14px;
                            font-family:Arial;
                            color:rgba(255,255,255,1);
                            position: absolute;
                            left:133px;
                            bottom: 32px;
                        }
                    }
                }
                .QC:hover{
                    // background-image: url(../assets/images/QC_bg.png);
                    
                    // background: rgba(3,19,44,0.6);
                    // display: block;
                    background: url(../assets/images/QC_bg.png) left top no-repeat;
                    // background-color:  rgba(3,19,44,0.6);  
                    background-size: cover; 
                }
                .Platform:hover{
                    background: url(../assets/images/Platform_bg.png) left top no-repeat;
                    background-size: cover;
                }
                .Clients:hover{
                    background: url(../assets/images/Clients_bg.png) left top no-repeat;
                    background-size: cover;
                }
                .QC:hover .bg_opacity{
                    background:rgba(3,19,44,0.6);
                }
                .Platform:hover .bg_opacity{
                    background:rgba(3,19,44,0.6);
                }
                .Clients:hover .bg_opacity{
                    background:rgba(3,19,44,0.6);
                }
                .QC:hover p{
                    color:rgba(255,255,255,1);
                }
                .Platform:hover p{
                    color:rgba(255,255,255,1);
                }
                .Clients:hover p{
                    color:rgba(255,255,255,1);
                }
                .QC:hover .coo_title{
                    color:rgba(255,255,255,1);
                }
                .Platform:hover .coo_title{
                    color:rgba(255,255,255,1);
                }
                .Clients:hover .coo_title{
                    color:rgba(255,255,255,1);
                }
                .QC:hover .Rung span{
                    background: rgba(255,255,255,1);
                }
                .Platform:hover .Rung span{
                    background: rgba(255,255,255,1);
                }
                .Clients:hover .Rung span{
                    background: rgba(255,255,255,1);
                }
            }
        }
    }
    .banner_Service{
        width: 100%;
        padding: 60px 0 64px;
        background:rgba(220,220,220,1);
        .middle{
            max-width: 1400px;
            margin:0 auto;
            .title{
                height: 36px;
                line-height: 36px;
                // text-align: center;
                margin-bottom: 60px;
                p:first-child{
                    float:left;
                    margin-left: 586px;
                    font-size:32px;
                    font-family:Arial;
                    color:rgba(51,51,51,1);
                }
                p:last-child{
                    float: right;
                    color:rgba(51,51,51,1);
                    font-size: 16px;
                    cursor: pointer;
                }
            }
        }
        .Service_mid{
            display: -webkit-box; 
            display: -moz-box; 
            display: -webkit-flex; 
            display: -moz-flex;
            display: -ms-flexbox;
            display: flex;
            justify-content: space-between;
            margin-bottom:60px;
            .Service_mid_show{
                width:320px;
                height:370px;
                text-align: center;
                box-shadow:0px 4px 12px 0px rgba(0,0,0,0.1);
                background: rgba(255,255,255,1);
                border-radius:4px;
                overflow: hidden;
                position: relative;
                cursor: pointer;
                .Service_img1{
                    width:100%;
                    height:299px;
                    background:url(../assets/images/pro_pic.png) left top no-repeat;
                    background-size: 100% 100%; 
                }
                .Service_img2{
                    width:100%;
                    height:299px;
                    background:url(../assets/images/factory.png) left top no-repeat;
                    background-size: 100% 100%; 
                }
                .Service_img3{
                    width:100%;
                    height:299px;
                    background:url(../assets/images/loading.png) left top no-repeat;
                    background-size: 100% 100%; 
                }
                .Service_img4{
                    width:100%;
                    height:299px;
                    background:url(../assets/images/indu.png) left top no-repeat;
                    background-size: 100% 100%; 
                }
                .Service_title{
                    width:100%;
                    height:71px;
                    line-height: 71px;
                    text-align: center;
                    font-size:18px;
                    color:rgba(57,60,65,1);
                }
                .Service_bg{
                    position: absolute;
                    width:100%;
                    height:299px;
                    left: 0;
                    top: 0;
                    background:rgba(255,168,0,0.2);
                    display: none;
                }
            }
            .Service_mid_show:hover .Service_bg{
                display:block;
            }
        }
        .Service_download{
            height:50px;
            text-align: center;
            p{
                width:300px;
                height:50px;
                background:rgba(255,168,0,1);
                border-radius:25px;
                font-size:18px;
                font-family:Arial;
                color:rgba(255,255,255,1);
                line-height:50px;
                display:inline-block;
                cursor: pointer;
            }
        }
    }
    .banner_Book{
        width:100%;
        height:555px;
        background: url(../assets/images/Book.png) left top no-repeat;
        background-size: 100% 100%;
        padding:60px 0 65px 0;
        .middle{
            max-width: 1400px;
            margin:0 auto;
            .title{
                height: 36px;
                line-height: 36px;
                // text-align: center;
                margin-bottom: 40px;
                text-align: center;
                p{
                    font-size:32px;
                    font-family:Arial;
                    color:rgba(255,255,255,1);
                    display: inline-block;
                }
            }
            .step_img{
                display: -webkit-box; 
                display: -moz-box; 
                display: -webkit-flex; 
                display: -moz-flex;
                display: -ms-flexbox;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                .orderStep1{
                    width:400px;
                    height:300px;
                    background:url(../assets/images/step1.png) left top no-repeat;
                    background-size: 100% 100%;
                }
                .orderStep2{
                    width:400px;
                    height:300px;
                    background:url(../assets/images/step2.png) left top no-repeat;
                    background-size: 100% 100%;
                }
                .orderStep3{
                    width:400px;
                    height:300px;
                    background:url(../assets/images/step3.png) left top no-repeat;
                    background-size: 100% 100%;
                }
                .jt{
                    width:50px;
                    height:50px;
                    background:rgba(255,255,255,0.5);
                    border-radius:50%;
                    text-align: center;
                    line-height: 50px;
                    color:rgba(255,255,255,1);
                    font-size: 18px;
                }
            }
            .step_title{
                display: -webkit-box; 
                display: -moz-box; 
                display: -webkit-flex; 
                display: -moz-flex;
                display: -ms-flexbox;
                display: flex;
                justify-content: space-between;
                // align-items: center;
                margin-bottom: 60px;
                p{
                    width:400px;
                    text-align: center;
                    span:nth-child(1){
                        display:block;
                        height:22px;
                        font-size:20px;
                        font-family:Arial;
                        color:rgba(255,168,0,1);
                        line-height:23px;
                        margin-bottom: 10px;
                    }
                    span:nth-child(2){
                        height:17px;
                        font-size:16px;
                        font-family:Arial;
                        color:rgba(255,255,255,1);
                        line-height:17px;
                    }
                }
            }
            .Account{
                height:50px;
                text-align: center;
                line-height: 50px;
                p{  
                    width:300px;
                    height:50px;
                    background:rgba(255,168,0,1);
                    border-radius:25px;
                    display: inline-block;
                    font-size:18px;
                    font-family:Arial;
                    color:rgba(255,255,255,1);
                    cursor: pointer;
                }
            }
        }
    }
    .banner_AboutUs{
        width: 100%;
        padding: 60px 0 66px 0;
        height:994px;
        background:rgba(238,238,238,1);
        .middle{
            max-width: 1400px;
            margin:0 auto;
            .title{
                height: 36px;
                line-height: 36px;
                // text-align: center;
                text-align: center;
                margin-bottom: 60px;
                p{
                    font-size:32px;
                    font-family:Arial;
                    color:rgba(51,51,51,1);
                    display: inline-block;
                }
            }
            .Videos{
                display: -webkit-box; 
                display: -moz-box; 
                display: -webkit-flex; 
                display: -moz-flex;
                display: -ms-flexbox;
                display: flex;
                justify-content: space-between;
                margin-bottom: 31px;
                .V_aside{
                    width:360px;
                    height:567px;
                    background:rgba(255,255,255,1);
                    .V_aside_title{
                        width: 100%;
                        height: 53px;
                        border-bottom:1px solid rgba(238,238,238,1);
                        line-height: 53px;
                        // text-align: center;
                        padding-left: 31px;
                        letter-spacing: 2px;
                        font-size:20px;
                        font-family:Arial;
                        color:rgba(51,51,51,1);
                    }
                    .V_aside_img{
                        padding:36px 30px 0;
                        .V_aside_img_t{
                            height: 220px;
                            width: 100%;
                            border-bottom:1px solid rgba(238,238,238,1);
                            img{
                                width:100%;
                                height:150px;
                                background:rgba(17,17,17,0.3);
                            }
                            span{
                                display: block;
                                font-size:16px;
                                font-family:Arial;
                                color:rgba(51,51,51,1);
                                line-height:18px;
                            }
                        } 
                    }
                }
            }
            .Industry_News{
                width:100%;
                height:300px;
                background:rgba(255,255,255,1);
                .Industry_News_t{
                    width: 100%;
                    height: 53px;
                    border-bottom:1px solid rgba(238,238,238,1);
                    font-size:20px;
                    font-family:Arial;
                    color:rgba(51,51,51,1);
                    line-height:53px;
                    letter-spacing:2px;
                    padding-left: 30px;
                }
                .Industry_News_img{
                    padding:20px 32px 0;
                    display: -webkit-box; 
                    display: -moz-box; 
                    display: -webkit-flex; 
                    display: -moz-flex;
                    display: -ms-flexbox;
                    display: flex;
                    justify-content: space-between;
                    p{
                        width: 300px;
                        height:198px;
                        background:rgba(17,17,17,0.3);
                    }
                }
            }
        }
    }
    .banner_Partners{
        width:100%;
        height:372px;
        background:rgba(51,55,67,1);
        padding:60px 0 68px 0;
        .middle{
            max-width: 1400px;
            margin:0 auto;
            .title{
                font-size:32px;
                font-family:Arial;
                color:rgba(255,255,255,1);
                height:37px;
                line-height:37px;
                text-align: center;
                margin-bottom:60px;
            }
            .all_Partners{
                width:100%;
                height: 276px;
                background: url(../assets/images/parters.png) left top no-repeat;
                background-size: 100% 100%; 
            }
        }
    }
}
</style>

<style lang="less">
.Home{
    .el-carousel__indicators{
        display: none;
    }
}
</style>


