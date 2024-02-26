function addCss(cssUrl) {
  let link = document.createElement('link');  
  link.rel = 'stylesheet';  
  link.type = 'text/css';  
  link.href = cssUrl; 
  document.getElementsByTagName('head')[0].appendChild(link);
}

function addJs(jsUrl) {
  let script = document.createElement('script');  
  script.src = jsUrl;  
  document.getElementsByTagName('head')[0].appendChild(script);
}
addCss("https://plugins.hach.chat/plugins/plugins_manager/index.css");

let canclose = false;
let plugins_manager = document.createElement('div'); 
plugins_manager.classList.add("c_window");
let plugins_manager_back = document.createElement('div'); 
plugins_manager_back.classList.add("c_container");
plugins_manager_back.appendChild(plugins_manager);
plugins_manager_back.style.display = "none";
document.getElementsByTagName('body')[0].appendChild(plugins_manager_back);
plugins_manager_back.addEventListener("click",()=>{
  setTimeout(()=>{
    if (canclose) plugins_manager_back.style.display = "none";
    canclose = true
  },1)
});
plugins_manager.addEventListener("click",()=>{
  canclose = false
});
var plugins_manager_show = document.createElement('button');
plugins_manager_show.id = "show_plugins_manager";
plugins_manager_show.innerText = "Plugins Manager";
plugins_manager_show.addEventListener("click",()=>{
  plugins_manager_back.style.display = "flex";
  canclose = true;
  getTableList();
});
document.getElementById("plugin-buttons").appendChild(plugins_manager_show);

function getTableList(showInfo=false) {
  let table = document.createElement('table');
  table.style.margin = "0";

  let header = table.createTHead();
  let title = header.insertRow();
  let Pname = title.insertCell();
  let Puse = title.insertCell();
  Pname.innerHTML = '<b>Plugin</b>';
  Puse.innerHTML = '<b>Info&nbsp;Manage</b>';
  Puse.style["text-align"] = "right";

  let tbody = table.createTBody();

  plugins = JSON.parse(localStorage.getItem('plugins'));
  plugins.forEach((plugin)=>{
    let pluginLine = tbody.insertRow();
    let pname = pluginLine.insertCell();
    let puse = pluginLine.insertCell();
    if (plugin.split("/")[4]) {
      pname.innerText = `${plugin.split("/")[4].substring(0, 20)}${plugin.split("/")[4].length > 20 ? "...":""}`;
      puse.innerHTML = `<a href="https://plugins.hach.chat/plugin-detail.html#${plugin.split("/")[4]}" target="_blank" style="color: #fff;">View</a>&nbsp;<a href="#" onclick="removePlugin('${plugin}')" style="color: #fff;">Remove</a>`;
    } else {
      pname.innerHTML = "<i>Unknow Plugin</i>";
      puse.innerHTML = `<s>View</s>&nbsp;<a href="#" onclick="removePlugin('${plugin}')" style="color: #fff;">Remove</a>`;
    }
    puse.style["text-align"] = "right";
  });

  plugins_manager.innerHTML = showInfo?`&nbsp;Removed plugin, <b><a href="#" onclick="location.reload()" style="color: #fff;">Refresh</a> to completely remove</b>.`:"";
  plugins_manager.appendChild(table);
}

function removePlugin(pluginUrl) {
  let index = plugins.indexOf(pluginUrl);
  if (index !== -1) {
    plugins.splice(index, 1);
  }
  localStorage.setItem('plugins', JSON.stringify(plugins));
  getTableList(true);
}

