import {Component, OnInit} from '@angular/core';
import {Menu} from "./common/model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sumit-profile';
  menus!: Menu[];

  ngOnInit(): void {
    this.menus = [{id: 1, url: 'about', displayName: 'About'}, {
      id: 2,
      url: 'experiences',
      displayName: 'Experiences'
    }]
  }
}
