/**
 * Title: app.component.ts
 * Author: Emily Richter
 * Date: 11 July 2020
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Emily's world!";
}
