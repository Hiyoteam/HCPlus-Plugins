let googletrDom = document.createElement("script")
googletrDom.setAttribute("src", "https://plugins.hach.chat/lib/google_translate.js")
googletrDom.setAttribute("type", "application/javascript");
document.getElementsByTagName('head')[0].appendChild(googletrDom);

var tr = localStorage.getItem('tr')?JSON.parse(localStorage.getItem('tr')):{};
function trSave() {
  localStorage.setItem('tr', JSON.stringify(tr))
}
hook.register('after', 'pushmessage', function(args){
  tranDom(args[0])
})
async function tranDom(dom) {
  let mData = JSON.parse(dom.querySelector('p').getAttribute('data-raw'))
  if (!mData) return;
  if (!tr || !(mData.cmd == "chat" || (mData.cmd == "info" && mData.type == "whisper") || mData.cmd == "emote")) return; //没开翻译，不翻，不是聊天消息，不翻
  let waitTran = JSON.parse(dom.querySelector('p').getAttribute('data-raw')).text
  let isWhisper = (mData.cmd == "info" && mData.type == "whisper" && typeof mData.from == "string")?true:false
  let padText = isWhisper?waitTran.substring(0,12+mData.from.length):'';
  waitTran = isWhisper?waitTran.substring(12+mData.from.length):waitTran;
  let TranText = await googleTranslate(waitTran, tr.text , tr.to);
  if (TranText) {
    dom.querySelector('p').remove()
    dom.appendChild(makeTextEl({text:padText + TranText},{i18n:true})); //raw：所以爱会消失，对吧
  }
}
run.tran = (...args) => {
  if (args[0]) {
    if (args[0]) {
      tr = {
             to: args[0],
             text: args[1]?args[1]:"auto"
           }
      pushMessage({
        nick: '*',
        text: 'Received message translation on'
      })
    } else {
      tr = {}
      pushMessage({
        nick: '*',
        text: 'Received message translation off'
      })
    }
    trSave()
  } else {
    pushMessage({
      nick: '*',
      text: 'chatTranslate\n`/tran <toLanguage> <textLanguage>`\n notes: <optional> [required]\n* <toLanguage>\n    * The language to translate the content into. If you do not fill in this field, the translation option settings will be cancelled.\n* <textLanguage>\n    * The language of the content to be translated. If this item is not filled in, it will be automatically recognized.'
    })
  }
}