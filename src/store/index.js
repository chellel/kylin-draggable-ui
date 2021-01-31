import {projectData} from './util/config.js'
import {deepClone} from '../utils/methods'

export default {
  state: {
    projectData: deepClone(projectData),
    parentContainerInfo: {},
    hoverChildUUID: '',
    activeElementUUID: '',
    activeContainerIndex: '',
    middlePlaceholder: ''

  },
  mutations: {
    setParentInfo(state, data) {
      state.parentContainerInfo = deepCopy(data || {})
    },
    setMiddlePlaceholder(state,data) {
      state.middlePlaceholder = data;
    },
    // 当前选中UUID
    setActiveElementUUID (state, data) {
      state.activeElementUUID = data
    },
    // 当前被鼠标获取焦点的子节点的ID
    setHoverChildUUID (state, data) {
      state.hoverChildUUID = data || null
    },
    addElement(state, nodeData) {
      const newNodeData = getNodeElement(nodeData)
      if(newNodeData) {
        state.projectData.element.push(newNodeData)
      }
    }
  },
  getters: {

  },
  actions: {

  }
}
