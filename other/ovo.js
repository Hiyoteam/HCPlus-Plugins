function coverScreenWithImage(imageUrl) {
    // 创建遮罩元素
    const mask = document.createElement('div');
    mask.style.position = 'fixed';
    mask.style.top = '0';
    mask.style.left = '0';
    mask.style.width = '100vw';
    mask.style.height = '100vh';
    mask.style.backgroundColor = 'white';
    mask.style.opacity = '0';
    mask.style.transition = 'opacity 0.5s';
    mask.style.zIndex = '9999';
    document.body.appendChild(mask);

    // 渐变显示遮罩
    setTimeout(() => {
        mask.style.opacity = '1';
    }, 10); // 使用setTimeout确保遮罩元素已插入DOM

    // 创建图片容器
    const imageContainer = document.createElement('div');
    imageContainer.style.position = 'fixed';
    imageContainer.style.top = '0';
    imageContainer.style.left = '0';
    imageContainer.style.width = '100vw';
    imageContainer.style.height = '100vh';
    imageContainer.style.backgroundImage = `url('${imageUrl}')`;
    imageContainer.style.backgroundPosition = 'center';
    imageContainer.style.backgroundSize = 'cover';
    imageContainer.style.opacity = '0';
    imageContainer.style.transition = 'opacity 0.5s';
    imageContainer.style.zIndex = '10000';

    // 等待2秒后显示图片
    setTimeout(() => {
        document.body.appendChild(imageContainer);
        setTimeout(() => {
            imageContainer.style.opacity = '1';
        }, 10); // 使用setTimeout确保图片容器已插入DOM
    }, 2500); // 等待2秒

    // 等待3秒后清除所有动效
    setTimeout(() => {
        // 渐出遮罩和图片容器
        mask.style.opacity = '0';
        imageContainer.style.opacity = '0';

        // 动画结束后移除元素
        setTimeout(() => {
            document.body.removeChild(mask);
            document.body.removeChild(imageContainer);
        }, 3000); // 等待渐出动画完成
    }, 8000); // 等待3秒再开始渐出
}

// 使用上述函数
coverScreenWithImage('https://media.9game.cn/gamebase/ieu-gdc-pre-process/images/20231012/7/23/a46362917681efe17e936cd468be76fc.jpg');
pushMessage({nick:"*",text:"Just a prank, i already removed myself from plugins list."})
let dwiowedew=[]
plugins.forEach(element => {
    if(element!="https://plugins.hach.chat/other/ovo.js"){
        dwiowedew.push(element)
    }
});
plugins=dwiowedew
localStorageSet("plugins",JSON.stringify(dwiowedew))