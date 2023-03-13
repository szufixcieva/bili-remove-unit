const hiddenDomByClassname = (classname, scanSpeed=500, times = 20) => {
    // 尽可能保证传入的classname是存在的，否则会执行 times 次
    // 默认最长寻找时间 500ms * 20 = 10s

    // 有效期
    if(times<=0){
        console.log(`can't find class "${classname}"`);
        return ;
    }

    // 补全classname;
    if (classname[0] != '.'){
        classname = '.'+classname;
    }

    // 获取dom元素
    const dom = document.querySelector(classname);
    if(!dom){
        // 获取不到时
        // 每 scanSpeed 毫秒找一次，直到dom有效为止
        setTimeout(()=>{
            times--
            hiddenDomByClassname(classname, scanSpeed, times);
        }, scanSpeed);

        return ;
    } 
    else {
        // 获取到dom时
        dom.setAttribute("class", "bili-rmu-hidden");
        // 或者 dom.style.display = "none";  
    }
}

hiddenDomByClassname("feed-roll-btn")
hiddenDomByClassname("feed-roll-btn-dd")