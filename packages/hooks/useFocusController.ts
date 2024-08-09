import { isFunction } from 'lodash-es'
import { getCurrentInstance, ref, type Ref } from 'vue'
import useEventListener from './useEventListener'

interface UseFocusControllerOptions {
  afterFocus?(): void;
  beforeBlur?(event: FocusEvent): boolean | void;
  afterBlur?(): void;
}

function useFocusController<T extends HTMLElement | { focus(): void }>(target: Ref<T | void>,
  { afterBlur, beforeBlur, afterFocus }: UseFocusControllerOptions = {}
) {
  const instance = getCurrentInstance()!
  const { emit } = instance;
  const wrapperRef = ref<HTMLElement>()
  const isFocused = ref(false);

  const handleFocus = (event: FocusEvent) => {
    if (isFocused.value) return
    isFocused.value = true
    emit('focus', event)
    afterFocus?.();
  }

  const handleBlur = (event: FocusEvent) => {
    const cancelBlur = isFunction(beforeBlur) ? beforeBlur(event) : false;
    // contains 表示一个节点是否是给定节点的后代，即该节点本身、其直接子节点（childNodes）、子节点的直接子节点等。
    if (
      cancelBlur || (event.relatedTarget && wrapperRef.value?.contains(event.relatedTarget as Node))
    ) return
    isFocused.value = false;
    emit('blur', event);
    afterBlur?.();
  }

  const handleClick = () => {
    target.value?.focus()
  }

  useEventListener(wrapperRef, "click", handleClick)

  return {
    wrapperRef,
    isFocused,
    handleFocus,
    handleBlur
  }

}


export default useFocusController;