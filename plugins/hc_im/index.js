console.log("HCIM version 0.1.0 beta.");

function swalImporter(){
    link = document.createElement('script');
    let info = navigator;
    if(info.language == "zh-CN"){
        link.href = 'https://camo.hach.chat/?proxyUrl=https://unpkg.com/sweetalert/dist/sweetalert.min.js'; 
    }else{
        link.href = 'https://unpkg.com/sweetalert/dist/sweetalert.min.js'; 
    }
    document.getElementsByTagName('head')[0].appendChild(link);
}

swalImporter();

function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

function setCookie(cname,cvalue,exdays)
{
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) 
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}

function errorMessage(message,code)
{
    let type = code;
    if(type){
        type = "error";
    }else{
        type = "success";
    }
    try{
        var foo = document.getElementById('swal');
    }catch(err){
        swalImporter();
    }
    swal({
        title: "Error!",
        text: message,
        icon: type,
        button: "OK",
    });
}

link = document.createElement('link');  
link.rel = 'stylesheet';  
link.type = 'text/css';  
link.href = 'https://plugins.hach.chat/plugins/ovui/index.css'; 
document.getElementsByTagName('head')[0].appendChild(link);

window.onerror = function (msg, url, lineNo, columnNo, error) {
    var string = msg.toLowerCase();
    var substring = "script error";
    if (string.indexOf(substring) > -1){
        errorMessage(str('Script Error: See Browser Console for Detail'),1);
    } else {
        var message = [
            'Message: ' + msg,
            'URL: ' + url,
            'Line: ' + lineNo,
            'Column: ' + columnNo,
            'Error object: ' + JSON.stringify(error)
        ].join(' - ');
        errorMessage(str(message),1);
    }
    return false;
};

window.alert = function(text) {
    var mask = document.createElement("div");
    mask.style.position = " fixed";
    mask.style.zIndex = 1000000;
    mask.style.top = 0;
    mask.style.bottom = 0;
    mask.style.left = 0;
    mask.style.right = 0;
    var div = document.createElement("div");
    div.style.backgroundColor = " #22b9ff";
    div.style.color = " #fff";
    div.style.position = " fixed";
    div.style.zIndex = 9999999;
    div.style.height = " 60px";
    div.style.top = " 10%";
    div.style.left = "50%";
    div.style.lineHeight = " 60px";
    div.style.borderRadius = " 4px";
    div.style.fontSize = " 20px";
    div.style.textAlign = "center";
    div.style.padding = "0 10px";
    div.className = "animated  bounceInDown";
    div.id = "alert";
    div.innerHTML = text;
    document.getElementsByTagName("body")[0].appendChild(div);
    document.getElementsByTagName("body")[0].appendChild(mask);
    var selfObj = document.getElementById("alert");
    var alertWidth = window.getComputedStyle(selfObj, null).width;
    div.style.marginLeft = -parseInt(alertWidth) / 2 + "px";
    setTimeout(function() {
        document.getElementsByTagName("body")[0].removeChild(div);
        document.getElementsByTagName("body")[0].removeChild(mask);
    }, 3000);
}

let firstOpen = getCookie("firstOpen");
if(eval(firstOpen)){}else{
    swalImporter();
    swal({
        title: "Welcome!",
        text: "Welcome to use HC-IM version 0.1.0.",
        icon: "success",
    });
}

var styleSheet = document.createElement('style');
var mainStyle = ```
body { 
    background-color: #9bddc2; 
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
} 
body, input, textarea {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 12px;
    -o-tab-size: 4;
    -moz-tab-size: 4;
    tab-size: 4;
}
.trip 
{
    overflow:hidden;
}

.message {
    border-left: 0px solid rgba(125,122,104,.5);
}
```
styleSheet.type = 'text/css';
styleSheet.innerText = '';
document.head.appendChild(styleSheet);

