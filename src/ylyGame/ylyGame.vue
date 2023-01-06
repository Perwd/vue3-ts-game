<template>
  <div></div>
  <div></div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
interface Props {
  node: CardNode;
  isDock?: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits(["clickCard"]);

const isFreeze = computed(() => {
  return props.node.parents.length > 0
    ? props.node.parents.some((o) => o.state < 2)
    : false;
});

function handleClick() {
  if (!isFreeze.value) emit("clickCard", props.node);
}
</script>

<style scoped lang="less"></style>
