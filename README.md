#!bang v0.1 

!bang is a fast and geeky search engine selector.
	
	
##activation	
since chrome extentions only allows one keyword, the activation keyword is:

	# (followed by SPACE or TAB)

##command table	

<table>
<tr>
<td class="titletable">command</td>
<td class="titletable">query</td>
</tr>
<tr>
<td>!g</td>
<td>query www.google.com</td>
</tr>
<tr>
<td>!a</td>
<td>query www.amazon.com</td>
</tr>
<tr>
<td>!ait</td>
<td>query www.amazon.it</td>
</tr>
<tr>
<td>!afr</td>
<td>query www.amazon.fr</td>
</tr>
<tr>
<td>!aes</td>
<td>query www.amazon.es</td>
</tr>
<tr>
<td>!auk</td>
<td>query www.amazon.co.uk</td>
</tr>
<tr>
<td>!b</td>
<td>query www.bing.com</td>
</tr>
<tr>
<td>!bit</td>
<td>query www.bing.com with IT lang</td>
</tr>
<tr>
<td>!bfr</td>
<td>query www.bing.com with FR lang</td>
</tr>
<tr>
<td>!bes</td>
<td>query www.bing.com with ES lang</td>
</tr><tr>
<td>!bl</td>
<td>query www.bing.com with browser's local lang setting</td>
</tr>
<tr>
<td>!gi</td>
<td>google images</td>
</tr>
<tr>
<td>!gl</td>
<td>google with browser's local lang setting</td>
</tr>
<tr>
<td>!git</td>
<td>google with IT lang</td>
</tr>
<tr>
<td>!gfr</td>
<td>google with FR lang</td>
</tr>
<tr>
<td>!ges</td>
<td>google with ES lang</td>
</tr>
<tr>
<td>!yt</td>
<td>www.youtube.com</td>
</tr>
<tr>
<td>!f</td>
<td>www.facebook.com</td>
</tr>
<tr>
<td>!t</td>
<td>www.twitter.com</td>
</tr>
<tr>
<td>!ebay</td>
<td>www.ebay.com</td>
</tr>
<tr>
<td>!w</td>
<td>en.wikipedia.org</td>
</tr>
<tr>
<td>!wit</td>
<td>it.wikipedia.org</td>
</tr>
<tr>
<td>!wfr</td>
<td>fr.wikipedia.org</td>
</tr>
<tr>
<td>!wes</td>
<td>es.wikipedia.org</td>
</tr>
<tr>
<td>!dd</td>
<td>www.duckduckgo.com</td>
</tr>
<tr>
<td>!i</td>
<td>google images</td>
</tr>
</table>
</div>

##command syntax logic
<div class="partagraph">
<table>
<tr>
<td class="titletable">prefix</td>
<td class="titletable">description</td>
</tr>
<tr>
<td>!</td>
<td>the search command</td>
</tr>
<tr>
<td class="titletable">root</td>
<td class="titletable">description</td>
</tr>
<tr>
<td>g</td>
<td>query www.google.com</td>
</tr>
<tr>
<td>a</td>
<td>query www.amazon.com</td>
</tr>
<tr>
<td>...</td>
<td>...</td>
</tr>
<tr>
<td class="titletable">suffix</td>
<td class="titletable">description</td>
</tr>
<tr>
<td>it</td>
<td>italian language</td>
</tr>
<tr>
<td>fr</td>
<td>french language</td>
</tr>
<tr>
<td>l</td>
<td>browser's local lang setting</td>
</tr>
<tr>
<td>...</td>
<td>...</td>
</tr>
</table>
</div>

##examples

	# !g foor bar(search "foo bar" in google)

	# !wit foor bar(search "foo bar" in italian wikipedia)
	
##links

[!bang web site](http://www.autistici.org/0xFE/!bang/) 
    
##author

Fernando Iazeolla (c)<br>
2014

##licence
This software is distrubuted under GPLv2 licence.