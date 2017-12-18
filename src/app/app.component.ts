import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private http: HttpClient) { }
  dashboard = {};
  ngOnInit(): void {
    this.http.get('http://raw.githubusercontent.com/sergiobayona/angular-demo/master/src/data/DashboardHome.json').subscribe(res => {
      this.dashboard = res;
    });
  }
}
