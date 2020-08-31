import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faExternalLinkAlt,
  faUsers,
  faSearch,
  faCheckSquare,
  faSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

config.autoAddCss = false

library.add(faExternalLinkAlt)
library.add(faUsers)
library.add(faSearch)
library.add(faCheckSquare)
library.add(faSquare)
library.add(faUser)

Vue.component('fa', FontAwesomeIcon)
