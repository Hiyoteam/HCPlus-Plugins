var editMsgCustomId = 1
var editMsgCustomIdRemoved = 0
hook.register("in","send",function(args){
    if (args[0].cmd === "chat" && args[0].text.startsWith("///")){
        args[0].text = args[0].text.substring(3)
        args[0].customId = editMsgCustomId.toString()
        editMsgCustomId += 1
    };
    return args;
});
run.editmsg = (...args) => {
  if (args[0] == "help") {
    pushMessage({ nick: '*', text: `Edit Help:
\`/editmsg [clear/help/msgindex] <msgtext>\`

First parameter:
\`help\` View this help list
\`clear\` Clear customId message logging
\`msgindex\` The Nth-to-last message is a customId message

Second parameter:
\`msgtext\` Edited message content, only available when the first parameter is msgindex

Send Can Edit (customId) Message:
\`///[text]\`

First parameter:
\`text\` content
` 

}); 
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