/**
 * Title: composer.service.ts
 * Author: Emily Richter
 * Date: 1 August 2020
 * Description: Composer service
 */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

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
  }}
