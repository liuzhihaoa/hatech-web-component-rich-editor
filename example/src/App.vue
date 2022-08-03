<template>
  <div id="app">
    <hatech-web-component-editor style="margin-bottom: 10px"
                                 ref="editor"
                                 v-model="content"
                                 :config="config"
                                 pattern="decoupledEditor">
      <!-- 弹框与编辑器交互示例 Begin -->
      <test-dialog :visible="visible"
        @handleDialogClose="handleDialogClose"
      />
      <!-- 弹框与编辑器交互示例 End -->
    </hatech-web-component-editor>
    <!-- 功能示例 Begin -->
    <el-button @click="destoryEditor">销毁编辑器</el-button>
    <el-button @click="disabledEditor">禁用编辑器</el-button>
    <el-button @click="unDisabledEditor">启用编辑器</el-button>
    <el-button @click="showEditor">显示编辑器</el-button>
    <el-button @click="hideEditor">隐藏编辑器</el-button>
    <el-button @click="reloadEditor">重新加载编辑器</el-button>
    <!-- 功能示例 End -->
  </div>
</template>

<script>
  import { HatechWebComponentEditor } from '../../src'
  import TestDialog from './components/testDialog'

  // 编辑器配置
  import BaseConfig from './config'

  // 引用注册插件示例
  import registerTestPlugin from './editorExtend/registerTestPlugin'

  export default {
    name: 'App',
    components: {
      HatechWebComponentEditor,
      TestDialog
    },
    data() {
      return {
        content: '',
        config: {},
        visible: false
      }
    },
    watch: {
      'content': function (newVal) {
        console.log(newVal);
      }
    },
    created() {
      // 自定义插件需要放入plugins
      BaseConfig.plugins = `${BaseConfig.plugins} testPlugin`;
      // 自定义插件按钮需要放入toolbar才能在toolbar上展示
      BaseConfig.toolbar = `testPlugin | ${BaseConfig.toolbar}`;
      this.config = BaseConfig;
    },
    mounted() {
      this.registerTestPlugin();
    },
    methods: {
      /**
       * 若在toolbar中显示保存按钮，父组件希望点击保存后的所做操作示例
       * @param data
       */
      handleSave(data) {
        console.log(data);
      },
      /**
       * 销毁编辑器
       */
      destoryEditor() {
        this.$refs.editor.destory();
      },
      /**
       * 启用编辑器
       */
      unDisabledEditor() {
        this.$refs.editor.handleEditorDisabled(false);
      },
      /**
       * 禁用编辑器
       */
      disabledEditor() {
        this.$refs.editor.handleEditorDisabled(true);
      },
      /**
       * 显示编辑器
       */
      showEditor() {
        this.$refs.editor.handleEditorVisible(true);
      },
      /**
       * 隐藏编辑器
       */
      hideEditor() {
        this.$refs.editor.handleEditorVisible(false);
      },
      /**
       * 重新加载编辑器
       */
      reloadEditor() {
        this.$refs.editor.reload();
      },
      /**
       * =================================
       * 扩展插件示例
       * =================================
       */
      registerTestPlugin() {
        registerTestPlugin(this, this.$refs.editor.editorManager);
      },
      /**
       * 弹窗关闭时对编辑器进行插入值操作
       */
      handleDialogClose() {
        this.$refs.editor.editorManager.execCommand('handleDialogClose');
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
