var checkString = false;
var joined = false;
var checkSpeed = 2;
hook.register('before','pushmessage', (args) =>{
  if (args[0].cmd == "onlineSet") joined = true
  if (args[0].cmd == "warn" && args[0].text == 'Unknown command: /' && checkString) {
    checkString = false;
    return false;
  }
})
function checkKickMe() {
  if (ws.readyState != 1 || checkString || !joined) {
    if (ws.readyState != 1) joined = false;
    if (checkString) { //理论上checkString会在执行后立刻设定为false，如果没有设定，说明服务器无响应或者rl了
      checkString = false;
      checkSpeed += 1
      pushMessage({
        nick: '!',
        text: `[FastKnowKickMe] Possible issues caused by rate limit or server unresponsiveness\nThe detection speed has been reduced to once every **${checkSpeed}** seconds`,
      })
    }
    return;
  }
  checkString = true;
  ws.send(JSON.stringify({
    cmd: 'chat',
    text: '/'
  }))
}
function checkKickMeLoop() {
  checkKickMe()
  setTimeout(checkKickMeLoop,checkSpeed * 1000)
}
checkKickMeLoop()
