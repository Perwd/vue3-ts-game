<template>
  <!-- :style="
      isDock
        ? {}
        : {
            position: 'absolute',
            zIndex: node.zIndex,
            top: `${node.top}px`,
            left: `${node.left}px`,
          }
    " -->
  <div
    class="card"
    :style="
      isDock
        ? {}
        : {
            position: 'absolute',
            zIndex: node.zIndex,
            top: `${node.top}px`,
            left: `${node.left}px`,
          }
    "
    @click="handleClick"
  >
    <!--  v-if="img.type === node.type" -->
    <img :src="IMG_MAP[node.type]" alt="" width="40" height="40" />
    <!-- <img
      v-if="node.type === 1"
      src="../assets/tutu/1.png"
      width="40"
      height="40"
    />
    <img
      v-if="node.type === 2"
      src="../assets/tutu/2.png"
      width="40"
      height="40"
    />
    <img
      v-if="node.type === 3"
      src="../assets/tutu/3.png"
      width="40"
      height="40"
    />
    <img
      v-if="node.type === 4"
      src="../assets/tutu/4.png"
      width="40"
      height="40"
    />
    <img
      v-if="node.type === 5"
      src="../assets/tutu/5.png"
      width="40"
      height="40"
    />
    <img
      v-if="node.type === 6"
      src="../assets/tutu/6.png"
      width="40"
      height="40"
    />
    <img
      v-if="node.type === 7"
      src="../assets/tutu/7.png"
      width="40"
      height="40"
    />
    <img
      v-if="node.type === 8"
      src="../assets/tutu/8.png"
      width="40"
      height="40"
    />
    <img
      v-if="node.type === 9"
      src="../assets/tutu/9.png"
      width="40"
      height="40"
    />
    <img
      v-if="node.type === 10"
      src="../assets/tutu/10.png"
      width="40"
      height="40"
    />
    <img
      v-if="node.type === 11"
      src="../assets/tutu/11.png"
      width="40"
      height="40"
    />
    <img
      v-if="node.type === 12"
      src="../assets/tutu/12.png"
      width="40"
      height="40"
    />
    <img
      v-if="node.type === 13"
      src="../assets/tutu/13.png"
      width="40"
      height="40"
    /> -->
    <div v-if="isFreeze" class="mask" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import type { CardNode } from "../types/ylyGame"

interface Props {
  node: CardNode
  isDock?: boolean
}
let imgs = []
// const imgs = [
//   {
//     type: 1,
//     // src: require("./assets/tutu/1.png"),
//     src: "../public/1.png",
//   },
//   {
//     type: 2,
//     src: "@/assets/tutu/2.png",
//   },
//   {
//     type: 3,
//     src: "./assets/tutu/3.png",
//   },
//   {
//     type: 4,
//     src: "./assets/tutu/4.png",
//   },
//   {
//     type: 5,
//     src: "./assets/tutu/5.png",
//   },
//   {
//     type: 6,
//     src: "./assets/tutu/6.png",
//   },
//   {
//     type: 7,
//     src: "./assets/tutu/7.png",
//   },
//   {
//     type: 8,
//     src: "./assets/tutu/8.png",
//   },
//   {
//     type: 9,
//     src: "./assets/tutu/9.png",
//   },
//   {
//     type: 10,
//     src: "./assets/tutu/10.png",
//   },
//   {
//     type: 11,
//     src: "./assets/tutu/11.png",
//   },
//   {
//     type: 12,
//     src: "./assets/tutu/12.png",
//   },
//   {
//     type: 13,
//     src: "./assets/tutu/13.png",
//   },
// ]
// 加载图片资源
// 没开启src替换时 用 /src/assets/tutu/*.png 路径
// @/assets/tutu/*.png
const modules = import.meta.globEager("@/assets/tutu/*.png", {
  as: "url",
  import: "default",
  eager: true,
})
console.log(modules)
for (let key in modules) {
  // console.log(key)
  imgs.push({
    type: key,
    src: modules[key],
  })
}
// const req = require.context("../assets/tutu", true, /\.png$/)
// console.log(req)
const pngHashMap = new Map()

// modules.keys().forEach((eachPng) => {
//   const imgConfig = req(eachPng)
//   const imgName = eachPng.replace(/^\.\/(.*)\.\w+$/, "$1")
//   pngHashMap.set(imgName, { imgName, icon: req(eachPng).default || imgConfig })
// })
const IMG_MAP = Object.keys(modules).reduce((acc, cur) => {
  const key = cur.replace("../assets/tutu/", "").replace(".png", "")
  acc[key] = modules[cur]
  return acc
}, {} as Record<string, string>)
const props = defineProps<Props>({
  node: {
    type: Array,
    default: [],
  },
  isDock: Boolean,
})

// const props = defineProps<Props>()
const emit = defineEmits(["clickCard"])

const isFreeze = computed(
  () => {
    if (props.node?.parents.length > 0) {
      return props.node?.parents.some((o) => {
        typeof o.state === "number" && o?.state < 2
      })
    } else {
      return false
    }
    // return props.node?.parents.length > 0
    //   ? props.node?.parents.some(
    //       (o) => typeof o?.state === "number" && o?.state < 2
    //     )
    //   : false
  }
  // return console.log(1)
)

function handleClick() {
  if (!isFreeze.value) emit("clickCard", props.node)
}
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
