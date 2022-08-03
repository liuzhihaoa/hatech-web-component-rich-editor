/*
* @Description 扩展取消插件
* @author qiangang
* @date 2020/6/16
*/
tinymce.PluginManager.add('handleCancle', function (editor, url) {
  const pluginName = '取消';

  editor.ui.registry.addIcon('handlecancle', '<svg class="icon" style="width: 22px; height: 22px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2675"><path d="M512 128c211.2 0 384 172.8 384 384s-172.8 384-384 384-384-172.8-384-384 172.8-384 384-384m0-64C262.4 64 64 262.4 64 512s198.4 448 448 448 448-198.4 448-448-198.4-448-448-448z" fill="" p-id="2676"></path><path d="M646.4 332.8L512 467.2 377.6 332.8c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8L467.2 512l-134.4 134.4c-12.8 12.8-12.8 32 0 44.8s32 12.8 44.8 0L512 556.8l134.4 134.4c12.8 12.8 32 12.8 44.8 0s12.8-32 0-44.8L556.8 512l134.4-134.4c12.8-12.8 12.8-32 0-44.8s-32-12.8-44.8 0z"></path></svg>');

  // 注册菜单栏按钮
  editor.ui.registry.addMenuItem('handlecancle', {
    icon: 'handlecancle',
    text: pluginName,
    tooltip: pluginName,
    onAction: function () {
      tinymce.execCommand('handleCancle');
    }
  })

  // 注册一个工具栏按钮名称
  editor.ui.registry.addButton('handlecancle', {
    icon: 'handlecancle',
    tooltip: pluginName,
    onAction: function () {
      tinymce.execCommand('handleCancle');
    }
  });
});
