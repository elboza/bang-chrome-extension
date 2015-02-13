#!bang v0.1 

!bang is a fast and geeky search engine selector.
	
	
##activation	
since chrome extentions only allows one keyword, the activation keyword is:

	# (followed by SPACE or TAB)

##command table	

| command | query                                         |
|---------|-----------------------------------------------|
| !g      | www.google.com                                |
| !a      | www.amazon.com                                |
| !ait    | www.amazon.it                                 |
| !afr    | www.amazon.fr                                 |
| !aes    | www.amazon.es                                 |
| !auk    | www.amazon.co.uk                              |
| !b      | www.bing.com                                  |
| !bi     | bing images                                   |
| !bit    | www.bing.com with IT lang                     |
| !bfr    | www.bing.com with FR lang                     |
| !bes    | www.bing.com with ES lang                     |
| !bl     | www.bing.com with browser's local lang setting|
| !gi     | google images                                 |
| !gm     | google maps search                            |
| !gl     | google with browser's local lang setting      |
| !git    | google with IT lang                           |
| !gfr    | google with FR lang                           |
| !ges    | google with ES lang                           |
| !yt     | www.youtube.com                               |
| !f      | www.facebook.com                              |
| !t      | www.twitter.com                               |
| !ebay   | www.ebay.com                                  |
| !w      | en.wikipedia.org                              |
| !wit    | it.wikipedia.org                              |
| !wfr    | fr.wikipedia.org                              |
| !wes    | es.wikipedia.org                              |
| !dd     | www.duckduckgo.com                            |
| !i      | google images                                 |
| !y      | yahoo.com                                     |
| !yi     | yahoo images                                  |
| !yit    | yahoo with IT lang                            |
| !yfr    | yahoo with FR lang                            |
| !yes    | yahoo with ES lang                            |
| !so     | stack overflow                                |

##command syntax logic

| prefix | description          |
|--------|----------------------|
| !      | the search command   |

| root   | description          |
|--------|----------------------|
| g      | query www.google.com |
| a      | query www.amazon.com |
| ...    | ...                  |

| suffix | description                  |
|--------|------------------------------|
| it     | italian language             |
| fr     | french language              |
| l      | browser's local lang setting |
| i      | images                       |
| ...    | ...                          |


##examples

	# !g foor bar(search "foo bar" in google)

	# !wit foor bar(search "foo bar" in italian wikipedia)
	
##links

[!bang web site](http://www.autistici.org/0xFE/!bang/) 

[get chrome extension](https://chrome.google.com/webstore/detail/bang/igohlmcnpgimdnkkagjjigihnmgeemkj)
    
##author

Fernando Iazeolla (c)

2014

##licence
This software is distrubuted under GPLv2 licence.
