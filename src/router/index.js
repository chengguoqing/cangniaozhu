import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import direct_purchasing from '@/page/direct_purchasing'
import taste_good from '@/page/taste_good'
import commodity_list from '@/page/commodity_list'
import search from '@/page/search'
import cplist from '@/page/cplist'
import shopping_cart from '@/page/shopping_cart'
import my_wallet from '@/page/my_wallet'
import footprint from '@/page/footprint'
import collect from '@/page/collect'
import balance from '@/page/balance'
import bird_nest from '@/page/bird_nest'
import fenlei from '@/page/fenlei'
import user_center from '@/page/user_center'
import mail from '@/page/mail'
import dynamic from '@/page/dynamic'
import integral from '@/page/integral'
import card_voucher from '@/page/card_voucher'
import order_list from '@/page/order_list'
Vue.use(Router)
export default new Router({
    //   mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            meta: {
                keepAlive: true // 需要被缓存
            }
    },
        {
            path: '/direct_purchasing',
            name: 'direct_purchasing',
            component: direct_purchasing
    },
        {
            path: '/taste_good',
            name: 'taste_good',
            component: taste_good
    },
        {
            path: '/commodity_list',
            name: 'commodity_list',
            component: commodity_list
    },
        {
            path: '/search',
            name: 'search',
            component: search
    },
        {
            path: '/cplist',
            name: 'cplist',
            component: cplist
    },
        {
            path: '/shopping_cart',
            name: 'shopping_cart',
            component: shopping_cart
    },
        {
            path: '/my_wallet',
            name: 'my_wallet',
            component: my_wallet
    },
        {
            path: '/footprint',
            name: 'footprint',
            component: footprint
    },
        {
            path: '/collect',
            name: 'collect',
            component: collect
    },
        {
            path: '/balance',
            name: 'balance',
            component: balance
    },
        {
            path: '/bird_nest',
            name: 'bird_nest',
            component: bird_nest
    },
        {
            path: '/fenlei',
            name: 'fenlei',
            component: fenlei,
            meta: {
                keepAlive: true // 需要被缓存
            }
    },
        {
            path: '/user_center',
            name: 'user_center',
            component: user_center,
            meta: {
                keepAlive: true // 需要被缓存
            }
    },
        {
            path: '/mail',
            name: 'mail',
            component: mail
    },
        {
            path: '/dynamic',
            name: 'dynamic',
            component: dynamic
    },
        {
            path: '/integral',
            name: 'integral',
            component: integral
    },
        {
            path: '/card_voucher',
            name: 'card_voucher',
            component: card_voucher
    },
        {
            path: '/order_list',
            name: 'order_list',
            component: order_list
    }

  ]
})
