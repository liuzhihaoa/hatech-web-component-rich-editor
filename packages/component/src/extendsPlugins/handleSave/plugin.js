/*
* @Description 扩展保存插件
* @author qiangang
* @date 2020/6/15
*/
tinymce.PluginManager.add('handleSave', function (editor, url) {

  const pluginName = '保存';

  editor.ui.registry.addIcon('handlesave', '<svg class="icon" style="width: 20px; height: 20px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2706"><path d="M823.319273 46.545455A131.025455 131.025455 0 0 1 954.181818 177.408v692.456727A131.002182 131.002182 0 0 1 823.319273 1000.727273H223.953455A131.002182 131.002182 0 0 1 93.090909 869.864727V177.408A131.025455 131.025455 0 0 1 223.953455 46.545455H823.319273zM884.363636 869.864727V177.408A61.114182 61.114182 0 0 0 823.319273 116.363636H768v290.909091a34.909091 34.909091 0 0 1-34.909091 34.909091h-418.909091a34.909091 34.909091 0 0 1-34.909091-34.909091V116.363636H223.953455A61.114182 61.114182 0 0 0 162.909091 177.408v692.456727A61.114182 61.114182 0 0 0 223.953455 930.909091h599.365818A61.114182 61.114182 0 0 0 884.363636 869.864727zM349.090909 372.363636h349.090909V116.363636H349.090909v256z m244.363636-58.181818a46.545455 46.545455 0 1 0-0.023272-93.114182A46.545455 46.545455 0 0 0 593.454545 314.181818"></path></svg>');

  // 注册菜单栏按钮
  editor.ui.registry.addMenuItem('handleSave', {
    icon: 'handlesave',
    text: pluginName,
    tooltip: pluginName,
    onAction: function () {
      tinymce.execCommand('handleSave');
    }
  })

  // 注册一个工具栏按钮名称
  editor.ui.registry.addButton('handleSave', {
    icon: 'handlesave',
    tooltip: pluginName,
    onAction: function () {
      tinymce.execCommand('handleSave');
    }
  });
});
