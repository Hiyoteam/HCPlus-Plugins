let camoFetchDom = document.createElement("script")
camoFetchDom.setAttribute("src", "https://plugins.hach.chat/lib/camo_fetch.js")
camoFetchDom.setAttribute("type", "application/javascript");
document.getElementsByTagName('head')[0].appendChild(camoFetchDom);

const chatinput = document.getElementById('chatinput');
document.addEventListener('paste', function (e) {
  const dataTransferItemList = e.clipboardData.items;
  const items = [].slice.call(dataTransferItemList).filter(function (item) {
    return item.type.indexOf('image') !== -1;
  });
  if (items.length == 0) return;
  items.forEach((item)=>{
    uploadImageToCatbox(item.getAsFile(),item.getAsFile().type);
  });
});
document.addEventListener('drop', function (e) {
  e.preventDefault();
  const dt = e.dataTransfer;
  const files = dt.files;

  if (files.length === 0) return;

  Array.from(files).forEach(file => {
    uploadImageToCatbox(file,file.type,file.name);
  });
});
async function uploadImageToCatbox(file,fileType,name='image.png') {
  let updateMessage = `Updateing...(${Math.floor(Math.random() * 114514) + 100})`;
  let removeTemp = (error) => {
    pushMessage({nick:'!',text:'Unable to upload: ' + error});
    let newSelectionStart = chatinput.selectionStart - updateMessage.length - 2
    chatinput.value = chatinput.value.replace(`[${updateMessage}]`, ``);
    chatinput.setSelectionRange(newSelectionStart, newSelectionStart);
    updateInputSize();
  }
  let updateSel = chatinput.selectionStart;
  insertAtCursor(`[${updateMessage}]`);
  updateInputSize();
  try {
    const formData = new FormData();
    formData.append('reqtype', 'fileupload');
    formData.append('userhash', '');
    formData.append('fileToUpload', file);

    const response = await camoFetch('https://catbox.moe/user/api.php', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      const result = await response.text();
      let newSelectionStart
      if (chatinput.selectionStart <= updateSel) {
        newSelectionStart = chatinput.selectionStart;
      } else {
        newSelectionStart = chatinput.selectionStart + result.length + fileType.length + name.length - updateMessage.length + '!(https://camo.hach.chat/?proxyUrl=&mine=)'.length
        newSelectionStart += fileType.includes('image/')?0:1;
      }
      chatinput.value = chatinput.value.replace(`[${updateMessage}]`, `${fileType.includes('image/')?`![${name}](https://camo.hach.chat/?proxyUrl=${result}&mine=${fileType})`:`[[${name}](https://camo.hach.chat/?proxyUrl=${result}&mine=${fileType})]`}`);
      chatinput.setSelectionRange(newSelectionStart, newSelectionStart);
      updateInputSize();
    } else {
      throw new Error(`Failed to upload:\n\`\`\`\n${await response.text()}`);
    }
  } catch (err) {
    removeTemp(err.message || err)
  }
}

