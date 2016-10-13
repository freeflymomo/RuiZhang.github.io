
//LOGO
function logo(){
	var oLogo=document.getElementById('logo');
	var aImg=oLogo.children[0];

	oLogo.onmouseover=function(){
		move(aImg,{width:310,height:310,marginLeft:-50,marginTop:-50});
	}
	oLogo.onmouseout=function(){
		move(aImg,{width:210,height:210,margin:0});
	}
}

//LOGO
// 导航
function nav(){
	var oUl=document.getElementById('nav_list');
	var aLi=oUl.children;

	for(var i=0; i<aLi.length; i++){
		aLi[i].onmouseover=function(){
			move(this,{marginTop:10},{time:100});
		}
		aLi[i].onmouseout=function(){
			move(this,{marginTop:0},{time:100});
		}
	}
}
// 导航

//轮播图

function lunbo(){
	var	Tablist=document.getElementById('tab_list');
	var oLef=document.getElementById('left');
	var oRig=document.getElementById('right');
	var timer=null;
	var R=4;
	var C=5;

	for(var r=0;r<R;r++){
		for(var c=0; c<C;c++){
			var aSpan=document.createElement('span');
			aSpan.style.width=Tablist.offsetWidth/C+'px';
			aSpan.style.height=Tablist.offsetHeight/R+'px';
			Tablist.appendChild(aSpan);
			aSpan.style.left=c*aSpan.offsetWidth+'px';
			aSpan.style.top=r*aSpan.offsetHeight+'px';
			aSpan.style.backgroundPosition='-'+c*aSpan.offsetWidth+'px -'+r*aSpan.offsetHeight+'px';
		}
	}

	var aSpan=Tablist.querySelectorAll('span');
	var iNow=0;
	var bSys=true;


	oLef.onmouseover=oRig.onmouseover=function(){
		clearInterval(timer);
		this.className='active';		
	}
	oLef.onmouseout=oRig.onmouseout=function(){
		timer=setInterval(next,3000);
		this.className='';
	}
	oRig.onclick=function(){
		next();
	}
	oLef.onclick=function(){
		prve();
	}
	timer=setInterval(next,3000)
	function next(){
		if(!bSys)return;
		bSys=false;
		iNow++;
		tab();
	}
	function prve(){
		if(!bSys)return;
		bSys=false;
		if(iNow==0){
			iNow=aSpan.length;
		}
		iNow--;
		tab();
	}
	function tab(){
		for(var i=0; i<aSpan.length;i++){
		var oBoxC=Tablist.offsetWidth/2;
		var oBoxH=Tablist.offsetHeight/2;
				
		var x=aSpan[i].offsetWidth/2+aSpan[i].offsetLeft-oBoxC;
		var y=aSpan[i].offsetHeight/2+aSpan[i].offsetTop-oBoxH;
		aSpan[i].style.transition='all 0.7s ease';
		aSpan[i].style.transform='perspective(600px) translateX('+x+'px) translateY('+y+'px) rotateX('+ran(-360,360)+'deg) rotateY('+ran(-360,360)+'deg)';
		aSpan[i].style.opacity=0;
		}

		aSpan[0].addEventListener('transitionend',function(){
					bSys=true;
		for(var i=0;i<aSpan.length;i++){
			aSpan[i].style.transition='none';
			aSpan[i].style.transform='perspective(800px) translateX(0px) translateY(0px) rotateX(0deg) rotateY(0deg)';
			aSpan[i].style.opacity=1;
			aSpan[i].style.backgroundImage='url(img/tab/'+iNow%8+'.jpg)';	
			}
			Tablist.style.backgroundImage='url(img/tab/'+(iNow+1)%8+'.jpg)';
		},false);
	}
}
function Rotate(){
	var oPeve=document.getElementById('prve');
	var oNext=document.getElementById('next');
	var oUl=document.getElementById('RotatePic');
	var aLi=oUl.getElementsByTagName('li');
	var aImg=oUl.getElementsByTagName('img');
	var arr=[];

	for(var i=0; i<aLi.length; i++){
		arr.push({
			top:aLi[i].offsetTop,
			left:aLi[i].offsetLeft,
			imgT:aImg[i].offsetTop,
			imgW:aImg[i].offsetWidth,
			imgH:aImg[i].offsetHeight,
			opacity:getStyle(aImg[i],'opacity'),
			zIndex:getStyle(aLi[i],'zIndex')
		});
	}

	function round(){
		for(var i=0; i<aLi.length; i++){
			doMove(aLi[i],{left:arr[i].left,top:arr[i].top},{time:800});
			doMove(aImg[i],{opacity:arr[i].opacity,width:arr[i].imgW,height:arr[i].imgH,top:arr[i].imgT},{time:800});
			aLi[i].style.zIndex=arr[i].zIndex;
		}
	}

	oNext.onclick=function(){
		arr.push(arr.shift());
		round();
	}
	oPeve.onclick=function(){
		arr.unshift(arr.pop());
		round();
	}
}

