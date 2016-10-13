function fnMore(dianji,i,more){
	var oA=document.getElementById(dianji);
	var oI=document.getElementById(i);
	var oMore=document.getElementById(more);
	var timer=null;
	oMore.onmouseover=oA.onmouseover=function(){
		oI.className='on';
		oMore.style.display='block';
		clearTimeout(timer);
	}
	oMore.onmouseout=oA.onmouseout=function(){
		timer=setTimeout(function(){
			oI.className='';
			oMore.style.display='none';
		},300)
	}
}
function Nav(dian){
	var oUl=document.getElementById(dian);
	var oLi=oUl.children;
	var oI=oUl.getElementsByTagName('i');
	var oDiv=oUl.getElementsByTagName('div');
	var timer=null;
	for(var i=0; i<oLi.length;i++){
			oLi[i].index=i;
			oLi[i].onmouseover=function(){
				for(var a=0; a<oLi.length;a++){
					oLi[a].className='';
					oI[a].className='';
					oDiv[a].style.display='none';
				}
			this.className='on';
			oI[this.index].className='on';
			oDiv[this.index].style.display='block';
		}
	}
	for(var i=0; i<oLi.length;i++){
		oDiv[i].index=i;
		oDiv[i].onmouseout=function(){
			this.style.display='none';
			oLi[this.index].className='';
			oI[this.index].className='';
		}
	}
}

function fnNav(list,con){
	var oList=document.getElementById(list);
	var oLi=oList.getElementsByTagName('li');
	var oCon=document.getElementById(con);
	var oDiv=oCon.children;
	for(var i=0; i<oLi.length; i++){
		oLi[i].index=i;
		oLi[i].onmouseover=function(){
			for(var a=0; a<oLi.length; a++){
				oLi[a].className='';
				oDiv[a].style.display='none';
			}
			this.className='no';
			oDiv[this.index].style.display='block';
		}
	}
}




window.onload=function(){
	fnMore('header_left_a','header_left_i','header_left_more');
	Nav('header_right_dian');
	fnNav('one_list','one_con');
	fnNav('one_list','one_con');
	fnNav('two_list','two_con');
	fnNav('three_list','three_con');
	fnNav('four_list','four_con');
	fnNav('five_list','five_con');
	fnNav('six_list','six_con');
	// fnNav('sen_list','sen_con');
	fnNav('eig_list','eig_con');
	fnNav('nice_list','nice_con');
	fnNav('list10','con10');
	fnNav('list11','con11');
	fnNav('list12','con12');
	fnNav('list13','con13');
	fnNav('list14','con14');
	fnNav('list15','con15');
	fnNav('list16','con16');
	fnNav('list17','con17');
	fnNav('list18','con18');
	fnNav('list19','con19');
	fnNav('list20','con20');
	fnNav('list21','con21');





}







