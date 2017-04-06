(function(){
	var component,_fn,handle;
	define("component/exam-menu/exam-menu",function(require,module,exports){
		require('component/exam-menu/exam-menu.tpl');
		require('component/exam-menu/exam-menu.css');
		Vue.component("exammenu",{
			template:"#comp-exam"
		});




		module.exports = component;


	});
})();