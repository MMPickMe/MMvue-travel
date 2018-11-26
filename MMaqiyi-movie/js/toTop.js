var oBtn = U.getClass('toTop')[0];
oBtn.style.display = 'none';
//var aBox = U.getClass('qy-mod-list-spe');

var timer = null;

// 滚动滚动条，返回顶部按钮显示和隐藏
window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop >= 200) {
        oBtn.style.display = 'block';
    } else {
        oBtn.style.display = 'none';
    }
};

oBtn.onclick = function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    timer = setInterval(function() {
        scrollTop -= 50;

        document.documentElement.scrollTop = scrollTop; // 除谷歌之外的
        document.body.scrollTop = scrollTop; // 谷歌浏览器
        if (scrollTop <= 0) {
            clearInterval(timer);
        }
    }, 1000);
};










//iqiyi的头什么时候移动
$(function() {
    // 另外，即可以获取，也可以赋值
    // $(window).scrollTop()
    // $(window).scrollTop(200)
    var ahaveNav = $('.haveNav');
    var aheader = $('#header');

    $(document).scroll(function() {
        if ($(window).scrollTop() > 590) {
            //console.log($(window).scrollTop());
            ahaveNav.addClass('haveNav2');
            aheader.css({
                'height': '520px',
                'padding-top': '70px'
            });

        } else {
            ahaveNav.removeClass('haveNav2');
            aheader.css({
                'height': '590px',
                'padding-top': '0px'
            });
        }

    })
})