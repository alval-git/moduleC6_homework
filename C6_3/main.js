const btnSmbt = document.querySelector(".btn-sumbit");
const firstSvg = document.querySelector(".first-svg");
const secondSvg = document.querySelector(".second-svg");
let i = 1;
btnSmbt.onclick = function(){
	i++;
	if (i% 2 == 0){
		secondSvg.style.display = "inline";
		firstSvg.style.display = "none";
	}else{
		firstSvg.style.display = "inline";
		secondSvg.style.display = "none";
	}
}