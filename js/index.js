var i = 0;
var slider = true;
function slide(){
	if (slider == true) {
		i = i + 100;
	}else if(slider == false){
		i = i -100;
	}
	document.getElementById("box_img").style.right = i + "%";
	time();
}
function time(){
	if (i == 0) {
		slider = true;
	}else if(i == 200){
		slider = false;
	}
	setTimeout(slide, 5000);
}
time();