window.onload = initStyle;window.onunload = unloadStyle;function initStyle() {	var thisCookie = cookieVal("style");	var title;		if  (thisCookie) {		title = thisCookie;	}	else {		title = getPreferredStylesheet();	}	setActiveStylesheet(title);		var allButtons = document.getElementsByTagName("input");	for (var i=0; i<allButtons.length; i++) {		if (allButtons[i].type == "button") {			allButtons[i].onclick = setActiveStylesheet;		}	}}function unloadStyle() {	var expireDate = new Date();	expireDate.setYear(expireDate.getFullYear()+1);	document.cookie = "style=" + getActiveStylesheet() + ";path=/;expires=" + expireDate.toGMTString();}function getPreferredStylesheet() {	var thisLink, relAttribute;	var linksFound = document.getElementsByTagName("link");		for (var i=0; i<linksFound.length; i++) {		thisLink = linksFound[i];		relAttribute = thisLink.getAttribute("rel");		if (relAttribute.indexOf("style") > -1 && relAttribute.indexOf("alt") == -1 && thisLink.getAttribute("title")) {		 	return thisLink.getAttribute("title");		}	}	return "";}function getActiveStylesheet() {	var thisLink;	var linksFound = document.getElementsByTagName("link");		for (var i=0; i<linksFound.length; i++) {		thisLink = linksFound[i];    	if (thisLink.getAttribute("rel").indexOf("style") > -1 && thisLink.getAttribute("title") && !thisLink.disabled) {			return thisLink.getAttribute("title");		}	}	return "";}function setActiveStylesheet(inVal) {	var thisLink, title;	var linksFound = document.getElementsByTagName("link");	if (inVal) {		if (typeof inVal == "string") {			title = inVal;		}		else {			title = inVal.target.id;		}	}	else {		title = window.event.srcElement.id;	}	for (var i=0; i<linksFound.length; i++) {		thisLink = linksFound[i];    	if (thisLink.getAttribute("rel").indexOf("style") > -1 && thisLink.getAttribute("title")) {			thisLink.disabled = true;			if (thisLink.getAttribute("title") == title) {				thisLink.disabled = false;			}		}	}}function cookieVal(cookieName) {	var thisCookie = document.cookie.split("; ");	for (var i=0; i<thisCookie.length; i++) {		if (cookieName == thisCookie[i].split("=")[0]) {			return thisCookie[i].split("=")[1];		}	}	return "";}