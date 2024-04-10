import {Component, Input} from '@angular/core';
import {Menu} from "../../model";

@Component({
  selector: 'app-top-nav',

  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {
  @Input() menus!: Menu[];
}
