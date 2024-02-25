// import React from "react";
// import "./pop.css";
// import * as ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
// import { Fragment } from "react";
const arrow_res = `data:image/png;base64,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`;
const getUuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
let doce = (e, j, ac = (e) => {}, p) =>
  !!(p = document.createElement(e)) &&
  (!j || true) &&
  (!(p.className = j) || true) &&
  (!ac(p) || true) &&
  p;
/* 
format ('标题',<自定义html>,
[
    { text:'按钮标题',
      type:'' (可省略),
      func(e){
            e: obj => {
                    close -> 关闭浮窗


                }
            }       
        }
    ]
)
*/

function DialogEx() {
  let holder = document.createElement("div");
  holder.className = "pop_max_container";
  holder.id = "_" + getUuid();
  let close = () => document.body.removeChild(holder);
  let pop_mask = doce("div", "pop_mask");
  holder.appendChild(pop_mask);
  document.body.appendChild(holder);
  console.log(holder);
  return { render: (e) => holder.appendChild(e), close };
}
function createAsk(title, content, callback = () => {}) {
  let dialog = DialogEx();
  let _ = callback;
  callback = (e) => {
    dialog.close();
    _(e);
  };
  let d = MyDialog({
    title,
    content: doce("p", "", (e) => {
      e.innerText = content;
    }),
    onCloseButton: (e) => {
      callback(false);
    },
    actions: [
      doce("button", "item", (b) => {
        b.innerText = getI18n().cannel;
        b.onclick = () => callback(false);
      }),
      doce("button", "item success", (b) => {
        b.innerText = getI18n().ok;
        b.onclick = () => callback(true);
      }),
    ],
  });

  dialog.render(d);
}
function createAlert(title, content, callback = () => {}) {
  let dialog = DialogEx();
  let _ = callback;
  callback = (e) => {
    dialog.close();
    _(e);
  };
  let d = MyDialog({
    title,
    content: doce("p", "", (e) => {
      e.innerText = content;
    }),
    onCloseButton: (e) => {
      callback(true);
    },
    actions: [
      doce("button", "item", (b) => {
        b.innerText = getI18n().ok;
        b.onclick = () => callback(true);
      }),
    ],
  });

  dialog.render(d);
}
function createInput(title, content, callback = () => {}, value = "") {
  let dialog = DialogEx();
  let _ = callback;
  let val = value || "";
  let input = doce("input", "", (e) => {
    e.placeholder = content;
    e.value = val;
    e.onkeydown = (e) => {
      if (e.keyCode == 13) callback({ state: true, input: val });
    };
    e.oninput = (e) => (val = e.target.value);
    e.autofocus = true;
  });

  callback = (e) => {
    _(e);
    dialog.close();
  };
  let d = MyDialog({
    title,
    content: input,
    onCloseButton: (e) => {
      callback({ state: false });
    },
    actions: [
      doce("button", "item", (b) => {
        b.innerText = getI18n().cannel;
        b.onclick = () => callback({ state: false });
      }),
      doce("button", "item success", (b) => {
        b.innerText = getI18n().ok;
        b.onclick = () => callback({ state: true, input: val });
      }),
    ],
  });
  dialog.render(d);
}
function MyDialog({ title, content, actions, onCloseButton }) {
  console.log("mydialog", title, content, actions, onCloseButton);
  let container = doce("div", "pop_container popIn"),
    pop_arrow = ["lf", "dlf", "rh", "drh"]
      .map((e) => doce("img", "pop_arrow " + e))
      .map((e) => {
        e.src = arrow_res;
        return e;
      }),
    body = doce("div", "body"),
    pop_header = doce("div", "pop_header"),
    pop_split = doce("span", "pop_split"),
    pop_content = doce("div", "pop_content"),
    pop_actions = doce("div", "pop_actions");

  pop_header.appendChild(
    doce("label", "title", (e) => {
      e.innerText = title;
    })
  );
  pop_header.appendChild(
    doce("span", "close_btn", (e) => {
      e.onclick = () => onCloseButton();
    })
  );
  pop_content.appendChild(content);

  if (Array.isArray(actions))
    actions.forEach((e) => pop_actions.appendChild(e));
  else pop_actions.appendChild(actions);
  body.appendChild(pop_header);
  body.appendChild(pop_split);
  body.appendChild(pop_content);
  body.appendChild(pop_split);
  body.appendChild(pop_actions);
  container.appendChild(body);
  pop_arrow.forEach((e) => container.appendChild(e));

  return container;
}
