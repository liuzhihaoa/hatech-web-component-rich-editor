# UI界面配置
    branding（隐藏右下角技术支持）
    contextmenu（上下文菜单）
    contextmenu_never_use_native
    custom_ui_selector
    draggable_modal（允许模态窗口拖动）
    elementpath（隐藏底栏的元素路径）
    event_root
    fixed_toolbar_container
    icons（为编辑器附加新图标集合）
    icons_url（附加新图标的url路径）
    inline（内联模式）
    width&height（设置宽高）
    max_width&max_height（最大宽高）
    min_width&min_height（最小宽高）
    menu（自定义菜单）
    menubar（1级菜单）
    mobile（移动端配置）
    preview_styles
    quickbars_insert_toolbar（[插入]快捷工具栏）
    quickbars_selection_toolbar（[选择]快捷工具栏）
    removed_menuitems（移除某菜单项）
    resize（调整编辑器大小工具）
    skin（设置皮肤）
    skin_url（引入外部皮肤）
    statusbar（显示隐藏状态栏）
    theme（设置主题）
    theme_url（引入外部主题）
    toolbar（自定义工具栏）
    toolbar_drawer（工具栏抽屉模式：520已废除）
    toolbar_mode（工具栏模式）
    toolbar_groups（工具栏分组）
    toolbar_location（工具栏位置，可实现在底部）
    toolbar_sticky（粘性工具栏）

# 内容外观配置
    body_class&body_id（为编辑区body指定类或id）
    content_css（为编辑区指定css文件）
    content_css_cors（指定css文件跨域开关）
    content_style（直接为编辑区编写css）
    inline_boundaries（内置样式开关）
    inline_boundaries_selector（使用内置样式的元素）
    placeholder（占位文本）
    text_color（颜色工具相关配置）
    visual（网格线开关）
    visual_anchor_class（为编辑区锚点指定class）
    visual_table_class（为编辑区表格指定class）

# 生成代码配置
    allow_conditional_comments（允许条件注释）
    allow_html_in_named_anchor（允许name锚点）
    allow_unsafe_link_target（允许不安全的目标链接）
    convert_fonts_to_spans（font标签转span）
    custom_elements（自定义元素）
    doctype
    element_format（元素为XHTML/HTML）
    encoding（转XML）
    entities（实体）
    entity_encoding（实体类型）
    fix_list_elements（修复列表元素）
    forced_root_block（强制根节点块元素）
    forced_root_block_attrs（为“强制根节点块元素”添加属性）
    invalid_elements（无效元素）
    invalid_styles（无效样式）
    keep_styles（保持样式）
    protect（代码保护）
    remove_trailing_brs（删除最尾的br）
    schema（模式）
    valid_children（有效子元素）
    valid_classes（有效class）
    valid_styles（有效样式）
    valid_elements（有效元素）
    extended_valid_elements（扩展有效元素）

# 格式化配置
    outputType （编辑器返回内容，可选值‘html’，‘text’）
    block_formats（区块列表）
    font_formats（字体列表）
    fontsize_formats（文字大小列表）
    formats（格式自定义*）
    indentation（缩进）
    indent_use_margin（使用margin缩进）
    style_formats（自定义段落样式格式列表）
    style_formats_merge（替换还是附加到自定义段落样式列表）
    style_formats_autohide（隐藏当前不可用的样式列表）

