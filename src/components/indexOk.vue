
<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <ul id="searchUl">
                    <li><el-input  v-model="searchWhat" placeholder="请输入内容" id="searchInput" @focus="isShow = true" @blur="isShow = false"></el-input><el-button @click="sendRequst" style="font-size:24px;"  :icon="Search" /></li>
                    <li v-for="item in responseList" :key="item.id" class="showli" v-show="isShow"><a href="#">{{item.text}}</a></li>
                </ul>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-row>
                        <el-col :span="24">
                            <el-menu active-text-color="#ffd04b" background-color="#545c64"
                                class="el-menu-vertical-demo" default-active="2" text-color="#fff" @open="handleOpen"
                                @close="handleClose">
                                <el-sub-menu index="1">
                                    <template #title>
                                        <el-icon>
                                            <location />
                                        </el-icon>
                                        <span>部门名称</span>
                                    </template>
                                    <el-menu-item index="1-1" @click="open('1-1')">item one</el-menu-item>
                                    <el-menu-item index="1-2" @click="open('1-2')">item one</el-menu-item>
                                </el-sub-menu>
                                <el-sub-menu index="2">
                                    <template #title>
                                        <el-icon>
                                            <location />
                                        </el-icon>
                                        <span>部门名称</span>
                                    </template>
                                    <el-menu-item index="2-1" @click="open('2-1')">item one</el-menu-item>
                                    <el-menu-item index="2-2" @click="open('2-2')">item one</el-menu-item>
                                </el-sub-menu>
                                <el-sub-menu index="3">
                                    <template #title>
                                        <el-icon>
                                            <location />
                                        </el-icon>
                                        <span>部门名称</span>
                                    </template>
                                    <el-menu-item index="3-1" @click="open('3-1')">item one</el-menu-item>
                                    <el-menu-item index="3-2" @click="open('3-2')">item one</el-menu-item>
                                </el-sub-menu>
                                <el-sub-menu index="4">
                                    <template #title>
                                        <el-icon>
                                            <location />
                                        </el-icon>
                                        <span>部门名称</span>
                                    </template>
                                    <el-menu-item index="4-1" @click="open('4-1')">item one</el-menu-item>
                                    <el-menu-item index="4-2" @click="open('4-2')">item one</el-menu-item>
                                </el-sub-menu>
                            </el-menu>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-container>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                    <el-footer>Footer{{ hh }}</el-footer>
                </el-container>
            </el-container>
        </el-container> 
    </div>
</template>

<style scoped>


.el-button {
    width: 50px;
    height: 50px;
}
.el-input {
    margin: auto 0;
    width: 600px;
    height: 50px;
}

.showli {
    background-color: rgb(255, 255, 255);
    float: left;
    width: 100%;
}
.showli a {
    text-align: left;
    padding-left: 20px;
    box-sizing: border-box;
    line-height: 40px;
    display: block;
    width: 100%;
    height: 100%;
}
.showli a:hover {
    background-color: rgb(200, 200, 200);
}
#searchUl {
    /* position: relative;
     */
    padding: 0;
    position: absolute;
    left: 50%;
    z-index: 999;
    /* height: 100px; */
    width: 650px;
    /* margin: 0 auto; */
    margin-left: -325px;
    margin-top: 0;
    background-color: #B3C0D1;
}
.el-container {
    height: 100%;
}

.common-layout {
    height: 100%;
}

.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    /* height: 500px; */
    line-height: 60px;
    overflow: visible;
}

.el-aside {
    background-color: rgb(84, 92, 100);
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>



<script setup  >
import {
  Search
} from '@element-plus/icons-vue'
// import 'element-plus/dist/index.css'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { mapState } from 'vuex';
const router = useRouter()

let open = name => {
    router.push("/" + name)
}



</script>
<script>

export default {
    name: "iAm1-1",
    data() {
        return {
            isShow: false,
            hh: 12,
            searchWhat: '',
            isSearching: false,
            timer: null,
            timeout: null,
            responseList: null
        }
    },
    computed: {
        ...mapState(['count']),
        myAge() {
            return 10;
        },
    },
    components: {},
    mounted() {
        setInterval(() => {

            // alert(this.count)
            this.hh = this.count;
        }, 1000);
    },
    methods: {
        sendRequst: async function() {
            let url = 'https://skeyword.browser.qq.com/v1/suggest'
            //   let params = {
            //     ticket: ticket,
            //     appmark: "JISwhxsapp8712",
            //     accountname: "jiswhsdsszx"
            //   }
             await axios({
                method: 'get',
                url: url,
                params: {
                    guid: '0499e5c704654f2d8f3dca594857e3bf',
                    adtag: 'newtab',
                    text: String(this.searchWhat)
                }
                // data: qs.stringify(params),
            }).then(res => {

                // Toast.clear()
                // console.log(res.data.list)

                this.responseList = res.data.list
                // console.log(res.data.list)
                // console.log(this.responseList)

            })
            


        },

    },
    watch: {
        searchWhat() {
            if (this.timeout !== null) {
                    clearTimeout(this.timeout)
                }
            this.timeout = setTimeout(this.sendRequst, 500)
        }
    }

}


</script>