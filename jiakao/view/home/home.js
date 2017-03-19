(function(){
	var handle,html,css;
	handle = {
		tpl:html,
		css:css,
		
	}
	define("view/home/home",function(require, exports, module){
		html = require("view/home/home.tpl");
		css = require("view/home/home.css");
		module.exports = handle;
	});
})();