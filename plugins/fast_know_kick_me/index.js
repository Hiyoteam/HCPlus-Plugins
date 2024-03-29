var checkString = false
var joined = false
hook.register('before','pushmessage', (args) =>{
  if (args.cmd == "onlineSet") joined = true
  if (args.cmd == "warn" && args.text == 'Unknown command: /y' && checkString) {
    checkString = false
    return false;
  }
})
setInterval(()=>{
  if (ws.readyState != 1 || checkString || !joined) {
    joined = false;
    return;
  }
  checkString = true;
  ws.send(JSON.stringify({
    cmd: 'chat',
    text: '/y'
  }))
},3000)