<script lang="ts" setup>
import { ErSwitch } from 'yzy-element'
import { ref } from 'vue'
const switchVal = ref(false)
</script>

<template>
  <er-switch v-model="switchVal" activeText="qqqqqqq"></er-switch>
</template>