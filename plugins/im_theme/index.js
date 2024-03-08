/*********************************************************************************************************** */

const im_theme_host = "http://127.0.0.1/plugins/im_theme/";
const __$ = (e) => document.querySelector(e);


var raw_setScheme = setScheme;
var im_current_theme = localStorage["im_theme"] ?? "jewel";

var __i18n = {
  "zh-CN": {
    better_prompt_alert: "使用IM输入框",
    im_theme: "IM主题颜色",
    enable: "启用",
    disable: "禁用",
    cannel: "取消",
    ok: "确定",
    update_input: "请刷新来应用此更改。",
  },
  "en-US": {
    better_prompt_alert: "Use Pro Prompt and Alert",
    im_theme: "IM Theme Colors",
    enable: "enable",
    disable: "disable",
    cannel: "Cannel",
    ok: "OK",
    update_input: "Please refresh to apply the change.",
  },
  "ja-JP": {
    better_prompt_alert: "IM入力ボックスの使用",
    im_theme: "IMテーマの色",
    enable: "有効にする",
    disable: "無効にする",
    cannel: "やめてくれ",
    ok: "OK",
    update_input: "変更を適用するには更新してください。",
  },
};
function getI18n() {
  return __i18n[localStorage["i18n"] || "en-US"];
}
/************************************** functions ************************************************************** */
function fix_send(e) {
  // console.log(e, ws);
  (window._send ?? window.send)(e);
  // console.log(e, ws);
}
function injectcss(url, id) {
  var link = document.createElement("link");
  if (id) link.id = id;
  document.head.appendChild(link);
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", url);
  link.setAttribute("type", "text/css");
}
function injectscript(url) {
  return new Promise((good, fuck) => {
    var script = document.createElement("script");
    document.head.appendChild(script);
    script.setAttribute("src", url);
    script.onload = (e) => {
      good();
    };
  });
}
function injectStyle(css) {
  // 创建一个新的 <style> 元素
  var styleElement = document.createElement("style");

  // 创建包含 CSS 规则的文本
  var cssText = css;
  var cssTextNode = document.createTextNode(cssText);

  // 将文本添加到 <style> 元素中
  styleElement.appendChild(cssTextNode);

  // 将 <style> 元素添加到网页的 <head> 元素中
  document.head.appendChild(styleElement);
  return styleElement;
}

function findXPath(STR_XPATH) {
  var xresult = document.evaluate(
    STR_XPATH,
    document,
    null,
    XPathResult.ANY_TYPE,
    null
  );
  var xnodes = [];
  var xres;
  while ((xres = xresult.iterateNext())) {
    xnodes.push(xres);
  }

  return xnodes;
}
function createOption(text, options, onchange = (e) => { }, init = (e) => e) {
  let p = document.createElement("p");
  p.appendChild(
    ((e) =>
      !!(e = document.createElement("span")) && !!(e.innerText = text) && e)()
  );
  p.appendChild(document.createElement("br"));
  p.appendChild(
    ((e) =>
      !!(e = document.createElement("select")) &&
      !options.forEach((j) => e.appendChild(new Option(j[0], j[1]))) &&
      !!(e.onchange = onchange) &&
      !!init(e) &&
      e)()
  );
  return p;
}
function injectSelect(text, options, onchange, init) {
  document
    .querySelector("#sidebar-content")
    .insertBefore(
      createOption(text, options, onchange, init),
      document.querySelector("#tunnel-selector").nextElementSibling
    );
}
function parseHTMLToDom(html) {
  const template = `<div class='child'>${html}</div>`;
  let tempNode = document.createElement("div");
  tempNode.innerHTML = template;
  return tempNode.firstChild;
}
function getSidebarColor() {
  try {
    return getComputedStyle($("#sidebar")).getPropertyValue("background-color");
  } catch (e) {
    return "";
  }
}
function setIMTheme(t) {
  im_current_theme = t;
  $id("im_theme").href = im_theme_host + "assset/css/theme/" + t + ".css";
  localStorageSet("im_theme", t);
}
function inject_checkbox() {
  __$("#sidebar").classList.add("weui-cells_checkbox");
  [...document.querySelectorAll("input[type=checkbox]")].forEach((e) => {
    let parent = e.parentNode.children,
      raw_checkbox = parent[0],
      raw_title = parent[1];

    let id = raw_checkbox.id,
      title = raw_title.innerText;
    let label = document.createElement("label"),
      div1 = document.createElement("div"),
      div2 = document.createElement("div"),
      input = document.createElement("input"),
      icon = document.createElement("i");
    div1.className = "weui-cell__hd";
    div2.className = "weui-cell__bd";
    div2.innerText = title;
    label.className = "weui-cell weui-cell_active weui-check__label";
    label.htmlFor = id;
    input.type = "checkbox";
    input.className = "weui-check";
    input.checked = raw_checkbox.checked;
    input.id = id;
    input.onchange = raw_checkbox.onchange;
    icon.className = "weui-icon-checked checkbox_color";
    div1.appendChild(input);
    div1.appendChild(icon);
    label.appendChild(div1);
    label.appendChild(div2);
    //label = parent[1].innerText;
    //e.parentNode.removeChild(e.children[0]);
    //console.log(e.parentNode.parentNode, e.parentNode);
    e.parentNode.parentNode.replaceChild(label, e.parentNode);
  });
}
function inject_button() {
  [...document.querySelectorAll("button")].forEach(
    (e) => (e.className = "weui-btn weui-btn_mini weui-hotarea")
  );
}
function inject_chatinput() {
  let chatform = __$("#chatform");
  chatform.classList.add("im_chatform");
  chatform.classList.add("dynamic_info_color");
  let chatinput = __$("#chatinput");
  let div_count = document.createElement("div");
  div_count.className = "im_counter";
  let updateCount = (e) => (div_count.innerHTML = `${e ?? 0}/7000`);
  updateCount(chatinput.value.length);
  let raw_input = chatinput.oninput;
  let raw_keydown = chatinput.onkeydown;
  chatinput.oninput = (e) => {
    raw_input();
    updateCount(e.target.value.length);
  };
  chatinput.onkeydown = (e) => {
    raw_keydown(e);
    updateCount(e.target.value.length);
  };
  chatform.appendChild(div_count);
}

