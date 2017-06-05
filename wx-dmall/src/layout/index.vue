<template>
	<div class="indexLayout-wrapper">
		<header class="header">
			<indexHeader></indexHeader>
		</header>
		<div class="body">body</div>
		<footer class="footer">
			<indexFooter></indexFooter>
		</footer>
	</div>
</template>
<style>
	.indexLayout-wrapper{
		height: 100%
	}
	.indexLayout-wrapper .header{
	    min-height: 44px;
	    background-color: red;
	    position: fixed;
	    top: 0;
	    width: 100%;
	}
	.indexLayout-wrapper .body{
		padding-top: 46px;
	}
	.indexLayout-wrapper .footer{
		height: 50px;
		background-color: green;
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
<script>
	import IndexHeader from '../modules/indexheader';
	import IndexFooter from '../modules/indexfooter';

	export default {
		name:'indexlayout',
		components:{
			indexHeader:IndexHeader,
			indexFooter:IndexFooter
		}
	}
</script>