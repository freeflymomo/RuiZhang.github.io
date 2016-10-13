seajs.use(['player/player.js','index/index.js'] ,function(mod, mod1){
	window.onload = function(){
		//mod.tab();
		//mod.setBar();
		
		mod1.TAB( 'l_tab_1_tit', 'l_tab_1_con');
		mod1.TAB( 'l_tab_2_tit', 'l_tab_2_con');
		mod1.TAB( 'l_tab_3_tit', 'l_tab_3_con');
		mod1.TAB( 'l_tab_4_tit', 'videoGallery');
		
		mod1.setBar('rollBox' ,'conbox'  ,'conoutbox');//鼠标滚轮左
		mod1.setBar('rollBox2' ,'conbox2'  ,'content');//鼠标滚轮右
		mod1.banner();
		// index 页面
	}
});

