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

function hiddenDomsByClassname(classname) {
    if(classname[0] != '.'){
        classname = '.' + classname;
    }
    const doms = document.querySelectorAll(classname);

    doms.forEach(dom => {
        dom.style.display = "none";
    })
}

const removeDomsByClassname = (classname) => {
    if (classname[0] != '.'){
        classname = '.'+classname;
    }
    const doms = document.querySelectorAll(classname);
    doms.forEach(el=>{
        el.remove();
    })
}
const removeDomById = (id) => {
    if (id[0] != "#"){
        id = "#"+id
    }
    const dom = document.querySelector(id);
    if(dom){
        // 检测到dom才删除
        dom.remove();
    }
}


setInterval(() => {
    // 侧边栏的一堆视频推荐
    hiddenDomsByClassname(".video-page-card-small");
    // 侧边栏的下一个播放
    hiddenDomsByClassname(".video-page-special-card-small");
    // 侧边栏底部的内容 - 应该是广告吧
    hiddenDomsByClassname(".ad-floor-cover");
    // 侧边栏底部的内容 - 直播内容
    hiddenDomsByClassname(".pop-live-small-mode");

    // 视频窗口上方的视频推荐
    hiddenDomsByClassname(".bpx-player-ending-related");
}, 1000);