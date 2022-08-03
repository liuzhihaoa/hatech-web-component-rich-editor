/*
* @Description 扩展要素插件
* @author qiangang
* @date 2020/6/16
*/
tinymce.PluginManager.add('essentialFactor', function (editor, url) {
  const pluginName = '要素';

  editor.ui.registry.addIcon('essentialfactor', '<svg class="icon" style="width: 22px; height: 22px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2736"><path d="M896.174 895.639l0.043-512.115h-64.012l-0.043 64.685H384.075l0.043 63.895 448.087-0.242v127.837l-448.17 0.266 0.04 63.918 448.13-0.265v127.837l-448.13 0.266v63.918zM512.109 191.784l-384.084-0.009v64.169l384.147-0.006zM511.392 191.654l0.063 64.155 127.952 0.014-63.295 127.967h64.012l128.025-159.807L640.124 63.868h-64.012l63.295 127.786z"></path></svg>');

  // 注册菜单栏按钮
  editor.ui.registry.addMenuItem('essentialFactor', {
    icon: 'essentialfactor',
    text: pluginName,
    tooltip: pluginName,
    onAction: function () {
      tinymce.execCommand('handleEssentialFactor');
    }
  })

  // 注册一个工具栏按钮名称
  editor.ui.registry.addButton('essentialFactor', {
    icon: 'essentialfactor',
    tooltip: pluginName,
    onAction: function () {
      tinymce.execCommand('handleEssentialFactor');
    }
  });
});
