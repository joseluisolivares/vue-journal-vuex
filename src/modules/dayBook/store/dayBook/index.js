import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'


const dayBook = {
    namespaced : true,
    actions,
    mutations,
    state,
    getters
}

export default dayBook