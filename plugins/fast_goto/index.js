run.goto = (...args) => {
  if (args.length != 1) {
    pushMessage({
      nick: '!',
      text: "".concat(args.length, " arguments are given while 1 is needed.")
    });
    return;
  }
  ws.onclose = () => {};
  ws.close();
  join(args[0]);
  location.hash = myNick;
  myChannel = args[0];
}
hook.register("before", "connect", (args) => {
  setTimeout(()=>{
    location.hash = '';
    window.scrollTo(0, document.body.scrollHeight);
  },500);
  return args;
});