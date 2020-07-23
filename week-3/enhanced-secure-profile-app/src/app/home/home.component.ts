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

  assignment: string = "Assignment 3.4 - Guarding Routes";

  constructor() {
  }

  ngOnInit(): void {
  }

}
