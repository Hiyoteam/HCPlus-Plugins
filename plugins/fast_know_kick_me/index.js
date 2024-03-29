var checkString = false
var joined = false
hook.register('before','pushmessage', (args) =>{
  if (args[0].cmd == "onlineSet") joined = true
  if (args[0].cmd == "warn" && args.text == 'Unknown command: /y' && checkString) {
    checkString = false
    return false;
  }
})
setInterval(()=>{
  if (ws.readyState != 1 || checkString || !joined) {
    if (ws.readyState != 1) joined = false;
    return;
  }
  checkString = true;
  ws.send(JSON.stringify({
    cmd: 'chat',
    text: '/y'
  }))
},3000)