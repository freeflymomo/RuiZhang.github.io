
//1 随机数
function ran(n,m){
	return parseInt(Math.random()*(m-n)+n);
}
//1 随机数

// 2获取非行间样式
function getStyle(obj,name){
	return (obj.currentStyle || getComputedStyle(obj,false))[name];
}
// 2 获取非行间样式

// 3 个位补零
function toDou(n){
	return n<10 ?'0'+n:''+n;
}
// 3 个位补零


// 4去重复
function findInArr(arr,n){
	for(var i=0; i<arr.length;i++){
		if(n==arr[i]){
			return true;
		}
	}
	return false;
}
// 4去重复

// 5获取className 的兼容
function getClass(obj,sclass){
	if(obj.getElementsClassName){
		return obj.getElementsClassName(sclass);
	}else{
		var arr=[];
		var oEle=obj.getElementsByTagName('*');
		for(var i=0; i<oEle.length;i++){
			var tmp=oEle[i].className.split(' ');
			if(findInArr(sclass,tmp)){
				arr.push(oEle[i]);
			}
		}
		return arr;
	}
}
// 5获取className 的兼容


// 6 查找最小值
function findMix(arr,start){
	var iMin=arr[start];
	var iMinindex=start;
	for(var i=0; i<arr.length; i++){
		if(arr[i]<iMin){
			iMin=arr[i];
			iMinindex=i;
		}
	}
	return iMinindex;
}
// 6 查找最小值


 // 7 获取绝对距离位置
function getPos(obj){
	var l=0;
	var t=0;
	while(obj){
		l+=obj.offsetLeft;
		t+=obj.offsetTop;
		obj=obj.offsetParent;
	}
	return {left:l, top:t}
}
 // 7 获取绝对距离位置

// 鼠标滚轮封装
function wheel(fn){
	function fnwheel(ev){
		var oEvent= ev || event;
		var bSys=true;
		if(oEvent.wheelDelta){
			if(oEvent.wheelDelta>0){
				bSys=true;
			}else{
				bSys=false;
			}
		}else{
			if(oEvent.detail>0){
				bSys=false;
			}else{
				bSys=true;
			}
		}
		fn && fn(bSys);
		oEvent.preventDefault && oEvent.preventDefault();
        return false;
	}
	if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
		document.addEventListener('DOMMouseScroll',fnwheel,false);
	}else{
		document.onmousewheel=fnwheel;
	}
}
// 鼠标滚轮封装

// 拖拽函数封装
function drag(obj){
	obj.onmousedown=function(ev){
		var oEvent= ev || event;
		var disx=oEvent.clientX-obj.offsetLeft;
		var disy=oEvent.clientY-obj.offsetTop;
		function fnmove(ev){
			var oEvent=ev ||event;
			var l=oEvent.clientX-disx;
			var t=oEvent.clientY-disy;

			obj.style.left=l+'px';
			obj.style.top=t+'px';
		};
		function fnup(){
			this.onmousemove=null;
			this.onmouseup=null;
			obj.releaseCapture && obj.releaseCapture();
		}
		if(obj.setCapture){
			obj.onmousemove=fnmove;
			obj.onmouseup=fnup;
			obj.setCapture();
		}else{
			document.onmousemove=fnmove;
			document.onmouseup=fnup;
		}
		return false;
	}
}
// 拖拽函数封装

// 运动库
function move(obj,json,options){
	var options=options || {};
		options.time=options.time || 1000;
		options.type=options.type || 'linear';

	var strat={};
	var dis={};
	var iCount=Math.floor(options.time/30);

	for(var name in json){
		strat[name]=parseFloat(getStyle(obj,name));
		dis[name]=json[name]-strat[name];
	} ;
	var n=0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++;
		for(var name in json){
			switch(options.type){
				case 'linear':
					var a=n/iCount;
					var cur=strat[name]+dis[name]*a;
					break;
				case 'ease-in':
					var a=n/iCount;
					var cur=strat[name]+dis[name]*(Math.pow(a,3));
					break;
				case 'ease-out':
					var a=1-n/iCount;
					var cur=strat[name]+dis[name]*(1-(Math.pow(a,3)));
			}
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity='+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
		}
		if(n==iCount){
			clearInterval(obj.timer);
			options.end && options.end();
		}
	},30)
};
// 运动库

// 提高加载页面速度
function $(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',function(){
			fn && fn();
		},false);
	}else{
		document.onreadystatechange=function(){
			if(document.readyState=='complete'){
				fn && fn();
			}
		}
	}
}
// 提高加载页面速度









