<template>
  <div v-show="show">
    <editor
      v-if="existence"
      api-key=""
      :id="id"
      v-model="content"
      :initial-value="initialValue"
      :init="editorConfig"
      :inline="inline"
      :disabled="disabled"
    />
    <slot></slot>
  </div>
</template>

<script>
  /*
  * @Description 编辑器组件
  * @author qiangang
  * @date 2020/10/15
  */

  import { mixins } from 'hatech-web-component'

  import tinymce from 'tinymce/tinymce'
  import 'tinymce/themes/silver'
  import 'tinymce/icons/default'
  import 'tinymce/plugins/emoticons/js/emojis'
  import Editor from '@tinymce/tinymce-vue'

  // 默认配置
  import BaseConfig from './editorConfig/config'

  // 引入默认插件
  import pluginsConfig from './editorConfig/pluginsConfig'
  const { defaultPlugins, extendPlugins } = pluginsConfig
  defaultPlugins.forEach(item => require(`tinymce/plugins/${item}`))
  extendPlugins.forEach(item => require(`./extendsPlugins/${item}/plugin`))

  // word文档粘贴
  import './extendsPlugins/powerpaste/plugin.min'
  export default {
    name: "HatechRichEditor",
    components: {
      Editor
    },
    props: {
      // 编辑器Id
      id: {
        type: String,
        required: false,
        default: () => tinymce.get('ID')
      },
      // 父组件通过v-model绑定可以直接获取编辑器输入内容
      value: {
        type: String,
        required: false,
        default: ''
      },
      // 初始化数据
      initialValue: {
        type: String,
        required: false,
        default: ''
      },
      // 编辑器的配置字段
      config: {
        type: Object,
        required: false,
        default: () => {}
      },
      // 启用内联样式
      inline: {
        type: Boolean,
        required: false,
        default: false
      },
      // 是否禁用编辑器
      disabled: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    // 注入模板相关方法，具体包括了生命周期钩子、props内置参数模板
    mixins: [mixins],
    data() {
      return {
        show: true,
        existence: true,
        content: this.value,
        editorConfig: {...BaseConfig, ...this.config, setup: this.setup},
        editor: null,
        editorManager: tinymce
      }
    },
    watch: {
      'content': function () {
        this.$emit('input', this.getContent());
      }
    },
    methods: {
      /**
       * 重新渲染编辑器
       * @param config
       * */
      reload(config) {
        if (config) {
          this.editorConfig = {...this.editorConfig, ...config, setup: this.setup};
        }
        this.show = true;
        this.disabled = false;
        this.existence = true;
      },
      /**
       * 销毁编辑器
       * */
      destory() {
        this.existence = false;
      },
      /**
       * 显示/隐藏编辑器
       * @param bol
       * */
      handleEditorVisible(bol) {
        if (typeof bol === "boolean") {
          this.show = bol;
        }
      },
      /**
       * 禁用/启用编辑器
       * @param bol
       * */
      handleEditorDisabled(bol) {
        if (typeof bol === "boolean") {
          this.disabled = bol;
        }
      },
      /**
       * 获取编辑内容
       * @returns {default.value}
       */
      getContent() {
        const { outputType } = this.editorConfig;
        return this.editor.getContent({format: outputType === 'text' ? 'text' : 'html'});
      },
      /**
       * 编辑器初始化事件
       * @param editor
       * */
      setup(editor) {
        this.editor = editor;
        const {
          plugins,
          addCommand
        } = this.editorConfig;
        const pluginsArr = plugins.split(' ').filter(item => item !== '');
        pluginsArr.findIndex(item => item === 'handleSave') > -1 && this.registerHandleSave();
        pluginsArr.findIndex(item => item === 'handleCancle') > -1 && this.registerHandleCancle();
        // 在初始化的时候注册自定义事件
        typeof addCommand === 'function' && addCommand(editor.addCommand);
      },
      /**
       * 注册保存事件
       * */
      registerHandleSave() {
        this.editor.addCommand('handleSave', (ui, v) => {
          const { handleSave, destroyAfterSaved } = this.editorConfig;
          handleSave(this.getContent());
          destroyAfterSaved && this.destory()
        });
      },
      /**
       * 注册取消事件
       * */
      registerHandleCancle() {
        this.editor.addCommand('handleCancle', (ui, v) => {
          const { destroyAfterCancle } = this.editorConfig;
          if (destroyAfterCancle) {
            this.destory();
          } else {
            this.handleEditorVisible(false);
          }
        });
      }
    }
  }
</script>