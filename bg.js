// !bang background
// author: Fernando Iazeolla
// license: GPLv2


// This event is fired each time the user updates the text in the omnibox,
// as long as the extension's keyword mode is still active.
chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    console.log('inputChanged: ' + text);
    suggest([
      {content: ">http://www.autistici.org/0xFE/!bang/", description: "goto !bang web site"},
      {content: ">http://www.autistici.org/0xFE/!bang/man.php", description: "goto !bang online documentation"}
    ]);
});

//chrome.omnibox.onInputStarted.addListener(
//	function(){
//		console.log('inputStarted: ');
//    	//add web site sugestion
//	}
//);

// configuration ...
var searchsigil='!';
var defaultengine='g';
var gosigil='>';

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
  	if(text.charAt(0)==gosigil){
  		navigate(text.substr(1));
  		return;	
  	}
  	var res=text.split(" ");
  	var searchengine=res.shift();
  	if(searchengine.charAt(0)!=searchsigil) {res.unshift(searchengine);searchengine="null";}
  	var stringquery=res.join("%20");
  	//alert(searchengine+' '+stringquery);
    //console.log('search engine: ' + searchengine+ ' string query: '+stringquery);
    //alert('search engine: ' + searchengine+ ' string query: '+stringquery+take_searchengine(searchengine));
    //alert(make_queryURL(take_searchengine(searchengine),stringquery));
    var queryURL=make_queryURL(take_searchengine(searchengine),stringquery);
    //alert(queryURL);
    navigate(queryURL);
  });
function take_searchengine(ss){
	var ret=undefined;
	var localelang=window.navigator.language;
	var arr={
		'g':'http://www.google.com/search?q=%s',
		'a':'http://www.amazon.com/exec/obidos/external-search/?field-keywords=%s&mode=blended',
		'ait':'http://www.amazon.it/exec/obidos/external-search/?field-keywords=%s&mode=blended',
		'afr':'http://www.amazon.fr/exec/obidos/external-search/?field-keywords=%s&mode=blended',
		'aes':'http://www.amazon.es/exec/obidos/external-search/?field-keywords=%s&mode=blended',
		'auk':'http://www.amazon.co.uk/exec/obidos/external-search/?field-keywords=%s&mode=blended',
		'b':'https://www.bing.com/search?&q=%s',
		'bl':'https://www.bing.com/search?setmkt='+localelang+'&q=%s',
		'bit':'https://www.bing.com/search?setmkt=it-IT&q=%s',
		'bfr':'https://www.bing.com/search?setmkt=fr-FR&q=%s',
		'bes':'https://www.bing.com/search?setmkt=es-ES&q=%s',
		'gi':'http://www.google.com/search?q=%s&tbm=isch',
		'gl':'http://www.google.com/search?q=%s&hl='+localelang,
		'git':'http://www.google.com/search?q=%s&hl=it',
		'gfr':'http://www.google.com/search?q=%s&hl=fr',
		'ges':'http://www.google.com/search?q=%s&hl=es',
		'yt':'http://www.youtube.com/results?search_query=%s',
		'f':'https://www.facebook.com/search/more/?q=%s',
		't':'https://twitter.com/search?q=%s',
		'ebay': 'http://www.ebay.com/sch/i.html?_nkw=%s',
		'w':'http://en.wikipedia.org/w/index.php?search=%s',
		'wit':'http://it.wikipedia.org/w/index.php?search=%s',
		'wfr':'http://fr.wikipedia.org/w/index.php?search=%s',
		'wes':'http://es.wikipedia.org/w/index.php?search=%s',
		'dd':'http://duckduckgo.com/?q=%s',
		'y':'http://search.yahoo.com/search?p=%s',
		'yit':'http://it.search.yahoo.com/search?p=%s',
		'yfr':'http://fr.search.yahoo.com/search?p=%s',
		'yes':'http://es.search.yahoo.com/search?p=%s',
		'i':'http://www.google.com/search?q=%s&tbm=isch'
	};
	var engin=ss.substr(1);
	ret=arr[engin];
	if(!ret) {ret=arr[defaultengine];}
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

window.addEventListener('click',function(e){
  if(e.target.href!==undefined){
    chrome.tabs.create({url:e.target.href})
  }
});
