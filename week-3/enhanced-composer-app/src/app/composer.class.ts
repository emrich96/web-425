/**
 * Title: composer.class.ts
 * Author: Emily Richter
 * Date: 21 July 2020
 * Description: Composer class
 */

import { IComposer } from "./composer.interface";

export class Composer {
  composers: Array<IComposer>;

  constructor () {
    this.composers = [
      {
        composerId: 100, fullName: "Hans Zimmer", genre: "Film score"
      },
      {
        composerId: 101, fullName: "Stephen Sondheim", genre: "Musical theatre"
      },
      {
        composerId: 102, fullName: "Leonard Bernstein", genre: "Orchestral"
      },
      {
        composerId: 103, fullName: "John Williams", genre: "Film score"
      },
      {
        composerId: 104, fullName: "Eric Whitacre", genre: "Modern/contemporary"
      }
    ]
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
