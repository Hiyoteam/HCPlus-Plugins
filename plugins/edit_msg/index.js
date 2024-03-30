var editMsgCustomId = 1
var editMsgCustomIdRemoved = 0
var editMsg = localStorage.getItem('editmsg') || false
hook.register("in","send",function(args){
    if (args[0].cmd === "chat" && (!args[0].text.startsWith("/") || args[0].text.startsWith("//"))){
        args[0].customId = editMsgCustomId.toString()
        editMsgCustomId += 1
    };
    return args;
});
hook.register('before','pushmessage', (args) =>{
  if (args[0].cmd == "onlineSet" && editMsg) {
    pushMessage({ nick: '!', text: 'Warning: You still have customId messaging enabled. Please turn it off to avoid unnecessary server usage: `/editmsg off`' }); 
  }
})
run.editmsg = (...args) => {
  if (args[0] == "on" || args[0] == "off") {
    editMsg = (args[0]=="on")?(true):((args[0] == "off")?(false):(editMsg));
    pushMessage({ nick: '*', text: editMsg?'The message customId has been enabled, and now you can use `/editmsg [last message] [new content]` to edit the message':'Closed message customId' }); 
    localStorage.setItem('editmsg',editMsg);
    return;
  }
  if (args[0] == "help") {
    pushMessage({ nick: '*', text: `Help:
\`/editmsg [on/off/clear/help/msgindex] <msgtext>\`

First parameter:
\`help\` View this help list
\`on\` Enable customId message logging
\`off\` Disable customId message logging
\`clear\` Clear customId message logging
\`msgindex\` The Nth-to-last message is a customId message

Second parameter:
\`msgtext\` Edited message content, only available when the first parameter is msgindex` }); 
    return;
  }
  if (args[0] == "clear") {
    editMsgCustomIdRemoved = editMsgCustomId - 1
    pushMessage({ nick: '*', text: 'Cleared customId message for record' }); 
    return;
  }
  if (args.length < 2) {
    pushMessage({ nick: '!', text: 'Insufficient parameters' }); 
    return;
  }
  let text = args;
  if (parseInt(args[0])) {
    let msgid = editMsgCustomId - parseInt(args[0]) - editMsgCustomIdRemoved
    if (msgid < 1) {
      pushMessage({ nick: '!', text: `Only **${editMsgCustomId - editMsgCustomIdRemoved - 1}** customId messages` }); 
      return;
    }
    text.shift()
    ws.send(JSON.stringify({
      cmd: 'updateMessage',
      mode: 'overwrite',
      text: text.join(" "),
      customId: (msgid + editMsgCustomIdRemoved).toString()
    }))
  } else pushMessage({ nick: '!', text: 'Message index error' }); 
}