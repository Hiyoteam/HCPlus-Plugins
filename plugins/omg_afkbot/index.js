﻿function generateObject([hashStr, nickStr, tripStr]) {
  let result = {};
  hashStr.split(", ").forEach((hash)=>{
    result[hash] = {};
  });
  let nicksb = nickStr.split("{");
  let nicks = nicksb.map((nickb) => {return nickb.split("}")[0]});
  nicks = nicks.map((nick)=>{return nick.split(", ")});
  nicks.shift();
  let tripsb = tripStr.split("{");
  let trips = tripsb.map((tripb) => {return tripb.split("}")[0]});
  trips = trips.map((trip)=>{return trip.split(", ")});
  trips.shift();
  for (let k in nicks) {
    result[hashStr.split(", ")[k]].nick = ilove4n0n4me(nicks[k]);
  }
  for (let k in trips) {
    result[hashStr.split(", ")[k]].trip = ilove4n0n4me(trips[k]);
  }
  
  return result;
}
function generateExpandableList(obj) {
  let html = '';
  for (const key in obj) {
    html += `<details${obj.length<5?" open":""}><summary>${key}</summary>`;
    html += '<details style="margin-left:15px"><summary>nick</summary><ul>';
    obj[key].nick.forEach(nick => {
      html += `<li style="margin-left:15px">${nick}</li>`;
    });
    html += '</ul></details>';
    html += '<details><summary style="margin-left:15px">trip</summary><ul>';
    obj[key].trip.forEach(trip => {
      html += `<li style="margin-left:30px">${trip}</li>`;
    });
    html += '</ul></details>';
    html += '</ul></details>';
  }
  return html;
}
const ilove4n0n4me = (ovo) => { //夹带私货
  let awa = [...new Set(ovo)];
  return awa.filter((uwu)=>{return uwu})
}
function showAfK(dom,text) {
  let showinfo = {}
  if (text.indexOf("==Hash==") !== -1) {
    let moreTexts = text.split("\n") //length : 3
    moreTexts = moreTexts.map((moreText) => {return moreText.split(": ")[1]});
    showinfo = generateObject(moreTexts)
  } else {
    showinfo[text.split(" ")[3].replace(/==/g,'').replace(":",'')] = {
      nick: ilove4n0n4me(text.substring(42).split("\n")[0].split(", ")),
      trip: ilove4n0n4me(text.split("\n")[1].substring(40).split(", "))
    }
  }
  let lastAtBottom = isAtBottom()
  dom.querySelector('p').innerHTML = generateExpandableList(showinfo);
  if (lastAtBottom) window.scrollTo(0, document.body.scrollHeight);
}
function runawa(arg) {
  let hcmsg = JSON.parse(arg.querySelector('p').getAttribute('data-raw'));
  try {
    if (hcmsg.trip == "AAfFKK" && hcmsg.text.indexOf('==Trips==') !== -1) {
      showAfK(arg,hcmsg.cmd=="info"?hcmsg.text.substring(14+hcmsg.from.length):hcmsg.text)
    }
  } catch (err) {}
}

hook.register('after','pushmessage', (args) =>{
  runawa(args[0])
})