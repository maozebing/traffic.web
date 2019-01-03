import {ChildVuex} from 'super-vuex'

// 'user'为命名空间
const running = new ChildVuex('running')
export default running

running.value = {
  layers: []
}
