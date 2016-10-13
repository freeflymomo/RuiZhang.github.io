// JavaScript Document
function loucengtab(){
	
	var numtabmove=0;
	var timer;
	
	timer=setInterval(tabmove,2000);
	function tabmove(){		
		if(numtabmove==$(".floor1_tab_title ul li").length-1){
             	numtabmove=0;
             }else{
             	numtabmove=numtabmove+1;
             }			
			/* console.log(numtabmove);*/
			 tabmoveinter(numtabmove);		
		}		
		function tabmoveinter(a){
			$('.floor1_tab_title ul li').eq(a).addClass('floor01_cur').siblings().removeClass('floor01_cur');
		    $('.floor1_tab_con ul').eq(a).show().siblings().hide();
		}
		
		$('.floor1_tab_title ul li').mouseover(function(){
				$(this).addClass('floor01_cur').siblings().removeClass('floor01_cur');
				$('.floor1_tab_con ul').eq($(this).index()).show().siblings().hide();
				numtabmove=$(this).index();
				
				clearInterval(timer);				
	     })		 
		 $('.floor1_tab_title ul').mouseout(function(){
			 clearInterval(timer);
			 timer=setInterval(tabmove,2000);
		 })
		 $('.floor1_tab_con ul').mouseover(function(){
			 clearInterval(timer);
		 })
		 $('.floor1_tab_con ul').mouseout(function(){
			 clearInterval(timer);
			 timer=setInterval(tabmove,2000);
		 })
		 //一楼效果结束
		 
	var numtabmove2=0;
	var timer2;
	
	timer2=setInterval(tabmove2,2000);
	function tabmove2(){		
		if(numtabmove2==$(".floor1_tab_title ul li").length-1){
             	numtabmove2=0;
             }else{
             	numtabmove2=numtabmove2+1;
             }			
			/* console.log(numtabmove2);*/
			 tabmoveinter2(numtabmove2);		
		}		
		function tabmoveinter2(a){
			$('.floor2_tab_title ul li').eq(a).addClass('floor01_cur').siblings().removeClass('floor01_cur');
		    $('.floor2_tab_con ul').eq(a).show().siblings().hide();
		}
		
		$('.floor2_tab_title ul li').mouseover(function(){
				$(this).addClass('floor01_cur').siblings().removeClass('floor01_cur');
				$('.floor2_tab_con ul').eq($(this).index()).show().siblings().hide();
				numtabmove2=$(this).index();
				
				clearInterval(timer2);				
	     })		 
		 $('.floor2_tab_title ul').mouseout(function(){
			 clearInterval(timer2);
			 timer2=setInterval(tabmove2,2000);
		 })
		 $('.floor2_tab_con ul').mouseover(function(){
			 clearInterval(timer2);
		 })
		 $('.floor2_tab_con ul').mouseout(function(){
			 clearInterval(timer2);
			 timer2=setInterval(tabmove2,2000);
			
		 })
		 //2楼效果结束
	
	
}