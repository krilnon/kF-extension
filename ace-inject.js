(function inject() { var baseUrl='http://reclipse.net/kirupa/ace/build/textarea/src/'; function load(path, module, callback) { path = baseUrl + path; if (!load.scripts[path]) { load.scripts[path] = { loaded: false, callbacks: [ callback ] }; var head = document.getElementsByTagName('head')[0]; var s = document.createElement('script'); function c() { if (window.__ace_shadowed__ && window.__ace_shadowed__.define.modules[module]) { load.scripts[path].loaded = true; load.scripts[path].callbacks.forEach(function(callback) { callback(); }); } else { setTimeout(c, 50); } }; s.src = path; head.appendChild(s); c(); } else if (load.scripts[path].loaded) { callback(); } else { load.scripts[path].callbacks.push(callback); } }; load.scripts = {}; window.__ace_shadowed_load__ = load; load('ace.js', 'text!ace/css/editor.css', function() { var ace = window.__ace_shadowed__; ace.options = { mode:'javascript',theme:'textmate',gutter:'false',fontSize:'11px',softWrap:'off',showPrintMargin:'false',useSoftTabs:'false',showInvisibles:'false' }; });})();