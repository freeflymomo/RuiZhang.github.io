define(function(require , exports , modules){
	exports.addmousewheel = function(obj , fn){
		if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
		obj.addEventListener('DOMMouseScroll',fnwheel , false);		
		}else{
			obj.onmousewheel = fnwheel;
		}
		
		function fnwheel(ev){
			var oEvent = ev || event;	
			var bdown = true;
			if(oEvent.wheelDelta){
				bdown = oEvent.wheelDelta <0 ? true : false;
			}else{
				bdown = oEvent.whddlDetail>0 ? true : false;	
			}
			fn && fn(bdown);
			oEvent.preventDefault && oEvent.preventDefault();
			return false;
		}
	};
});
