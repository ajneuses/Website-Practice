function toNorthAmerica1() {
	window.location.href = 'https://www.yahoo.com/news/two-police-officers-texas-shot-while-responding-suicide-062730623.html';
	/* window.open('http://www.yahoo.com/news') if we want it in a new window */
}

function toNorthAmerica2() {
	window.location.href = 'https://www.yahoo.com/news/two-u-police-four-civilians-wounded-philadelphia-shooting-072345222.html';
}

function toEurope1() {
	window.location.href = 'http://www.bbc.com/news/world-europe-37422381';
}

function toAsia1() {
	window.location.href = 'http://www.bbc.com/news/world-asia-india-37415843';
}

function toSouthAmerica1() {
	window.location.href = 'http://www.bbc.com/news/world-europe-37417356';
}

function toAfrica1() {
	window.location.href = 'http://www.bbc.com/news/world-africa-37423792';
}

function toAustralia1() {
	window.location.href = 'http://www.bbc.com/news/world-australia-37227389';
}

/* Functions for the second div page that comes up */
function toNorthAmerica3() {
	window.location.href = 'http://www.espn.com/boxing/story/_/id/17595517/floyd-mayweather-ready-move-trying-arrange-fight-conor-mcgregor';
}

function toNorthAmerica4() {
	window.location.href = 'http://www.nbcnews.com/storyline/ny-nj-bombings/chelsea-bombing-suspect-ahmad-khan-rahami-left-behind-rambling-note-n651171';
}

function toEurope2() {
	window.location.href = 'http://www.bbc.com/news/uk-37423039';
}

function toAsia2() {
	window.location.href = 'http://atimes.com/';
}

function toSouthAmerica2() {
	window.location.href = 'http://www.bbc.com/news/world-latin-america-37335629';
}

function toAfrica2() {
	window.location.href = 'http://www.bbc.com/news/world-africa-37338432';
}

function toAustralia2() {
	window.location.href = 'http://www.bbc.com/news/world-australia-37331672';
}

function switchDivTwo() {
	setTimeout(showDivTwo, 5000);
}

function switchDivOne() {
	setTimeout(showDivOne, 5000);
}

function showDivTwo() {
	var ele = document.getElementById('bodydiv');
	var ele2 = document.getElementById('bodydiv2');
	ele2.style.display = 'block';
	var opacity = 1;
	var timer = setInterval(function() {
		if (opacity <= .01){
			ele.style.display = 'none';
			clearInterval(timer);
		}
		ele.style.opacity = opacity;
		ele2.style.opacity = 1 - opacity;

		opacity -= .02;
	},20);
	switchDivOne();
}

function showDivOne() {
	var ele = document.getElementById('bodydiv');
	var ele2 = document.getElementById('bodydiv2');
	ele.style.display = 'block';
	var opacity = 1;
	var timer = setInterval(function() {
		if (opacity <= .01){
			ele2.style.display = 'none';
			clearInterval(timer);
		}
		ele2.style.opacity = opacity;
		ele.style.opacity = 1 - opacity;

		opacity -= .02;
	},20);
	switchDivTwo();
}

function findMarqueeWidth() {
	var footer_width = document.getElementById('footerdiv').offsetWidth;
	footer_width = -footer_width;

	var htmlstyles = window.getComputedStyle(document.querySelector("html"));
	var foot = htmlstyles.getPropertyValue("--footer-wid");

	document.getElementById('contact2').innerHTML = foot;

	document.querySelector("html").style.setProperty("--footer-wid", footer_width + "px");

	/*var window_width = document.getElementByTagName('html').offsetWidth; */
}

function continuousMarquee() {
	var end_span = document.getElementById('marq_cont').offsetWidth;
	
}

/* BBC NBC FOX CNN */
