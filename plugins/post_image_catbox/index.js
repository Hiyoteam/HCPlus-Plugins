const chatinput = document.getElementById('chatinput');
document.addEventListener('paste', function (e) {
  const dataTransferItemList = e.clipboardData.items;
  const items = [].slice.call(dataTransferItemList).filter(function (item) {
    return item.type.indexOf('image') !== -1;
  });
  if (items.length == 0) return;
  items.forEach((item)=>{
    uploadImageToCatbox(item.getAsFile());
  });
});
document.addEventListener('drop', function (e) {
  e.preventDefault();
  const dt = e.dataTransfer;
  const files = dt.files;
  const imageFiles = Array.from(files).filter(file => file.type.includes('image/'));

  if (imageFiles.length === 0) return;

  imageFiles.forEach(file => {
    uploadImageToCatbox(file);
  });
});
async function uploadImageToCatbox(file) {
  let updateMessage = `Updateing...(${Math.random() * 114514})`;
  let removeTemp = (error) => {
    pushMessage({nick:'!',text:'Unable to upload image: ' + error});
    let newSelectionStart = chatinput.selectionStart - updateMessage.length - 5
    chatinput.value = chatinput.value.replace(`![](${updateMessage})`, ``);
    chatinput.setSelectionRange(newSelectionStart, newSelectionStart);
    updateInputSize();
  }
  insertAtCursor(`![](${updateMessage})`);
  updateInputSize();
  try {
    const formData = new FormData();
    formData.append('reqtype', 'fileupload');
    formData.append('userhash', '');
    formData.append('fileToUpload', file);

    const response = await fetch('https://camo.hach.chat/?proxyUrl=https://catbox.moe/user/api.php', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      const result = await response.text();
      let newSelectionStart = chatinput.selectionStart + result.length - updateMessage.length + 'https://camo.hach.chat/?proxyUrl='.length
      chatinput.value = chatinput.value.replace(`![](${updateMessage})`, `![](https://camo.hach.chat/?proxyUrl=${result})`);
      chatinput.setSelectionRange(newSelectionStart, newSelectionStart);
      updateInputSize();
    } else {
      throw new Error(`Failed to upload image:\n\`\`\`\n${await response.text()}`);
    }
  } catch (err) {
    removeTemp(err.message || err)
  }
}

