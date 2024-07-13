import pangu from 'https://cdn.skypack.dev/pangu@4.0.7';
var original_pushMessage = pushMessage
function pushMessage(args, options = {},padId="messages",makeunread=true){
    original_pushMessage(args, options, padId, makeunread)
    pangu.autoSpacingPage()
}
pangu.autoSpacingPage()
console.log("Pangu Loaded!")