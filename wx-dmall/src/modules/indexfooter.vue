<template>
	<div class="indexfooter-wrapper">
		<div class="home footerBtn"  @click="goto('home')" >首页</div>
		<div class="category footerBtn" @click="goto('category')">分类</div>
		<div class="member footerBtn" @click="goto('member')">会员</div>
		<div class="cart footerBtn" @click="goto('cart')">购物车</div>
		<div class="mine footerBtn" @click="goto('mine')">我的</div>
	</div>
</template>
<style>
	.indexfooter-wrapper{
		font-size: 0px

	}
	.indexfooter-wrapper .footerBtn{
		display: inline-block;
		width:20%;
		font-size:16px;
		text-align:center;
	}
</style>
<script>
	import Router from 'vue-router'
	export default {
		name:'indexfooter',
		methods:{
			goto:function(pageName){
				this.$router.push(pageName);
			}
		}
	}
</script>