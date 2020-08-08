/**
 * Title: books.service.ts
 * Author: Emily Richter
 * Date: 8 August 2020
 * Description: Books service
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book-interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn:'0525475060',
        title:'Looking for Alaska',
        description:'',
        numOfPages: 297,
        authors:['John Green']
      },
      {
        isbn:'0525478817',
        title:'The Fault in Our Stars',
        description:'',
        numOfPages: 313,
        authors: ['John Green']
      },
      {
        isbn:'0525476881',
        title:'An Abundance of Katherines',
        description:'',
        numOfPages: 256,
        authors: ['John Green']
      },
      {
        isbn:'9780525555360',
        title:'Turtles All the Way Down',
        description:'',
        numOfPages: 286,
        authors: ['John Green']
      },
      {
        isbn:'9780525478188',
        title:'Paper Towns',
        description:'',
        numOfPages: 305,
        authors: ['John Green']
      }
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
