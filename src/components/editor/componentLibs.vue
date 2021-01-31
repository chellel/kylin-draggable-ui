<template>
  <div class="components-libs-wrapper">
    <p class="page-title text-center">组件库</p>
    <div class="scroll-content">
      <ul class="scrollbar-wrapper">
        <li v-for="(item, index) in componentsList" :key="index" class="clearfix paddingB30">
          <div class="components-libs-title">
            <p>{{item.title}}</p>
          </div>
          <div v-if="item.components && item.components.length">
            <div class="components-lib-item" v-for="(element, i) in item.components">
              <div class="lib-item-img">
                <i :class="[element.icon]"></i>
              </div>
              <p class="lib-item-title">{{element.title}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import eleConfig from '@/utils/config.js'
  export default {
    data() {
      return {
        componentsList: eleConfig
      }
    }

  }
</script>

<style>
  .scroll-content {
    height: 100%;
    overflow: hidden;
  }
</style>
