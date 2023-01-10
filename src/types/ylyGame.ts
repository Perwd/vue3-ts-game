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
  // 当前状态： 未显示  可点击  已选  已消除
  state: string
}
