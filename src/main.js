import { createApp } from 'vue'

/* Libs CSS
============================================ */
import './css/bootstrap/css/bootstrap.min.css'
import './css/font-awesome/css/font-awesome.min.css'
import './js/datetimepicker/bootstrap-datetimepicker.min.css'
import './js/owl-carousel/owl.carousel.css'
import './css/themecss/lib.css'
import './js/jquery-ui/jquery-ui.min.css'
import './js/minicolors/miniColors.css'

/* Theme CSS
============================================ */
import './css/themecss/so_searchpro.css'
import './css/themecss/so_megamenu.css'
import './css/themecss/so-categories.css'
import './css/themecss/so-listing-tabs.css'
import './css/themecss/so-newletter-popup.css'

import './css/footer/footer4.css'
import './css/header/header4.css'
import './css/home4.css'
import './css/responsive.css'

import "@/js/themejs/application.js"
import "@/js/themejs/homepage.js"
import "@/js/themejs/toppanel.js"
import "@/js/themejs/so_megamenu.js"
import "@/js/themejs/addtocart.js"

import App from './App.vue'

import router from "./routes";

import { i18n } from './plugins/i18n'

import jquery from 'jquery'

createApp(App).use(i18n).use(jquery).use(router).mount('#app')
