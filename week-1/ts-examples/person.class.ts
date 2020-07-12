/**
 * Title: person.class.ts
 * Author: Emily Richter
 * Date: 11 July 2020
 * Description: Person class
 */

import { IPerson } from "./person.interface";

class Person implements IPerson {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Emily", "Richter");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);