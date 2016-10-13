
function text(){
	var oBox=$('.text');
	var Go=$('.huan');

	var str='面向大海，就好像人的心灵面向着无限辽远。它的宽阔宁静汹涌奔流一如人生必需走过的道路。有辛苦的付出就会得到幸福的拥有；有执着就会收获云开见月明的喜悦；有真情就会找到相溽以沫的那份情感；有无私的奉献就会拥有温暖的力量；有梦想就会有不倦追求的渴望……';

	for(var i=0; i<str.length; i++){
		var aSpan='<span>'+str.charAt(i)+'</span>';
		oBox.append(aSpan);
	};
	var aSpan=$('.text span');
		var n=0;
		var timer=setInterval(function(){
			aSpan.eq(n).stop().animate({opacity:1},1000);
			n++;
			if(n==str.length){
				clearInterval(timer);
			}
		},150)
}
$(function(){
	 text();
});