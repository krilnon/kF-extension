var ace
var repeat = setInterval(check, 50)
check()
var count = 0

// poll to  see if ace.js has loaded from github
// I don't know if there's a JS event that explicitly notifies me of the same thing
function check(){
	if(window.__ace_shadowed__){
		clearInterval(repeat)
		addEditors()
	}	
}

function addEditors(){
	ace = window.__ace_shadowed__
	ace.options = { 
		mode:'javascript',
		theme:'textmate',
		gutter:'false',
		fontSize:'11px',
		softWrap:'off',
		showPrintMargin:'false',
		useSoftTabs:'false',
		showInvisibles:'false'
	}
	
	try {
		$('.bbcode_code').each(addEditor)
	} catch(err){}
	$('.ace_scroller').scrollLeft(0)
}

// preserves the extant code, and the width/height of the old viewer
function addEditor(i, elem){
	$(elem).find('br').replaceWith('☃ace☃')
	var text = elem.textContent.split('☃ace☃').join('\n')
	var w = elem.getBoundingClientRect().width
	var h = elem.getBoundingClientRect().height
	$(elem).replaceWith('<textarea id="ace-editor-' + count++ +'" class="ace-editor" style="width: ' + w + 'px; height: ' + h + 'px;">' + text + '</textarea>')
	ace.transformTextarea($('#ace-editor-' + (count - 1))[0])
}