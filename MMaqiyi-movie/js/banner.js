(function() {
    var data = [{
        src: 'img/banner_1.jpg',
        url: 'https://www.iqiyi.com/v_19rr0f192o.html?src=focustext_1_20130410_1',
        title: '神奇马戏团之动物饼干',
        word: '111111111'
    }, {
        src: 'img/banner_2.jpg',
        url: 'https://www.iqiyi.com/v_19rqz2j7ac.html?src=focustext_1_20130410_2',
        title: '007',
        word: '222222222'
    }, {
        src: 'img/banner_3.jpg',
        url: 'https://www.iqiyi.com/v_19rqz2j7ac.html?src=focustext_1_20130410_2',
        title: '英伦对决',
        word: '3333333333'
    }, {
        src: 'img/banner_4.jpg',
        url: 'https://www.iqiyi.com/v_19rrklq2bs.html?list=19rrlsy61i#curid=406283300_7b42a1a27ff121c201ee5e6c6d757817&src=focustext_1_20130410_4',
        title: '全军出击',
        word: '444444444'
    }, {
        src: 'img/banner_5.jpg',
        url: 'https://www.iqiyi.com/v_19rrifwx68.html?list=19rrmdhpsm#curid=160082800_f22077ee258f42f6a75bc1201710707d&src=focustext_1_20130410_5',
        title: '狄仁杰',
        word: '555555555'
    }, {
        src: 'img/banner_6.jpg',
        url: 'https://www.iqiyi.com/v_19rr0f192o.html?src=focustext_1_20130410_1',
        title: '神奇马戏团之动物饼干',
        word: '6666666666666'
    }, {
        src: 'img/banner_7.jpg',
        url: 'https://www.iqiyi.com/v_19rqz2j7ac.html?src=focustext_1_20130410_2',
        title: '007',
        word: '777777777777'
    }, {
        src: 'img/banner_8.jpg',
        url: 'https://www.iqiyi.com/v_19rqz2j7ac.html?src=focustext_1_20130410_2',
        title: '英伦对决',
        word: '888888888888'
    }, {
        src: 'img/banner_9.jpg',
        url: 'https://www.iqiyi.com/v_19rrklq2bs.html?list=19rrlsy61i#curid=406283300_7b42a1a27ff121c201ee5e6c6d757817&src=focustext_1_20130410_4',
        title: '全军出击',
        word: '999999999999'
    }, {
        src: 'img/banner_10.jpg',
        url: 'https://www.iqiyi.com/v_19rrifwx68.html?list=19rrmdhpsm#curid=160082800_f22077ee258f42f6a75bc1201710707d&src=focustext_1_20130410_5',
        title: '狄仁杰',
        word: '000000000000'
    }];

    var oBanner = U.getClass('banner')[0];
    var arrLi = []; // 图片li
    var arrI = []; // 分页i标签
    var timer = null;
    var n = 0;
    var oUl = U.create('ul');


    for (var i = 0; i < data.length; i++) {
        var oLi = U.create('li');
        oLi.innerHTML = '<a href="' + data[i].url + '" target="_blank"></a>';
        oLi.style.background = 'url(' + data[i].src + ') center no-repeat';
        if (i === 0) {
            oLi.style.zIndex = 1;
        } else {
            oLi.style.opacity = 0;
        }
        arrLi.push(oLi);
        U.append(oUl, oLi);

    }

    U.append(oBanner, oUl);

    var btnLeft = U.create('span');
    btnLeft.className = 'btn left';
    U.append(oBanner, btnLeft);

    var btnRight = U.create('span');
    btnRight.className = 'btn right';
    U.append(oBanner, btnRight);

    var oP = U.create('p');
    for (var i = 0; i < data.length; i++) {
        var oI = U.create('i');
        if (i === 0) {
            oI.className = 'active';
        }
        arrI.push(oI);
        U.append(oP, oI);
    };
    U.append(oBanner, oP);



    // 创建标题
    var oTitle = U.create('div');
    oTitle.innerHTML = data[0].title;
    oTitle.className = 'title';
    U.append(oBanner, oTitle);

    var oword = U.create('div');
    oword.innerHTML = data[0].word;
    oword.className = 'word';
    U.append(oBanner, oword);



    //var lll = oUl.getElementsByName('li')
    timer = setInterval(auto, 2000);


    // 滑上停止
    oBanner.onmouseover = function() {
        clearInterval(timer);
    };

    // 滑离开启
    oBanner.onmouseout = function() {
        timer = setInterval(auto, 2000);
    };



    // 上一张
    btnLeft.onmouseover = function() {
        U.move(btnLeft, {
            opacity: 100
        });
    }
    btnLeft.onclick = function() {
        n--;
        if (n < 0) {
            n = arrLi.length - 1;
        }
        change();
    }
    btnLeft.onmouseout = function() {
        U.move(btnLeft, {
            opacity: 30
        });
    }





    // 下一张
    btnRight.onmouseover = function() {
        U.move(btnRight, {
            opacity: 100
        });
    }
    btnRight.onclick = function() {
        n++;
        if (n >= arrLi.length) {
            n = 0;
        }
        change();
    }
    btnRight.onmouseout = function() {
        U.move(btnRight, {
            opacity: 30
        });
    }





    // 滑上分页按钮
    for (var i = 0; i < arrI.length; i++) {
        arrI[i].index = i;
        arrI[i].onmouseover = function() {
            n = this.index;
            change();
        };
    }

    function auto() {
        n++;
        if (n >= arrLi.length) {
            n = 0;
        }
        change()
    }

    function change() {
        for (var i = 0; i < arrLi.length; i++) {


            arrLi[i].style.zIndex = 0;
            U.removeClass(arrI[i], 'active');
            U.move(arrLi[i], {
                opacity: 0
            });
        }

        arrLi[n].style.zIndex = 1;
        U.addClass(arrI[n], 'active');
        oTitle.innerHTML = data[n].title;
        oword.innerHTML = data[n].word;
        U.move(arrLi[n], {
            opacity: 100
        });
    }



})();