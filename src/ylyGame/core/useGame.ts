import { CardNode, GameConfig, Game, GameEvents } from "../../types/ylyGame"

import { ref, Ref } from "vue"
import { random, floor, shuffle } from "lodash"
const defaultGameConfig: GameConfig = {
  cardNum: 4,
  layerNum: 2,
  trap: true,
  delNode: false,
}
// interface GameConfig {
//   container?: Ref<HTMLElement | undefined> // cardNode容器
//   cardNum: number // card类型数量
//   layerNum: number // card层数
//   trap?: boolean //  是否开启陷阱
//   delNode?: boolean //  是否从nodes中剔除已选节点
//   events?: GameEvents //  游戏事件
// }

export function useGame(config: GameConfig): Game {
  // cardNum默认4个卡牌  layerNum只有2层  trap陷阱开启  delNode不能删
  const {
    container,
    delNode,
    events = {},
    ...initConfig
  } = { ...defaultGameConfig, ...config }

  const indexSet = new Set()
  let nodes = ref<CardNode[]>([])
  const backFlag = ref(false)
  const selectedNodes = ref<CardNode[]>([])

  const removeFlag = ref(false)
  const removeList = ref<CardNode[]>([])

  const preNode = ref<CardNode | null>(null)
  const histroyList = ref<CardNode[]>([])
  // type GameEvents = string | null

  let cardNum = 0,
    layerNum = 3

  function handleBack() {}
  function handleRemove() {}
  function handleSelectRemove() {}

  function handleSelect(node: CardNode) {
    // 下面的卡槽为7
    if (selectedNodes.value.length === 7) return false

    // 卡牌
    node.state = 2
    histroyList.value.push(node)
    preNode.value = node

    const index = nodes.value.findIndex((o) => o.id === node.id)

    if (index > -1) {
      delNode && nodes.value.splice(index, 1)
    }

    // 判断是否有可以消除的节点 类型相等
    const selectedSomeNode = selectedNodes.value.filter(
      (s) => s.type === node.type
    )

    if (selectedSomeNode.length === 2) {
      const secondIndex = selectedNodes.value.findIndex(
        (o) => o.id === selectedSomeNode[1].id
      )
    }
  }

  // // useGame.ts
  function initData(config?: GameConfig | null) {
    let perFloorNodes: CardNode[] = []

    // // 生成节点池
    const itemTypes = new Array(cardNum).fill(0).map((_, index) => index + 1)

    let itemList: number[] = []

    const selectedNodes = ref<CardNode[]>([])
    for (let i = 0; i < 3 * layerNum; i++)
      itemList = [...itemList, ...itemTypes]

    //  shuffle创建一个被打乱值的集合
    itemList = shuffle(shuffle(itemList))

    // 初始化各个层级节点
    let len = 0
    let floorIndex = 1
    const floorList: number[][] = []
    const itemLength = itemList.length
    while (len <= itemLength) {
      let maxFloorNum = floorIndex * floorIndex
      //   const floorNum = ceil(random(maxFloorNum / 2, maxFloorNum));
      //   floorList.push(itemList.splice(0, floorNum));
      //   len += floorNum;
      floorIndex++
    }

    // 容器，应该写入容器的宽高，到时候适配手机和电脑
    const container = ref()

    const containerWidth = container.value.clientWidth
    const containerHeight = container.value.clientHeight
    const width = containerWidth / 2
    const height = containerHeight / 2 - 60

    // let indexSet = () => {
    //   console.log(1)
    // }

    let size = 10
    // let perFloorNodes = []
    // 建立遮罩关系
    floorList.forEach((o, index) => {
      //   indexSet.clear();
      let i = 0
      const floorNodes: CardNode[] = []
      o.forEach((k) => {
        i = floor(random(0, (index + 1) ** 2))
        // while (indexSet.has(i)) i = floor(random(0, (index + 1) ** 2))
        const row = floor(i / (index + 1))
        const column = index ? i % index : 0
        const node: CardNode = {
          id: `${index}-${i}`,
          type: k,
          zIndex: index,
          index: i,
          row,
          column,
          top: height + (size * row - (size / 2) * index),
          left: width + (size * column - (size / 2) * index),
          parents: [],
          state: 0,
        }
        const xy = [node.top, node.left]

        perFloorNodes.forEach((e) => {
          if (
            Math.abs(e.top - xy[0]) <= size &&
            Math.abs(e.left - xy[1]) <= size
          )
            e.parents.push(node)
        })
        floorNodes.push(node)
        indexSet.add(i)
      })
      nodes.value = nodes.value.concat(floorNodes)
      perFloorNodes = floorNodes
    })
  }

  return {
    nodes,
    selectedNodes,
    removeFlag,
    removeList,
    backFlag,
    handleSelect,
    handleBack,
    handleRemove,
    handleSelectRemove,
    initData,
  }
}
