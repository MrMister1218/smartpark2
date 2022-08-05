import { computed } from 'vue'
import { useStore, mapState } from 'vuex'

// 封装 获取vuex中state数据的函数
export function useState(mapper) {
  // 拿到store对象
  const store = useStore()

  // 获取到对应的对象的functions: {name:function, age: function}
  const storeStateFns = mapState(mapper)

  // 对数据进行转换
  const storeState = {}
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({$store: store})
    storeState[fnKey] = computed(fn)
  })

  return storeState
}