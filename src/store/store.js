import {SuperVuex} from 'super-vuex'

// 两个vuex插件，vuexPromise和vuejsStorage
import vuexPromise from 'vuex-promise'
import vuejsStorage from 'vuejs-storage'

import RunningStore from './running_store'

const Main = new SuperVuex()
// 可以set多个module
Main.setModule(RunningStore)
// 在SuperVuex中使用插件
Main.setPlugin(vuexPromise, vuejsStorage)

export default Main.init()