# 图片&文件上传配置
    automatic_uploads（开关使用Data URL/Blob URL插入图片和文件到内容区的方式）
    file_picker_callback（文件上传回调）
    file_picker_types（文件选择器的使用场景）
    images_dataimg_filter（定义一个自定义过滤器处理base64图像转blobs的逻辑）
    images_reuse_filename（是否给每个上传的文件生成唯一的文件名）
    images_upload_url（上传实现的URL）
    images_upload_base_path（图片地址基本目录）
    images_upload_credentials（对images_upload_url中指定的地址调用时是否传递cookie等跨域的凭据）
    images_upload_handler（图片上传自定义实现）

    ============================================================>

    automatic_uploads
    开关使用Data URL/Blob URL插入图片和文件到内容区的方式。例如，图像是使用imagetools插件处理后插入到内容区的，此时图像并未真正上传到服务器，而是以Data URL/Blob URL的方式插入在内容中。

    该选项默认是开启的，如禁用，则必须配置images_upload_url，即指定接收图片上传的远程地址，如未指定该配置，则禁用无效。

    取值：true / false

    默认：true

    file_picker_callback（文件上传回调）
    配置此选项将在图片、媒体、链接对话框中加入上传文件功能

    当用户点击上传按钮后，编辑器将在你自定义的函数中传递三个参数：

    callback：上传成功后执行的回调函数，此函数是由编辑器定义的，它的第一个参数是上传结果，第二个参数可以是一个object，其中定义了要填入对话框中的字段键值。
    value：当前受影响的字段值
    meta：为一个包含指定对话框中其它字段值的对象（meta.filetype是当前对话框的文件类型）
    注意：file_picker_callback仅为一个自定义钩子，具体上传功能需要自己实现。

    取值：Function

    该功能的演示请参考：《简介与入门：上传图片和文件》中的文件上传部分，里面包含完整的上传代码示例。

    file_picker_types（文件选择器的使用场景）
    使用空格或逗号分隔，允许的值包括：file,image和media。该选项需配合file_picker_types使用，未指定的对话框则不会出现文件上传按钮。file对应链接对话框，image对应图片对话框，media对应多媒体对话框。

    类型：String

    取值：'file image media'

    images_dataimg_filter
    定义一个自定义过滤器处理base64图像转blobs的逻辑。

    该函数的参数是一个DOM对象。

    取值：Function

    images_reuse_filename
    编辑器默认会给每个上传的文件生成唯一的文件名。有时候我们不希望这么做，例如，automatic_uploads被开启时，尽管当前图片文件没有变，但使用imagetools插件对图像进行每一次操作都会导致文件上传，并且每次都将使用不同的文件名。

    将该配置设为true则可以避免此问题，它将告诉编辑器使用图片文件实际的文件名，而不是每次随即生成一个新的。

    因为img标签的src属性可能是服务器返回来的任何文件名，该文件名将在下次上传时被使用。

    译者注：该配置目前仅imagetools插件有用。
    取值：true / false

    默认：false

    images_upload_url（上传实现的URL）
    指定接收上传图片的后端地址。调用editor.uploadImages()或utomatically时如果启用automatic_uploads则会触发该配置。

    上传程序应按以下格式返回上传后的文件url：

    //json格式
    { "location": "folder/sub-folder/new-location.png" }

    该功能的演示请参考：《简介与入门：上传图片和文件》，里面包含完整的上传代码示例。

    取值：string

    images_upload_url: 'postAcceptor.php'
    images_upload_base_path（图片地址基本目录）
    指定一个基本路径，多用于不同目录结构中，修正上传图片功能返回的图片相对地址。

    取值：string

    images_upload_base_path: '/some/basepath'
    images_upload_credentials
    对images_upload_url中指定的地址调用时是否传递cookie等跨域的凭据。

    取值：true / false

    默认：false

    images_upload_credentials: true
    images_upload_handler（图片上传自定义实现）
    此选项允许你使用自定义函数代替编辑器来处理上传操作。该自定义函数需提供三个参数：blobInfo、成功回调和失败回调。

    如果未使用此配置，编辑器将使用ajax每次上传一个图片，并在成功返回结果后调用成功回调函数。

    此函数将完全接管编辑器的图片上传，你需要在上传成功后执行成功回调函数，参数则为图片URL，也可以在第二个参数加入对话框填充数据对象。
    取值：Function

    以下为自定义上传实现的一个代码示例：

# 本地化配置
    directionality（文字方向）
    language（界面语言）
    language_url

    ============================================================>

    directionality（文字方向）
    设置文字的方向是从左到右，还是从右到左。

    取值：ltr / rtl

    默认：ltr

    language（界面语言）
    设置编辑器的界面语言，编辑器默认是英文的，要变中文需要下载汉化包放到指定目录内，然后使用该配置：

    language:'zh_CN'
    取值：String

    默认：en_US

    详细介绍请参考：简介与入门 - 本地化这一节的内容。

    language_url
    必须将语言包放入langs文件夹内才可以使用language配置语言。如无法实现，则可以使用language_url指定语言包存放的URL，例如：

    language_url : '/languages/zh_CN.js',

