/**
 * Title: app.component.ts
 * Author: Emily Richter
 * Date: 1 August 2020
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = "Exercise 4.2 - Inversion of Control and Dependency Injection";
}
