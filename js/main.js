window.addEventListener('load', function () {
    var playdiagram = document.querySelector('.playdiagram');
    var ul = playdiagram.querySelector('ul');
    var ol = playdiagram.querySelector('#point');
    var playWidth = playdiagram.offsetWidth;
    var arr_r = this.document.querySelector('.arrow2')
    var arr_l = this.document.querySelector('.arrow1')
    var num = 0;
    var circle = 0;
    var flag = true;//节流阀



    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ' ';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            console.log(num);
            animate(ul, -index * playWidth)
        })
    }
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    arr_r.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                num = 0;
                ul.style.left = '0';
            }
            num++;
            animate(ul, -num * playWidth, function () {
                flag = true;
            })
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleClear()
        }
    })


    arr_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * playWidth + 'px';
            }
            num--;
            animate(ul, -num * playWidth, function () {
                flag = true;
            })
            circle--;

            if (circle < 0) {
                circle = ol.children.length - 1;
            }

            circleClear();
        }
    })

    function circleClear() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ' ';
        }

        ol.children[circle].className = 'current';
    }


    var timer = this.setInterval(function () {
        arr_r.click();
    }, 3000)

    playdiagram.addEventListener('mouseenter', function () {
        clearInterval(timer);
        timer = null;
    })
    playdiagram.addEventListener('mouseleave', function () {
        timer = setInterval(function () {
            arr_r.click();
        }, 3000)
    })
})