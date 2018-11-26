(function() {
    var data = [{
        url: 'img/pic_1.jpg',
        href: 'http://www.iqiyi.com/v_19rrl56nno.html',
        tit: '这是个title，是图1的',
        pp: '这是个介绍，是图1的',
        point: '8.8'
    }, {
        url: 'img/pic_2.jpg',
        href: 'http://www.iqiyi.com/v_19rre6z8z8.html',
        tit: '这是个title，是图2的',
        pp: '这是个介绍，是图2的',
        point: '8.8'
    }, {
        url: 'img/pic_3.jpg',
        href: 'http://www.iqiyi.com/v_19rrl41gt8.html',
        tit: '这是个title，是图3的',
        pp: '这是个介绍，是图3的',
        point: '8.8'
    }, {
        url: 'img/pic_4.jpg',
        href: 'http://www.iqiyi.com/v_19rrk3p4tc.html',
        tit: '这是个title，是图4的',
        pp: '这是个介绍，是图4的',
        point: '8.8'
    }, {
        url: 'img/pic_5.jpg',
        href: 'http://www.iqiyi.com/v_19rrfq8le4.html',
        tit: '这是个title，是图5的',
        pp: '这是个介绍，是图5的',
        point: '8.8'
    }, {
        url: 'img/pic_6.jpg',
        href: 'http://www.iqiyi.com/v_19rr7pkg3o.html',
        tit: '这是个title，是图6的',
        pp: '这是个介绍，是图6的',
        point: '8.8'
    }, {
        url: 'img/pic_7.jpg',
        href: 'http://www.iqiyi.com/v_19rra8tjv0.html',
        tit: '这是个title，是图7的',
        pp: '这是个介绍，是图7的',
        point: '8.8'
    }, {
        url: 'img/pic_8.jpg',
        href: 'http://www.iqiyi.com/v_19rr7rc45k.html',
        tit: '这是个title，是图8的',
        pp: '这是个介绍，是图8的',
        point: '8.8'
    }, {
        url: 'img/pic_9.jpg',
        href: 'http://www.iqiyi.com/v_19rrhspc38.html',
        tit: '这是个title，是图9的',
        pp: '这是个介绍，是图9的',
        point: '8.8'
    }, {
        url: 'img/pic_10.jpg',
        href: 'http://www.iqiyi.com/v_19rrk0uch0.html',
        tit: '这是个title，是图10的',
        pp: '这是个介绍，是图10的',
        point: '8.8'
    }];

    var leftBtn = U.getClass('privateC_arrL')[0]; // 左按钮
    var rightBtn = U.getClass('privateC_arrR')[0]; // 右按钮
    var privateC_pic = U.getClass('privateC_pic')[0]; // 图片合子
    var bgImg = U.getClass('bgImg')[0]; // 模糊图片
    bgImg.src = data[2].url;
    var n = 0;
    var arrImg = []; // 存储所有的图片
    var arrPos = []; // 存储五张图片的位置
    var arrpicDiv = [];
    var newpos = []; //存5张图的地址
    // 创建kuang
    for (var i = 0; i < data.length; i++) {
        var picDiv = U.create('div');
        picDiv.className = 'privateC_pic_div';
        picDiv.innerHTML = `
       
        <div class="thisIsTitle">${data[i].tit}</div>
        <div class="thisIsP">${data[i].pp}</div>
        <div class="thisIsPoint">${data[i].point}</div>`;

        //  <img src="${data[i].url}" datahref="${data.href}">

        if (i >= 5) {
            picDiv.style.display = 'none';
        } else {
            // 为前面的5张图添加index属性
            picDiv.setAttribute('index', i);
        }


        var oImg = U.create('img');
        oImg.src = data[i].url;
        oImg.setAttribute('datahref', data[i].href);
        arrImg.push(oImg);
        U.append(picDiv, oImg);

        arrpicDiv.push(picDiv);
        U.append(privateC_pic, picDiv);




        var imgbgg = arrImg[i].src;
        //console.log(imgbgg.split('/img')[1]);
        newpos[i] = 'img' + imgbgg.split('/img')[1];
        //console.log(newpos[i]);
    }


    // 存储五的位置信息
    for (var i = 0; i < 5; i++) {
        var imgItem = arrpicDiv[i];
        //var strange = arrImg[i];

        arrPos.push({
            width: parseFloat(U.getStyle(imgItem, 'width')),
            height: parseFloat(U.getStyle(imgItem, 'height')),
            left: parseFloat(U.getStyle(imgItem, 'left')),
            top: parseFloat(U.getStyle(imgItem, 'top')),
            z: parseFloat(U.getStyle(imgItem, 'z-index')),
            //src: U.getStyle(strange, 'src')
        });
        //console.log(strange);
        //console.log(arrPos.src);
        //-----------------------------------------------------------------------------------------------------------
    }

    // 上一张
    leftBtn.onclick = function() {
        arrpicDiv.unshift(arrpicDiv.pop());
        n--;
        change(arrpicDiv);
    }

    // 下一张
    rightBtn.onclick = function() {
        arrpicDiv.push(arrpicDiv.shift());
        n++;
        change(arrpicDiv);
    }





    for (var i = 0; i < arrpicDiv.length; i++) {
        arrpicDiv[i].onclick = function() {
            switch (this.getAttribute('index')) {
                case '0': // 点击第一张图
                    arrpicDiv.unshift(arrpicDiv.pop());
                    arrpicDiv.unshift(arrpicDiv.pop());
                    n -= 2;
                    change(arrpicDiv);
                    break;

                case '1': // 点击第二张图
                    arrpicDiv.unshift(arrpicDiv.pop());
                    n--;
                    change(arrpicDiv);
                    break;

                case '2': // 点击第三张图，就打开地址
                    open(this.getAttribute('datahref'));
                    break;

                case '3': // 点击第四张图
                    arrpicDiv.push(arrpicDiv.shift());
                    n++;
                    change(arrpicDiv);
                    break;

                case '4': // 点击第五张图
                    arrpicDiv.push(arrpicDiv.shift());
                    arrpicDiv.push(arrpicDiv.shift());
                    n += 2;
                    change(arrpicDiv);
                    break;
            }

        }
    }



    function change(arr) {

        // console.log(arrPos[2]);

        if ((2 + n === arr.length)) {
            n = -2;
        } else if (2 + n === arr.length + 1) {
            n = -1
        } else if (2 + n === -1) {
            n = arr.length - 3;
        } else if (2 + n === -2) {
            n = arr.length - 4;
        }
        bgImg.src = newpos[2 + n] // 改模糊图片

        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            // var str = item.innerHTML;
            // console.log(str);
            // var adddddd=str.split('img src=')[1].split(' datahref')[0];

            if (i < 5) {
                item.setAttribute('index', i); // 添加index属性
                item.style.display = 'block';
                item.style.zIndex = arrPos[i].z;
                U.move(item, {
                    width: arrPos[i].width,
                    height: arrPos[i].height,
                    left: arrPos[i].left,
                    top: arrPos[i].top
                });
            } else {
                item.removeAttribute('index'); // 删除index属性
                item.style.display = 'none';
                item.style.width = '480px';
                item.style.height = '270px';
                item.style.left = '465.5px';
                item.style.top = '0';
                item.style.zIndex = 0;
            }
        }
    }

})();