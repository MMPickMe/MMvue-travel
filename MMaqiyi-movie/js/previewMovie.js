(function() {

    var data = [{
        url: 'img/big-one-01.jpg',
        title: '《江湖儿女》终极预告 狂暴江湖时易世变',
        message: '江湖世界的凶险与难测',
        classname: 'haveA1080p'
    }, {
        url: 'img/big-one-02.jpg',
        title: '《江湖儿女》终极预告 狂暴江湖时易世变',
        message: '江湖世界的凶险与难测',
        classname: ''
    }, {
        url: 'img/big-one-03.jpg',
        title: '《江湖儿女》终极预告 狂暴江湖时易世变',
        message: '江湖世界的凶险与难测',
        classname: 'haveA1080p'
    }, {
        url: 'img/big-one-01.jpg',
        title: '《江湖儿女》终极预告 狂暴江湖时易世变',
        message: '江湖世界的凶险与难测',
        classname: 'haveA1080p'
    }, {
        url: 'img/big-one-02.jpg',
        title: '《江湖儿女》终极预告 狂暴江湖时易世变',
        message: '江湖世界的凶险与难测',
        classname: 'haveA1080p'
    }, {
        url: 'img/big-one-03.jpg',
        title: '《江湖儿女》终极预告 狂暴江湖时易世变',
        message: '江湖世界的凶险与难测',
        classname: 'haveA1080p'
    }];



    var aUl = U.getClass('jiangepreviewMovie');
    //console.log(aUl.length);
    for (var i = 0; i < aUl.length; i++) {
        slide(aUl[i])





    }

    function slide(obj) {
        for (var i = 0; i < data.length; i++) {
            var aLi = U.create('li');

            // ES6的模板字符串 ``
            aLi.innerHTML = `
                    <a class="forPic" href="">
                        <img src="${data[i].url}" alt="">
                    </a>
                    <div class="forWord">
                        <p class="haveA">
                            <a href="">${data[i].title}</a>
                        </p>
                        <p>${data[i].message}</p>
                    </div>
                    <div class="${data[i].classname}"></div>
            
            `;


            U.append(obj, aLi);
        }
    }


})();