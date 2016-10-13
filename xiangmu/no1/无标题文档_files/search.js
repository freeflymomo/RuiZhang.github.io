// JavaScript Document
window.onload = function(){
		var myshuru = document.getElementById("shuru");
	
		myshuru.onfocus = function(){
			if(myshuru.value == "12月第四波 辞旧迎新 第二件半价"){
				myshuru.value = "";
				myshuru.style.color = "#000000"
			}
		}
		myshuru.onblur = function(){
			if(myshuru.value == ""){
				myshuru.value = "12月第四波 辞旧迎新 第二件半价"
				myshuru.style.color = "gray"
			}
		}
		
	};