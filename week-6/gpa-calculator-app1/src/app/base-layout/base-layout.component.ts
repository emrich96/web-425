/**
 * Title: base-layout.component.ts
 * Author: Emily Richter
 * Date: 15 August 2020
 * Description: Base layout component
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts'
   }

  ngOnInit(): void {
  }

}
