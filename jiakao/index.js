(function(){
	var home;
	seajs.config({
	  base: "./",
	});
	seajs.on('exec',function(content){
		if(content.uri && content.uri.endsWith('.tpl')){//将tpl文件插入body
			var insertHtml = $(content.exports);
			$('body').append(insertHtml);

		}
	});




	define('index',function(require,module,exports){
		home = require('view/home/home');

		var app = new Vue({
			el:"#app"

		});
		console.log(333)
	});

	seajs.use("index",function(index){
		console.log(index);

	});
})();