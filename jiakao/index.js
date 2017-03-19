(function(){
	var home;
	seajs.config({
	  base: "./",
	});
	seajs.on('load',function(a,b,c,d,e,f,g){
		console.log(a,b,c,d);
	});
	seajs.on('define',function(a,b,c,d,e,f,g){
		console.log(a,b,c,d);
	});
	seajs.on('request',function(a,b,c,d,e,f,g){
		console.log(a,b,c,d);
	});
	seajs.on('exec',function(a,b,c,d,e,f,g){
		console.log(a,b,c,d);
	});




	define('index',function(require,module,exports){
		home = require('view/home/home');


	});

	seajs.use("index",function(index){
		console.log(index);

	});
})();