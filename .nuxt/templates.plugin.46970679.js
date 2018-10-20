import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false


  
  
    import  { far as fortawesomeproregularsvgicons_far } from '@fortawesome/pro-regular-svg-icons'
    library.add(fortawesomeproregularsvgicons_far)
  

  
  
    import  { fas as fortawesomeprosolidsvgicons_fas } from '@fortawesome/pro-solid-svg-icons'
    library.add(fortawesomeprosolidsvgicons_fas)
  

  
  
    import  { fab as fortawesomefreebrandssvgicons_fab } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_fab)
  


Vue.component('font-awesome-icon', FontAwesomeIcon)