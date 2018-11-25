
import VueRouter from 'vue-router'

import I_ndex from './../components/i_ndex/I_ndex'
import Info_class from './../components/g_raders/Info_class'
import Info_company from './../components/c_ompany/Info_company'
import realit_y from './../components/r_eality/realit_y'
import raider_s from './../components/r_aiders/raider_s'


  
  var router = new VueRouter({
    routes: [
        {path:'/',redirect:'/I_ndex'},
        {path:'/I_ndex',component:I_ndex},
        {path:'/Info_class',component:Info_class},
        {path:'/Info_company',component:Info_company},
        {path:'/realit_y',component:realit_y},
        {path:'/raider_s',component:raider_s}
  
    ],
    linkActiveClass:'mui-active',
    mode:'history'
  })

  export default router