// JavaScript Document
var nowshowpic = 0;
			var mytimer = null;
			//复制一个第一个li在最后，用于变魔术
			$("#tupianliebiao ul li:eq(0)").clone().appendTo("#tupianliebiao ul");

			dongdong();

			function dongdong(){
				window.clearInterval(mytimer);
				mytimer = window.setInterval(
					function(){
						$("#rightanniu").trigger("click");
					},3000
				);
			}

			$("#huxi").mouseenter(
				function(){
					window.clearInterval(mytimer)
				}
			);

			$("#huxi").mouseleave(
				function(){
					dongdong();
				}
			);
			$("#rightanniu").click(
				function(){
					if(!$("#tupianliebiao ul").is(":animated")){
						if(nowshowpic == $("#tupianliebiao ul li").length - 2){
							nowshowpic = 0;
							lunboxianshi2();
						}else{
							nowshowpic = nowshowpic + 1;
							lunboxianshi(nowshowpic);
						}
						shezhixiaoyuandian(nowshowpic);
					}
				}
			);

			$("#leftanniu").click(
				function(){
					if(!$("#tupianliebiao ul").is(":animated")){
						if(nowshowpic == 0){
							nowshowpic = $("#tupianliebiao ul li").length - 2;
							lunboxianshi3();
						}else{
							nowshowpic = nowshowpic - 1;
							lunboxianshi(nowshowpic);
						}
						
						shezhixiaoyuandian(nowshowpic);
					}
				}
			);
			$("#xiaoyuandianul li").click(
				function(){
					nowshowpic = $(this).index();
					lunboxianshi(nowshowpic);
					shezhixiaoyuandian(nowshowpic);
				}
			);

			function lunboxianshi(nowshowpic){
				/*console.log("已经进入到动画函数" + nowshowpic);*/
			 	$("#tupianliebiao ul").animate(
			 		{
			 			"left":-770 * nowshowpic
			 		},500
			 	);
			}

			function lunboxianshi2(){
			 	$("#tupianliebiao ul").animate(
			 		{
			 			"left":-770 * ($("#tupianliebiao li").length - 1)
			 		},500,function(){
			 			$("#tupianliebiao ul").css("left",0);
			 		}
			 	);
			}
			function lunboxianshi3(){
				$("#tupianliebiao ul").css("left",-560 * ($("#tupianliebiao li").length - 1));
				$("#tupianliebiao ul").animate(
			 		{
			 			"left":-770* ($("#tupianliebiao li").length - 2)
			 		},500
			 	);
			}
			function shezhixiaoyuandian(nowshowpic){
				$("#xiaoyuandianul li").eq(nowshowpic).addClass("cur").siblings().removeClass("cur");
			}
			
			$('#huxi').mouseover(function(){
				 $('#baiduanniu a').stop().animate({opacity:0.6},1000)
				
			})
			$('#huxi').mouseout(function(){
				 $('#baiduanniu a').stop().animate({opacity:0},1000)
				
			})