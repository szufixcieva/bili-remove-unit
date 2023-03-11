// 加个定时
const removeDomByClassname = (classname) => {
    const doms = document.querySelectorAll(classname);
    doms.forEach(el=>{
        el.remove();
    })
}
const removeDomById = (id) => {
    const dom = document.querySelector(id);
    if(dom){
        // 检测到dom才删除
        dom.remove();
    }
}
setInterval(() => {
    // 侧边栏的一堆视频推荐
    removeDomByClassname(".video-page-card-small");
    // 侧边栏的下一个播放
    removeDomByClassname(".video-page-special-card-small");
    // 侧边栏底部的内容 - 应该是广告吧
    removeDomByClassname(".ad-floor-cover");
    // 侧边栏底部的内容 - 直播内容
    removeDomByClassname(".pop-live-small-mode");

    // 视频窗口上方的视频推荐
    removeDomByClassname(".bpx-player-ending-related");
}, 500);