import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public flag=1;

  constructor() { }
  xiaoshi(){
    this.flag=2;
  }  
  huilai(){
    this.flag=1;
  }
  ngOnInit() {
  }

}
