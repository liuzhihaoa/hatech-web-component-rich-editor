<template>
  <el-dialog title="这是一个弹框"
    :visible="visible"
    :before-close="handleClose"
  >
    <p>
      此弹框用于模拟自定义插件与编辑器做交互，关闭弹框编辑器会插入<strong>测试文本</strong>四个字
    </p>
  </el-dialog>
</template>

<script>
  export default {
    name: "testDialog",
    props: {
      visible: {
        type: Boolean,
        required: false,
        default: () => (false)
      }
    },
    data: () => {
      return {
      }
    },
    methods: {
      /**
       * 关闭弹窗
       */
      handleClose() {
        this.$emit('handleDialogClose');
      }
    }
  }
</script>

<style scoped>

</style>