define(function(require , exports , module){
	exports.tab = function(btnbox,conbox){
		var oBtnbox = document.getElementById(btnbox);
		var oConbox = document.getElementById(conbox);
		var aBtn = oBtnbox.children;
		var aCon = oConbox.children;
		
		for(var i=0; i<aBtn.length; i++){
			aBtn[i].index = i;
			aBtn[i].onclick = function(){
				for(var j=0; j<aBtn.length; j++){
					aBtn[j].className = '';
					aCon[j].style.display = 'none';
				}
				aBtn[this.index].className = 'active2';	
				aCon[this.index].style.display = 'block';
			};
		}
	};
	
	exports.setBar=function(){
		var oBarbox = document.getElementById('rollBox');
		var oUp = oBarbox.children[1];
		var oDown = oBarbox.children[2];
		var oBar = oBarbox.children[0];
		
		var oBox = document.getElementById('box');
		var oConbox = document.getElementById('conbox');
		
		oBar.onmousedown = function(ev){
			var oEvent = ev || event;
			var disY = oEvent.clientY - oBar.offsetLeft;
			document.onmousemove = function (ev){
				var oEvent = ev || event;
				var t = oEvent.clientY - disY;
				setTop(t);
			};
			document.onmouseup=function(){
				document.onmousemove = null;
				document.onmouseup = null;
				oBar.releaseCapture && oBar.releaseCapture();	
			}
			oBar.setCapture && oBar.setCapture();
			return false;
		};
		
		function setTop(t){
			if(t<=11){
				t=11;
			}
			if(t>=oBarbox.offsetHeight - 11-oBar.offsetHeight){
				t=oBarbox.offsetHeight - 11-oBar.offsetHeight
			}
			oConbox.style.top = -t/(oBarbox.offsetHeight - 11-oBar.offsetHeight)*(oConbox.scrollHeight -oBox.offsetHeight) +'px';
			oBar.style.top = t +'px';
		};
		
		addmousewheel(oBox , function(bdown){
			var t = oBar.offsetTop;
			if(bdown){
				t+=50;
			}else{
				t-=50;
			}
			setTop(t);
		}); 
		
		function addmousewheel(obj , fn){
			if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
				obj.addEventListener('DOMMouseScroll' , fnwheel , false);
			}else{
				obj.onmousewheel = fnwheel;
			}
			
			function fnwheel(ev){
				var oEvent = ev || event;
				var bdown = true;
				if(oEvent.wheelDelta){
					bdown = oEvent.wheelDelta<0 ? true : false;
				}else{
					bdown = oEventwheelDetail>0 ? false : true ;
				}
				fn && fn(bdown);
				oEvent.preventDefault && oEvent.preventDefault();
				return false;
			};
			
		};
			
	};//end for setBar
	
});