# URL处理配置
    allow_script_urls（允许链接和图像url使用js）
    convert_urls（自动转换URL）
    document_base_url（设置URL的基本目录）
    relative_urls（相对URL）
    remove_script_host（删除URL的域名部分）
    urlconverter_callback（自定义URL转换逻辑）

    ============================================================>

    allow_script_urls（允许链接和图像url使用js）
    开启此选项则允许href="javascript:alert('hello');"这类代码不会被编辑器过滤掉。出于安全考虑，该选项默认关闭，因为从别处复制来的内容中可能会携带js代码。

    取值：true / false

    默认：false

    allow_script_urls: true
    convert_urls（自动转换URL）
    关闭此选项，编辑器将不会自动处理URL，也就是说，插入的URL原本是什么就是什么，不会自动转换相对或绝对路径，这样会导致内容URL极其混乱。所以，默认此选项是开启的。

    取值：true / false

    默认：true

    convert_urls: false
    document_base_url（设置URL的基本目录）
    它常与下面的relative_urls配合使用，用于统一内容区URL格式。此参数的值必须是一个URL，且必须以/结尾。

    取值：String（必须以/结尾）

    默认：当前目录

    document_base_url : "",
    如何全局定义URL为相对URL、绝对URL或带域名的URL？
    relative_urls（相对URL）
    此设置将把当前域名中的所有URL转换为相对URL。相对位置基于document_base_url的配置。

    取值：true / false

    相对URL

    绝对URL

    带域名的绝对URL

    remove_script_host（删除URL的域名部分）
    取值：true / false

    默认：true

    remove_script_host: false
    例子参见上文。

    urlconverter_callback（自定义URL转换逻辑）
    使用自定义的URL转换逻辑处理文档中的URL。

    该函数有三个参数：

    url：原始url字符串。
    node：url所在的DOM。
    on_save：该值一直为true
    name：正在设置的属性名。
    该函数的返回值应是转换后的URL字符串。

    此选项的默认值为编辑器内部函数convertURL(url:string, name:string, elm:string):string，有关该函数细节需参见文档关于API的部分

    取值：Function
    anchor_top
    anchor_bottom

#保存扩展配置
    handleSave（父组件响应保存事件，接受参数为编辑器格式化后内容）
    destroyAfterSaved（保存后是否销毁编辑器）

#取消扩展配置
    destroyAfterCancle （取消销毁/隐藏编辑器，true为销毁，false为隐藏）

# 其它配置
    br_in_pre（pre内回车行为）
    custom_undo_redo_levels（撤销次数）
    end_container_on_empty_block（空元素回车将其拆分）
    nowrap
    object_resizing（调整大小控件开关）
    type_ahead_urls（键入网址判断）

    ============================================================>

    br_in_pre（pre内回车行为）
    控制在pre标签内按回车时的行为。

    默认true的行为是：在当前位置插入一个br。

    例如：<pre>This is inside <br> a pre tag.</pre>

    但如果将其设为false，编辑器将在当前位置拆分pre，上例则变为：

    <pre>This is inside </pre> <pre>a pre tag.</pre>

    取值：true / false

    默认：true

    br_in_pre: false
    custom_undo_redo_levels（撤销次数）
    该选项影响撤销、重做工具允许的最大次数，默认为无限次。但对于内存有限的小型系统，定义一个较小的值（例如10）能减少内存开销。

    译者注：建议编写较大文章的后台定义此选项，可以设置成30/50什么的，反正没人会撤销那么多次，但内存却实实在在的省下了，况且编辑器还有保存草稿的插件。

    取值：Number

    默认：无限次

    custom_undo_redo_levels: 10
    end_container_on_empty_block（空元素回车将其拆分）
    如果设为true，在空的元素中按下回车键将拆分该元素（这是一个全局配置，也就是所有标签都按此行为执行，暂时没想到该选项的使用场景）。

    取值：true / false

    默认：false

    end_container_on_empty_block: true
    nowrap
    使可编辑区行为类似于<pre>，并添加水平滚动而不是换行文本。

    取值：true / false

    默认：false

    nowrap : true
    object_resizing（调整大小控件开关）
    开关图片、表格、媒体对象在编辑区内的调整大小工具。拖拽工具可调整对象大小。

    该参数除了传统的布尔值，还允许使用一个css3选择器，被选中的对象才开启调整大小控件。

    取值：true / false / String

    默认：true

    object_resizing : false
    object_resizing : 'img'
    typeahead_urls（键入网址判断）
    默认开启，当在编辑区内输入网址并回车或按下空格时，编辑器会分析出你键入的可能是一个网址，并在自动给其加上链接。
    取值：true / false
    默认：true

