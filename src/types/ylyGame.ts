import { Ref } from "vue"

export type CardNode = {
  id: string
  // 兔子种类
  type: number
  // 图层
  zIndex: number
  // 所在图层中的索引
  index: number
  //   父节点
  parents: CardNode[]
  //   当前位置
  row: number
  column: number
  top: number
  left: number
  // isClick: boolean;
  // 是否可点击 0： 无状态  1： 可点击 2：已选 3：已消除
  state: number
}

export interface GameConfig {
  container?: Ref<HTMLElement | undefined> // cardNode容器
  cardNum: number // card类型数量
  layerNum: number // card层数
  trap?: boolean //  是否开启陷阱
  delNode?: boolean //  是否从nodes中剔除已选节点
  events?: GameEvents //  游戏事件
}

export interface GameEvents {
  clickCallback?: () => void
  dropCallback?: () => void
  winCallback?: () => void
  loseCallback?: () => void
}

export interface Game {
  nodes: Ref<CardNode[]>
  selectedNodes: Ref<CardNode[]>
  removeList: Ref<CardNode[]>
  removeFlag: Ref<boolean>
  backFlag: Ref<boolean>
  handleSelect: (node: CardNode) => void
  handleSelectRemove: (node: CardNode) => void
  handleBack: () => void
  handleRemove: () => void
  initData: (config?: GameConfig) => void
}
