var ads = [
	function(){ // the big sidebar
		$('#sidebar_container').remove()
		$('#content_container')[0].style.marginRight = '0px'
		$('#content')[0].style.marginRight = '0px'
	},
	function(){ $('#topAd').remove() }, // under the header
	function(){ $('#fb_headerbox').remove() }, // annoying facebook connect button
	function(){ $('.fx-banner').remove() } // footer ad
]

$(init)
setTimeout(init, 100) // temporary, until kirupa fixes the cron.php delay

function init(){
	killAds()
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