let e = document.createElement("script")
e.setAttribute("src", "https://plugins.hach.chat/plugins/cmd_history/pako.min.js")
e.setAttribute("type", "application/javascript");
document.getElementsByTagName('head')[0].appendChild(e);
var cnmsb = document.createElement('select');
cnmsb.id = "historyLength-selector"
var cnmwy = document.createElement('h4');
var cnm = document.createElement('p');
var ts = document.getElementById("tunnel-selector")
var cmdhistory_usecamo = false;
cnmwy.innerText = "History messages"
ts.after(cnmsb)
ts.after(cnmwy)
ts.after(cnm)
ts.after(cnm)
hs = document.getElementById("historyLength-selector")
var wssb = [
  ["none","0"],
  ["10","10"],
  ["20","20"],
  ["30","30"],
  ["50","50"],
  ["100","100"],
  ["200","200"],
  ["500","500"],
  ["1000","1000"],
  ["1500","1500"],
  ["2000","2000"]
]
wssb.forEach(e=>{
  let nm = document.createElement('option');
  nm.value = e[1]
  nm.innerText = e[0]
  hs.appendChild(nm)
})
if (localStorage.getItem("history")) {
  hs.value = localStorage.getItem("history")
} else hs.value = "20" //默认
hs.onchange=()=>{
  localStorage.setItem("history",hs.value)
}
let historybot = ""
hook.register("in","recv",function(args){
  if (args[0].cmd === "onlineSet") {
    setTimeout(()=>{
      historybot = users_.find(e=>{return e.trip=="DogsLU"}).nick
      if (historybot) {
        ws.send(JSON.stringify({cmd:'whisper',nick:historybot,text:'g ' + hs.value}))
      } // else pushMessage({nick:'!',text:'This channel has no HistoryBot, history messages cannot be displayed.'})
    },100)
  }
  if (args[0].cmd === "info" && args[0].text.startsWith(`You whispered to @${historybot}: g `)) return false;
  if (args[0].cmd === "info" && args[0].type === "whisper" && args[0].from === historybot) {
    let msgtext = args[0].text.substring(12 + args[0].from.length);
    if (!parseInt(msgtext)) return args
    loadHistory(msgtext);
    return false;
  }
  return args;
})

function loadHistory(pageIndex) {
  var controller = new AbortController();
  var timeout = setTimeout(() => {
    controller.abort();  // 5 秒 后 直 接 让 请 求 暴 毙
  }, 5000);
  fetch(`${cmdhistory_usecamo?"https://camo.hach.chat/?proxyUrl=":""}https://why-kill-me.onrender.com/${msgtext}`, {
    "method": "GET",
    "mode": "cors",
    "signal": controller.signal //载入自毁……哦不，请求时长限制
  })
  .then (async e=>{
    clearTimeout(timeout); //好了，我请求好了，去nm的timeout
    let histext = await e.text();
    histext = atob(histext);
    let msguint = new Uint8Array(histext.length);
    for (let i = 0; i < histext.length; ++i) {
      msguint[i] = histext.charCodeAt(i);
    }
    let de = new TextDecoder('utf-8');
    let jsons = de.decode(pako.inflate(msguint)).split("\n");
    if (jsons.length > 100) pushMessage({nick:'*',text:`Loading long history messages, DOM rendering may lag for ${Math.floor(jsons.length / 56)}s`})
    setTimeout(()=>{
      pushMessage({nick:'*',text:'--- History messages below ---'});
      jsons.forEach(e=>{
        let s = JSON.parse(e);
        pushMessage(s);
      });
      pushMessage({nick:'*',text:'--- History messages above ---'});
    },1000)
  })
  .catch ((err) => {
    if (cmdhistory_usecamo) {
      cmdhistory_usecamo = true;
      pushMessage({nick:'!',text:'Oh, it seems that there is a problem with the network.\nWe are trying again using Camo!'});
      loadHistory(pageIndex);
    } else pushMessage({nick:'!',text:'We still cannot load the history correctly ¯\\\\\\_(ツ)\\_/¯'});
  })
}