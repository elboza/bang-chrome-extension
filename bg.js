// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This event is fired each time the user updates the text in the omnibox,
// as long as the extension's keyword mode is still active.
chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    console.log('inputChanged: ' + text);
    suggest([
      {content: text + " one", description: "the first one"},
      {content: text + " number two", description: "the second entry"}
    ]);
  });

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
  	var res=text.split(" ",2);
  	var searchengine=res[0];
  	var stringquery=res[1];
    //console.log('search engine: ' + searchengine+ ' string query: '+stringquery);
    //alert('search engine: ' + searchengine+ ' string query: '+stringquery+take_searchengine(searchengine));
    //alert(make_queryURL(take_searchengine(searchengine),stringquery));
    var queryURL=make_queryURL(take_searchengine(searchengine),stringquery);
    navigate(queryURL);
  });
function take_searchengine(ss){
	var ret=undefined;
	var arr={
		'#g':'http://www.google.com/search?q=%s',
		'#w':'http://www.amazon.com/exec/obidos/external-search/?field-keywords=%s&mode=blended',
		'#b':'https://www.bing.com/search?setmkt=it-IT&q=%s',
		'#gi':'http://www.google.com/search?q=%s&tbm=isch',
		'#gl':'http://www.google.com/search?q=%s&hl=it',
		'#yt':'http://www.youtube.com/results?search_query=%s',
		'#i':'http://www.google.com/search?q=%s&tbm=isch'
	};
	ret=arr[ss];
	if(!ret) {ret=arr['#g'];}
	return ret;
};
function make_queryURL(searchengine,stringquery){
	var ret=searchengine.replace('%s',stringquery);
	return ret;	
};

function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
};
