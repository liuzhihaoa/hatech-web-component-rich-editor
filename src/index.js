
import HatechRichEditor from '../packages/component'

const components = [
  HatechRichEditor
]

const install = function (Vue) {
  components.forEach(component => {
    if (component && component.name) {
      Vue.component(component.name, component)
    }
  })
}

// 版本号，与package.json中的版本保持一致
const version = '0.0.3'

export default {
  version,
  install,
  HatechRichEditor
}
export {
  HatechRichEditor
}
