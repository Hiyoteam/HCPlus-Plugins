import pangu from 'https://cdn.skypack.dev/pangu@4.0.7';
function panguPushHook(args){
    if(args[0].text){
        args[0].text=pangu.spacing(args[0].text)
    }
    return args
}
hook.register("before", "pushmessage", panguPushHook)
pangu.spacingPageBody()
console.log("Pangu Loaded!")