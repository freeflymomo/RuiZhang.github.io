
function menu(){
	var oUl=document.getElementById('menu_sidebar');
	var aLi=oUl.children;
	var zIndex=100;
	function over(Span,B){
		move(Span,{opacity:1},{time:300});
		move(B,{width:210},{time:300});
	}
	function out(Span,B){
		move(Span,{opacity:.5},{time:300});
		move(B,{width:0},{time:300});
	}
	for(var i=0; i<aLi.length; i++){
		aLi[i].onmouseover=function(){
			var aSpan=this.children[0];
			var aI=this.children[1];
			var aB=this.children[2];
			var oDiv=this.children[3];
			var aLiCon=oDiv.children;
			for(var j=0; j<aLiCon.length;j++){
				aLiCon[j].onmouseover=function(){
					var aSpanCon=this.getElementsByTagName('span')[0];
					var aBCon=this.getElementsByTagName('b')[0];
					over(aSpanCon,aBCon);
				}
				aLiCon[j].onmouseout=function(){
					var aSpanCon=this.getElementsByTagName('span')[0];
					var aBCon=this.getElementsByTagName('b')[0];
					out(aSpanCon,aBCon);
				}
			}

			over(aSpan,aB);
			move(aI,{opacity:1,fontSize:14},{time:200});
			move(oDiv,{ width:180},{time:300});
		}
		aLi[i].onmouseout=function(){
			var aSpan=this.children[0];
			var aI=this.children[1];
			var aB=this.children[2];
			var oDiv=this.children[3];
			out(aSpan,aB)
			move(aI,{opacity:0.5,fontSize:12},{time:200});
			move(oDiv,{ width:0},{time:300});
		}
	}
}
function findDir(obj,ev){
	var oEvent= ev || event;
	var scrollT=document.documentElement.scrollTop || document.body.scrollTop;
	var scrollL=document.documentElement.scrollLeft || document.body.scrollLeft;
	var H=getPos(obj).top+obj.offsetHeight/2;
	var W=getPos(obj).left+obj.offsetWidth/2;
	var y=H-oEvent.clientY-scrollT;
	var x=W-oEvent.clientX-scrollL;

	return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4
}
function MathDir(){
	var oUl=document.getElementById('zp_main');
	var aLi=oUl.children;

	for(var i=0; i<aLi.length;i++){
		aLi[i].onmouseenter=function(ev){
			var oEvent =ev ||event;
			// alert(findDir(this,ev))
			var oDiv=this.getElementsByTagName('div')[0];
			switch(findDir(this,ev)){
				case 0:
					oDiv.style.left='369px';
					oDiv.style.top=0;
					break;
				case 1:
					oDiv.style.left=0;
					oDiv.style.top='227px';
					break;
				case 2:
					oDiv.style.left='-369px';
					oDiv.style.top=0;
					break;
				case 3:
					oDiv.style.left=0;
					oDiv.style.top='-227px';
					break;
			}
			move(oDiv,{left:0,top:0},{time:300});
		}
		aLi[i].onmouseleave=function(ev){
				var oEvent= ev || event;
				var oDiv=this.getElementsByTagName('div')[0];
				switch(findDir(this,ev)){
					case 0:
						move(oDiv,{left:369,top:0},{time:300});
						break;
					case 1:
						move(oDiv,{left:0,top:227},{time:300});
						break;
					case 2:
						move(oDiv,{left:-369,top:0},{time:300});
						break;
					case 3:
						move(oDiv,{left:0,top:-227},{time:300});
						break;
				}
			}
		}
	}


$(function(){
	menu();
	MathDir();
});