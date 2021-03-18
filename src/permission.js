import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import { getAccount } from '@/api/user'

const whiteList = ['/lqfb','/login','/404',"/lqfb/printMap"] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  document.title = getPageTitle(to.meta.title)
  const token = window.localStorage.getItem('access_token');
  if (whiteList.indexOf(to.path) !== -1) {
    if (to.path =="/login" || to.path == "/404") {
      next()
    }else{
      if (token) {
        next()
      }else{
        //不拦截后端截图的地址
        if (to.path=="/lqfb/printMap") {
          next()
        }else{
          next(`/login`)
        }
      }
    }
  } else {
    if (to.path =="/") {
      next(`/login`)
    }else{
      next('/404')
    }
  }
})

router.afterEach(() => {

})
