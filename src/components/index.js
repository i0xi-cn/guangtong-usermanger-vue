import GtDictRender from "./gt-dict-render.vue";
// 这里用来注册自己写的组件
export const ComponentsRegister = {
    install(Vue) {
        Vue.component('gt-dict-render', GtDictRender)
    },
}