const punctuation_marks=Array.from(".,?!…，。？！")
function pmcheck(args){
    if(args[0].cmd!="chat"){return args};
    punctuation_marks.forEach(e=>{
        if(args[0].text == e){
        pushMessage({nick:"!",text:"Single punctuation mark cannot be sent."})
        return false;
        }else{
        return args
    }})
}
hook.register("in","send",pmcheck)