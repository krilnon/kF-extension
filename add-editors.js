var ace
var repeat = setInterval(check, 250)
//check()

// poll to  see if ace.js has loaded
// I don't know if there's a JS event that explicitly notifies me of the same thing
function check(){
	if(window.ace){
		clearInterval(repeat)
		addEditors()
	}	
}

function addEditors(){
	ace = window.ace
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
	
	window.count = 0
	window.editors = []
	
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
	$(elem).replaceWith('<div><div id="ace-editor-' + (window.count++) +'" class="ace-editor" style="width: ' + w + 'px; height: ' + (h + 40) + 'px; position: relative;">' + text.trim() + '</div></div>')
	var editor = ace.edit('ace-editor-' + (window.count - 1))
	window.editors.push(editor)
	var jsm = require("ace/mode/javascript").Mode
	editor.getSession().setMode(new jsm())
}