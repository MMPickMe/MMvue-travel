(function() {
    var data1 = [{
        url: 'img/j_pingback_view_01.jpg',
        title: '11111111111',
        message: '2222222222222'
    }, {
        url: 'img/j_pingback_view_02.jpg',
        title: '11111111111',
        message: '2222222222222'
    }, {
        url: 'img/j_pingback_view_03.jpg',
        title: '11111111111',
        message: '2222222222222'
    }, {
        url: 'img/j_pingback_view_04.jpg',
        title: '11111111111',
        message: '2222222222222'
    }, {
        url: 'img/j_pingback_view_05.jpg',
        title: '11111111111',
        message: '2222222222222'
    }, {
        url: 'img/j_pingback_view_06.jpg',
        title: '11111111111',
        message: '2222222222222'
    }, {
        url: 'img/j_pingback_view_07.jpg',
        title: '11111111111',
        message: '2222222222222'
    }, {
        url: 'img/j_pingback_view_08.jpg',
        title: '11111111111',
        message: '2222222222222'
    }, {
        url: 'img/j_pingback_view_09.jpg',
        title: '11111111111',
        message: '2222222222222'
    }, {
        url: 'img/j_pingback_view_10.jpg',
        title: '11111111111',
        message: '2222222222222'
    }, {
        url: 'img/j_pingback_view_11.jpg',
        title: '11111111111',
        message: '2222222222222'
    }, {
        url: 'img/j_pingback_view_12.jpg',
        title: '11111111111',
        message: '2222222222222'
    }, {
        url: 'img/j_pingback_view_13.jpg',
        title: '11111111111',
        message: '2222222222222'
    }, {
        url: 'img/j_pingback_view_14.jpg',
        title: '11111111111',
        message: '2222222222222'
    }, {
        url: 'img/j_pingback_view_15.jpg',
        title: '11111111111',
        message: '2222222222222'
    }, {
        url: 'img/j_pingback_view_16.jpg',
        title: '11111111111',
        message: '2222222222222'
    }, {
        url: 'img/j_pingback_view_17.jpg',
        title: '11111111111',
        message: '2222222222222'
    }, {
        url: 'img/j_pingback_view_20.jpg',
        title: '11111111111',
        message: '2222222222222'
    }];



    // 数据
    var data = [data1];


    var aBox = U.getClass('qy-mod-list-spe');
    for (var i = 0; i < aBox.length; i++) {
        slide(aBox[i], data[i])
    };

    function slide(obj, data) {
        var arrLi = []; // 存储所有的li

        var len = data.length; // 图片的总个数
        var W = document.documentElement.clientWidth; // 可视区宽
        if (W >= 1500) {
            W = 1500;
        }
        var imgWidth = 430; // 一个图片的宽
        //var nawpic = W / imgWidth; //目前一屏显示几张图，可能是3.5张
        var pageMaxLen = (W / imgWidth); // 一屏放几个图
        obj.style.width = imgWidth * pageMaxLen - 5 + 'px'; // 最外层盒子的宽度

        var lastLen = len % pageMaxLen; // 最后一屏有几个图
        var count = Math.ceil(len / pageMaxLen); // 共有几屏
        var n = 1;

        var slideImgLen = 1; // 要运动的图片的个数



        var arrweekli = [];
        //-----------------------------------------------------













        // 创建左右按钮
        var leftBtn = U.create('i');
        leftBtn.className = 'iconfont icon-back';
        leftBtn.style.display = 'block';
        U.append(obj, leftBtn);
        leftBtn.onmouseover = function() {

            U.move(leftBtn, {
                opacity: 100
            })
        }
        leftBtn.onmouseout = function() {

            U.move(leftBtn, {
                opacity: 50
            })
        }




        var rightBtn = U.create('i');
        rightBtn.className = 'iconfont icon-more';
        U.append(obj, rightBtn);

        rightBtn.onmouseover = function() {

            U.move(rightBtn, {
                opacity: 100

            })
        }

        rightBtn.onmouseout = function() {

            U.move(rightBtn, {
                opacity: 50

            })
        }


        // 创建ul
        var oUl = U.create('ul');
        oUl.style.left = -3 * imgWidth + 'px';




        for (var i = 0; i < len; i++) {
            var li = U.create('li');
            // ES6的模板字符串 ``
            li.innerHTML = `<a href=""><img src="${data[i].url}" alt=""></a>
            <div class="title-wrap">
                <h3>${data[i].title}</h3>
                <p>${data[i].message}</p>
            </div>`;
            arrLi.push(li);
            U.append(oUl, li);
        }
        U.append(obj, oUl);







        //创建一个week
        var ahave = U.getClass('haveWeek')[0];
        var oWeek = U.create('ul');
        var weekdate = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
        oWeek.className = 'qy-mod-nav-week';
        for (var i = 0; i < 7; i++) {
            var oweekli = U.create('li');
            oweekli.innerHTML = `<a href="">${weekdate[i]}</a>`;
            if (i === 1) {
                oweekli.innerHTML = `<a href="" class="today">今日更新</a>`;

            }
            arrweekli.push(oweekli);
            U.append(oWeek, oweekli);
        };
        U.append(ahave, oWeek);


        for (var i = 0; i < 7; i++) {
            arrweekli[i].mu = i;
            arrweekli[arrweekli[i].mu].onmouseover = function() {
                var aaaaa = arrweekli[this.mu].getElementsByTagName('a')[0];
                for (var j = 0; j < 7; j++) {
                    var abcd = arrweekli[j].getElementsByTagName('a')[0];
                    if (this.mu === j) {
                        aaaaa.className = 'today';
                    } else {
                        abcd.className = '';
                    }
                }
                //console.log('111')
                //var nunmore = 0;
                if (this.mu === 0) {
                    n = 0;
                } else if (this.mu === 1) {
                    n = 1;
                } else if (this.mu === 2) {
                    n = 8 / 3;
                } else if (this.mu === 3) {
                    n = 11 / 3;
                } else if (this.mu === 4) {
                    n = 4;
                } else if (this.mu === 5) {
                    n = 13 / 3;
                } else if (this.mu === 6) {
                    n = 15 / 3;
                }

                if (n === 0) {
                    leftBtn.style.display = 'none';
                } else {
                    leftBtn.style.display = 'block';
                    rightBtn.style.display = 'block';
                }



                if (n > 14 / 3) {
                    U.move(oUl, {
                        left: -(len - pageMaxLen) * imgWidth
                    })
                    rightBtn.style.display = 'none';

                } else {
                    U.move(oUl, {
                        left: -(n * Math.floor(pageMaxLen)) * imgWidth
                    })
                }




            }

            arrweekli[arrweekli[i].mu].onmouseout = function() {
                var aaaaa = arrweekli[this.mu].getElementsByTagName('a')[0];
                for (var j = 0; j < 7; j++) {
                    var abcd = arrweekli[j].getElementsByTagName('a')[0];
                    if (this.mu === j) {
                        aaaaa.className = 'today';
                    } else {
                        abcd.className = '';
                    }
                }
                //console.log('222')
            }
        }

        // 左边点击
        leftBtn.onclick = function() {
            n--;
            if (n <= 0) {
                n = 0;
                // 左这按钮隐藏
                leftBtn.style.display = 'none';
            }
            rightBtn.style.display = 'block';
            slideImgLen = n * Math.floor(pageMaxLen);
            U.move(oUl, {
                left: -slideImgLen * imgWidth
            })
        }

        // 点击右边按钮
        rightBtn.onclick = function() {
            console.log(n)
            n++;
            if (n >= count - 1) {
                // 处于最后一屏
                if (lastLen) {
                    // 证明最后一屏有图，但不够一满屏
                    // slideImgLen = (n - 1) * pageMaxLen + lastLen;
                    slideImgLen = len - pageMaxLen;
                } else {
                    // 最后一屏是满屏
                    slideImgLen = n * Math.floor(pageMaxLen);
                }
                // 当到最后一屏时，右按钮隐藏
                rightBtn.style.display = 'none';
            } else {
                slideImgLen = n * Math.floor(pageMaxLen);
            }
            // 左按钮显示
            leftBtn.style.display = 'block';

            U.move(oUl, {
                left: -slideImgLen * imgWidth
            })
        }




    }


})();