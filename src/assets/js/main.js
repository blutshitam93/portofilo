var menuList = ['Biographie','Project','Contact','DE']; //it has to be defined in config.json 

var contactList = ['Name', 'Surename', 'Telephone (optional)', 'E-Mail','Comment'];

var config = 'main/config.json';

console.log(config);

/**
 *init function
 **/
function init(){

	bindMenuToCont();
	buildMenu();
	buildContact();
	event();

	//TODO change the menu frame!! so it can be removable when scrolling
	//TODO read element from json
	//TODO use https://github.com/monobasic/OwlCarousel to have some responsive effect
}	

/**
 * all the events
 **/
function event(){
	$('.nav-menu').mousedown(function(){
		getCurrentMenu( this.id );
	}).mouseover(function() {
		$('.nav-menu').removeClass('menuFocus');
		$('#'+ this.id).addClass('menuFocus');
	}).mouseleave(function() {
		$('.nav-menu').removeClass('menuFocus');
	}).click(function( event ) {
		$('.nav-menu').removeClass('menuSelected');
		$('#'+ this.id).addClass('menuSelected');
		gotoSectionMenu( event, this.id );
	});

	$('#sendContact').mouseover(function(event) {
		$('#'+ this.id).removeClass('nt-undo-blue').addClass('nt-active-button');
	}).mouseleave(function(event) {
		$('#'+ this.id).removeClass('nt-active-button').addClass('nt-undo-blue');
	}).click(function(event) {
		sendContactForm();
	});

}

/**
 * lists the menu elements
 **/
function buildMenu(){

	var $menuFrame = $('#menuframe').append('<ul id="mainMenu" class="row"></ul>'),
		$mainMenu = $('#mainMenu');
		$menuItem = $('');

	for(var a = 0; a < menuList.length; a++){
		//$menuItem = $('<li id="nav-menu-' + menuList[a] + '" class="nav-menu col-md-2">' + menuList[a] + '</li>');		
		$menuItem = $('<li><div id="nav-menu-' + menuList[a] + '" class="nav-menu col-md-2">' + menuList[a] + '</div></li>');	
		$mainMenu.append($menuItem);
	}

	return $menuFrame.append($mainMenu);
}
/*
* build the contact section
**/
function buildContact(){

	var $textSect = $('#textContact'),
		$mainTextSect = $('<div id="textContSect" class="row"></div>');
		$textItem = $('');


	for(var a = 0; a < contactList.length; a++){
		$textItem = $('<div id="text-contc-' + contactList[a] + '" class="item-contact text-contc col-md-12">' + contactList[a] + '</div>');
		$mainTextSect.append($textItem);
	}

	return $textSect.append($mainTextSect);

}

/**
 * get id of current menu, then change the color and go to the section of element
 * @param id of menu
 **/
function getCurrentMenu( idMenu ){
	$('.nav-menu').removeClass('testColor');
	$('#'+idMenu).addClass('testColor');
}

//TODO menuList has to be defined as a config.json
//TODO background-color for menuframe

//TODO do we need this?
function addFocusMenu( idMenu ){
	$('.nav-menu').removeClass('menuFocus');
	$('#'+idMenu).addClass('menuFocus');
}

//TODO do we need this?
function rmvFocusMenu( idMenu ){
	$('.nav-menu').removeClass('menuFocus');
}


function topWebsite(  ){

}

function gotoSectionMenu( event, idMenu ){
//TODO lowercase menuId
	var selectedMenu = '';
	console.log(idMenu);
	switch(idMenu){
		case 'nav-menu-Biographie':
			selectedMenu = 'bioSection';	
			break;
		case 'nav-menu-Project':
			selectedMenu = 'projectSection';	
			break;
		case 'nav-menu-Contact':
			selectedMenu = 'contactSection';	
			break;	
	}

	$('body, html').animate({ 
        scrollTop: $( '#' + selectedMenu ).position().top 
    }, 900);
}

// function scrollMenu(){
// 	//TODO menu follows window if it scrolls
// 	 var element = $('#topFrame'),
//          originalY = element.offset().top;
//      var topMargin = 20;
         
// 	$(window).scroll(function() {
// 		console.log('test');

// 		///http://stackoverflow.com/questions/2177983/how-to-make-div-follow-scrolling-smoothly-with-jquery
//     	/*$('#topFrame').css('top', $(this).scrollTop());*/
//     	/*var scrollTop = $(window).scrollTop();
//     	 element.stop(false, false).animate({
//             top: scrollTop < originalY
//                     ? 0
//                     : scrollTop - originalY + topMargin
//         }, 300);*/
// 	});
// }

/*
 * menu will be bin 
 **/
function bindMenuToCont(){

	var	$topFrame = $('#topFrame'),
		$iconWeb  = $('<div id="iconWebsite" class="col-md-1"></div>'),
		$menuWeb  = $('<div id="menuframe" class="col-md-11"></div>');

	$topFrame.prepend($menuWeb).prepend($iconWeb);	

	return $('.container').prepend($topFrame);
}

/*
 * send the contact form 
 **/
function sendContactForm(){	
	//TODO send contact
	$('.inputField').val('');

	//console.log('test send');
}
