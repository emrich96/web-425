/**
 * Title: composer-list.component.ts
 * Author: Emily Richter
 * Date: 18 July 2020
 * Description: Composer list component
 */

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor (fullName: string, genre:string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Hans Zimmer", "Film score"),
      new Composer("Stephen Sondheim", "Musical theatre"),
      new Composer("Leonard Bernstein", "Orchestral"),
      new Composer("John Williams", "Film score"),
      new Composer("Eric Whitacre", "Modern/contemporary")
    ]
  }

  ngOnInit(): void {
  }

}
