import Vue from 'vue'
import { Button } from 'view-design'
import lang from 'view-design/dist/locale/en-US'
import { locale } from 'view-design'

locale(lang)

Vue.component('Button', Button)

import 'view-design/dist/styles/iview.css'
