import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute,Params } from '@angular/router';


@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.css']
})
export class NewscontentComponent implements OnInit {
  public arr:any;
  public content:any; 
  public str:string;
  public day:any;
  public num:any;
  constructor(private router:ActivatedRoute) { 
    this.arr = ['巅峰榜.流行指数','巅峰榜.热歌','巅峰榜.新歌'];
    this.str="eafchHGK";
    this.day=new Date();
    this.num=323.15913481621244;

  }
 

  ngOnInit() {// console.log(this.router.params.aid)  错误的方法
    var self = this;//全局this
   
    this.router.params.subscribe(function(data){
     //console.log(data.aid)
      var num = data.aid*1
      switch(num){
        case 1 : self.content = self.arr[0];
        break;
        case 2 : self.content = self.arr[1];
        break;
        case 3 : self.content = self.arr[2];
        break;
      }
    })
  }

}



  
