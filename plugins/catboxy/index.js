var CAMO_BASE="https://camo.hach.chat/?proxyUrl=";
function selectImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = e => {
        const file = e.target.files[0];
        uploadImage(file);
    }
    input.click();
}

function selectFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '*/*';
    input.onchange = e => {
        const file = e.target.files[0];
        uploadFile(file);
    }
    input.click();
}

function generatePlaceHolder(length) {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }

  return result;
}

function uploadImage(file) {
    const formData = new FormData();
    formData.append('reqtype', 'fileupload');
    formData.append('userhash', '');
    formData.append('fileToUpload', file);
    var placeholder=generatePlaceHolder(6)
    var template=`![](Uploading :: ${placeholder})`
    insertAtCursor(template)
    fetch(CAMO_BASE+'https://catbox.moe/user/api.php', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            (async () => {
                pushMessage({nick:"*",text:`Image upload ID ${placeholder} success.`})
                document.querySelector("#chatinput").value=document.querySelector("#chatinput").value.replace(`Uploading :: ${placeholder}`,CAMO_BASE+await response.text())
            })();
        })
        .catch(error => {
            (async () => {
                pushMessage({nick:"!",text:"Failed to upload image."})
                document.querySelector("#chatinput").value=document.querySelector("#chatinput").value.replace(`Uploading :: ${placeholder}`,"UPLOAD_FAILED")
            })();
        });
}
function uploadFile(file) {
    const formData = new FormData();
    formData.append('reqtype', 'fileupload');
    formData.append('userhash', '');
    formData.append('fileToUpload', file);
    var placeholder=generatePlaceHolder(6)
    var template=`[${file.name}](Uploading :: ${placeholder})`
    insertAtCursor(template)
    fetch(CAMO_BASE+'https://catbox.moe/user/api.php', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            (async () => {
                pushMessage({nick:"*",text:`Image upload ID ${placeholder} success.`})
                document.querySelector("#chatinput").value=document.querySelector("#chatinput").value.replace(`Uploading :: ${placeholder}`,CAMO_BASE+await response.text())
            })();
        })
        .catch(error => {
            (async () => {
                pushMessage({nick:"!",text:"Failed to upload image."})
                document.querySelector("#chatinput").value=document.querySelector("#chatinput").value.replace(`Uploading :: ${placeholder}`,"UPLOAD_FAILED")
            })();
        });
}
addPluginButton("Upload Image",() => selectImage())
addPluginButton("Upload File",() => selectFile())