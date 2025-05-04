run["captcha-solution"] = function(...args){
  switch(args[0]){
    case "set-token":
      let key = prompt("Enter your Captcha Solution token.")
      localStorageSet("captcha-solution-key", key)
      pushMessage({
        nick: "*",
        trip: "CAPTCHA",
        text: `Successfully set captcha solution token to \`${key}\``,
      });
      break
    case "clear-token":
      localStorageSet("captcha-solution-key", undefined)
      pushMessage({
        nick: "*",
        trip: "CAPTCHA",
        text: `Successfully cleared captcha solution key`,
      });
  }
}

hook.register("in", "recv", function (args) {
  if (args[0].cmd == "captcha" && localStorageGet("captcha-solution-key")) {
    pushMessage({
      nick: "*",
      trip: "CAPTCHA",
      text: "Captcha detected. Solving...",
    });
    fetch(
      `https://captcha-solution.hach.chat/solve?key=${localStorageGet("captcha-solution-key")}&content=${btoa(args[0].text)}`,
    )
      .then((e) => {
        e.json()
          .then((e) => {
            if (e.code == 200) {
              pushMessage({
                nick: "*",
                trip: "CAPTCHA",
                text: `Captcha solved. Server time usage: ${e.time_usage_ms} ms, Result: \`${e.result}\``,
              });
              insertAtCursor(e.result);
            }
          })
          .error((e) => {
            pushMessage({
              nick: "!",
              trip: "CAPTCHA",
              text: `Failed to solve captcha: \`${e.error}\``,
            });
          });
      })
      .error((e) => {
        pushMessage({
          nick: "!",
          trip: "CAPTCHA",
          text: `Failed to solve captcha: Failed to send request`,
        });
      });
    return args;
  }
  return args;
});
