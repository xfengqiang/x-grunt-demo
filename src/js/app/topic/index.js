/**
 * Created by Administrator on 15-9-2.
 */
define(function (require, exports) {
    var $ = require("jquery"),
        Dialog = require("dialog");
    $("#btnDialog").bind("click", function () {
        var mapDialog = new Dialog({type: "text", value: 'this is topic page', width:'230px', height:'60px'});
        mapDialog.show();
    })
});