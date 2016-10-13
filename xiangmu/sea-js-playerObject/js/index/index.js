define(function(require , exports , module){
	
	var mod = require('common/common.js');
	
	exports.TAB = function(titbox , conbox){
		var oL_tab_1_tit = document.getElementById(titbox);
		var oL_tab_1_con = document.getElementById(conbox);
		var aBtn = oL_tab_1_tit.children;
		var aCon = oL_tab_1_con.children;
		var timer = null;
		var iNow = 0;
		
		if(oL_tab_1_con.id == 'videoGallery'){
			var aConchildren = oL_tab_1_con.children;
			for(var i=0; i<aConchildren.length; i++){  //4个内容盒子
				(function(i){
					var aCCchildren = aConchildren[i].children; 
						for(var j=0; j<aCCchildren.length; j++){ //4个盒子里面的6个小选项卡
							aCCchildren[j].index = j;
							aCCchildren[j].onmouseover = function(){//给每个小盒子加事件
								for(var x=0; x<aCCchildren.length;x++){
									aCCchildren[x].children[0].style.display = 'block';	
									aCCchildren[x].children[1].style.display = 'none';	
								}
									aCCchildren[this.index].children[0].style.display = 'none';	
									aCCchildren[this.index].children[1].style.display = 'block';	
							};
						}
				})(i);
			}
		}//end for if
		
		for(var i=0; i<aBtn.length; i++){
			aBtn[i].index = i;
			aBtn[i].onclick = function(){
				iNow = this.index;
				tab(iNow);
			};
		}// end for loop
		
		function tab(iNow){
			for(var i=0;i<aBtn.length; i++){
				aBtn[i].className = '';
				aCon[i].style.display = 'none';
			}	
			aBtn[iNow].className = 'active';
			aCon[iNow].style.display = 'block';
		};
		
		timer = setInterval(function(){
			iNow++;
			if(iNow>aBtn.length-1){
				iNow=0;
			}
			tab(iNow);
		},1000);
		
		oL_tab_1_con.parentNode.onmouseover = function(){
			clearInterval(timer);	
		};
		
		oL_tab_1_con.parentNode.onmouseout = function(){
			timer = setInterval(function(){
				iNow++;
				if(iNow>aBtn.length-1){
					iNow=0;
				}
				tab(iNow);
			},1000);
		};
	};//end for tab函数执行
	
	
	exports.banner = function(){
		var oImgbox = document.getElementById('img_box');
		var aImg    = oImgbox.getElementsByTagName('li');
		var oBtnbox = document.getElementById('btn_box');
		var aBtn    = oBtnbox.getElementsByTagName('li');
		var oMovebox = document.getElementById('move_box');
		var timer = null;
		var iNow = 0;
		
		timer = setInterval(function(){
			iNow++;
			if(iNow == aBtn.length){
				iNow =0;
			}
			tab(iNow);
		},3000);
		
		function tab(iNow){
			for(var i=0; i<aImg.length; i++){
				mod.startMove(aImg[i] , {opacity:0});	
			}
			mod.startMove(oMovebox , {left:iNow*aBtn[0].offsetWidth});	
			mod.startMove(aImg[iNow] , {opacity:1});	
		};
	
		for(var j=0;j<aBtn.length; j++){
			aImg[j].style.display = 'block';
			aBtn[j].index = j;
			aBtn[j].onmouseover = function(){
				iNow = this.index;
				tab(iNow);
			};	
		}	
	};//end for banner
	
	exports.setBar=function(rollBox,conbox,conoutbox){
		var oBarbox = document.getElementById(rollBox);
		var oUp = oBarbox.children[1];
		var oBar = oBarbox.children[0];
		var oDown = oBarbox.children[2];
		var oConbox = document.getElementById(conbox);
		var oConOutbox = document.getElementById(conoutbox);
		
		oBar.onmousedown = function(ev){
			var oEvent = ev || event;
				document.title = oBarbox.offsetHeight;
			var disX = oEvent.clientY - oBar.offsetTop;
			document.onmousemove = function(ev){
				var oEvent = ev || event;
				var t = oEvent.clientY - disX;
	
				setTop(t);
			};
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
				oBar.releaseCapture && oBar.releaseCapture();	
			};
			oBar.setCapture && oBar.setCapture();
			return false;
		};
		
		oUp.onclick = function(){
			var t = oBar.offsetTop;
			t-=50;
			setTop(t);	
		};
		
		oDown.onclick = function(){
			var t = oBar.offsetTop;
			t+=50;
			setTop(t);	
		};
		
		function setTop(t){
			if(t<=13){
				t=13;
			}
			if(t>=oBarbox.offsetHeight - 13 - oBar.offsetHeight){
				t=oBarbox.offsetHeight - 13- oBar.offsetHeight;
			}
			mod.startMove(oConbox ,{top:-t/(oBarbox.offsetHeight - 26- oBar.offsetHeight) * (oConbox.offsetHeight - oConOutbox.offsetHeight)} );
			mod.startMove(oBar ,{top:t});
		};
		
		mod.addmousewheel(oConOutbox , function(bdown){
			var t = oBar.offsetTop;
			if(bdown){
				t+=50;
			}else{
				t-=50;	
			}
			setTop(t);
		});
		
	};//setBar

});