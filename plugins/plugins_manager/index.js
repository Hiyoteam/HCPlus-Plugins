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
function openPluginManager(){
  plugins_manager_back.style.display = "flex";
  canclose = true;
  getTableList();
};
addPluginButton("Plugin Manager", openPluginManager);

var getTableList = async(showInfo=false) => {
  let table = document.createElement('table');
  let Zerror = false
  table.style.margin = "0";
  fetch("https://plugins.hach.chat/plugins/plugins.json", {
    "method": "GET",
    "mode": "cors"
  })
  .then (async(req)=>{
    let pluginsList = (await req.json()).plugins;
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
      if (pluginsList.includes(plugin.split("/")[4]) && plugin.endsWith(`.js`)) {
        pname.innerText = `${plugin.split("/")[4].substring(0, 20)}${plugin.split("/")[4].length > 20 ? "...":""}`;
        puse.innerHTML = `<a href="https://plugins.hach.chat/plugin-detail.html#${plugin.split("/")[4]}" target="_blank" style="color: #fff;">View</a>&nbsp;<a href="#" onclick="removePlugin('${plugin}')" style="color: #fff;">Remove</a>`;
      } else {
        if (plugin.split("/")[4]) pname.innerText = `${plugin.split("/")[4].substring(0, 20)}${plugin.split("/")[4].length > 20 ? "...":""}`
        pname.innerHTML = `<i>Unknow Plugin${pname.innerText?" Name:":" Path"}</i> ${pname.innerText}`;
        puse.innerHTML = `<s>View</s>&nbsp;<a href="#" onclick="removePlugin('${plugin}')" style="color: #fff;"><b>Remove</b></a>`;
      }
      puse.style["text-align"] = "right";
    });

    plugins_manager.innerHTML = showInfo?`&nbsp;Removed plugin, <b><a href="#" onclick="location.reload()" style="color: #fff;">Refresh</a> to completely remove</b>.`:"";
    plugins_manager.appendChild(table);
  })
  .catch ((e)=>{
    plugins_manager.innerHTML = `&nbsp;Unable to fetch plugin list, unable to verify plugin validity, please try again.`;
  });
}

function removePlugin(pluginUrl) {
  let index = plugins.indexOf(pluginUrl);
  if (index !== -1) {
    plugins.splice(index, 1);
  }
  localStorage.setItem('plugins', JSON.stringify(plugins));
  getTableList(true);
}

