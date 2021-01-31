<template>
  <div class="page-editor">
    <div class="editor-page-edit-wrapper">
      <component-libs></component-libs>
    </div>
    <div class="eidtor-main">
    </div>
    <div class="el-attr-edit-wrapper">
    </div>
  </div>
</template>
<script>
  import componentLibs from '@/components/editor/componentLibs'

  export default {
    components: {
      componentLibs
    },
    data() {
      return {

      }
    },
    computed: {

    },
    created() {

    }
  }
</script>

<style lang="scss" scoped>
  .page-editor {
    display: flex;
    min-width: 1280px;
    height: 100%;
    position: relative;

    .editor-page-edit-wrapper {
      width: 210px;
      padding: 0 1px;
    }

    .editor-main {
      flex: 1;
      position: relative;
    }

    .el-attr-edit-wrapper {
      height: 100%;
      position: relative;
      background-color: #f0f0f0;
      width: 405px;
      padding: 0;

    }
  }
</style>
