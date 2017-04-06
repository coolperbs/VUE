(function(){
	var component,handle,_fn;
	handle = {

	};
	_fn = {

	};
	define('view/home/home',function(require,module,exports){
		require('view/home/home.css');
		require('view/home/home.tpl');
		var menu = require('component/exam-menu/exam-menu');

		Vue.component('home',{
			template:"#page-home",
			
		});



		module.exports = component;

	});
})();