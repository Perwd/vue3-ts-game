<template>
  <Card />
</template>

<script lang="ts" setup>
// import { computed, ref } from "vue"
import type { CardNode } from "../types/ylyGame"
import Card from "./components/cardNode.vue"

interface Props {
  node: CardNode
  isDock?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(["clickCard"])
</script>

<style scoped lang="less">
.card {
  width: 40px;
  height: 40px;
  /* border: 1px solid red; */
  background: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 4px;
  border: 1px solid #000;
  box-shadow: 1px 5px 5px -1px #000;
  cursor: pointer;
}
img {
  border-radius: 4px;
}
.mask {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.55);
  width: 40px;
  height: 40px;
  pointer-events: none;
}
</style>
