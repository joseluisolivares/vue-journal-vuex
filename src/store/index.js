import { createStore } from 'vuex'
import dayBook from '../modules/dayBook/store/dayBook'


const store = createStore({
    modules:{
        dayBook
    }
})

export default store