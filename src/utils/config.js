export const pageWh = {
  width: 375, // 模板宽度
  height: 667 // 模板高度
}

export const defaultStyle = {
  position: 'absolute',
  top: 5,
  left: 5
}

export const moduleContainer = {
  allowed: false,
  titleBarName: '标题栏',
  pointList: [],
  commonStyle: {
    width: pageWh.width,
    height: 'auto',
    position: 'relative',
    backgroundColor: '#fff'

  }
}

export const elementConfig = {
  animations: [],
  events: [],
  events: [],
  commonStyle: {},
  propsValue: {}
}

export const projectConfig = {
  name: '可视化页面编辑器',
  scale: 1,
  commonStyle: {
    backgroundColor: '#f4f4f4',
  },
  pageNmae: '编辑器',
  config: {},
  width: pageWh.width,
  height: pageWh.height,
  elements: [] //页面容器集合
}

export const plContainer = {
  elName: 'pl-container',
  title: '自由容器',
  icon: 'iconfont iconrongqi',
  pointList: ['b'],
  containerStyle: {
    marginBottom: 10
  },
  allowed: true,
  showTitle: true,
  titleStyle: {
    height: 50,
    lineHeight: 50
  },
  titleBarName: '标题栏',
  commonStyle: {
    width: pageWh.width,
    height: 250,
    position: 'relative',
    minHeight: 50,
    backgroundColor: '#fff'
  },
  childNode: [] //容器子节点的集装箱

}

const BasicComponents = [{
  title: '基础组件',
  components: [{
      plContainer,
      elName: 'pl-text',
      title: '文本',
      icon: 'iconwenbenyu',
      pointList: [],
      contenteditable: false,
      placeholder: '请输入内容',
      commonStyle: {
        ...defaultStyle,
        padding: 8,
        fontSize: 15,
        lineHeight: 17,
        height: 'auto',
        textAlign: 'left',
        minWidth: 35,
        width: 160
      },
    },
    {
      elName: 'pl-button',
      title: '按钮',
      icon: 'iconanniu',
      pointList: ['lt', 'rt', 'lb', 'rb', 'l', 'r', 't', 'b'],
      contenteditable: false,
      options: {
        classList: [],
        lineHeightChange: true
      },
      commonStyle: {
        ...defaultStyle,
        fontSize: 15,
        lineHeight: 36,
        height: 36,
        textAlign: 'center',
        minWidth: 35,
        minHeight: 36,
        width: 80
      }
    },
    {
      elName: 'cube-nav',
      title: '魔方导航',
      icon: 'iconfenlei',
      module: true,
      containerOptions: {
        ...moduleContainer,
        titleBarName: '魔方导航模块'
      },
      options: {
        classList: []
      }
    }
  ]
}]

const components = [...BasicComponents]

export const drawingComponent = components.map(item => item.components.map(con => {
  if (!con.module && con.elName !== 'pl-container') return con.elName
}))[0].filter(item => item)

export default components
