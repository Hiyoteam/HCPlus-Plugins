funvar checkString = false;
var joined = false;
var checkSpeed = localStorage.getItem('checkSpeed') || 2;
hook.register('before','pushmessage', (args) =>{
  joined = true
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
        text: `[FastKnowKickMe] Possible issues caused by rate limit or server unresponsiveness\nThe detection speed has been reduced to once every **${checkSpeed}** seconds\nIf this issue persists, please use \`/defcheckspeed <number>\`to adjust the default check speed\nIf you only need to adjust the speed of the current tab, please use \`/checkspeed <number>\` to adjust the current check speed`,
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
run.checkspeed = (...args) => {
  if (args[0]) {
    let setSpeed = parseInt(args[0])
    if (setSpeed < 0 || isNaN(setSpeed)) {
      pushMessage({nick:'!',text:`The default Check Speed speed should not be less than 0 (or NaN)`})
      return;
    }
    localStorage.setItem('checkSpeed',setSpeed);
    pushMessage({nick:'*',text:`The default Check Speed has been set to ${localStorage.getItem('checkSpeed') || 2} seconds`})
  } else pushMessage({nick:'*',text:`Default Check Speed: ${localStorage.getItem('checkSpeed') || 2} seconds`})
}
run.defcheckspeed = (...args) => {
  if (args[0]) {
    let setSpeed = parseInt(args[0])
    if (setSpeed < 0 || isNaN(setSpeed)) {
      pushMessage({nick:'!',text:`The now Check Speed speed should not be less than 0 (or NaN)`})
      return;
    }
    checkSpeed = setSpeed;
    pushMessage({nick:'*',text:`The now Check Speed has been set to ${checkSpeed} seconds`})
  } else pushMessage({nick:'*',text:'Now Check Speed: ${checkSpeed} seconds'})
}