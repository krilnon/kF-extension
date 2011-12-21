var ads = [
	function(){ // the big sidebar
		$('#content_container')[0].style.marginRight = '0px'
		$('#content')[0].style.marginRight = '0px'
	},
	function(){ $('#topAd').remove() }, // under the header
	function(){ $('#fb_headerbox').remove() }, // annoying facebook connect button
	function(){ $('.fx-banner').remove() } // footer ad
]

$(killAds)
setTimeout(init, 100) // temporary, until kirupa fixes the cron.php delay

function init(){
	killAds()
	convertEditors()
}

function killAds(){
	for(var i = 0; i < ads.length; i++){
		try {
			ads[i]()
		} catch(e){
			// if a page doesn't have one of these elements, it'll potentially throw a light error
		}
	}
}

// setting: { mode:'javascript',theme:'textmate',gutter:'false',fontSize:'11px',softWrap:'off',showPrintMargin:'false',useSoftTabs:'false',showInvisibles:'false' }
// code displayed in posts is replaced with an ACE editor
function convertEditors(){
	var first = $('.bbcode_code').first()
	if(first){ // if there are any .bbcode_code elements at all, replace them
		addEditors()
	}
}

// adds some <script> tags dynamically to get around Chrome extension sandbox limitations
function unsandbox(path){
	$('body').append('<script type="text/javascript">(function(l) {\
	   var res = document.createElement("SCRIPT");\
	   res.type = "text/javascript";\
	   res.src = l;\
	   document.getElementsByTagName("head")[0].appendChild(res);\
	})("'+chrome.extension.getURL(path) + '")</script>');
}