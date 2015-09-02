define("seajs/plugin-combo",[],function(){function e(){var e=f.prototype,n=e._load;e._load=function(e,r){t(e),n.call(this,e,r)}}function t(e){var t=[],r=c.comboExcludes;u.forEach(e,function(e){var n=d[e];if(!(n&&!(n.status<f.STATUS.FETCHING)||r&&r.test(e))){var e=u.parseMap(e),i=c.comboSyntax||["??",","],n=i[0],i=i[1];!(n&&e.indexOf(n)>0||i&&e.indexOf(i)>0)&&t.push(e)}}),t.length>1&&seajs.config({map:a(n(t))})}function n(e){return i(r(e))}function r(e){var t={__KEYS:[]};return u.forEach(e,function(e){var e=e.replace("://","__").split("/"),n=t;u.forEach(e,function(e){n[e]||(n[e]={__KEYS:[]},n.__KEYS.push(e)),n=n[e]})}),t}function i(e){var t=[];return u.forEach(e.__KEYS,function(n){for(var r=n,n=e[n],i=n.__KEYS;1===i.length;)r+="/"+i[0],n=n[i[0]],i=n.__KEYS;i.length&&t.push([r.replace("__","://"),o(n)])}),t}function o(e){var t=[];return u.forEach(e.__KEYS,function(n){var r=o(e[n]);r.length?u.forEach(r,function(e){t.push(n+"/"+e)}):t.push(n)}),t}function a(e){var t=c.comboSyntax||["??",","],n=[];return u.forEach(e,function(e){var r=e[0]+"/",e=s(e[1]);u.forEach(e,function(e){var i={},o=r+t[0]+e.join(t[1]);if(o.length>2e3)throw Error("The combo url is too long: "+o);u.forEach(e,function(e){i[r+e]=o}),n.push(function(e){return i[e]||e})})}),n}function s(e){var t=[],n={};u.forEach(e,function(e){var t;t=e.lastIndexOf("."),(t=t>=0?e.substring(t):"")&&(n[t]||(n[t]=[])).push(e)});for(var r in n)n.hasOwnProperty(r)&&t.push(n[r]);return t}var l=seajs.pluginSDK,u=l.util,c=l.config,f=l.Module,d=seajs.cache;seajs.debug?seajs.log("Combo is turned off in debug mode"):e(),u.toComboPaths=n,u.toComboMap=a}),seajs.use("seajs/plugin-combo");