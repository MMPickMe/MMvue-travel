import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
list=[{url:'../../../assets/img/a.jpg'},
{url:'../../../assets/img/b.jpg'},
{url:'../../../assets/img/c.jpg'},
{url:'../../../assets/img/4.jpg'},
{url:'../../../assets/img/5.jpg'}]
  constructor() { }

  ngOnInit() {
  }

}
