<template>
  {{label}}
</template>

<script setup>
import {computed} from 'vue'
import {projectDict} from './data/project-dict.js'
// 可以装一个snipaste截图工具， 特别好用
const props = defineProps({
  // 字典编码
  dictCode: {
    type: String,
    required: true
  },
  // 字典值
  value: {
    type: String,
    required: true
  },
})

const label = computed(()=> {
  // noinspection EqualityComparisonWithCoercionJS
  return projectDict[props.dictCode]?.find(it=>it.value==props.value)?.label
})
</script>

<style lang="css" scoped>
/*样式自己写吧*/
</style>