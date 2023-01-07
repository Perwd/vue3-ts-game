<template>
  <div>
    <img src="" alt="" />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, defineEmits } from "vue";
import type { CardNode } from "../types/ylyGame";

interface Props {
  node: CardNode;
  isDock?: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits(["clickCard"]);

const isFreeze = computed(() => {
  return props.node.parents.length > 0
    ? props.node.parents.some((o) => typeof o.state === "number" && o.state < 2)
    : false;
});

function handleClick() {
  if (!isFreeze.value) emit("clickCard", props.node);
}
</script>

<style scoped lang="less"></style>
