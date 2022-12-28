function animate(obj, target, callback) {
    clearInterval(obj.timer)//清除以前的定时器
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;//逐渐减小步长值
        step = step > 0 ? Math.ceil(step) : Math.floor(step);//大于零向上取整，否则向下取整
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            //回调函数定时器结束时使用
            callback && callback();
        }

        obj.style.left = obj.offsetLeft + step + 'px';

    }, 10)
}