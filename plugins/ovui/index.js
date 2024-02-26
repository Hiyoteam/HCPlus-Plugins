function addCss(cssUrl) {
  let link = document.createElement('link');  
  link.rel = 'stylesheet';  
  link.type = 'text/css';  
  link.href = cssUrl; 
  document.getElementsByTagName('head')[0].appendChild(link);
}
//Fix compatibility issues
if (typeof host != 'undefined') {
  addCss('https://plugins.hach.chat/plugins/ovui/fix-index.css');
  if (!localStorage.getItem("ovui_warn")) pushMssage({nick:'!',text:'`IM themes` cannot be added together with `ovui`, so `ovui` will run in compatibility mode!'});
  localStorage.setItem("ovui_warn", "true");
} else {
  addCss('https://plugins.hach.chat/plugins/ovui/index.css');
}