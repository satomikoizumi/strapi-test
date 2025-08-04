<script setup lang="ts">
type balloonProps = {
  top?: number
  right?: number
  bottom?: number
  left?: number
  isSpeechBubble?: boolean
}

const props = withDefaults(defineProps<balloonProps>(), {
  isSpeechBubble: true,
})

const divRef = ref<HTMLDivElement|null>(null)
const reversal = ref<boolean>(false)
const {height} = useWindowSize()

onMounted(() => {
  reversal.value = false
  if (!divRef.value || !divRef.value) return
  const bottom = divRef.value.getBoundingClientRect().bottom
  // バルーン最下部が表示領域最下部より下の場合、バルーンを反転
  if (bottom > height.value) {
    reversal.value = true
  }
})

const balloonPositionStyle = computed<{
  top: string|undefined
  right: string|undefined
  bottom: string|undefined
  left: string|undefined
}>(() => {
  if (reversal.value) {
    return {
      top: props.bottom !== undefined ? `${props.bottom}px` : undefined,
      right: props.right !== undefined ? `${props.right}px` : undefined,
      bottom: props.top !== undefined ? `${props.top}px` : undefined,
      left: props.left !== undefined ? `${props.left}px` : undefined,
    }
  }
  return {
    top: props.top !== undefined ? `${props.top}px` : undefined,
    right: props.right !== undefined ? `${props.right}px` : undefined,
    bottom: props.bottom !== undefined ? `${props.bottom}px` : undefined,
    left: props.left !== undefined ? `${props.left}px` : undefined,
  }
})

const contentClass = computed<string>(() => {
  let baseClass = `relative drop-shadow-[0_0_2px_rgba(0,0,0,0.3)] z-20`
  if (props.isSpeechBubble) {
    baseClass = `${baseClass} before:content-[""] before:w-0 before:h-1.75 before:border-x-7 before:border-x-transparent before:absolute before:right-2.25`
  }
  const postionAndDirection = !reversal.value
    ? 'before:border-t-0 before:border-b-7 before:border-b-white before:-top-1.75'
    : 'before:border-b-0 before:border-t-7 before:border-t-white before:-bottom-1.75'
  return `${baseClass} ${postionAndDirection}`
})
</script>
<template>
  <div ref="divRef" class="absolute w-fit bg-white z-10" :style="balloonPositionStyle">
    <div :class="contentClass">
      <div class="rounded-sm-plus overflow-hidden">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
