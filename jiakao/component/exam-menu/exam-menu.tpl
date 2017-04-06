<script type="text/x-template" id="comp-exam">
	<div class="exam-menu-wrapper">
		<div class="header">
			{{title}} 共 {{total}} 题
		</div>
		<div class="body">
			<div class="main clearfix">
				<div class="left">模拟考试(最高成绩{{heightScore}}分)</div>
				<div class="right">
					<div class="fav">收藏{{favLength}}</div>
					<div class="err">答错{{errLength}}</div>
				</div>
			</div>
			<div class="types clearfix">
					<div class="spical type">专项练习</div>
					<div class="charpter type">章节练习</div>
					<div class="radom type">随机练习</div>
					<div class="order type">顺序练习</div>
			</div>
		</div>
	</div>
</script>