export const removeDomByClassname = (classname) => {
    if (classname[0] != '.'){
        classname = '.'+classname;
    }
    const doms = document.querySelectorAll(classname);
    doms.forEach(el=>{
        el.remove();
    })
}
export const removeDomById = (id) => {
    if (id[0] != "#"){
        id = "#"+id
    }
    const dom = document.querySelector(id);
    if(dom){
        // 检测到dom才删除
        dom.remove();
    }
}
console.log("killMethods")