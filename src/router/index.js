// 完成和router相关的工作
import { createRouter, createWebHashHistory } from 'vue-router'
import main from '../components/indexOk.vue'
import Aside1m1 from '../components/AsideTo/ToIndex1-1'
import Aside1m2 from '../components/AsideTo/ToIndex1-2'
import Aside2m1 from '../components/AsideTo/ToIndex2-1'
import Aside2m2 from '../components/AsideTo/ToIndex2-2'
import Aside3m1 from '../components/AsideTo/ToIndex3-1'
import Aside3m2 from '../components/AsideTo/ToIndex3-2'
import Aside4m1 from '../components/AsideTo/ToIndex4-1'
import Aside4m2 from '../components/AsideTo/ToIndex4-2'

const routes = [
    {
        path: '/',
        component: main,
        name: 'main',
        children: [
            { path: '1-1', component: Aside1m1, name: 'to1-1' },
            { path: '1-2', component: Aside1m2, name: 'to1-2' },
            { path: '2-1', component: Aside2m1, name: 'to2-1' },
            { path: '2-2', component: Aside2m2, name: 'to2-2' },
            { path: '3-1', component: Aside3m1, name: 'to3-1' },
            { path: '3-2', component: Aside3m2, name: 'to3-2' },
            { path: '4-1', component: Aside4m1, name: 'to4-1' },
            { path: '4-2', component: Aside4m2, name: 'to4-2' },
        ]
        
    },

]


const router = createRouter({

    history: createWebHashHistory(),
    routes, 
})

export default router