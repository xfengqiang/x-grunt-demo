/**
 * Created by Administrator on 15-9-2.
 */
define(function (require, exports) {
    var $ = require("jquery");
    
    var data = {
        title: '基本例子',
        isAdmin: true,
        list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
    };
    var html = template('test', data);
    $('#content').html(html);
//    document.getElementById('content').innerHTML = html;
});