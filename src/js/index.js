
/* ==== navigation bar ======== */

var linkOverlay = document.getElementsByClassName("mob--nav--overlay");
var mobileNav = document.getElementsByClassName("mob--nav");
let ham;

function mobNav(that){

	that.classList.toggle("toggle--on");
	ham = that;

	if(that.classList.contains("toggle--on")){

		document.body.setAttribute("style","overflow:hidden");
		mobileNav[0].setAttribute("style","display:block");

		setTimeout(function(){
			linkOverlay[0].classList.add("show--overlay");
		},1);
		
		setTimeout(function(){
			mobileNav[0].setAttribute("style","background:#7918F2 ; display:block;")
		},400);
		
	}
	else{
		hideNav();
	}
}

function hideNav(){
		document.body.removeAttribute("style");
		linkOverlay[0].classList.remove("show--overlay");
		mobileNav[0].setAttribute("style","display:block");

		setTimeout(function(){	
			mobileNav[0].removeAttribute("style","display:none");
		},300);
}

function hideNavOnUserSelect(event){

	if(event.target.nodeName == "A"){
		hideNav();
		ham.classList.toggle("toggle--on");
	}

}


// header

var headerContainer = document.getElementById("header");
var objContainer = document.getElementById("objects--overlay");


var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function moveBackground(event){

	var mouseXposition = event.clientX;
	var mouseYposition = event.clientY;

	var calculatedX = mouseXposition / (windowWidth / 7);
	var calculatedY = mouseYposition / (windowHeight / 7);

	objContainer.style.transform = "translate(-"+calculatedX.toString()+"%,-"+calculatedY.toString()+"%)";
}

headerContainer.addEventListener("mousemove",moveBackground);


//replacing first banner content according to screen size

var bannerText = document.getElementsByClassName("banner--container")[0].getElementsByTagName("h2")[0];


var newText = "stunning</br>web";
var byDefaultBannerText = bannerText.innerHTML;

function changeBannerText(){
	if(window.innerWidth <= 830){
		
		bannerText.innerHTML = newText;
	}

	else{
		bannerText.innerHTML = byDefaultBannerText;
	}
}


window.addEventListener("load",changeBannerText);
window.addEventListener("resize",changeBannerText);


// Google Map initialization

function myMap() {
	var myCenter = new google.maps.LatLng(24.8674,67.0242);
	var mapCanvas = document.getElementById("map--area");
	var mapOptions = {center: myCenter, zoom: 17};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({position:myCenter,animation:google.maps.Animation.BOUNCE});
	marker.setMap(map);
}

//initializing mixitup

var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

var mixer = mixitup(containerEl, {
	selectors: {
		target: '[data-ref~="mixitup-target"]'
	}
});


//for showing active class on work

function workActive(event,that){
	
	let workLi = that.getElementsByTagName("li");
	
	if(event.target.nodeName != "LI"){

		//removing active work element from the previous one 
		for(let i=0 ; i<workLi.length ; i++){
			if(workLi[i].getElementsByTagName("a")[0].classList.contains("w--active")){
				workLi[i].getElementsByTagName("a")[0].classList.remove("w--active");
			}
		}
		
		event.target.classList.add("w--active");
	}
	
}
