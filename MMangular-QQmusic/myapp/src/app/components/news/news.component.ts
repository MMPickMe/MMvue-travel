import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public list=[{
    url:'../../../assets/img/number_1.jpg',
    whole:'1980.0万',
    title:'巅峰榜·流行指数',
    no1:'那一夜',
    no1a:'- G.E.M. 邓紫棋',
    no2:'梦不落雨林',
    no2a:'- 张艺兴', 
    no3:'归去来兮',
    no3a:'- 叶炫清'
    },{ url:'../../../assets/img/number_2.jpg',
    whole:'1970.0万',
    title:'巅峰榜·热歌',
    no1:'没说什么',
    no1a:'- 张杰',
    no2:'耳朵',
    no2a:'- 李荣浩', 
    no3:'光年之外',
    no3a:'- G.E.M. 邓紫棋'
    },{ url:'../../../assets/img/number_3.jpg',
    whole:'1208.8万',
    title:'巅峰榜·新歌',
    no1:'耳朵',
    no1a:'- 李荣浩',
    no2:'没说什么',
    no2a:'- 张杰', 
    no3:'那一夜',
    no3a:'- G.E.M. 邓紫棋'
    },{ url:'../../../assets/img/number_4.jpg',
    whole:'910.0万',
    title:'巅峰榜·2018中国好声音',
    no1:'为你我受冷风吹',
    no1a:'- 大壮',
    no2:'魔鬼中的天使 (Live)',
    no2a:'- 康树龙', 
    no3:'魔鬼中的天使 (醇享版)',
    no3a:'- 康树龙'
    },{ url:'../../../assets/img/number_5.jpg',
    whole:'1970.0万',
    title:'巅峰榜·网络歌曲',
    no1:'不在',
    no1a:'- 韩安旭',
    no2:'地铁等待',
    no2a:'- 宋孟君', 
    no3:'可不可以',
    no3a:'- 艾辰'
    },{ url:'../../../assets/img/number_6.jpg',
    whole:'336.4万',
    title:'巅峰榜·内地',
    no1:'耳朵',
    no1a:'- 李荣浩',
    no2:'没说什么',
    no2a:'- 张杰', 
    no3:'贝贝',
    no3a:'- 李荣浩'
    },{ url:'../../../assets/img/number_7.jpg',
    whole:'345.1万',
    title:'巅峰榜·港台',
    no1:'恰好',
    no1a:'- A-Lin',
    no2:'有一种悲伤',
    no2a:'- A-Lin', 
    no3:'你敢不敢再傻一次',
    no3a:'- 吴克群'
    },{ url:'../../../assets/img/number_8.jpg',
    whole:'970.0万',
    title:'巅峰榜·欧美',
    no1:'Kiss and Make Up',
    no1a:'- Dua Lipa',
    no2:'1999',
    no2a:'- Charli XCX', 
    no3:"I'm Still Here",
    no3a:'- Sia'
    },{ url:'../../../assets/img/number_9.jpg',
    whole:'525.2万',
    title:'巅峰榜·韩国',
    no1:'나라는 꿈',
    no1a:'- 조이 (Joy)',
    no2:'STAY BY MY SIDE',
    no2a:'- TWICE (트와이스)', 
    no3:"그대 그대 그대",
    no3a:'- 윤미래 (尹美莱)'
    },{ url:'../../../assets/img/number_10.jpg',
    whole:'525.2万',
    title:'巅峰榜·日本',
    no1:'まっしろ (白皑)',
    no1a:'- ビッケブランカ (Vicke Blanka)',
    no2:'PSYCHIC MAGIC',
    no2a:'- m-flo (陨-浮流)', 
    no3:"イルミネーション (Illumination)",
    no3a:'- End of the World (世界の終わり)'
    },{ url:'../../../assets/img/number_11.jpg',
    whole:'525.2万',
    title:'巅峰榜·腾讯音乐人原创榜',
    no1:'臆想',
    no1a:'- 莉莉童 (LIJIN.)',
    no2:'当我要走的时候 (正式版)',
    no2a:'- 陈硕子', 
    no3:"赝品",
    no3a:'- 简弘亦'
    },{ url:'../../../assets/img/number_12.jpg',
    whole:'182.2万',
    title:'巅峰榜·腾讯音乐人原创榜',
    no1:'臆想',
    no1a:'- 莉莉童 (LIJIN.)',
    no2:'当我要走的时候 (正式版)',
    no2a:'- 陈硕子', 
    no3:"赝品",
    no3a:'- 简弘亦'
    },{ url:'../../../assets/img/number_13.jpg',
    whole:'286.7万',
    title:'巅峰榜·K歌金曲',
    no1:'年少有为',
    no1a:'- 陈诚',
    no2:'刚好遇见你',
    no2a:'- K.D', 
    no3:"体面",
    no3a:'- Gray'
    }];
    
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
   //console.log(this.router.params)
  }

}
