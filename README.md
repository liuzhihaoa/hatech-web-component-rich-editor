# 基于tinyMce二次封装
***
## 如何使用
    1. npm install hatech-web-component-editor
    2. 使用前请将example/public内的editor复制到项目的静态文件目录
    3. // main.js
       import HatechWebComponentEditor from 'hatech-web-component-editor'
       Vue.use(HatechWebComponentEditor)
       // or
       // xxx.vue
       import { HatechWebComponentEditor } from 'hatech-web-component-editor'
       export default {
         components: { HatechWebComponentEditor },
         ...
       }
    4. <hatech-web-component-editor ref="editor"
                                    v-model="content"
                                    :config="config"
                                    pattern="decoupledEditor">
    5. 可使用v-model绑定字段获取实时输入编辑器内容
***
## 参数说明
>| 参数 | 类型 | 说明 | 可选 | 
>|  :---- | :---- | :---- | :---- |
>| id | String | 编辑器Id | 是 |
>| initialValue | String | 初始化数据 | 是 |
>| [config][configUrl]（[配置可选项相关注解][configAnnotationUrl]） | Object | 编辑器的配置 | 是 |
>| inline| Boolean | 启用内联样式 | 是 |
***
## 暴露方法及编辑器内部调用接口
>依赖于ref
>
>| 名称 | 类型 | 说明 | 参数 | 
>|  :---- | :---- | :---- | :---- |
>| destory | 方法 | 销毁编辑器 | 无 |
>| handleEditorDisabled | 方法 | 启用/禁用编辑器 | bol（Boolean） |
>| handleEditorVisible | 方法 | 显示/隐藏编辑器 | bol（Boolean） |
>| reload| 方法 | 重新加载编辑器 | 无 |
>| editorManager | 编辑器内部调用接口 | 编辑器内部操作，如this.$refs.editor.editorManager.execCommand('handleDialogClose')进行自定义编辑器内部命令的调用 | 无  |
***
## 注意事项
    1.编辑器样式及内置插件引用路径为项目运行时相对路径，可根据项目生产，开发在配置BASE_URL，也可以通过config配置项内language_url，skin_url,content_css分别自定义文件引用，vueCli项目默认不需要配置
    2.自定义插件需要在created钩子函数里完成，也就是编辑器的config配置项需要在created初始化
    3.自定义插件注册在mounted钩子函数内注册，具体自定义插件示例参考example文件夹内的示例代码
***
##其它
>[参考原编辑器][tinyMceUrl]

[configUrl]: ./example/src/config.js
[configAnnotationUrl]: ./example/README.md
[tinyMceUrl]: https://www.tiny.cloud/docs/quick-start/