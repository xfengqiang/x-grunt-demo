[2015-09-03]
============================================================
这个项目是一个web前端的目录结构以及打包方式的demo。项目主要用于演示下面几个常见问题的解决方案：

[js代码模块化]
项目中的js代码使用seajs进行管理，代码模块化封装，结构清晰，易于管理;

[js打包压缩]
项目中使用grunt进行打包，并给出了js三种打包方式的配置实例：
    1. page方式（Gruntfile.page.js）.即当前页面引用的js包含所有依赖，缺点时公共模块会被合并到多个js文件，用户重复下载。比如页面/page/a对应的业务逻辑在page-a中实现，
    它使用了模块common-a,和common-b, common-a和common-b都会被合并到page-a.js中，如果/page/b 也使用了common-a，common-b
    common-a,common-b也会被合并到page-b.js；
    2. comb方式（Gruntfile.comb.js）. 这种方式把公共的模块打包成单独的js文件，上面例子中的common-a， common-b 会被打包到同一个js文件common-all中；
    这种方式解决重复包含的问题，好处是按需请求；缺点是请求次数等同于页面的个数，需要多次请求；
    3. aio方式（Gruntfile.aio.js）. 就是ALL IN ONE的意思，所有的js文件都打包到同一个all.js中，一次请求就可以下载站点需要的所有js文件;
    缺点是，如果每个页面都有大量单独的逻辑，而用户只访问少数页面，实际上就下载了不需要的文件；
    
哪种方式更好呢？显然，方案1最不可选，请求次数多，还重复下载。那么方案2和方案3呢？其实没多大差别，因为一般js文件再大，压缩后也就是几百k，随便一张图片就1-2M，
所以呢真心不用太纠结；

[前端模板引擎技术]
使用前端模板引擎对页面进行渲染可以减轻服务器的压力，因为服务器直接把数据丢给前端，然浏览器自己做这份工作就好了。这种渲染方式的好处在于可以复用服务器接口，
比如大部分h5和app的页面设计完全相同，这样就可以开发一套服务器接口同时给app和h5使用。然而这种方式也不是完美的。js渲染页面的方式是不利于SEO的，如果js逻辑
太重，手机端浏览器打开时会有压力的(>_<)。




