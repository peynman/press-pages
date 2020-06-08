import Components from './components'

export function install (Vue, options) {
    if (install.installed) return
    install.installed = true
    Components.install(Vue)
}

// Create module definition for Vue.use()
const plugin = {
    install,
    Components
}
export default plugin

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue
}
if (GlobalVue) {
    GlobalVue.use(plugin)
}