// 创建一个 Proxy 对象来 hook WebSocket 类的属性
var _WebSocket = WebSocket;
var inject_WebSocketed = false;
var hooked_onopen = false;
function inject_WebSocket() {
  if (inject_WebSocketed) return;
  inject_WebSocketed = true;
  WebSocket = new Proxy(_WebSocket, {
    construct(target, args) {
      let tmp = new target(...args);

      return new Proxy(tmp, {
        // 获取值时的捕获器
        get: function (target, key) {
          const origMethod = target[key];
          return typeof origMethod === 'function' ? origMethod.bind(target) : origMethod;
        },
        // 设置值时的捕获器
        set: function (target, key, newValue) {
          if (key == "onopen" && hooked_onopen) {
            target[key] = window.hook_onopen;
          } else target[key] = newValue;
          return true;
        },
      });
    },
  });
}
function inject_prompt() {
  let channel = myChannel;
  window.hook_onopen = async function () {
    hook.run("before", "connect", []);

    var shouldConnect = true;
    if (!wasConnected) {
      if (location.hash) {
        myNick = location.hash.slice(1);
      } else if (typeof oldNick == "string") {
        if (verifyNickname(oldNick.split("#")[0])) {
          myNick = oldNick;
        }
      } else {
        var newNick = await new Promise((g, f) =>
          createInput(
            i18ntranslate("Nickname:", "prompt"),
            "",
            (e) => {
              if (e.state) g(e.input);
              else f(null);
            },
            myNick
          )
        )
          .then((e) => e)
          .catch((e) => e);
        if (newNick != null) {
          myNick = newNick;
        } else {
          // The user cancelled the prompt in some manner
          shouldConnect = false;
          shouldAutoReconnect = false;
          pushMessage({
            nick: "!",
            text: "You cancelled joining. Press enter at the input field to reconnect.",
          });
        }
      }
    }

    if (myNick && shouldConnect) {
      localStorageSet("my-nick", myNick);
      fix_send({ cmd: "join", channel: channel, nick: myNick });
      wasConnected = true;
      shouldAutoReconnect = true;
    } else {
      try {
        ws.close();
      } catch { }
    }
  };
  ws.onopen = () => {
    if (!hooked_onopen)
      hooked_onopen = true;
    inject_WebSocket();
    hook_onopen();
  };
}
function inject_alert() {
  alert = (e) => createAlert("", e, () => { });
}
function hookFunction(hook, func) {
  // console.log(window[hook], func);
  var oldonload = window[hook];
  if (typeof window[hook] != "function") {
    window[hook] = func;
  } else {
    window[hook] = function () {
      oldonload();
      func();
    };
  }
}
/************************************************************************************************************/

[
  "bubble.css",
  "control.css",
  "level.css",
  "hcpp_control_fix.css",
  "pop.css",
].forEach((e) => injectcss(im_theme_host + "assset/css/" + e));
injectcss(im_theme_host + `assset/css/theme/${im_current_theme}.css`, "im_theme");
injectscript(im_theme_host + "assset/js/bubble.js");
injectscript(im_theme_host + "assset/js/pop.js");
setIMTheme(localStorage["im_theme"] ?? "jewel");
if (myChannel == "") {
  ws = {};
}
function init_hooks() {
  /****************************************************/
  //inject first
  pushMessage = hook_pushMessage;

  if (localStorage["im_input"] == "true") {
    inject_alert();
    inject_prompt();
  }
  /***************************************************/
  var temp_color = injectStyle(`.dynamic_info_color {
    background:${getSidebarColor()};
  }`);
  //hook theme to make sure the colors don't come out wrong
  setScheme = (e) => {
    raw_setScheme(e);
    setTimeout(
      () =>
      (temp_color.innerHTML = `.dynamic_info_color {
    background:${getSidebarColor()};
  }`),
      100
    );
  };
  /***************************************************/
  //inject Select for sidebar
  injectSelect(
    getI18n().im_theme,
    [
      ["amber", "amber"],
      ["bubblegum", "bubblegum"],
      ["chelseagem", "chelseagem"],
      ["jewel", "jewel"],
      ["lime", "lime"],
      ["pinescent", "pinescent"],
      ["pink", "pink"],
      ["strawberry", "strawberry"],
    ],
    (e) => {
      setIMTheme(e.target.value);
    },
    (e) => {
      e.value = im_current_theme;
      return e;
    }
  );
  injectSelect(
    getI18n().better_prompt_alert,
    [
      [getI18n().enable, "true"],
      [getI18n().disable, "false"],
    ],
    (e) => {
      localStorage["im_input"] = e.target.value;
      pushMessage({ nick: "*", text: getI18n().update_input });
    },
    (e) => {
      e.value = localStorage["im_input"] = localStorage["im_input"] || "true";

      return e;
    }
  );
  /***************************************************** */
  // inject buttons and checkbox
  inject_button();
  inject_checkbox();
  inject_chatinput();
  /**************************************************** */
}
function init() {
  init_hooks();
}
hookFunction('onload', () => init());
