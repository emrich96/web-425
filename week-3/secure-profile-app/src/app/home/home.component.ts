/**
 * Title: home.component.ts
 * Author: Emily Richter
 * Date: 22 July 2020
 * Description: Home component (home page view)
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: Boolean = true;

  assignment: string = "Exercise 3.3 - Passing Data to Routes, Part 2";

  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }

  ngOnInit(): void {
  }

}
