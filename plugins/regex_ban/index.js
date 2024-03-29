function initRegexBanRules(){
    if(localStorage.getItem('regex_ban_rules') == null){
        localStorage.setItem('regex_ban_rules', '[]')
    }
    window._regexBanRules = []
    let rules=JSON.parse(localStorage.getItem('regex_ban_rules'))
    let successes=0
    for (let i = 0; i < rules.length; i++) {
        try{
            window._regexBanRules.push(new RegExp(rules[i]))
            successes++
        }catch(e){
            console.warn("Invalid regex ban rule: "+rules[i])
        }
    }
    console.log("Loaded "+successes+" regex ban rules!")
}
function regexBanCheck(text){
    for (let i = 0; i < window._regexBanRules.length; i++) {
        if(window._regexBanRules[i].test(text)){return true}
    }
    return false
}

function regexBanHook(args){
    if(args.trip=="/REGEX/"){return args}
    if(regexBanCheck(args[0].text)){
        return
    }
    return args
}

function getRegexBanRules(){
    let rules=JSON.parse(localStorage.getItem('regex_ban_rules'))
    let text="Regex ban rules:"
    for (let i = 0; i < rules.length; i++) {
        text+="\n`"+rules[i].replace("`","\\`")+"`"
    }
    pushMessage({nick:"*",trip:"/REGEX/",text:rules.length==0?"No regex ban rules set.":text})
}

function addRegexBanRule(...args){
    args[0]=args.join(" ")
    let rules=JSON.parse(localStorage.getItem('regex_ban_rules'))
    rules.push(args[0])
    window._regexBanRules.push(new RegExp(args[0]))
    localStorage.setItem('regex_ban_rules', JSON.stringify(rules))
    initRegexBanRules()
    pushMessage({nick:"*",trip:"/REGEX/",text:"Added regex ban rule `"+args[0]+"`"})
}

function removeRegexBanRule(...args){
    args[0]=args.join(" ")
    let rules=JSON.parse(localStorage.getItem('regex_ban_rules'))
    let index=rules.indexOf(args[0])
    if(index==-1){
        pushMessage({nick:"*",trip:"/REGEX/",text:"No such regex ban rule."})
        return
    }
    rules.splice(index,1)
    window._regexBanRules.splice(index,1)
    localStorage.setItem('regex_ban_rules', JSON.stringify(rules))
    initRegexBanRules()
    pushMessage({nick:"*",trip:"/REGEX/",text:"Removed regex ban rule `"+args[0]+"`"})
}

initRegexBanRules();
hook.register("before","pushmessage",regexBanHook)
run["regexbanrules"]=getRegexBanRules
run["addregexbanrule"]=addRegexBanRule
run["removeregexbanrule"]=removeRegexBanRule
run["regexbanhelp"]=function(...args){
    pushMessage({nick:"*",trip:"/REGEX/",text:"Regex ban plugin help:\n`regexbanrules` - List all regex ban rules\n`addregexbanrule <regex>` - Add a regex ban rule\n`removeregexbanrule <regex>` - Remove a regex ban rule\n`regexbanhelp` - Show this help message"})
}
