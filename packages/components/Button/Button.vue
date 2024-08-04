<script setup lang="ts">
import { computed, ref, inject } from 'vue';
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types.ts';
import { throttle } from 'lodash-es';
import ErIcon from '../Icon/Icon.vue';
import { BUTTON_GROUP_CTX_KEY } from './contants.ts'

defineOptions({
  name: 'ErButton'
})
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  throttleDuration: 500
});

const slots = defineSlots();

const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0);

const emits = defineEmits<ButtonEmits>();

const _ref = ref<HTMLButtonElement>();

const iconStyle = computed(() => ({ marginRight: slots.default ? '6px' : '0px' }))

const handleBtnClick = (e: MouseEvent) => emits('click', e);
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration, { trailing: false });

const size = computed(() => ctx?.size ?? props?.size ?? "");
const type = computed(() => ctx?.type ?? props?.type ?? "");
const disabled = computed(() => ctx?.disabled || props?.disabled || false);

defineExpose<ButtonInstance>({
  ref: _ref,
  size: size,
  disabled: disabled,
  type: type
})

</script>


<template>
  <component :is="tag" ref="_ref" class="er-button" :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0" :autofocus="autofocus" :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading
    }" @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)">

    <template v-if="loading">
      <slot name="loading">
        <er-icon class="loading-icon" size="1x" :icon="loadingIcon ?? 'spinner'" spin :style="iconStyle"></er-icon>
      </slot>
    </template>
    <er-icon v-if="icon && !loading" :icon="icon" size="1x" :style="iconStyle"></er-icon>
    <slot>

    </slot>
  </component>
</template>

<style scoped>
@import './style.css';
</style>