function iNews(){
	var oUl=document.getElementById('iNews');
	var aLi=oUl.children;
	var aA=oUl.getElementsByTagName('a');
	var arr=['这是自己的第一个个人站','不问曲终人聚散','只愿君心似我心','揉碎殷红的相思','相见争如不见','有情何似无情'];
	for(var i=0; i<arr.length; i++){
		createSpan(arr[i],aA[i]);
	}
	function createSpan(str,par){
		for(var i=0; i<str.length;i++){
			var aSpan=document.createElement('span');
			aSpan.innerHTML=str.charAt(i);
			par.appendChild(aSpan);
		}
	}
	for(var i=0; i<aLi.length; i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			var aI=this.children[0];
			var aEm=this.children[1].children[0];
			aI.className='active';
			aEm.className='active';
			var aSpan=this.getElementsByTagName('span');
			var arr1=[];
			for(var j=0;j<aSpan.length;j++){
				arr1.push({left:aSpan[j].offsetLeft,top:aSpan[j].offsetTop});
			}
			for(var j=0; j<aSpan.length;j++){
				aSpan[j].style.position='absolute';
				aSpan[j].style.left=arr1[j].left+'px';
				aSpan[j].style.top=0+'px';
			}
			function textXH(){
				var n=0;
				var timer=null;
				clearInterval(timer);
				timer=setInterval(function(){	
					move(aSpan[n],{top:-4},{time:100});
					n++;
					// console.log(n);
					if(n==aSpan.length){
						n=0;
					}
				},100)
			}
			textXH();
		}
		aLi[i].onmouseout=function(){
			var aI=this.children[0];
			var aEm=this.children[1].children[0];
			var aSpan=this.getElementsByTagName('span');
			aI.className='';
			aEm.className='';
			// var n=0;
			// var timer=null;
			// timer=setInterval(function(){	
			// 	move(aSpan[n],{top:0},{time:100});
			// 	n++;
			// 	if(n==aSpan.length){
			// 		clearInterval(timer);
			// 	}
			// },100)
		}
	}
}

//fotter
function fotter(){
	var oFotter=document.getElementById('fotter_list');
	var aSpan=oFotter.getElementsByTagName('span');

	for(var i=0; i<aSpan.length;i++){
		aSpan[i].onmouseover=function(){
			var aStrong=this.getElementsByTagName('strong')[0];
			var aEm=this.getElementsByTagName('em')[0];
			// aStrong.style.marginTop='-19px';
			// aEm.style.marginTop='-19px';
			doMove(aStrong,{marginTop:-19},{time:100});
			doMove(aEm,{marginTop:0},{time:100});
		}
		aSpan[i].onmouseout=function(){
			var aStrong=this.getElementsByTagName('strong')[0];
			var aEm=this.getElementsByTagName('em')[0];
			doMove(aStrong,{marginTop:0},{time:100});
			doMove(aEm,{marginTop:0},{time:100});
		}
	}
}	
//fotter
// service
function service(){
	var oUl=document.getElementById('service');
	var aFx=document.getElementById('fenxiang');
	var oGuild=document.getElementById('guild'); 
	var oLi=aFx.children;
	var aLi=oUl.children;
	var timer=null;

	change(aLi);
	change(oLi);
	function change(Li){
		for(var i=0; i<Li.length;i++){
			Li[i].onmouseover=function(){
				var aP=this.getElementsByTagName('p')[0];
				aP.style.display='block';
			}
			Li[i].onmouseout=function(){
				var aP=this.getElementsByTagName('p')[0];
				aP.style.display='none';
			}
		}
	}
	aFx.onmouseover=aLi[0].onmouseover=function(){
		oGuild.style.display='block';
		move(aFx,{height:314},{time:300});
		clearTimeout(timer);
	}
	aFx.onmouseout=aLi[0].onmouseout=function(){
		timer=setTimeout(function(){
			oGuild.style.display='none';
			move(aFx,{height:0},{time:300});
		},200)
	}
}
// service
window.onload=function(){
	lunbo();
	nav();
	logo();
	Rotate();
	iNews();
	fotter();
	service();
}