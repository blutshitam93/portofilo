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
	//buildContact();
	event();
	scrollMenu();
	//TODO change the menu frame!! so it can be removable when scrolling
	//TODO read element from json
	//TODO use https://github.com/monobasic/OwlCarousel to have some responsive effect
}	

/**
 * all the events
 **/
function event(){
	$('.nav-menu').mousedown(function(){
		//getCurrentMenu( this.id );
	}).mouseover(function() {
		//$('.nav-menu').removeClass('menuFocus');
		//$('#'+ this.id).addClass('menuFocus');
	}).mouseleave(function() {
		//$('.nav-menu').removeClass('menuFocus');
	}).click(function( event ) {
		$('.nav-menu').removeClass('menuSelected');
		$('#'+ this.id).addClass('menuSelected');
		gotoSectionMenu( event, this.id );
	});

	$('#testConfig').click(function(event) {
		//sendContactForm();
		getJson();
		//$('#theDiv').prepend($('<img>',{id:'theImg',src:'theImg.png'}))
	});

	$('#sendContact').mouseover(function(event) {
		$('#'+ this.id).removeClass('nt-light-blue').addClass('nt-active-button');
	}).mouseleave(function(event) {
		$('#'+ this.id).removeClass('nt-active-button').addClass('nt-light-blue');
	}).click(function(event) {
		//sendContactForm();
		//getJson();
		//$('#theDiv').prepend($('<img>',{id:'theImg',src:'theImg.png'}))
	});

	$('.nt-box-project').mouseover(function(event) {
		$(this).addClass('nt-box-project-focus');
	}).mouseleave(function(event) {
		$(this).removeClass('nt-box-project-focus');
	}).click(function(event) {
		showProject($(this).data('project'));
	});;



}

/**
 * lists the menu elements
 **/
function buildMenu(){

	var $menuFrame = $('#menuframe').append('<div id="mainMenu" class="row"></div>'),
		$mainMenu  = $('#mainMenu'),
		$menuItem  = $('');
		navMenu    = '';

	for(var a = 0; a < menuList.length; a++){
		navMenu = menuList[a].toLowerCase()
		$menuItem = $('<div id="nav-menu-' + navMenu + '" class="nav-menu nt-font-cl col-sm-3 col-md-2">' + menuList[a] + '</div>');	
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
		$textItem = $('<div id="text-contc-' + contactList[a] + '" class="form-group">' +
					  	'<label class="control-label col-sm-2">'+contactList[a]+'</label>'+
					  	'<div class="col-sm-10"> '+
					  		'<input class="form-control" id="pwd" placeholder=". . ." type="text">'+
				  		'</div>'+
					  '</div>');
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
		case 'nav-menu-biographie':
			selectedMenu = 'bioSection';	
			break;
		case 'nav-menu-project':
			selectedMenu = 'projectSection';	
			break;
		case 'nav-menu-contact':
			selectedMenu = 'contactSection';	
			break;	
	}

	$('body, html').animate({ 
        scrollTop: $( '#' + selectedMenu ).position().top 
    }, 1500);
}

function scrollMenu(){
    var scroll_start = 0;
	var topFrame = $('#topFrame');
   	var offset = topFrame.offset();

   	if (topFrame.length){
		$(document).scroll(function() { 
			scroll_start = $(this).scrollTop();
			if(scroll_start > offset.top) {
				$("#topFrame").removeClass('nt-undo-blue').addClass('nt-bg-white');
				$(".nav-menu").removeClass('nt-font-cl').addClass('nt-font-cl-black nav-menuFocus');
				$("#iconWebsite").find('img').attr('src', 'assets/img/undoIcon.jpg');
			} else {
				$('#topFrame').removeClass('nt-bg-white').addClass('nt-undo-blue');
				$(".nav-menu").removeClass('nt-font-cl-black nav-menuFocus').addClass('nt-font-cl');
				$("#iconWebsite").find('img').attr('src', 'assets/img/undoIconBlue.jpg');
			}
		});
    }
}


/*
 * menu will be bin 
 **/
function bindMenuToCont(){

	var	$topFrame = $('#topFrame'),
		$iconWeb  = $('<div id="iconWebsite" class="col-sm-4 col-md-4"><img src="assets/img/undoIconBlue.jpg" alt="Logo" height="50" width="50"></div></div>'),
		$menuWeb  = $('<div id="menuframe" class="col-sm-8 col-md-8"></div>');

	$topFrame.prepend($menuWeb).prepend($iconWeb);	

	return $topFrame;
}

/*
 * send the contact form 
 **/
function sendContactForm(){	
	//TODO send contact
	$('.inputField').val('');
	console.warn("test tevdtfetdf")
}

function showProject(name){
	console.log("test click box project " + name);
}

function getJson(){
	//FIX ME error on console
	$.getJSON("config.json", function(result){
            //$.each(result, function(key, val){
                //console.log( "<li id='" + key + "'>" + val + "</li>" );
            //});
        });
}
