// userChrome.js

function load_js_script(js_file_name) {
   Services.scriptloader.loadSubScript(Components.stack.filename.substring(0,
	Components.stack.filename.lastIndexOf("/") + 1) + js_file_name, window);
}

load_js_script("custom_scrollbar.uc.js");
//load_js_script("my_other_script_name.uc.js");

